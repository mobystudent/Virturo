<template>
  <div class="section">
    <AccountSuccessPasswordPopup v-if="isShowSuccessPopup" @close="isShowSuccessPopup = false" />
    <div class="section-inner">
      <h2 class="title">Change password</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group" :class="isCurrentPasswordError ? 'invalid' : ''">
          <label>Current password</label>
          <div class="password-row">
            <input
              v-model="currentPassword"
              class="form-control"
              :type="showPassword ? 'text' : 'password'"
              maxlength="50"
              @focus="focusCurrentPassword"
            />
            <div class="icon">
              <span
                :class="{
                  'show-pass': showPassword,
                  'hide-pass': !showPassword,
                }"
                @click="toggleShow"
              ></span>
            </div>
          </div>
          <span v-if="isCurrentPasswordError" class="error-label">Your current password is wrong</span>
        </div>
        <div class="form-group-wrapper">
          <PasswordInput
            label="New password"
            :placeholder="true"
            :is-error-pass="isErrorPass"
            :is-show-icons="false"
            @focus="isErrorPass = $event.isErrorPass"
            @updatePassword="handleUpdatePassword"
          />
          <div class="form-group" :class="isErrorConfirmPass ? 'invalid' : ''">
            <label>Confirm password</label>
            <div class="password-row">
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
        </div>
        <button class="btn-form" type="submit">
          <img v-if="isLoading" class="spinner rotating" src="~/static/img/btn-spinner.png" />
          {{ isLoading ? '' : 'Change password' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import PasswordInput from '@/components/common/PasswordInput';
import AccountSuccessPasswordPopup from '@/components/Account/popups/AccountSuccessPasswordPopup';

export default {
  name: 'ChangePassword',
  components: { PasswordInput, AccountSuccessPasswordPopup },
  data() {
    return {
      currentPassword: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      isCurrentPasswordError: false,
      isErrorPass: false,
      validPassword: false,
      isErrorConfirmPass: false,
      showConfirmPassword: false,
      isLoading: false,
      isShowSuccessPopup: false,
    };
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmShow() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    focusCurrentPassword() {
      this.isCurrentPasswordError = false;
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

      const body = {
        current_password: this.currentPassword,
        password_confirmation: this.confirmPassword,
        password: this.password,
      };

      if (!this.isErrorConfirmPass && !this.isErrorPass) {
        await this.$http
          .post('/api/auth/change-password', body)
          .then(() => {
            this.isShowSuccessPopup = true;
          })
          .catch(err => {
            if (err.response) {
              if (err.response) {
                this.isCurrentPasswordError = true;
              }
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
.section {
  padding-top: 24px;
}

.section-inner {
  padding-top: 16px;
  max-width: 653px;
  border-top: 1px solid $lighter-grey;
}

.title {
  color: $dark-grey;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
}

.form-group-wrapper {
  display: flex;
  justify-content: space-between;
}

.form-group {
  width: calc(50% - 8px);
  padding-top: 16px;

  &.invalid {
    .form-control {
      border: 1px solid $bright-red;

      &:hover:not(:focus) {
        border: 1px solid $bright-red;
      }
    }
  }

  label {
    display: inline-block;
    color: $dark-grey;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    padding-bottom: 8px;
  }
}

.form-control {
  width: 100%;
  height: 44px;
  background-color: $common-white;
  border: 1px solid $light-khaki;
  outline: 2px solid transparent;
  border-radius: 6px;
  padding: 10px 45px 10px 12px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  color: $black;
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
  width: calc(50% - 8px);
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

.error-label {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: $bright-red;
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

@media (max-width: 767px) {
  .section-inner {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .form-group {
    width: 100%;
  }

  .btn-form {
    width: 100%;
    margin-top: 24px;
  }

  .form-group-wrapper {
    flex-direction: column;
  }
}
</style>
