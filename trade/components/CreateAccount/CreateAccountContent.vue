<template>
  <div v-if="isShowNextPage">
    <ConfirmAddressContent :back-to-signup="backToSignup" :code="String(code)" />
  </div>
  <div v-else>
    <AuthErrorPopUp v-if="isShowErrorPopUp" @close="isShowErrorPopUp = false" />
    <UserAccount>
      <template #title>Create an account</template>
      <template #content>
        <p class="account-link">
          Already have an account?
          <nuxt-link class="link" to="/login">Log In</nuxt-link>
        </p>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label>Email</label>
            <input
              v-model="email"
              class="form-control"
              :class="errors.email || isErrorExistingEmail ? 'invalid' : ''"
              type="text"
              placeholder="Type your email"
              maxlength="50"
              @focus="
                errors.email = '';
                isErrorExistingEmail = false;
              "
            />
            <span v-if="errors.email || isErrorExistingEmail" class="error-label">
              {{ errors.email && errors.email }}
              <span v-if="!errors.email">
                The email address is already registered. Please choose another email address or
                <nuxt-link class="error-link-login" to="/login">login</nuxt-link>
              </span>
            </span>
          </div>
          <PasswordInput
            label="New password"
            :placeholder="true"
            :is-error-pass="isErrorPass"
            @focus="isErrorPass = $event.isErrorPass"
            @updatePassword="
              password = $event.password;
              validPassword = $event.validPassword;
            "
          />
          <div class="form-group">
            <label>Phone number</label>
            <PhoneNumberInput
              :error="errors.phoneNumber"
              @onFocus="errors.phoneNumber = ''"
              @updatePhone="phoneNumber = $event"
              @updateCountry="selectedCountry = $event"
            />
          </div>
          <div class="form-group">
            <label>Currency</label>
            <div class="currency-buttons">
              <div
                v-for="item in currencyList"
                :key="item.currency"
                class="radio-btn"
                :class="{ active: item.currency === activeCurrency }"
                @click="activeCurrency = item.currency"
              >
                <span>{{ item.symbol }}</span>
                <span>{{ item.currency }}</span>
              </div>
            </div>
          </div>
          <button :disabled="isLoading" class="btn-form" type="submit">
            <img v-if="isLoading" class="spinner rotating" src="~/static/img/btn-spinner.png" />
            {{ isLoading ? '' : 'Sign Up' }}
          </button>
          <p class="terms-link">
            By creating an account, you agree to our<br />
            <a class="link" target="_blank" :href="termsAndConditionsLink"> Terms and Conditions </a>
          </p>
        </form>
      </template>
    </UserAccount>
  </div>
</template>

<script>
import UserAccount from '../common/UserAccount.vue';
import PhoneNumberInput from '../common/PhoneNumberInput/PhoneNumberInput.vue';
import AuthErrorPopUp from '../common/AuthErrorPopUp';
import PasswordInput from '@/components/common/PasswordInput';
import ConfirmAddressContent from '@/components/ConfirmAddress/ConfirmAddressContent';
import { registerCookie, passwordCookie, verificationCodeCookie, countryCodeKey, referralEmailKey } from '@/middleware/token';
import countries from '@/components/common/PhoneNumberInput/countriesData';
import { defaultCountryName, referralKey, defaultCurrency, currencyList, SITE_URL } from '@/constants';

const defaultCountry = countries.find(item => item.county === defaultCountryName);

