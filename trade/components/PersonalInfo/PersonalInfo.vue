<template>
  <div>
    <AuthErrorPopUp v-if="isShowErrorPopUp" @close="isShowErrorPopUp = false" />
    <UserAccount>
      <template #title>You’re just seconds away from trading!</template>
      <template #content>
        <form @submit.prevent="onSubmit" @keyup.enter="onSubmit">
          <div class="form-group">
            <label>First name*</label>
            <input
              v-model="firstName"
              maxlength="100"
              class="form-control"
              :class="errors.firstName ? 'invalid' : ''"
              type="text"
              placeholder="Type your first name"
              @focus="errors.firstName = ''"
            />
          </div>
          <div class="form-group">
            <label>Last name*</label>
            <input
              v-model="lastName"
              maxlength="100"
              class="form-control"
              :class="errors.lastName ? 'invalid' : ''"
              type="text"
              placeholder="Type your last name"
              @focus="errors.lastName = ''"
            />
          </div>
          <div class="form-group">
            <label>Date of Birth</label>
            <DatePickerInput
              :date="birthDate"
              :class="birthdayError ? 'invalid' : ''"
              @dateError="handleDateError"
              @onChange="birthDate = $event"
            />
            <span v-if="birthdayError" class="error-label">Must be 18 or older to create an account</span>
          </div>
          <div class="form-group">
            <label>Country</label>
            <template v-if="loadingDefaultCountry">
              <div class="loader-wrapper">
                <MiniLoader />
              </div>
            </template>
            <template v-else>
              <SelectCountry :default-country="defaultCountry" @updateCountry="countryCode = $event.isoCode" />
            </template>
          </div>
          <button class="btn-form" type="submit">
            <img v-if="isLoading" class="spinner rotating" src="~/static/img/btn-spinner.png" />
            {{ isLoading ? '' : 'Log in' }}
          </button>
          <!--          <p class="form-row terms-link">-->
          <!--            By creating an account, you agree to our <a class="link" target="_blank" :href="termsAndConditionsLink">Terms and Conditions</a>-->
          <!--          </p>-->
        </form>
      </template>
    </UserAccount>
  </div>
</template>

<script>
import AuthErrorPopUp from '../common/AuthErrorPopUp';
import UserAccount from '@/components/common/UserAccount';
import SelectCountry from '@/components/common/SelectCountry';
import DatePickerInput from '@/components/common/DatePickerInput';
import MiniLoader from '@/components/common/MiniLoader.vue';
import { registerCookie, passwordCookie, ssoCookie, verificationCodeCookie, countryCodeKey } from '@/middleware/token';
import { COOKIE_EXPIRATION_TIME, SITE_URL } from '@/constants';
import countries from '@/components/common/PhoneNumberInput/countriesData';

const ago18years = new Date(Date.now());
ago18years.setFullYear(ago18years.getFullYear() - 18);

const formatDate = date => {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return yyyy + '-' + mm + '-' + dd;
};

