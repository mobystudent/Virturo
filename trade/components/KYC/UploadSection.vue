<template>
  <section class="upload-block">
    <ErrorPopUp v-if="isShowPopUp" @close="isShowPopUp = false" />
    <div v-if="kyc === KYC_NO" class="option-container">
      <div class="option-buttons">
        <button
          v-for="(button, index) in optionButtons"
          :key="index"
          :class="{ active: index === activeButton }"
          :disabled="!isShowUploadFile"
          @click="toggleActiveButton(index)"
        >
          {{ button }}
        </button>
      </div>
      <ul class="text-wrapper">
        <li v-for="(item, index) in textItems[activeButton]" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div v-else>
      <p class="text-title">Upload Bank statement or utility bill such as: electricity, water, phone.</p>
      <ul class="text-wrapper">
        <li>must include your full name and address and should not be older than 3 months.</li>
      </ul>
    </div>

    <form class="drop-area-form">
      <div
        class="drop-area"
        :class="{ 'stop-uploading': !isShowUploadFile }"
        @dragover="dragover"
        @dragleave="dragleave"
        @drop="drop"
        @click="openFilePicker"
      >
        <img :src="getImage(kyc, activeButton)" />
        <div class="drop-area-info">
          <p v-if="isMobile" class="title">Tap to choose file</p>
          <p v-else class="title">Drag & drop or click to choose file</p>
          <span class="subtitle">JPG, PNG or PDF format, Max size 1Mb</span>
        </div>
      </div>
      <div class="upload-preview">
        <ul>
          <li v-for="(file, index) in files" :key="index" :class="{ 'progress-bar': !isShowUploadFile }">
            <div v-if="isShowUploadFile" class="upload-file-content">
              <span>{{ file.file.name }}</span>
              <button type="button" title="Remove file" @click="removeFile(files.indexOf(file))">
                <TrashIcon />
              </button>
            </div>
            <div v-else class="progress-bar-content">
              <div class="progress-bar-info">
                <span class="uploading">Uploading</span>
                <span class="percent">{{ uploadPercentageAfter[index] || 0 }}%</span>
                <button class="stop-upload" type="button">
                  <CloseIcon />
                </button>
              </div>
              <div class="progress-bar-process">
                <div class="progress-bar" role="progressbar" :style="`width: ${uploadPercentageAfter[index] || 0}%`"></div>
              </div>
            </div>
          </li>
        </ul>
        <span v-if="isShowError" class="error">You have only uploaded one file. Please upload one more file to continue.</span>
      </div>
      <button class="continue-btn click-effect" :class="{ active: isShowContinueBtn }" type="button" @click="submitFile()">Continue</button>
    </form>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import ErrorPopUp from '@/components/common/ErrorPopUp.vue';
import { API_URL, KYC_NO, KYC_VERIFICATION, KYC_PARTIAL } from '@/constants';
import TrashIcon from '@/static/img/icons/trash.svg?inline';
import CloseIcon from '@/static/img/icons/close.svg?inline';

