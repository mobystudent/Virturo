<template>
  <form
    class="form"
    @submit.prevent="submitForm"
  >
    <div class="form-row">
      <label
        for="subject"
        class="form-label"
      >Referral program <span class="required-symbol">*</span></label>
      <div class="select-wrap">
        <select
          id="subject"
          v-model="subject"
          required
        >
          <option value="">
            Select an option
          </option>
          <option value="Affiliate_Partnership">
            Affiliate Partnership
          </option>
          <option value="Client_Referral_Program">
            Client Referral Program
          </option>
          <option value="Introducing_Broker_Program">
            Introducing Broker Program
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
        >Phone number</label>
        <input
          v-model="phone"
          class="input"
          type="phone"
          placeholder="Type phone number"
        >
        <span
          v-if="errors.phone"
          class="error-label"
        >{{ errors.phone }}</span>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Location <span class="required-symbol">*</span></label>
        <input
          v-model="location"
          class="input"
          type="text"
          placeholder="City"
          required
        >
        <span
          v-if="errors.location"
          class="error-label"
        >{{ errors.location }}</span>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group form-group-checkbox">
        <label
          class="label custom-checkbox"
          :class="{ 'unchecked': errors.agree && !agree }"
        >
          <input
            v-model="agree"
            type="checkbox"
            class="checkbox"
          >
          <span class="checkbox-icon" />
          <span class="checkbox-label">By submitting my application I agree that my data is being stored and
            processed.</span>
        </label>
        <span
          v-if="errors.agree && !agree"
          class="error-label"
        >{{ errors.agree }}</span>
      </div>
    </div>

    <div class="form-button-wrap">
      <button
        :class="{ 'sendingProcess': isSendingProcess }"
        class="btn-form"
        type="submit"
      >
        <font-awesome-icon
          v-show="isSendingProcess"
          class="submit-icon"
          icon="fa fa-spinner fa-3x fa-spin"
          aria-hidden="true"
        />
        Apply now
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
      wasSended: false,
      isSendingProcess: false,
      errors: {},
      subject: '',
      location: '',
      agree: false,
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
          errors.phone = 'Phone must contain only numbers';
        }
      }
      // agree checkbox
      if (!this.agree) {
        errors.agree = 'You must agree to the terms and conditions';
      }
      // location
      if (this.location.trim() === '') {
        errors.location = 'Required field';
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
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          subject: this.subject,
          type: 'Partners page',
          phone: this.phone,
          location: this.location,
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
            that.subject = '';
            that.location = '';
            that.phone = '';
            that.isSendingProcess = false;
          }
        };
        http.send(params);
      } catch (err) {
        // UNCOMMENT FOR DEBUG
        // console.log('error', err);
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
  font-family: 'Poppins';
}

.form-row {
  margin-bottom: 16px;
  display: flex;
  flex-flow: row;
  gap: 16px;
  justify-content: space-between;

  &:nth-child(4),
  &:first-child {
    flex-flow: column;
    gap: 0;
  }

  .form-col {
    width: 50%;
  }
}

.form-group-checkbox {
  margin-top: 24px;
  margin-bottom: 16px;
}

.select-wrap {
  position: relative;

  select {
    -webkit-appearance: none;
    appearance: none;
    height: 56px;
  }

  &:after {
    border: 3px solid transparent;
    border-radius: 2px;
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
    border-color: #282929;
    right: 1.135em;
    z-index: 4;
  }
}

.form-label {
  display: block;
  margin-bottom: 12px;
  color: #352F44;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */

  .required-symbol {
    color: #D95353;
  }
}

.checkbox-label {
  color: #352F44;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}

.custom-checkbox.unchecked {
  width: 100%;
}

.form-group-checkbox {
  .error-label {
    padding-left: 0;
  }
}

.error-label {
  color: #D95353;
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
  background-color: #ffffff;
  border: 1px solid #DAD8C4;
  border-radius: 8px;
  margin-bottom: 0;
  padding: 14px 16px;
  width: 100%;
  color: #282929;
  font-size: 16px !important;
  font-family: 'Poppins';
  font-weight: 400;
  line-height: 140%; /* 22.4px */

  &::placeholder {
    color: rgba(40, 41, 41, .6);
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border: 1px solid #9a9aab;
  }
}

select {
  color: #352F44;
}

.input {
  height: 58px;
}

.textarea {
  max-height: 100px;
  line-height: 1.4;
  padding: 10px 12px;
  resize: none;
}

.form-button-wrap {
  display: flex;
  position: relative;
  margin-top: 8px;
}

// .btn-form {
//   margin-top: 8px;
//   display: block;
//   width: fit-content;
//   min-width: 206px;
//   font-weight: 500;
//   font-size: 16px;
//   text-align: center;
//   padding: 16px 32px;
//   background-color: #2BD770;
//   color: #074429;
//   border-radius: 4px;
//   line-height: 1;
//   cursor: pointer;
//   transition: box-shadow 0.5s linear, background-color 0.5s linear;
//   position: relative;

//   &:hover {
//     box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12);
//   }

//   &:active {
//     background-color: #074429;
//     color: #FFF;
//   }
// }

.btn-form {
    font: 500 16px 'Poppins';
    padding: 15px 30px;
    border-radius: 4px;
    color: #0E0523;
    background-color: #E8F2E4;
    transition: color .25s ease-in, background-color .25s ease-in;
  }

  .btn-form {
    display: inline-flex;
    align-items: center;
    column-gap: 5px;
    color: #FFF;
    background-color: #157275;
    transition: .25s box-shadow ease-in;

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
    }

    &:active {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
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
  position: absolute;
  left: 35px;
  animation: rotate 1.5s linear infinite;
}

.sendingProcess {
  filter: opacity(0.5);
}

.custom-checkbox {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
}

.custom-checkbox .checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.custom-checkbox .checkbox-icon {
  position: absolute;
  top: 2px;
  left: 0;
  width: 20px;
  height: 20px;
  border: 1px solid #DAD8C4;
  border-radius: 4px;
  background-color: #fff;
}

.custom-checkbox .checkbox-label {
  padding-left: 30px;
  display: block;
}

.custom-checkbox .checkbox:checked+.checkbox-icon {
  border-color: #48C3A8;
}

.custom-checkbox .checkbox:checked+.checkbox-icon::after {
  content: '';
  width: 20px;
  height: 20px;
  background: url("@/static/img/vacancy/checkbox-checked.svg") no-repeat center center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
}

.custom-checkbox.unchecked .checkbox-icon {
  border-color: #D95353;
}

@media (max-width: 1024px) {
  .form {
    padding-top: 20px;
  }

  .btn-form {
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .form-row {
    flex-flow: column;
  }

  .form-row .form-col {
    width: 100%;
  }
}
</style>