export default {
  name: 'CreateAccountContent',
  components: {
    ConfirmAddressContent,
    PasswordInput,
    UserAccount,
    PhoneNumberInput,
    AuthErrorPopUp,
  },
  data() {
    return {
      code: '',
      showPassword: false,
      email: '',
      password: '',
      phoneNumber: '',
      selectedCountry: defaultCountry,
      isErrorPass: false,
      validPassword: false,
      referral: null,
      errors: {
        email: '',
        password: '',
        phoneNumber: '',
      },
      activeCurrency: defaultCurrency,
      currencyList,
      isShowNextPage: false,
      isLoading: false,
      isShowErrorPopUp: false,
      termsAndConditionsLink: `${SITE_URL}/legal`,
      isErrorExistingEmail: false,
    };
  },
  mounted() {
    this.decodeReferralParam();

    try {
      const code = window.location.search.split('&')[0].slice(1);
      const hideString = atob(decodeURIComponent(code));

      if (hideString) {
        const searchParams = new URLSearchParams(hideString);
        const email = searchParams.get('email');
        const code = searchParams.get('code');
        this.referral = searchParams.get(referralKey);

        if (code && email) {
          this.isShowNextPage = true;
          this.code = code;
          this.$cookies.set(verificationCodeCookie, code);
          this.$cookies.set(registerCookie, String(email));
        }
      }
    } catch (e) {
      // console.log(e);
    }

    if (this.$cookies.get(registerCookie) && this.$cookies.get(verificationCodeCookie)) {
      this.code = this.$cookies.get(verificationCodeCookie);
    }

    if (this.$cookies.get(registerCookie)) {
      this.isShowNextPage = true;
    }
  },
  methods: {
    backToSignup() {
      this.$cookies.remove(registerCookie);
      this.$cookies.remove(passwordCookie);
      this.isShowNextPage = false;
    },
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    validateEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        this.errors.email = '';
      } else {
        this.errors.email = 'Please enter a valid email';
      }
    },
    validatePhoneNumber(countryCode, phoneNumber) {
      if (
        phoneNumber.startsWith('+' + countryCode) &&
        phoneNumber.replace('+' + countryCode, '') &&
        phoneNumber.length > 10 &&
        phoneNumber.length < 16
      ) {
        this.errors.phoneNumber = '';
      } else {
        this.errors.phoneNumber = 'Please enter a valid phone number';
      }
    },
    validateForm() {
      const email = this.email;
      const phoneNumber = this.phoneNumber;
      const countryCode = this.selectedCountry?.code;
      !this.validPassword ? (this.isErrorPass = true) : (this.isErrorPass = false);
      this.validateEmail(email);
      this.validatePhoneNumber(countryCode, phoneNumber);
    },
    async onSubmit() {
      this.validateForm();

      const isValid = Object.values(this.errors).every(item => Boolean(item) === false);

      if (!this.isErrorPass && isValid && !this.isLoading) {
        this.isLoading = true;

        const body = {
          email: this.email,
          password: this.password,
          password_confirmation: this.password,
          phone: this.phoneNumber,
          currency: this.activeCurrency,
        };

        const referral = localStorage.getItem(referralEmailKey);

        // if (this.referral) body.referral = this.referral;
        if (referral) body.referral = referral;
        await this.$http
          .post('/api/auth/register', body)
          .then(async res => {
            this.$cookies.set(passwordCookie, this.password);
            this.$cookies.set(registerCookie, this.email);
            localStorage.setItem(countryCodeKey, this.selectedCountry?.isoCode);
            const resBody = await res.json();
            if (res.status === 210) {
              this.$cookies.set(verificationCodeCookie, resBody.code || '');
              this.$router.go(this.$router.currentRoute);
            } else if (res.status === 211) {
              this.$router.go(this.$router.currentRoute);
            } else {
              this.isShowNextPage = true;
            }

            localStorage.removeItem(referralEmailKey);
          })
          .catch(err => {
            if (err.response) {
              const { status } = err.response;
              if (status === 400 || status === 409) {
                this.isErrorExistingEmail = true;
              }
            } else {
              this.isShowErrorPopUp = true;
            }
          });
      }

      this.isLoading = false;
    },
    decodeReferralParam() {
      try {
        const code = window.location.search.split('&')[0].slice(1);
        const rawReferral = atob(decodeURIComponent(code));
        const [key, email] = rawReferral.split('=');

        if (key === referralKey) {
          localStorage.setItem(referralEmailKey, email);
        }
      } catch (_e) {
        // console.log(e);
      }
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
  margin-bottom: 16px;
}

.form-group label {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: $dark-grey;
  margin-bottom: 8px;
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
    border-color: $bright-red;

    &:hover:not(:focus) {
      border-color: $bright-red;
    }
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

.currency-buttons {
  display: flex;
  height: 44px;
  overflow: hidden;

  .radio-btn {
    width: 33.333333%;
    border-radius: 6px;
    border: 1px solid $light-khaki;
    background-color: $common-white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: $dark-grey;
    transition: 0.2s;

    span {
      font-size: 15px;
      font-weight: 400;
      line-height: 1;

      &:last-child {
        padding-left: 8px;
      }
    }

    &.active {
      border: 1px solid $common-green-transparent;
    }

    &:not(.active):hover {
      border: 1px solid $common-green-transparent;
    }

    &:not(:first-child) {
      margin-left: 8px;
    }
  }
}

.terms-link {
  color: $dark-grey-2;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  .link {
    position: relative;
    color: $dark-grey-2;

    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      border-bottom: 1px solid $dark-grey-2;
    }
  }
}

.account-link {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;
  padding-top: 8px;

  .link {
    color: $common-green;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 3px;
      left: 0;
      width: 100%;
      border-bottom: 1px solid $common-green;
    }
  }
}

.error-label {
  color: $bright-red;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  margin-top: 8px;

  .error-link-login {
    color: $bright-red;
    text-decoration: underline;
  }
}

.spinner {
  width: 24px;
  height: 24px;
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
