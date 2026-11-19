<template>
  <form
    class="form"
    @submit.prevent="submitForm"
  >
    <div class="row">
      <div class="col">
        <h3>Application</h3>
        <div class="caption">
          For further information, please fill in the form below. We will contact you as soon as possible.
        </div>
      </div>
      <div class="col">
        <div class="form-row">
          <div class="form-group">
            <label class="label">First Name <span class="required-symbol">*</span></label>
            <input
              v-model="formData.firstName"
              class="input"
              type="text"
              placeholder="Type first name"
              @change="validateFirstName"
            >
            <span
              v-if="errorsMessage.firstName"
              class="error-label"
            >{{ errorsMessage.firstName }}</span>
          </div>

          <div class="form-group">
            <label class="label">Last Name <span class="required-symbol">*</span></label>
            <input
              v-model="formData.lastName"
              class="input"
              type="text"
              placeholder="Type last name"
              @change="validateLastName"
            >
            <span
              v-if="errorsMessage.lastName"
              class="error-label"
            >{{ errorsMessage.lastName }}</span>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="label">Email Address <span class="required-symbol">*</span></label>
            <input
              v-model="formData.email"
              class="input"
              type="text"
              placeholder="Type email address"
              @change="validateEmail"
            >
            <span
              v-if="errorsMessage.email"
              class="error-label"
            >{{ errorsMessage.email }}</span>
          </div>

          <div class="form-group">
            <label class="label">Phone number</label>
            <input
              v-model="formData.phone"
              class="input"
              type="tel"
              placeholder="Type phone number"
              @change="validatePhone"
            >
            <span
              v-if="errorsMessage.phone"
              class="error-label"
            >{{ errorsMessage.phone }}</span>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group form-group-full">
            <label class="label">Location <span class="required-symbol">*</span></label>
            <input
              v-model="formData.location"
              class="input"
              type="text"
              placeholder="City"
              @change="validateLocation"
            >
            <span
              v-if="errorsMessage.location"
              class="error-label"
            >{{ errorsMessage.location }}</span>
          </div>
        </div>

        <div class="form-row form-row-upload">
          <div class="form-group-last form-group-upload">
            <span class="label">Resume/CV <span class="required-symbol">*</span></span>
            <label
              class="uploadBtn"
              for="uploadResumeInput"
            >
              Attach
              <input
                id="uploadResumeInput"
                ref="resumeFile"
                type="file"
                aria-label="Attach"
                accept=".txt,.rtf,.doc,.docx,.pdf"
                @change="onChangeResumeFile"
              ></label>
            <span
              v-if="formData.resumeFile"
              class="attached_file"
            >
              {{ formData.resumeFile }} <span @click="handleClearResumeFile">x</span>
            </span>
            <span
              v-if="errorsMessage.resumeFile"
              class="error-label"
            >{{ errorsMessage.resumeFile }}</span>

            <p class="file-message">
              File types: pdf, doc, docx, txt, rtf<br>File size: max 4MB
            </p>
          </div>

          <div class="form-group form-group-upload">
            <label class="label">Cover Letter</label>
            <label
              class="uploadBtn"
              for="uploadCoverLetterInput"
            >
              Attach
              <input
                id="uploadCoverLetterInput"
                ref="coverLetterFile"
                type="file"
                aria-label="Attach"
                accept=".txt,.rtf,.doc,.docx,.pdf"
                @change="onChangeCoverLetterFile"
              >
            </label>

            <span
              v-if="formData.coverLetterFile"
              class="attached_file"
            >
              {{ formData.coverLetterFile }} <span @click="handleClearCoverLetterFile">x</span>
            </span>

            <span
              v-if="errorsMessage.coverLetterFile"
              class="error-label"
            >{{ errorsMessage.coverLetterFile }}</span>

            <p class="file-message">
              File types: pdf, doc, docx, txt, rtf<br>File size: max 4MB
            </p>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group form-group-checkbox">
            <label
              class="label custom-checkbox"
              :class="{ 'unchecked': errorsMessage.agree }"
            >
              <input
                v-model="formData.agree"
                type="checkbox"
                class="checkbox"
                @change="validateAgree"
              >
              <span class="checkbox-icon" />
              <span class="checkbox-label">By submitting my application I agree that my data is being stored and
                processed.</span>
            </label>

            <span
              v-if="errorsMessage.agree"
              class="error-label"
            >{{ errorsMessage.agree }}</span>
          </div>
        </div>
        <div class="button-wrap">
          <button
            :class="{ 'sendingProcess': isLoading }"
            class="btn-form"
            type="submit"
          >
            <font-awesome-icon
              v-show="isLoading"
              class="submit-icon"
              icon="fa fa-spinner fa-3x fa-spin"
              aria-hidden="true"
            />
            Apply now
          </button>

          <span
            v-if="isError"
            class="error-message"
          >{{ requestMessage.failed }}</span>

          <span
            v-show="isSuccess"
            class="form-result"
          ><font-awesome-icon
            class="result-icon"
            icon="fa fa-check"
          />{{
            requestMessage.success }}</span>
        </div>
      </div>
    </div>
  </form>