export default {
  components: {
    DatePickerInput,
    SelectCountry,
    UserAccount,
    MiniLoader,
    AuthErrorPopUp,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      loadingDefaultCountry: true,
      birthDate: ago18years,
      countryCode: 'IL',
      isLoading: false,
      errors: {
        firstName: '',
        lastName: '',
      },
      isShowErrorPopUp: false,
      birthdayError: false,
      defaultCountry: undefined,
      termsAndConditionsLink: `${SITE_URL}/legal`,
    };
  },
  mounted() {
    this.loadingDefaultCountry = true;
    const cCode = localStorage.getItem(countryCodeKey);
    if (cCode && countries.find(item => item.isoCode === cCode)) {
      const country = countries.find(item => item.isoCode === cCode);
      this.defaultCountry = country;
      this.countryCode = country.code;
      this.loadingDefaultCountry = false;
    } else {
      this.$http
        .get('/api/get-ip')
        .then(async res => {
          const data = await res.json();
          if (data?.countryCode) {
            const country = countries.find(item => item.isoCode === data.countryCode);
            this.defaultCountry = country;
            this.countryCode = country.code;
          }
        })
        .catch(err => {
          // console.log(err)
        })
        .finally(() => {
          this.loadingDefaultCountry = false;
        });
    }
  },
  methods: {
    handleDateError(errorType) {
      this.birthdayError = errorType === 'invalid';
    },
    validateForm() {
      if (!this.firstName) {
        this.errors.firstName = 'Field is required';
      }
      if (!this.lastName) {
        this.errors.lastName = 'Field is required';
      }
    },
    onSubmit() {
      this.validateForm();

      const isValid = Object.values(this.errors).every(item => Boolean(item) === false);

      if (!this.birthdayError && isValid && !this.isLoading) {
        this.isLoading = true;

        const countryCode = countries.find(item => this.countryCode === item.code)?.isoCode || this.countryCode;
        const body = {
          email: this.$cookies.get(registerCookie),
          firstName: this.firstName,
          lastName: this.lastName,
          birthDate: formatDate(this.birthDate),
          countryCode,
        };
        const password = this.$cookies.get(passwordCookie);
        if (password) body.password = password;

        this.$http
          .post('/api/auth/account/create', body)
          .then(async res => {
            const resBody = await res.json();
            if (res.status === 210) {
              this.$cookies.set(registerCookie, this.email);
              this.$cookies.set(verificationCodeCookie, resBody.code || '123456');
              this.$router.go(this.$router.currentRoute).catch(() => {});
            } else if (res.status === 211) {
              this.$cookies.set(registerCookie, this.email);
              this.$router.go(this.$router.currentRoute).catch(() => {});
            } else {
              this.$cookies.remove(registerCookie);
              this.$cookies.remove(verificationCodeCookie);
              if (resBody.sso_token) {
                this.$cookies.remove(passwordCookie);
                this.$cookies.set(ssoCookie, resBody.sso_token, { path: '/', maxAge: COOKIE_EXPIRATION_TIME });
                this.$store.dispatch('setToken', resBody.access_token);
              }
              this.$router.replace({ path: '/' }).catch(() => {});
            }
          })
          .catch(err => {
            if (err.response) {
              const { data } = err.response;
              const parsedMessage = JSON.parse(data.message);
              const birthDateErrors = parsedMessage.birthDate;
              if (birthDateErrors && birthDateErrors.includes('The birth date must be a date before 18 years ago.')) {
                this.birthdayError = true;
              }
            } else {
              this.isShowErrorPopUp = true;
            }
          });
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  padding-top: 32px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group:not(:last-child) {
  margin-bottom: 16px;
}

.form-group label {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: $dark-grey;
  margin-bottom: 8px;
}

.loader-wrapper {
  height: 50px;
}

.form-control {
  width: 100%;
  height: 44px;
  background-color: $common-white;
  border: 1px solid $light-khaki;
  outline: 2px solid transparent;
  border-radius: 6px;
  padding: 10px 45px 10px 12px;
  color: $black;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: $common-green-transparent;
    outline-color: $light-mint;
  }

  &:hover:not(:focus) {
    border-color: $common-green-transparent;
  }

  &::placeholder {
    color: $grey-52-color;
  }

  &.invalid {
    border-color: $danger-light;
  }
}

.btn-form {
  display: block;
  width: 100%;
  height: 44px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  background-color: $common-green-transparent;
  border: 1px solid transparent;
  color: $dark-grey;
  border-radius: 6px;
  padding: 10px;
  margin-top: 32px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: $common-white;
    border-color: $common-green-transparent;
  }
}

.terms-link {
  color: $dark-grey;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;

  .link {
    color: $dark-grey;
    position: relative;
    border-bottom: 1px solid $dark-grey;
  }
}

.error-label {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: $bright-red;
  padding-top: 8px;
}

.spinner {
  width: 24px;
  height: 24px;
}

.loader-wrapper {
  height: 100vh;
  width: 100vw;
}

.rotating {
  -webkit-animation: rotating 1s linear infinite;
  -moz-animation: rotating 1s linear infinite;
  -ms-animation: rotating 1s linear infinite;
  -o-animation: rotating 1s linear infinite;
  animation: rotating 1s linear infinite;
}

@-webkit-keyframes rotating

/* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  to {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes rotating {
  from {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  to {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>
<style lang="scss">
.mx-zoom-in-down-enter-active,
.mx-zoom-in-down-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center bottom;
}

.mx-zoom-in-down-enter,
.mx-zoom-in-down-enter-from,
.mx-zoom-in-down-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
</style>
