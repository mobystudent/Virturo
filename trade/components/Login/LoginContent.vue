<template>
  <div>
    <ErrorPopUp v-if="isShowErrorPopUp" @close="isShowErrorPopUp = false" />
    <UserAccount>
      <template #title>Log in to your account</template>
      <template #content>
        <p class="tpl-text-link">
          Don't have an account?
          <nuxt-link class="tpl-link sign-up" to="/sign-up">Sign Up</nuxt-link>
        </p>
        <template v-if="isOpenQRPopup">
          <QRAuthPopup :qrcode="svg" :is-error="isErrorCode" @close="hadlePopupClose" @send="codeSend" @setError="isErrorCode = false" />
        </template>
        <form @submit.prevent="onSubmit()">
          <div class="form-group">
            <label>Email</label>
            <input
              v-model="email"
              class="form-control"
              :class="{ error: isError }"
              type="text"
              maxlength="50"
              placeholder="Type your email"
              @focus="inputFocus"
            />
            <div class="form-group-info">
              <span v-if="isError" class="error-label">Incorrect email</span>
              <span v-if="isErrorNotCompleteRegistration" class="error-label">
                The email address is not complete registration. Please choose another email address or complete
                <span class="error-link-login" @click="handleLogin">sign-up</span>
              </span>
            </div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <div class="password-row">
              <input
                v-model="password"
                class="form-control"
                :class="{ error: isError }"
                :type="showPassword ? 'text' : 'password'"
                maxlength="50"
                placeholder="Type your password"
                @focus="inputFocus"
              />
              <div class="icon">
                <span :class="{ 'show-pass': showPassword, 'hide-pass': !showPassword }" @click="toggleShow"></span>
              </div>
            </div>
            <div class="form-group-info">
              <span v-if="isError" class="error-label">Incorrect password</span>
            </div>
          </div>
          <button :disabled="isLoading" class="btn-form" type="submit">
            <img v-if="isLoading" class="spinner rotating" src="~/static/img/btn-spinner.png" />
            {{ isLoading ? '' : 'Log In' }}
          </button>
          <nuxt-link class="form-group-link" to="/reset">Forgot password?</nuxt-link>
          <div v-if="isAccountLocked" class="locked-account-msg">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10.0003 1.66699C14.6028 1.66699 18.3337 5.39783 18.3337 10.0003C18.3337 14.6028 14.6028 18.3337 10.0003 18.3337C5.39783 18.3337 1.66699 14.6028 1.66699 10.0003C1.66699 5.39783 5.39783 1.66699 10.0003 1.66699Z" fill="#D95353" fill-opacity="0.16"/>
              <path d="M10.0003 13.3337H10.007M10.0003 6.66699V10.8337M18.3337 10.0003C18.3337 5.39783 14.6028 1.66699 10.0003 1.66699C5.39783 1.66699 1.66699 5.39783 1.66699 10.0003C1.66699 14.6028 5.39783 18.3337 10.0003 18.3337C14.6028 18.3337 18.3337 14.6028 18.3337 10.0003Z" stroke="#D95353" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p>
              Your account is temporarily locked due to multiple failed login attempts.
              <strong>Please wait a few minutes before trying again.</strong>
            </p>
          </div>
        </form>
      </template>
    </UserAccount>
  </div>
</template>

<script>
import UserAccount from '../common/UserAccount.vue';
import QRAuthPopup from '../common/QRAuthPopup.vue';
import ErrorPopUp from '@/components/common/ErrorPopUp.vue';
import { ssoCookie, registerCookie, verificationCodeCookie } from '@/middleware/token';
import { COOKIE_EXPIRATION_TIME } from '@/constants';