</template>

<script>

const ERROR_MESSAGE = {
  firstName: {
    require: 'First name is required field',
  },
  lastName: {
    require: 'Last name is required field',
  },
  email: {
    require: 'Email is required field',
    email: 'Email is incorrect',
  },
  phone: {
    phone: 'Phone is incorrect',
  },
  location: {
    require: 'Location is required field',
  },
  agree: {
    check: 'You must agree to the terms.',
  },
  resumeFile: {
    attach: 'Please attach file',
    size: 'File size: max 4MB',
    format: 'File format is incorrect',
  },
  coverLetterFile: {
    size: 'File size: max 4MB',
    format: 'File format is incorrect',
  },
};

const getInitialFormData = () => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  agree: false,
  resumeFile: '',
  coverLetterFile: '',
});
const getInitialErrors = () => ({
  firstName: {},
  lastName: {},
  email: {},
  phone: {},
  location: {},
  agree: {},
  resumeFile: {},
  coverLetterFile: {},
});

const getInitialErrorsMessage = () => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  location: '',
  agree: '',
  resumeFile: '',
  coverLetterFile: '',
});

export default {
  name: 'ApplyForm',

  data() {
    return {
      formData: getInitialFormData(),
      errors: getInitialErrors(),
      errorsMessage: getInitialErrorsMessage(),
      isLoading: false,
      isSuccess: false,
      isError: false,
      requestMessage: {
        success: 'The form was sent successfully.',
        failed: 'Something went wrong.',
      },
    };
  },
  computed: {
  },
  methods: {
    setRequiredTextError(fieldName) {
      const require = this.formData[fieldName].trim() === '';

      this.errors[fieldName] = {
        ...this.errors[fieldName],
        require,
      };

      this.errorsMessage[fieldName] = require ? ERROR_MESSAGE[fieldName]?.require : '';

      return require;
    },

    setEmailParseError(fieldName) {
      // eslint-disable-next-line no-useless-escape
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const email = !emailRegex.test(this.formData[fieldName]);

      this.errors[fieldName] = {
        ...this.errors[fieldName],
        email,
      };

      this.errorsMessage[fieldName] = email ? ERROR_MESSAGE[fieldName]?.email : '';

      return email;
    },

    setPhoneParseError(fieldName) {
      const phoneValue = this.formData[fieldName].trim();
      let phone = false;

      if (phoneValue !== '') {
        const phoneRegex = /^\d{7,15}$/;
        phone = !phoneRegex.test(phoneValue.replace(/\D/g, ''));
      }
      this.errors[fieldName] = {
        ...this.errors[fieldName],
        phone,
      };

      this.errorsMessage[fieldName] = phone ? ERROR_MESSAGE[fieldName]?.phone : '';

      return phone;
    },

    setCheckedError(fieldName) {
      const check = !this.formData[fieldName];

      this.errors[fieldName] = {
        ...this.errors[fieldName],
        check,
      };

      this.errorsMessage[fieldName] = check ? ERROR_MESSAGE[fieldName]?.check : '';

      return check;
    },

    setFileAttachError(refName) {
      const attach = !this.$refs[refName]?.files[0];

      this.errors[refName] = {
        ...this.errors[refName],
        attach,
      };

      this.errorsMessage[refName] = attach ? ERROR_MESSAGE[refName]?.attach : '';

      return attach;
    },

    setFileSizeError(refName, maxSize = 4 * 1024 * 1024) {
      const file = this.$refs[refName]?.files[0];
      const size = file && file.size > maxSize;

      this.errors[refName] = {
        ...this.errors[refName],
        size,
      };

      this.errorsMessage[refName] = size ? ERROR_MESSAGE[refName]?.size : '';

      return size;
    },

    setFileFormatError(refName) {
      const file = this.$refs[refName]?.files[0];
      const allowedFormats = ['.txt', '.rtf', '.doc', '.docx', '.pdf'];
      const fileExtension = file ? file.name.substring(file.name.lastIndexOf('.')) : '';

      const formatError = file && !allowedFormats.includes(fileExtension.toLowerCase());

      this.errors[refName] = {
        ...this.errors[refName],
        format: formatError,
      };

      this.errorsMessage[refName] = formatError ? 'File format is incorrect' : '';

      return formatError;
    },

    validateFirstName() {
      return this.setRequiredTextError('firstName');
    },

    validateLastName() {
      return this.setRequiredTextError('lastName');
    },

    validateEmail() {
      return this.setRequiredTextError('email') || this.setEmailParseError('email');
    },

    validatePhone() {
      return this.setPhoneParseError('phone');
    },

    validateLocation() {
      return this.setRequiredTextError('location');
    },

    validateResumeFile() {
      return this.setFileAttachError('resumeFile')
        || this.setFileSizeError('resumeFile')
        || this.setFileFormatError('resumeFile');
    },

    validateCoverLetterFile() {
      return this.setFileSizeError('coverLetterFile') || this.setFileFormatError('coverLetterFile');
    },

    validateAgree() {
      return this.setCheckedError('agree');
    },

    validateAll() {
      const errors = [
        this.validateFirstName(),
        this.validateLastName(),
        this.validatePhone(),
        this.validateEmail(),
        this.validateLocation(),
        this.validateResumeFile(),
        this.validateCoverLetterFile(),
        this.validateAgree(),
      ];

      return errors.some((e) => !!e);
    },

    onChangeResumeFile() {
      const hasError = this.validateResumeFile();
      if (!hasError) {
        this.formData.resumeFile = this.$refs.resumeFile?.files[0]?.name;
      }
    },

    onChangeCoverLetterFile() {
      const hasError = this.validateCoverLetterFile();
      if (!hasError) {
        this.formData.coverLetterFile = this.$refs.coverLetterFile?.files[0]?.name;
      }
    },

    handleClearResumeFile() {
      this.$refs.resumeFile.value = '';
      this.formData.resumeFile = '';
      this.validateResumeFile();
    },

    handleClearCoverLetterFile() {
      this.$refs.coverLetterFile.value = '';
      this.formData.coverLetterFile = '';
      this.validateCoverLetterFile();
    },

    submitForm() {
      const hasError = this.validateAll();

      if (hasError || this.isLoading) {
        return;
      }

      this.isLoading = true;

      const formData = new FormData();
      formData.append('first_name', this.formData.firstName);
      formData.append('last_name', this.formData.lastName);
      formData.append('email', this.formData.email);
      if (this.formData.phone !== '') {
        formData.append('phone', this.formData.phone);
      }

      formData.append('location', this.formData.location);
      formData.append('file', this.$refs.resumeFile.files[0]);
      const coverLetterFile = this.$refs.coverLetterFile.files[0];
      if (coverLetterFile) {
        const isValidCoverLetter = !this.setFileAttachError('coverLetterFile') && !this.setFileSizeError('coverLetterFile') && !this.setFileFormatError('coverLetterFile');
        if (isValidCoverLetter) {
          formData.append('cover_letter', coverLetterFile);
        }
      }

      try {
        const http = new XMLHttpRequest();
        const url = `${process.env.NUXT_ENV_API_URL}/api/resume`;

        http.open('POST', url, true);

        http.onreadystatechange = () => {
          if (http.readyState === 4 && http.status === 201) {
            //
            this.formData = getInitialFormData();
            this.errors = getInitialErrors();
            this.errorsMessage = getInitialErrorsMessage();

            this.$refs.resumeFile.value = '';
            this.$refs.coverLetterFile.value = '';

            this.isError = false;
            this.isSuccess = true;

            this.isLoading = false;
          }
        };
        http.send(formData);
      } catch (err) {
        this.isError = true;
        this.isSuccess = false;

        this.isLoading = false;
      }
    },
  },
};