const MOBILE_BREAKPOINT = 767;
export default {
  name: 'UploadSection',
  components: {
    ErrorPopUp,
    TrashIcon,
    CloseIcon,
  },
  data() {
    return {
      KYC_NO,
      KYC_VERIFICATION,
      KYC_PARTIAL,
      isShowPopUp: false,
      link: `${API_URL}/api/users/send-file-to-hubspot`,
      activeButton: 0,
      optionButtons: ['Passport', 'Driving License'],
      textItems: [
        ['a valid colour copy of passport with both open pages visible', 'all 4 corners of the document must be visible'],
        ['a valid color copy of driving with both open pages visible ', 'all 4 corners of the document must be visible'],
      ],
      files: [],
      allowedExtensions: ['png', 'jpg', 'jpeg', 'doc', 'pdf'],
      sizeLimit: 1000000,
      isFilesUpload: false,
      isShowUploadFile: true,
      uploadPercentage: [],
      uploadPercentageAfter: [],
      isDragging: false,
      isShowContinueBtn: false,
      isShowError: false,
      title: '',
      description: '',
      isMobile: false,
    };
  },
  computed: {
    ...mapGetters({
      token: 'token',
      kyc: 'user/kyc',
    }),
  },
  mounted() {
    this.checkViewport();
    window.addEventListener('resize', this.checkViewport);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkViewport);
  },
  methods: {
    openFilePicker() {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.png, .jpg, .jpeg, .doc, .pdf';

      fileInput.addEventListener('change', event => {
        const files = event.target.files;
        if (files.length > 0) {
          this.validateFile(files);
        }
      });

      fileInput.click();
    },
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave(e) {
      e.preventDefault();
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      const files = e.dataTransfer.files;
      if (files.length > 0) {
        this.validateFile(files);
      }

      this.isDragging = false;
    },
    uploadFile() {
      this.isShowError = false;

      const files = this.$refs.file.files;
      if (files.length > 0) {
        this.validateFile(files);
      }
    },
    removeFile(file) {
      this.files.splice(file, 1);
      this.showContinueButton();
      this.isShowError = false;
    },
    validateFile(files) {
      const arrFiles = [];
      for (const key in files) {
        if (key < files.length) {
          const { name: fileName, size: fileSize } = files[key];
          const fileExtension = fileName.split('.').pop();
          if (!this.allowedExtensions.includes(fileExtension)) {
            this.value = null;
            this.title = 'File format is not supported';
            this.description = 'Supported file formats: PNG, JPG, JPEG, DOC, PDF';
            this.isShowPopUp = true;
          } else if (fileSize > this.sizeLimit) {
            this.value = null;
            this.title = 'File too large';
            this.description = 'Maximum file size to upload is 1Mb';
            this.isShowPopUp = true;
          } else {
            arrFiles.push({ file: files[key] });
          }
        }
      }

      this.files = [...this.files, ...arrFiles];
      this.showContinueButton();
    },
    showContinueButton() {
      this.isShowContinueBtn = this.files.length > 0;
    },
    submitFile() {
      if (this.kyc !== KYC_NO && this.files.length < 1) {
        this.isShowError = true;
        return;
      }
      this.isShowUploadFile = false;
      this.isShowContinueBtn = false;
      const total = this.files.length;

      for (let i = 0; i < total; i++) {
        const formData = new FormData();
        formData.append('kyc_file', this.files[i].file);
        if (this.kyc === KYC_NO) {
          formData.append('type_doc', this.optionButtons[this.activeButton]);
        }
        this.sendFormData(formData, i, total);
      }
    },
    sendFormData(formData, index, total) {
      const that = this;
      const xhr = new XMLHttpRequest();

      xhr.open('POST', that.link);
      xhr.setRequestHeader('Authorization', `Bearer ${that.token}`);

      xhr.upload.onprogress = ({ loaded, total }) => {
        const percentCompleted = (loaded / total) * 100;
        that.uploadPercentage[index] = Math.round(percentCompleted);
        that.uploadPercentageAfter = Object.values(that.uploadPercentage);
      };

      xhr.onload = function () {
        if (xhr.status !== 200) {
          // console.log(`Error ${xhr.status}: ${xhr.statusText}`);
        } else if (total === index + 1) {
          if (that.kyc === KYC_NO) {
            that.$store.dispatch('user/setKyc', KYC_PARTIAL);
          } else {
            that.$store.dispatch('user/setKyc', KYC_VERIFICATION);
          }
          that.isShowUploadFile = true;
          that.emptyList();
        }
      };
      xhr.send(formData);
    },
    emptyList() {
      const list = document.querySelector('.upload-preview ul');
      const listItems = list.querySelectorAll('li');

      if (listItems) {
        for (let i = 0; i < listItems.length; i++) {
          list.removeChild(listItems[i]);
        }
      }
      this.files = [];
    },
    toggleActiveButton(i) {
      this.activeButton = i;
    },
    getImage(kyc, activeButton) {
      return kyc === KYC_PARTIAL
        ? require('~/static/img/file-upload.png')
        : activeButton === 0
        ? require('~/static/img/file-upload-passport.png')
        : activeButton === 1
        ? require('~/static/img/file-upload-driving-license.png')
        : '';
    },
    checkViewport() {
      this.isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    },
  },
};
</script>

