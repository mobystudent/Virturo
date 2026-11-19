<template>
  <div
    class="subscribe"
    :class="block === 'footer' ? 'subscribe--footer' : 'subscribe--section'"
  >
    <p
      v-if="block === 'footer'"
      class="subscribe__text"
    >
      Sign up for our newsletter and catch the trend with our weekly updates and insights directly to your inbox
    </p>
    <h2
      v-else
      class="subscribe__title"
    >
      Sign up for our newsletter and catch the trend with our weekly updates and insights directly to your inbox
    </h2>
    <form
      class="subscribe__form"
      @submit.prevent="submitForm"
    >
      <input
        id="email"
        v-model="email"
        type="email"
        class="form-input"
        placeholder="What’s your email?"
        @change="handleInputChange('email')"
      >
      <button
        id="submit"
        type="submit"
        class="btn-subscribe"
      >
        <svg
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.6777 4.41735L6.00178 0.833143L6.81414 0L11.5693 4.63652L12.0016 5.05802L11.5644 5.47441L6.80921 10.0031L6.0067 9.16051L9.7652 5.58099H0V4.41735H9.6777Z"
          />
        </svg>
      </button>
    </form>
    <span
      v-if="errors.email"
      class="error-label"
    >{{ errors.email }}</span>
    <span
      v-if="showSuccessMessage"
      class="success-message"
    >Thanks for registering</span>
    <span
      v-if="errorMessage"
      class="error-message"
    >{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor,vue/require-default-prop
    block: '',
  },
  data() {
    return {
      email: '',
      wasSended: false,
      isSendingProcess: false,
      errors: {},
      showSuccessMessage: false,
      errorMessage: '',
    };
  },
  methods: {
    validation() {
      const errors = {};
      // email
      // eslint-disable-next-line no-useless-escape
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)) {
        errors.email = 'Please enter your email';
      }

      this.errors = errors;
      return Object.keys(errors).length < 1;
    },
    submitForm() {
      if (!this.validation() || this.isSendingProcess) return;

      const params = JSON.stringify({
        type: 'Subscribe Form',
        email: this.email,
      });

      try {
        const http = new XMLHttpRequest();
        const url = `${process.env.NUXT_ENV_API_URL}/api/support/message`;
        http.open('POST', url, true);
        http.setRequestHeader('Content-type', 'application/json');

        http.onreadystatechange = () => {
          if (http.readyState === 4 && http.status === 201) {
            this.email = '';
            this.showSuccessMessage = true;
          }
        };
        http.send(params);
      } catch (err) {
        this.errorMessage = 'Something went wrong';
      }
    },
    handleInputChange(field) {
      this.errorMessage = '';

      if (this.errors[field]) {
        this.errors[field] = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribe {
  position: relative;
  display: flex;

  &--footer {
    flex-flow: column;
  }

  &--section {
    justify-content: space-between;
    align-items: center;
    gap: 30px 60px;

    @media (max-width: 1024px) {
      flex-flow: column;
      align-items: flex-start;
      max-width: 525px;
      margin-left: auto;
    }
  }
}

.subscribe__text {
  font: 12px/18px 'Poppins', sans-serif;
  color: #fff;
  margin-bottom: 25px;
}

.subscribe__title {
  font: 500 24px/32px 'Poppins', sans-serif;
  color: #fff;
  max-width: 525px;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 30px;
  }
}

.subscribe__form {
  position: relative;
  width: 100%;
  max-width: 415px;
}

.btn-subscribe {
  border: none;
  display: flex;
  width: 28px;
  height: 28px;
  justify-content: center;
  align-items: center;
  background-color: #48C3A8;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 0;
  transition: background-color .25s ease-in;
  transform: translateY(-50%);
  cursor: pointer;

  &:hover {
    background-color: #fff;

    svg {
      fill: #157275;
    }
  }

  &:active {
    background-color: #157275;

    svg {
      fill: #fff;
    }
  }

  svg {
    fill: #352F44;
  }
}

.form-input {
  height: 52px;
  padding: 0 40px 12px 0;
  border-bottom: 1px solid #D9D9D9;
  box-sizing: border-box;
  color: #fff;
  font: 16px/24px 'Roobert', sans-serif;
  background: transparent;
  width: 100%;
  outline: none;
}

.form-input::-webkit-input-placeholder {
  color: #fff;

  @media (max-width: 768px) {
    font-size: 14px;
  }
}

.form-input::-moz-placeholder {
  color: #fff;

  @media (max-width: 768px) {
    font-size: 14px;
  }
}

.error-label, .error-message {
  position: absolute;
  bottom: -15px;
  display: block;
  width: 100%;
  color: #ee4035;
  font: 500 11px/14px 'Poppins', sans-serif;
}

.success-message {
  font: 500 14px/20px 'Poppins', sans-serif;
  color: #48C3A8;
  text-align: center;
  display: block;
  margin-top: 20px;
}
</style>