</script>

<style lang="scss" scoped>
.form {
  h3 {
    margin-bottom: 32px;
    color: #352F44;
    font-size: 52px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    @media (max-width: 992px) {
      font-size: 38px;
    }

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 140%; /* 30.8px */
    }
  }

  .caption {
    color: #352F44;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    @media (max-width: 768px) {
      font-size: 15px;
      line-height: 150%; /* 22.5px */
    }
  }

  .form-group {
    margin-bottom: 16px;
    position: relative;
  }

  .form-group-last {
    margin-bottom: 16px;
    width: 50%;
    position: relative;
  }

  .form-group-last.form-group-upload,
  .form-group.form-group-upload {
    margin-bottom: 32px;
    @media (max-width: 768px)  {
      margin-bottom: 16px;
      width: 100%;
    }

    .error-label {
      bottom: auto;
    }
  }

  .form-row-upload {
    @media (max-width: 768px)  {
      margin-bottom: 24px;
    }
  }

  .form-group.form-group-checkbox {
    width: 100%;
    .error-label {
      bottom: -2px;
    }

    .label {
      @media (max-width: 768px) {
        font-size: 15px;
        line-height: 150%; /* 22.5px */
      }
    }
  }

  .label {
    display: block;
    margin-bottom: 12px;
    font-weight: 400;
    font-family: 'Poppins';
    font-size: 16px;
    color: #352F44;
    line-height: 140%; /* 22.4px */
  }

  .input {
    background-color: #ffffff;
    border: 1px solid #DAD8C4;
    border-radius: 8px;
    margin-bottom: 0;
    padding: 14px 16px;
    width: 100%;
    color: #352F44;
    font-size: 16px !important;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 140%; /* 22.4px */

    &::placeholder {
      color: rgba(53, 47, 68, .6);
      opacity: 0.6;
    }

    &:focus {
      outline: none;
      border: 1px solid #9a9aab;
    }
  }

  .file-message {
    margin-top: 12px;
    display: block;
    color: #352F44;
    font-size: 12px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 146%; /* 17.52px */
  }

  .button-wrap {
    display: flex;
    justify-content: center;
    flex-flow: column;
    @media (max-width: 768px) {
      align-items: center;
    }
  }

  .required-symbol {
    color: #D95353;
  }

  .divider {
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }

  .btn-form {
    margin-top: 8px;
    display: flex;
    width: 206px;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    border: 1px solid #157275;
    background-color: #157275;
    border-radius: 4px;
    color: #074429;
    color: #FFF;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    cursor: pointer;
    transition: box-shadow 0.5s linear, background-color 0.5s linear;
    position: relative;

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
    }

    &:active {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
    }

    @media (max-width: 768px) {
      margin-top: 12px;
    }
  }

  #uploadCoverLetterInput,
  #uploadResumeInput {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  .uploadBtn {
    cursor: pointer;
    display: flex;
    width: 120px;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    background: #FFF;
    border: 1px solid #DAD8C4;
    border-radius: 4px;
    margin-top: 12px;
    color: #352F44;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    transition: background-color 0.5s linear;

    &:hover {
      background-color: #074429;
      border-color: #074429;
      color: #FFF;
    }

    &:active {
      background-color: #074429;
      border-color: #074429;
      color: #FFF;
    }
  }
}

