<template>
  <div v-if="isLoading || isFakeLoading">
    <Loading />
  </div>
  <div v-else-if="isShowNextPage">
    <PersonalInfo />
  </div>
  <div v-else>
    <UserAccount>
      <template #title>Confirm your email</template>
      <template #content>
        <form>
          <p class="confirm-text">Please enter the 6-digit verification code sent to your email address {{ email }}</p>
          <div class="form-group">
            <label>Enter confirmation code</label>
            <div class="inputs-group">
              <input
                v-for="(_digit, index) in digits.slice(0, 3)"
                :key="'group-1' + index"
                ref="digits"
                v-model="digits[index]"
                type="number"
                class="single-input"
                :class="[isError ? 'invalid' : '', isCorrect ? 'correct' : '']"
                @input.prevent="e => handleDigitInput(e, index)"
                @focus="isError = false"
              />
              <span class="dash"></span>
              <input
                v-for="(_digit, index) in digits.slice(3)"
                ref="digits"
                :key="'group-2' + index"
                v-model="digits[index + 3]"
                type="number"
                class="single-input"
                :class="[isError ? 'invalid' : '', isCorrect ? 'correct' : '']"
                @input.prevent="e => handleDigitInput(e, index + 3)"
                @focus="isError = false"
              />
            </div>
            <span v-if="isError" class="error-label">Incorrect code</span>
            <span v-if="isCorrect" class="correct-label">Correct!</span>
          </div>
        </form>
        <p v-if="count > 0" class="bottom-text-link">
          Next resend will be available in <span class="counter">{{ count }}</span> seconds
        </p>
      </template>
      <!--      <template #bottom-text>-->
      <!--        <p class="bottom-text-link">-->
      <!--          Can't find the email?-->
      <!--          <span class="link" @click="resendCode">Click here to resend</span>-->
      <!--        </p>-->
      <!--      </template>-->
    </UserAccount>
  </div>
</template>
<script>
import UserAccount from '@/components/common/UserAccount';
import Loading from '@/components/Loading/Loading';
import PersonalInfo from '@/components/PersonalInfo/PersonalInfo';
import { registerCookie, verificationCodeCookie } from '@/middleware/token';

const FULL_COUNT = 60;

export default {
  components: { PersonalInfo, Loading, UserAccount },
  props: {
    code: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      email: '',
      isError: false,
      isCorrect: false,
      digits: Array(6).fill(''),
      isLoading: false,
      isFakeLoading: false,
      isShowNextPage: false,
      count: 0,
    };
  },
  mounted() {
    if (this.code) {
      const stringCode = this.code.toString();
      const codeLength = stringCode.length;

      for (let i = 0; i < codeLength; i++) {
        this.$refs.digits[i].value = stringCode[i];
        this.digits[i] = stringCode[i];
      }

      this.onSubmit();
    }

    const email = this.$cookies.get(registerCookie);
    if (email) {
      this.email = email;
    }
  },
  methods: {
    handleDigitInput(e, index) {
      const value = e.target.value.replace(/[^0-9]/g, '');
      this.digits[index] = value.slice(0, 1);

      if (value.length > 1) {
        let i = 1;
        for (i; i < this.digits.length; i++) {
          if (typeof this.digits[index + i] !== 'undefined' && value[i]) {
            this.digits[index + i] = value[i];
          } else {
            break;
          }
        }
        if (index + i < this.digits.length) {
          this.$refs.digits[index + i].focus();
        } else if (this.digits.slice(0, index).includes('')) {
          const idx = this.digits.slice(0, index).findIndex(el => el === '');
          this.$refs.digits[idx].focus();
        }
      } else if (index + 1 !== this.digits.length && value !== '') {
        this.$refs.digits[index + 1].focus();
      }

      const isValid = this.digits.every(digit => !!digit);

      if (isValid) {
        // console.log('isvalid')
        this.onSubmit();
      }
    },
    onSubmit() {
      this.isLoading = true;
      this.isFakeLoading = true;

      setTimeout(() => {
        this.isFakeLoading = false;

        if (this.isCorrect) {
          setTimeout(() => {
            this.isShowNextPage = true;
          }, 2000);
        }
      }, 3000);

      const body = {
        email: this.$cookies.get(registerCookie),
        code: this.digits.join(''),
      };

      this.$http
        .post('/api/auth/verification', body)
        .then(() => {
          this.$cookies.set(verificationCodeCookie, body.code);
          this.isCorrect = true;
        })
        .catch(err => {
          if (err.response) {
            // const { status, data } = err.response;
            // console.log(status, data);
            this.isError = true;
          }

          // clearTimeout(timerId);
          // this.isFakeLoading = false;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    resendCode() {
      this.$http.post('/api/auth/resend-verification-code', { email: this.email }).finally(() => {
        this.count = FULL_COUNT;
        this.startCounter();
      });
    },
    startCounter() {
      const that = this;
      const interval = setInterval(() => {
        if (that.count < 1) {
          clearInterval(interval);
        } else {
          that.count--;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  padding-top: 32px;
}

.confirm-text {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;
}

.form-group {
  margin-top: 32px;

  label {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: $dark-grey;
  }
}

.inputs-group {
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-left: -6px;

  .single-input {
    width: 44px;
    height: 44px;
    background-color: $common-white;
    border: 1px solid $light-khaki;
    outline: 2px solid transparent;
    border-radius: 6px;
    color: $black;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
    margin: 0px 6px;
    transition: 0.2s;

    &:last-child {
      margin: 0px 0px 0px 6px;
    }

    &:focus {
      border-color: $common-green-transparent;
      outline-color: $light-mint;
    }

    &.invalid {
      border-color: $danger-light;
    }

    &.correct {
      border-color: $common-green-transparent;
    }
  }

  .dash {
    width: 12px;
    height: 1px;
    background-color: $light-khaki;
    display: inline-block;
    margin: 0 2px;
  }
}

.error-label {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: $bright-red;
}

.correct-label {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: $common-green-transparent;
}

.bottom-text-link {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  color: $dark-grey;
  text-align: center;
  margin-top: auto;

  .link {
    color: $dark-grey;
    position: relative;
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      bottom: 1px;
      left: 0;
      width: 100%;
      border-bottom: 1px solid $dark-grey;
    }
  }

  .counter {
    display: inline-block;
    width: 18px;
  }
}

@media (max-width: 360px) {
  .inputs-group {
    margin-left: -3px;

    .single-input {
      width: 41px;
      height: 41px;
      margin: 0px 3px;
    }

    .dash {
      width: 6px;
    }
  }
}
</style>
<style lang="scss">
.bottom-text-link ~ .secured {
  margin-top: 33px;
}
</style>
