<template>
  <div v-if="isShowNextPage">
    <PasswordReset />
  </div>
  <div v-else>
    <ErrorPopUp v-if="isShowErrorPopUp" :errorMessage="errorMessage" @close="isShowErrorPopUp = false" />
    <UserAccount>
      <template #title>Set a new Password</template>
      <template #content>
        <form @submit.prevent="onSubmit" @keyup.enter="onSubmit">
          <PasswordInput
            label="New password"
            :placeholder="true"
            :is-error-pass="isErrorPass"
            @focus="isErrorPass = $event.isErrorPass"
            @updatePassword="handleUpdatePassword"
          />
          <div class="form-group" :class="isErrorConfirmPass ? 'error-confirm-pass' : ''">
            <label>Confirm password</label>
            <div class="password-row confirm-pass">
              <input
                v-model="confirmPassword"
                class="form-control"
                :type="showConfirmPassword ? 'text' : 'password'"
                maxlength="50"
                @focus="focusConfirmPassword"
              />
              <div class="icon">
                <span :class="{ 'show-pass': showConfirmPassword, 'hide-pass': !showConfirmPassword }" @click="toggleConfirmShow"></span>
              </div>
            </div>
            <span v-if="isErrorConfirmPass" class="error-label">Password doesn’t match</span>
          </div>
          <button class="btn-form" type="submit">
            <img v-if="isLoading" class="spinner rotating" src="~/static/img/btn-spinner.png" />
            {{ isLoading ? '' : 'Reset Password' }}
          </button>
        </form>
      </template>
      <template #bottom-text>
        <p class="tpl-text-link contact-us">
          Any questions? Contact us at
          <a class="tpl-link link" :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
        </p>
      </template>
    </UserAccount>
  </div>
</template>

<script>
import UserAccount from '../common/UserAccount.vue';
import PasswordReset from './PasswordReset.vue';
import PasswordInput from '~/components/common/PasswordInput';
import ErrorPopUp from '@/components/common/ErrorPopUp.vue';
import config from '@/project-config';

export default {
  name: 'NewPasswordContent',
  components: {
    UserAccount,
    PasswordInput,
    PasswordReset,
    ErrorPopUp,
  },
  data() {
    return {
      showConfirmPassword: false,
      isShowNextPage: false,
      token: '',
      password: '',
      confirmPassword: '',
      validPassword: false,
      isErrorPass: false,
      isErrorConfirmPass: false,
      isShowErrorPopUp: false,
      isLoading: false,
      supportEmail: config.contacts.supportEmail,
      errorMessage: '',
    };
  },
  methods: {
    toggleConfirmShow() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    focusConfirmPassword() {
      this.isErrorConfirmPass = false;
    },
    handleUpdatePassword(event) {
      this.password = event.password;
      this.validPassword = event.validPassword;
    },
    async onSubmit() {
      this.isLoading = true;
      !this.validPassword ? (this.isErrorPass = true) : (this.isErrorPass = false);

      this.password !== this.confirmPassword ? (this.isErrorConfirmPass = true) : (this.isErrorConfirmPass = false);

      const url = window.location;
      this.token = new URLSearchParams(url.search).get('token');

      const body = {
        token: this.token,
        password: this.password,
        password_confirmation: this.confirmPassword,
      };

      if (!this.isErrorConfirmPass && !this.isErrorPass && this.token) {
        await this.$http
          .post('/api/auth/new-password', body)
          .then(() => {
            this.isShowNextPage = true;
          })
          .catch(err => {
            if (err.response) {
              this.errorMessage = err.response.data.message;
              this.isShowErrorPopUp = true;
            }
          })
          .finally(() => {
            this.isLoading = false;
          });
      } else {
        this.isLoading = false;
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

  &.error-confirm-pass {
    .form-control {
      border: 1px solid $bright-red;

      &:hover:not(:focus) {
        border: 1px solid $bright-red;
      }
    }
  }
}

.form-group:not(:first-child) {
  margin-top: 32px;
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
  font-size: 15px;
  font-weight: 400;
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
}

.password-row {
  position: relative;

  .icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 12px;

    span {
      display: inline-block;
      width: 22px;
      height: 22px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      margin-top: 4px;
      cursor: pointer;

      &.show-pass {
        background-image: url('@/static/img/icons/show.svg');
        margin-top: 6px;
      }

      &.hide-pass {
        background-image: url('@/static/img/icons/hide.svg');
      }
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
  border-radius: 6px;
  color: $dark-grey;
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
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: $dark-grey;

  .tpl-link {
    color: $dark-grey;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      border-bottom: 1px solid $dark-grey;
    }
  }
}

.wrapper-text {
  display: flex;
  justify-content: space-between;
}

.labels-wrap {
  display: flex;
  padding-top: 8px;

  span:not(:last-child) {
    margin-right: 14px;
  }
}

.contact-us {
  margin-top: auto;
}

.error-label {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: $bright-red;
  margin-top: 8px;
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

<style lang="scss">
.contact-us ~ .secured {
  margin-top: 33px;
}
</style>
