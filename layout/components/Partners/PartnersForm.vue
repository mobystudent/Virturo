<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <input
        v-model="firstName"
        class="input"
        type="text"
        placeholder="First Name"
        @change="handleInputChange('firstName')"
      >
      <span
        v-if="errors.firstName"
        class="error-label"
      >{{ errors.firstName }}</span>
    </div>

    <div class="form-group">
      <input
        v-model="lastName"
        class="input"
        type="text"
        placeholder="Last Name"
        @change="handleInputChange('lastName')"
      >
      <span
        v-if="errors.lastName"
        class="error-label"
      >{{ errors.lastName }}</span>
    </div>

    <div class="form-group">
      <input
        v-model="email"
        class="input"
        type="text"
        placeholder="Email"
        @change="handleInputChange('email')"
      >
      <span
        v-if="errors.email"
        class="error-label"
      >{{ errors.email }}</span>
    </div>

    <div class="form-group">
      <textarea
        v-model="message"
        class="input"
        type="text"
        placeholder="Message"
        @change="handleInputChange('message')"
      />
      <span
        v-if="errors.message"
        class="error-label"
      >{{ errors.message }}</span>
    </div>

    <button
      class="primary-btn"
      type="submit"
    >
      Join Us
    </button>
    <span
      v-if="showSuccessMessage"
      class="success-message"
    >The form was sent successfully.</span>
    <span
      v-if="errorMessage"
      class="error-message"
    >{{ errorMessage }}</span>
  </form>
</template>

<script>
export default {
  name: 'PartnersForm',

  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
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
      // firstName
      if (this.firstName.trim() === '') {
        errors.firstName = 'Required field';
      }
      // lastName
      if (this.lastName.trim() === '') {
        errors.lastName = 'Required field';
      }
      // email
      // eslint-disable-next-line no-useless-escape
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)) {
        errors.email = 'Please fill field correct';
      }
      // message
      if (this.message.trim() === '') {
        errors.message = 'Required field';
      }

      this.errors = errors;
      return Object.keys(errors).length < 1;
    },
    submitForm() {
      if (!this.validation() || this.isSendingProcess) return;

      const params = JSON.stringify({
        type: 'Partners page',
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        question: this.message,
      });

      try {
        const http = new XMLHttpRequest();
        const url = `${process.env.NUXT_ENV_API_URL}/api/support/message`;
        http.open('POST', url, true);
        http.setRequestHeader('Content-type', 'application/json');

        http.onreadystatechange = () => {
          if (http.readyState === 4 && http.status === 201) {
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.message = '';
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
input,
textarea {
  display: block;
  width: 100%;
  height: 48px;
  border: 1px solid #D6D6D6;
  background: transparent;
  border-radius: 8px;
  margin-bottom: 24px;
  padding: 13px 16px;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #D6D6D6;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
  }
}

textarea {
  height: 100px;
}

form {
  max-width: 425px;
  margin: 0 auto;
}

button {
  background-color: #34FEC8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 55px;
  width: 180px;
  height: 48px;
  border-radius: 30px;
  margin: 48px auto 0 auto;
  color: #000000;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  transition: all .3s ease-in-out;

  &:hover {
    background-color: #ffffff;
  }
}

.form-group {
  position: relative;
}

.error-label {
  color: #f4503e;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  position: absolute;
  bottom: -15px;
}

.success-message {
  font-size: 12px;
  color: #ffffff;
  text-align: center;
  display: block;
  margin-top: 20px;
}

.error-message {
  font-size: 12px;
  color: #ee4035;
}
</style>
