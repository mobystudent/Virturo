<template>
  <div class="write-transfer-content">
    <ErrorPopUp v-if="isShowErrorPopUp" @close="isShowErrorPopUp = false" />
    <DepositPopUp
      v-if="isShowPopUp"
      title="Your wire transfer request submitted"
      subtitle="We will contact you to set it up"
      @close="isShowPopUp = false"
    />
    <form class="form" @submit.prevent="onSubmit">
      <h2 class="title">Wire Transfer request</h2>
      <div class="form-group-wrapper">
        <div class="form-group">
          <label>Bank Location (Country)</label>
          <div ref="selectWrapper" class="select-country">
            <div class="form-control-container" @click="selectClick" @keydown="selectKeydown">
              <img class="current-flag" :src="require(`~/static/img/flags/${countryCode.toLocaleLowerCase()}.svg`)" />
              <input v-model="countryName" class="form-control" type="text" readonly />
              <ArrowIcon class="arrow-icon" />
            </div>
            <div v-if="isOpen" class="countries-box">
              <div class="dropdown">
                <div class="dropdown-inner">
                  <div v-for="country in countryList" :key="country.isoCode" class="option" @click="handleCountrySelect(country)">
                    <img class="flag" :src="require(`~/static/img/flags/${country.isoCode.toLocaleLowerCase()}.svg`)" />
                    <span class="text"> {{ country.county }} </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Bank name</label>
          <input v-model="bankName" :data-error="!!errors.bankName" class="form-control" type="text" @focus="errors.bankName = ''" />
          <span v-if="errors.bankName" class="error-label">
            {{ errors.bankName }}
          </span>
        </div>
        <div class="form-group">
          <label>Amount</label>
          <input v-model="amount" :data-error="!!errors.amount" class="form-control" type="number" @focus="errors.amount = ''" />
          <span v-if="errors.amount" class="error-label">
            {{ errors.amount }}
          </span>
        </div>
      </div>
      <button class="btn" type="submit">
        <img v-if="isLoading" class="spinner rotating" src="~/static/img/btn-spinner.png" />
        {{ isLoading ? '' : 'Submit Request' }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DepositPopUp from '../popups/DepositPopUp.vue';
import ErrorPopUp from '@/components/common/ErrorPopUp.vue';
import countries from '@/components/common/PhoneNumberInput/countriesData';
import { defaultCountryName } from '@/constants';
import ArrowIcon from '@/static/img/icons/arrow-down.svg?inline';
import { countryCodeKey } from '~/middleware/token';
const defaultCountry = countries.find(item => item.county === defaultCountryName);

export default {
  name: 'WireTransfer',
  components: {
    DepositPopUp,
    ErrorPopUp,
    ArrowIcon,
  },
  data() {
    return {
      errors: {},
      amount: '',
      bankName: '',
      countryList: countries,
      defaultCountry,
      selectedCountry: '',
      countryName: '',
      countryCode: 'GB',
      isLoading: false,
      isOpen: false,
      isShowPopUp: false,
      isShowErrorPopUp: false,
    };
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  watch: {
    defaultCountry(value) {
      this.selectedCountry = value;
    },
    selectedCountry(value) {
      this.$emit('updateCountry', value);
    },
  },
  mounted() {
    const cCode = localStorage.getItem(countryCodeKey);
    if (cCode && countries.find(item => item.isoCode === cCode)) {
      const country = countries.find(item => item.isoCode === cCode);
      this.defaultCountry = country;
      this.countryName = country.county;
    } else {
      this.$http
        .get('/api/get-ip')
        .then(async res => {
          const data = await res.json();
          if (data?.countryCode) {
            const country = countries.find(item => item.isoCode === data.countryCode);
            this.countryCode = data.countryCode;
            this.defaultCountry = country;
            this.countryName = country.county;
          }
        })
        .catch(err => {
          // console.log(err)
        });
    }
  },
  methods: {
    selectKeydown(e) {
      if (e.keyCode === 32) {
        e.preventDefault();
        this.selectClick();
      }
    },
    selectClick() {
      if (this.isOpen) {
        this.isOpen = false;
        document.body.removeEventListener('click', this.clickOutsideEvent);
      } else {
        this.isOpen = true;
        document.body.addEventListener('click', this.clickOutsideEvent);
      }
    },
    clickOutsideEvent(e) {
      const el = this.$refs.selectWrapper;
      if (el && el.contains && !(el === e.target || el.contains(e.target))) {
        this.isOpen = false;
        document.body.removeEventListener('click', this.clickOutsideEvent);
      }
    },
    handleCountrySelect(country) {
      this.selectedCountry = country;
      this.countryName = country.county;
      this.countryCode = country.isoCode;
      this.isOpen = false;
    },
    validateForm() {
      this.errors = {};

      if (!this.amount) {
        this.errors.amount = 'Field is required';
      } else if (this.amount === '0') {
        this.errors.amount = 'This value must be greater than or equal to 1';
      }
      if (!this.bankName) {
        this.errors.bankName = 'Field is required';
      }
    },
    async onSubmit() {
      if (this.isLoading) return;
      this.validateForm();

      this.isLoading = true;
      const isValid = Object.values(this.errors).every(item => Boolean(item) === false);
      if (isValid) {
        const body = {
          amount: this.amount,
          bank_name: this.bankName,
          bank_location: this.countryCode,
        };

        await this.$http
          .post('/api/deposit/wire-transfer', body)
          .then(() => {
            this.isLoading = false;
            this.isShowPopUp = true;
          })
          .catch(err => {
            if (err.response) {
              this.isShowErrorPopUp = true;
            }
          });
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.write-transfer-content {
  padding-top: 24px;
  position: relative;
}

.form {
  max-width: 653px;
}

.title {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;
}

.form-group-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.form-group {
  width: calc(50% - 8px);
  padding-top: 16px;

  label {
    display: inline-block;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    color: $dark-grey;
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
  padding: 8px 12px;
  color: $dark-grey;
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

  &[data-error='true'] {
    border: 1px solid $bright-red;
    outline-color: transparent;

    &:hover {
      border-color: $bright-red;
    }
  }
}

.select-country {
  position: relative;
}

.form-control-container {
  .form-control {
    position: relative;
    background-color: transparent;
    padding: 10px 25px 10px 45px;
    z-index: 1;
    cursor: pointer;
  }

  .current-flag {
    position: absolute;
    left: 11px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 18px;
    border-radius: 2px;
    object-fit: cover;
  }

  .arrow-icon {
    position: absolute;
    right: 11px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.countries-box {
  position: absolute;
  top: 50px;
  width: 100%;
  border-radius: 6px;
  background-color: $common-white;
  border: 1px solid $common-green-transparent;
  outline: 2px solid $pallete-green-hover;
  z-index: 1;
}

.dropdown {
  max-height: 195px;
  padding: 4px 2px 2px 5px;
  overflow: hidden;
}

.dropdown-inner {
  overflow-y: scroll;
  max-height: 189px;
  padding-right: 2px;
}

.dropdown-inner::-webkit-scrollbar {
  width: 2px;
  right: 0;
}

.dropdown-inner::-webkit-scrollbar-track {
  background-color: $common-white;
}

.dropdown-inner::-webkit-scrollbar-thumb {
  background-color: $light-grey;
  border-radius: 10px;
}

.option {
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px 2px 2px 6px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: $light-mint;
  }

  .flag {
    width: 24px;
    height: 18px;
    border-radius: 2px;
    object-fit: cover;
  }

  .text {
    color: $dark-grey;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    padding-left: 10px;
  }
}

.error-label {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: $bright-red;
}

.btn {
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
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: $common-white;
    border-color: $common-green-transparent;
  }
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
  .form {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .form-group-wrapper {
    flex-direction: column;
  }

  .form-group {
    width: 100%;
  }

  .btn {
    width: 100%;
    margin-top: 24px;
  }
}
</style>
