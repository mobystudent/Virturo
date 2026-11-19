<template>
  <form
    class="form"
    @submit.prevent="submitForm"
  >
    <div class="form-row">
      <label
        for="subject"
        class="form-label"
      >Subject <span class="required-symbol">*</span></label>
      <div class="select-wrap">
        <select
          id="subject"
          v-model="subject"
          required
        >
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
          >
            {{ option.title }}
          </option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-col">
        <label
          for="subject"
          class="form-label"
        >First name <span class="required-symbol">*</span></label>
        <input
          v-model="firstName"
          class="input"
          type="text"
          placeholder="Type first name"
          required
          @change="handleInputChange('firstName')"
        >
        <span
          v-if="errors.firstName"
          class="error-label"
        >{{ errors.firstName }}</span>
      </div>
      <div class="form-col">
        <label
          for="subject"
          class="form-label"
        >Last name <span class="required-symbol">*</span></label>
        <input
          v-model="lastName"
          class="input"
          type="text"
          placeholder="Type last name"
          required
        >
        <span
          v-if="errors.lastName"
          class="error-label"
        >{{ errors.lastName }}</span>
      </div>
    </div>
    <div class="form-row">
      <div class="form-col">
        <label
          for="subject"
          class="form-label"
        >Email Address <span class="required-symbol">*</span></label>
        <input
          v-model="email"
          class="input"
          type="email"
          placeholder="Type email address"
          required
        >
        <span
          v-if="errors.email"
          class="error-label"
        >{{ errors.email }}</span>
      </div>
      <div class="form-col">
        <label
          for="subject"
          class="form-label"
        >Phone number <span class="required-symbol">*</span></label>
        <input
          v-model="phone"
          class="input"
          type="phone"
          placeholder="Type phone number"
          required
        >
        <span
          v-if="errors.phone"
          class="error-label"
        >{{ errors.phone }}</span>
      </div>
    </div>
    <div class="form-row">
      <label
        for="subject"
        class="form-label"
      >How can we help? <span class="required-symbol">*</span></label>
      <textarea
        v-model="question"
        class="textarea"
        rows="8"
        placeholder="A brief description here"
      />
      <span
        v-if="errors.question"
        class="error-label"
      >{{ errors.question }}</span>
    </div>
    <div class="button-wrap">
      <button
        :class="{ 'sendingProcess': isSendingProcess }"
        class="button"
        type="submit"
      >
        <font-awesome-icon
          v-show="isSendingProcess"
          class="submit-icon"
          icon="fa fa-spinner fa-3x fa-spin"
          aria-hidden="true"
        />
        Send message
      </button>
      <span
        v-show="wasSended"
        class="form-result"
      ><font-awesome-icon
        class="result-icon"
        icon="fa fa-check"
      />The form
        was sent successfully.</span>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormComponent',

  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      question: '',
      wasSended: false,
      isSendingProcess: false,
      errors: {},
      subject: '',
      options: [
        {
          title: 'Select an option',
          value: '',
        },
        {
          title: 'General Questions',
          value: 'General_Questions',
        },
        {
          title: 'Account & Trading',
          value: 'Account_and_Trading',
        },
        {
          title: 'Technical Support and Security',
          value: 'Support_and_Security',
        },
        {
          title: 'Privacy and Compliance',
          value: 'Privacy_and_Compliance',
        },
        {
          title: 'Deposits and Withdrawals',
          value: 'Deposits_and_Withdrawals',
        },
        {
          title: 'Feedback and Suggestions',
          value: 'Feedback_and_Suggestions',
        },
      ],
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
      // phone
      const phoneValue = this.phone.trim();
      if (phoneValue !== '') {
        const phoneRegex = /^\d{7,15}$/;
        if (!phoneRegex.test(phoneValue)) {
          errors.phone = 'The phone number must contain numbers, 7-15 characters.';
        }
      }
      // question
      if (this.question.trim() === '') {
        errors.question = 'Required field';
      }
      // email
      // eslint-disable-next-line no-useless-escape
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.email)) {
        errors.email = 'Please fill field correct';
      }
      this.errors = errors;
      return Object.keys(errors).length < 1;
    },
    submitForm() {
      if (!this.validation() || this.isSendingProcess) return;
      const that = this;
      that.isSendingProcess = true;
      try {
        const http = new XMLHttpRequest();
        const url = `${process.env.NUXT_ENV_API_URL}/api/support/message`;
        const params = JSON.stringify({
          type: 'Support page',
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          question: this.question,
          subject: this.subject,
          phone: this.phone,
        });
        http.open('POST', url, true);
        http.setRequestHeader('Content-type', 'application/json');

        // eslint-disable-next-line func-names
        http.onreadystatechange = function () {
          if (http.readyState === 4 && http.status === 201) {
            that.wasSended = true;
            that.firstName = '';
            that.lastName = '';
            that.email = '';
            that.question = '';
            that.subject = '';
            that.phone = '';
            that.isSendingProcess = false;
          }
        };
        http.send(params);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('error', err);
      }
    },
    handleInputChange(field) {
      if (this.errors[field]) delete this.errors[field];
    },
  },
};