.error-label {
  display: block;
  color: #f4503e;
  font-size: 11px;
  font-family: 'Poppins';
  font-weight: 500;
  line-height: 1;
  position: absolute;
  bottom: -15px;
}

.attached_file {
  font-size: 12px;
}

.attached_file span {
  padding-left: 12px;
  cursor: pointer;
}

.form-result {
  padding-top: 5px;
  font-size: 12px;
  color: #48C3A8;

  svg {
    margin-right: 3px;
  }
}

.success-message {
  font-size: 12px;
  color: #48C3A8;
}

.error-message {
  font-size: 12px;
  color: #ee4035;
}

.form-row {
  display: flex;
  flex-flow: row;
  gap: 16px;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-bottom: 0;
    flex-flow: column;
    gap: 0;
  }

  &:nth-child(6) {
    flex-flow: column;
    gap: 0;

    .form-group {
      width: 100%;
    }
  }

  .form-group {
    width: 50%;

    &.form-group-full {
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
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
  border-color: #FF3333;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  @media (max-width: 998px) {
    flex-flow: column;
  }

  @media (max-width: 768px) {
    gap: 40px;
  }

  .col:nth-child(1) {
    max-width: 416px;
    @media (max-width: 768px) {
      max-width: none;
    }
  }

  .col:nth-child(2) {
    max-width: 735px;
    width: 100%;
    @media (max-width: 992px) {
      max-width: none;
    }
  }
}
</style>