export default {
  name: 'LoginContent',
  components: {
    UserAccount,
    QRAuthPopup,
    ErrorPopUp,
  },
  data() {
    return {
      showPassword: false,
      email: '',
      password: '',
      isError: false,
      errors: {},
      isLoading: false,
      isErrorNotCompleteRegistration: false,
      verificationCode: null,
      isOpenQRPopup: false,
      svg: '',
      code: null,
      isShowErrorPopUp: false,
      isErrorCode: false,
      isAccountLocked: false,
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    hadlePopupClose() {
      this.isOpenQRPopup = false;
    },
    codeSend(code) {
      this.code = code;
      this.onSubmit();
    },
    onSubmit() {
      this.isAccountLocked = false;

      const email = this.email;
      const password = this.password;
      if (!email.length || !password.length || this.isError || this.isLoading) {
        this.isError = true;
        return;
      }

      this.isLoading = true;
      const data = { email, password };
      if (this.code) data.code = this.code;
      this.$http
        .post('/api/auth/login', data)
        .then(async res => {
          // qrcode
          if (res.status === 212) {
            this.svg = await res.text();
            const styledSvg = this.svg.replace('<svg', `<svg style="fill: #2BD770;"`);
            const modifiedSvg = styledSvg.replace(/<polygon|<path/g, `$& style="fill: #2BD770;"`);
            this.svg = modifiedSvg;
            this.isOpenQRPopup = true;
            return;
          }
          const body = await res.json();
          if (res.status === 210) {
            this.isErrorNotCompleteRegistration = true;
            this.verificationCode = body.code;
          } else if (res.status === 211) {
            this.isErrorNotCompleteRegistration = true;
          } else {
            this.$cookies.set(ssoCookie, body.sso_token, { path: '/', maxAge: COOKIE_EXPIRATION_TIME });
            this.$store.dispatch('setToken', body.access_token);
            this.$store.dispatch('setUsername', email);
            this.$router.replace({ path: '/' }).catch(() => {});
          }
        })
        .catch(err => {
          if (err.response) {
            if (err.response.status === 423) {
              this.isAccountLocked = true;
            } else if(err.response.status === 401) {
              this.isAccountLocked = true;
            } else {
              this.isError = true;
              this.isErrorCode = true;
            }
          } else {
            this.isShowErrorPopUp = true;
            this.isError = true;
            this.isErrorCode = true;
          }
        })
        .finally(() => {
          this.isLoading = false;
          this.code = null;
        });
    },
    inputFocus() {
      this.isErrorNotCompleteRegistration = false;
      this.isError = false;
      this.isAccountLocked = false;
    },
    handleLogin(event) {
      event.stopPropagation();
      this.$cookies.set(registerCookie, this.email);
      if (this.verificationCode) {
        this.$cookies.set(verificationCodeCookie, this.verificationCode);
      }
      this.$router.replace({ path: '/sign-up' }).catch(() => {});
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

.form-group:not(:first-child) {
  margin-top: 24px;
}

.form-group label {
  color: $dark-grey;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
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

  &.error {
    border-color: $bright-red;

    &:hover:not(:focus) {
      border-color: $bright-red;
    }
  }

  &::placeholder {
    color: $grey-52-color;
  }
}

.password-row {
  position: relative;

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
  }
}

.icon span {
  display: inline-block;
  width: 22px;
  height: 22px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 5px;
  cursor: pointer;
}

.icon .show-pass {
  background-image: url('@/static/img/icons/show.svg');
  margin-top: 7px;
}

.icon .hide-pass {
  background-image: url('@/static/img/icons/hide.svg');
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
  margin-top: 24px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: $common-white;
    border-color: $common-green-transparent;
  }
}

.tpl-text-link {
  color: $dark-grey;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;

  padding-top: 8px;

  .tpl-link {
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

.form-row {
  margin-top: 16px;
}

.form-group-info {
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.form-group-link {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey-2;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    border-bottom: 1px solid $dark-grey-2;
  }
}

.error-label {
  color: $bright-red;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
}

.spinner {
  width: 24px;
  height: 24px;
}

.error-link-login {
  text-decoration: underline;
  cursor: pointer;
}

.locked-account-msg {
  margin-top: 20px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #D95353;

  svg {
    width: 20px;
    height: 20px;
  }

  p {
    margin-top: 8px;
    color: #282929;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    strong {
      font-weight: 500;
    }
  }
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
