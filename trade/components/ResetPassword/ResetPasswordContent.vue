<template>
  <div v-if="isShowNextPage">
    <CheckEmailAddress :email="email" />
  </div>
  <div v-else>
    <UserAccount>
      <template #title>Password Recovery</template>
      <template #content>
        <p class="tpl-text-link">
          Don't have an account ?
          <nuxt-link class="tpl-link sign-up" to="/sign-up">Sign Up</nuxt-link>
        </p>
        <form @submit.prevent="onSubmit" @keyup.enter="onSubmit">
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
            <span v-if="isError" class="error-label">{{ errorMessage }}</span>
          </div>
          <button class="btn-form" type="submit">
            <img v-if="isLoading" class="spinner rotating" src="~/static/img/btn-spinner.png" />
            {{ isLoading ? '' : 'Reset Password' }}
          </button>
        </form>
      </template>
      <template #bottom-text>
        <p class="contact-us">
          Any questions? Contact us at
          <a class="tpl-link" :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
        </p>
      </template>
    </UserAccount>
  </div>
</template>

<script>
import UserAccount from '../common/UserAccount.vue';
import CheckEmailAddress from './CheckEmailAddress.vue';
import config from '@/project-config';

export default {
  name: 'ResetPasswordContent',

  components: {
    UserAccount,
    CheckEmailAddress,
  },
  data() {
    return {
      email: '',
      isError: false,
      errorMessage: '',
      isShowNextPage: false,
      isLoading: false,
      supportEmail: config.contacts.supportEmail,
    };
  },
  methods: {
    onSubmit() {
      const email = this.email;

      if (!email) {
        this.isError = true;
        this.errorMessage = 'The email address is empty';
        return;
      }

      this.isLoading = true;

      this.$http
        .post('/api/auth/reset', { email })
        .then(() => {
          this.isShowNextPage = true;
        })
        .catch(err => {
          if (err.response) {
            // const { status, data } = err.response;
            // console.log(status, data);
            this.isError = true;
            this.errorMessage = 'The email address that you entered was not found';
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    inputFocus() {
      this.isError = false;
      this.email = '';
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
  margin-top: 8px;
}

.form-group label {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
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

.tpl-text-link {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;
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

.contact-us {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: $dark-grey;
  text-align: center;
  margin-top: auto;

  .tpl-link {
    position: relative;
    color: $dark-grey;

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

.error-label {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
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