</script>

<style lang="scss" scoped>
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.form {
  display: flex;
  flex-flow: column;
  row-gap: 15px;
}

.form-row {
  display: flex;
  flex-flow: row;
  gap: 15px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-flow: column;
  }

  &:nth-child(4),
  &:first-child {
    flex-flow: column;
    gap: 0;
  }

  .form-col {
    width: 100%;
  }
}

.select-wrap {
  position: relative;

  select {
    -webkit-appearance: none;
    appearance: none;
    height: 56px;
  }

  &:after {
    border: 1px solid transparent;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.625em;
    margin-top: -0.4375em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: center;
    transform-origin: center;
    width: 0.625em;
    border-color: #352F44;
    right: 1.135em;
    z-index: 4;
  }
}

.form-label {
  display: block;
  margin-bottom: 12px;
  font: 16px/22px 'Poppins', sans-serif;
  color: #352F44;

  .required-symbol {
    color: #D95353;
  }
}

.error-label {
  color: #f4503e;
  font-size: 11px;
  font-weight: 500;
  line-height: 1;
  margin-top: -15px;
  padding-left: 15px;
  padding-bottom: 4px;
}

select,
.textarea,
.input {
  padding: 14px 15px;
  width: 100%;
  font: 16px/22px 'Poppins', sans-serif;
  color: #352F44;
  border: 1px solid #DAD8C4;
  border-radius: 8px;
  background-color: #ffffff;

  &::placeholder {
    color: rgba(53, 47, 68, .6);
  }

  &:focus {
    outline: none;
    border: 1px solid #352F44;
  }
}

select {
  color: rgba(53, 47, 68, .6);
}

.input {
  height: 50px;
}

.textarea {
  max-height: 100px;
  resize: none;
}

.button-wrap {
  position: relative;
}

.button {
  display: flex;
  align-items: center;
  column-gap: 10px;
  font: 500 16px/22px 'Poppins', sans-serif;
  color: #fff;
  min-width: 185px;
  padding: 15px 30px;
  border-radius: 4px;
  background-color: #157275;
  margin-top: 25px;
  cursor: pointer;
  transition: color .25s ease-in, background-color .25s ease-in;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }

  &:hover {
    background-color: #D3F5EC;
    color: #352F44;
  }

  &:active {
    background-color: #352F44;
    color: #D3F5EC;
  }
}

.form-result {
  margin: 10px 0;
  font-size: 14px;
  color: #58585a;
  line-height: 1;
  position: absolute;
  bottom: -35px;

  & .result-icon {
    margin-right: 5px;
  }
}

.submit-icon {
  animation: rotate 1.5s linear infinite;
}

.sendingProcess {
  filter: opacity(.5);
}
</style>
