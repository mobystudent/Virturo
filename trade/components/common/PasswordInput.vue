<template>
  <div class="form-group" :class="isError ? 'error-pass' : ''">
    <label>{{ label ? label : 'Password' }}</label>
    <div class="password-row">
      <input
        v-model="password"
        class="form-control"
        :type="showPassword ? 'text' : 'password'"
        :placeholder="placeholder ? 'Choose a strong password' : ''"
        maxlength="50"
        @input="passwordCheck"
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
    <div
      class="password-strength-lines"
      :class="{
        'pass-strong': countValid == 4,
        'pass-medium': countValid == 2 || countValid == 3,
        'pass-weak': countValid == 1,
      }"
    >
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </div>
    <div class="password-strength-labels">
      <p class="wrapper-text">
        <span>Must contain at least 8 characters:</span>
        <span v-for="level in passwordLevel" v-show="level.show" :key="level.item" :style="{ color: level.color }">
          {{ level.label }}
        </span>
      </p>
      <div class="labels-wrap">
        <span class="label">
          <span v-if="isShowIcons" class="el-icon" :class="{ 'is-valid': arrСontains.containsUppercase }">
            <DoneIcon />
          </span>
          1 Uppercase
        </span>
        <span class="label">
          <span v-if="isShowIcons" class="el-icon" :class="{ 'is-valid': arrСontains.containsNumber }">
            <DoneIcon />
          </span>
          1 Number
        </span>
        <span class="label">
          <span v-if="isShowIcons" class="el-icon" :class="{ 'is-valid': arrСontains.containsSpecialChar }">
            <DoneIcon />
          </span>
          1 Special Character
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import DoneIcon from '@/static/img/icons/done.svg?inline';

const NUMBER = /\d/;
const UPPERCASE = /[A-Z]/;
const SPECIAL_CHAR = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

export default {
  name: 'PasswordInput',
  components: { DoneIcon },
  props: {
    placeholder: {
      type: Boolean,
      default: false,
    },
    isShowIcons: {
      type: Boolean,
      default: true,
    },
    isErrorPass: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      password: '',
      showPassword: false,
      validPassword: false,
      countValid: 0,
      isError: false,
      passwordLevel: {
        weak: {
          label: 'Weak',
          show: false,
          color: '#EE4035',
        },
        medium: {
          label: 'Medium',
          show: false,
          color: '#F7931A',
        },
        strong: {
          label: 'Strong',
          show: false,
          color: '#157275',
        },
      },
      arrСontains: {
        amountChar: false,
        containsNumber: false,
        containsUppercase: false,
        containsSpecialChar: false,
      },
    };
  },
  watch: {
    isErrorPass: function (newVal, oldVal) {
      this.isError = newVal;
      this.validPass();
      this.calculateLevel();
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    validPass() {
      this.arrСontains.amountChar = this.password.length >= 8 && this.password.length <= 16;

      this.arrСontains.containsUppercase = UPPERCASE.test(this.password);
      this.arrСontains.containsNumber = NUMBER.test(this.password);
      this.arrСontains.containsSpecialChar = SPECIAL_CHAR.test(this.password);

      this.validPassword =
        this.arrСontains.amountChar &&
        this.arrСontains.containsUppercase &&
        this.arrСontains.containsNumber &&
        this.arrСontains.containsSpecialChar;
    },
    passwordCheck() {
      this.validPass();

      this.$emit('focus', { isError: this.isError });

      this.$emit('updatePassword', {
        password: this.password,
        validPassword: this.validPassword,
      });

      this.calculateLevel();
    },
    calculateLevel() {
      const count = Object.values(this.arrСontains).filter(item => item === true);
      this.countValid = count.length;

      for (const item in this.passwordLevel) {
        this.passwordLevel[item].show = false;
      }

      if (this.countValid === 4) {
        this.passwordLevel.strong.show = true;
      } else if (this.countValid === 3 || this.countValid === 2) {
        this.passwordLevel.medium.show = true;
      } else if (this.countValid === 1) {
        this.passwordLevel.weak.show = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  display: flex;
  flex-direction: column;

  label {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    color: $dark-grey;
    margin-bottom: 8px;
  }

  &.error-pass {
    .form-control {
      border: 1px solid $bright-red;

      &:hover:not(:focus) {
        border: 1px solid $bright-red;
      }
    }
    //.password-strength-labels {
    //  .labels-wrap {
    //    span {
    //      color: $bright-red;
    //    }
    //
    //    svg {
    //      rect {
    //        fill: $bright-red;
    //      }
    //
    //      path {
    //        stroke: $pale-green;
    //        stroke-opacity: 1;
    //      }
    //    }
    //  }
    //}
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

.password-strength-lines {
  display: flex;
  margin-top: 8px;

  .line {
    display: inline-block;
    height: 4px;
    width: 33%;
    background-color: $deep-green;
    border-radius: 10px;
    transition: background-color 0.5s ease-in-out;

    &:not(:last-child) {
      margin-right: 3px;
    }
  }

  &.pass-strong .line {
    background-color: $common-green-transparent;
  }

  &.pass-medium .line {
    &:first-child,
    &:nth-child(2) {
      background-color: $orange;
    }
  }

  &.pass-weak .line {
    &:first-child {
      background-color: $bright-red;
    }
  }
}

.password-strength-labels {
  margin-top: 8px;
}

.wrapper-text {
  display: flex;
  justify-content: space-between;

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
    color: $black;
  }
}

.labels-wrap {
  display: flex;
  justify-content: flex-start;
  padding-top: 8px;

  .label {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
    color: $black;

    &:not(:last-child) {
      margin-right: 12px;
    }
  }

  .el-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 6px;

    svg {
      cursor: auto;

      &:hover path {
        fill: none;
      }
    }

    &.is-valid {
      svg {
        rect {
          fill: $common-green-transparent;
          transition: fill 0.5s ease-in-out;
        }
        path {
          stroke: $pale-green;
          stroke-opacity: 1;
          transition: stroke 0.5s ease-in-out, stroke-opacity 0.5s ease-in-out;
        }
      }
    }
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
  padding: 16px;
  margin-top: 40px;
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  background-color: $pallete-green;
  color: $common-white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: $pallete-green-hover;
  }
}
.tpl-text-link {
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.45;
  color: $main-grey;
  .tpl-link {
    color: $main-grey;
    border-bottom: 1px solid $main-grey;
  }
}
</style>