<style lang="scss" scoped>
.option-container {
  padding-top: 6px;
}
.option-buttons {
  display: flex;
  align-items: center;
  border-radius: 6px;
  background-color: $light-gray;
  padding: 2px 3px;

  button {
    color: $dark-grey;
    background-color: $light-gray;
    flex-basis: 50%;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 4px;
    padding: 3px 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background-color: $common-white;
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.12);
    }

    &:disabled {
      cursor: default;
    }
  }
}

.text-title {
  color: $black;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;

  & + .text-wrapper {
    margin: 16px 0 24px;
  }
}

.text-wrapper {
  margin: 24px 0 20px;
  list-style: none;

  li {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
    color: $black;

    &:before {
      content: '*';
      position: relative;
      top: 3px;
      color: $red;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.4;
      padding-right: 4px;
    }

    & + li {
      margin-top: 8px;
    }
  }
}

.drop-area-form > div {
  position: relative;
  z-index: 10;
}

.drop-area {
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: 1px dashed $dark-grey;
  background-color: $light-gray;
  text-align: center;
  padding: 50px 30px;
  cursor: pointer;

  &.stop-uploading {
    user-select: none;
    pointer-events: none;
    cursor: default;
  }

  img {
    width: 110px;
    height: 140px;
  }

  input[type='file'] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    position: absolute;
    z-index: -10;
  }
}

.drop-area-info {
  padding-left: 46px;
  text-align: left;
}

.title {
  color: $dark-grey;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  padding-bottom: 8px;
}

.subtitle {
  color: $grey-52-color;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
}

.upload-btn {
  display: inline-flex;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.21;
  color: $light-grey;
  border-radius: 8px;
  padding: 12px 24px;
  background-color: $pallete-green;
  margin-top: 24px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: $pallete-green-hover;
  }
}

.upload-preview {
  padding-top: 16px;

  ul {
    list-style: none;

    li {
      border-radius: 8px;
      border: 1px solid $light-khaki;
      background-color: $light-gray;
      padding: 9px 25px;

      & + li {
        margin-top: 16px;
      }

      &.progress-bar {
        padding: 8px 12px 12px;
        display: flex;
        flex-direction: column;
      }

      span {
        font-size: 15px;
        font-weight: 400;
        line-height: 1.5;
        color: $dark-grey;
        word-break: break-all;
      }

      button {
        background-color: transparent;
        outline: none;
        cursor: pointer;
        margin-left: 5px;
      }
    }
  }
}

.progress-bar {
  height: 100%;
  border-radius: 10px;
  background-color: $common-green-transparent;
  overflow: hidden;
}

.upload-file-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.progress-bar-content {
  width: 100%;
  position: relative;
}

.percent {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: $common-white;
  transition: all 1.6s ease;
}

.uploading {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: $common-white;
  transition: all 1.6s ease;
  margin-right: 12px;
}

.stop-upload {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  outline: none;
  cursor: pointer;
}

.progress-bar-process {
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 12px;
  overflow: hidden;
}

.continue-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 206px;
  height: 44px;
  margin-top: 16px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;
  border-radius: 6px;
  padding: 10px;
  background-color: $common-green-transparent;
  border: 1px solid transparent;
  margin-left: auto;
  cursor: pointer;

  &.active {
    display: flex;
  }

  &:hover {
    background-color: $common-white;
    border-color: $common-green-transparent;
  }
}

.error {
  color: $bright-red;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
}

@media (max-width: 480px) {
  .text-wrapper {
    margin: 16px 0;
  }

  .continue-btn {
    width: 100%;
  }

  .drop-area {
    flex-direction: column;
    padding: 24px 50px;
  }

  .drop-area-info {
    padding-left: 0;
    padding-top: 24px;
    text-align: center;
  }

  .upload-preview {
    padding-top: 12px;

    ul {
      li {
        & + li {
          margin-top: 12px;
        }
      }
    }
  }

  .option-container {
    padding-top: 7px;
  }
}
</style>
