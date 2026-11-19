<template>
  <section class="enter-amount-section">
    <ErrorPopUp v-if="isShowErrorPopUp" @close="isShowErrorPopUp = false" />
    <BankAmountSubmittedPopUp
      v-if="isShowPopUp"
      :amount="amount"
      :bank-name="bankName"
      :account-holder="accountHolder"
      :is-show-submitted="isShowSubmitted"
      :is-loading="isLoading"
      @close="reloadPage"
      @confirm="onSubmit"
    />
    <form class="form">
      <div class="section">
        <h2 class="title">Enter Amount</h2>
        <div class="form-group-wrapper">
          <div class="container">
            <label>Amount</label>
            <div class="row-amount">
              <div class="form-group">
                <input
                  v-model="amount"
                  :data-error="!!errors.amount"
                  class="form-control"
                  type="text"
                  @focus="errors.amount = ''"
                  @input="handleInput"
                  @change="handleChange"
                />
                <span v-if="errors.amount" class="error-label">
                  {{ errors.amount }}
                </span>
              </div>
              <p class="balance">
                Available funds:<span @click="selectBalance">
                  {{ converted }} {{ selectedCoin.short_code || '' }} &#8776; {{ currencyMapper[currency] || '' }}{{ availableBalance }}
                </span>
              </p>
            </div>
          </div>
          <div class="form-group">
            <label>Beneficiary name</label>
            <div class="form-control-container">
              <input
                v-model="accountHolder"
                :data-error="!!errors.accountHolder"
                class="form-control"
                type="text"
                @focus="errors.accountHolder = ''"
              />
              <span v-if="errors.accountHolder" class="error-label">
                {{ errors.accountHolder }}
              </span>
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
            <label>IBAN / Account Number</label>
            <div class="form-control-container" :data-error="!!errors.iban">
              <input
                v-model="iban"
                :data-error="!!errors.iban"
                class="form-control"
                type="text"
                @focus="errors.iban = ''"
                @input="handleInputIban"
              />
              <span v-if="errors.iban" class="error-label">
                {{ errors.iban }}
              </span>
              <div class="icon-info">
                <Tooltip :text="tooltipText">
                  <InfoIcon />
                </Tooltip>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Sort Code / BSB</label>
            <div class="form-control-container" :data-error="!!errors.sortCodeBSB">
              <input
                v-model="sortCodeBSB"
                :data-error="!!errors.sortCodeBSB"
                class="form-control"
                type="text"
                @focus="errors.sortCodeBSB = ''"
              />
              <span v-if="errors.sortCodeBSB" class="error-label">
                {{ errors.sortCodeBSB }}
              </span>
              <div class="icon-info">
                <Tooltip :text="tooltipTextSortCode">
                  <InfoIcon />
                </Tooltip>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Country</label>
            <div ref="selectWrapper" class="select-country">
              <div class="form-control-container" @click="selectClick" @keydown="selectKeydown">
                <img class="current-flag" :src="require(`~/static/img/flags/${countryCode.toLocaleLowerCase()}.svg`)" />
                <input v-model="country" class="form-control" type="text" readonly />
                <ArrowIcon class="arrow-icon" />
              </div>
              <div v-if="isOpen" class="countries-box">
                <div class="dropdown">
                  <div class="dropdown-inner">
                    <div v-for="c in countryList" :key="c.isoCode" class="option" @click="handleCountrySelect(c)">
                      <img class="flag" :src="require(`~/static/img/flags/${c.isoCode.toLocaleLowerCase()}.svg`)" />
                      <span class="text"> {{ c.county }} </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Address</label>
            <input v-model="address" :data-error="!!errors.address" class="form-control" type="text" @focus="errors.address = ''" />
            <span v-if="errors.address" class="error-label">
              {{ errors.address }}
            </span>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>City</label>
              <input v-model="city" :data-error="!!errors.city" class="form-control" type="text" @focus="errors.city = ''" />
              <span v-if="errors.city" class="error-label">
                {{ errors.city }}
              </span>
            </div>
            <div class="form-group">
              <label>Post Code</label>
              <input v-model="postCode" :data-error="!!errors.postCode" class="form-control" type="text" @focus="errors.postCode = ''" />
              <span v-if="errors.postCode" class="error-label">
                {{ errors.postCode }}
              </span>
            </div>
          </div>
        </div>
        <button class="btn" type="button" @click="openPopUp">Continue</button>
      </div>
    </form>
    <template v-if="isOpenQRPopup">
      <QRAuthPopup
        v-loading="isLoading"
        :qrcode="qrcode"
        :is-error="isErrorCode"
        @close="hadlePopupClose"
        @send="codeSend"
        @setError="isErrorCode = false"
      />
    </template>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import BankAmountSubmittedPopUp from '../../components/Bank/BankAmountSubmittedPopUp.vue';
import ErrorPopUp from '@/components/common/ErrorPopUp.vue';
import Tooltip from '@/components/common/Tooltip.vue';
import InfoIcon from '@/static/img/icons/info.svg?inline';
import ArrowIcon from '@/static/img/icons/arrow-down.svg?inline';
import { currencyMapper } from '@/constants';
import QRAuthPopup from '~/components/common/QRAuthPopup';
import { countryCodeKey } from '~/middleware/token';
import countries from '~/components/common/PhoneNumberInput/countriesData';

export default {
  name: 'BankAmountSection',
  components: {
    BankAmountSubmittedPopUp,
    ErrorPopUp,
    Tooltip,
    InfoIcon,
    ArrowIcon,
    QRAuthPopup,
  },
  data() {
    return {
      isOpenQRPopup: false,
      isErrorCode: false,
      code: '',
      qrcode: '',
      amount: '',
      accountHolder: '',
      bankName: '',
      iban: '',
      sortCodeBSB: '',
      country: '',
      address: '',
      city: '',
      postCode: '',
      countryList: countries,
      errors: {},
      isShowPopUp: false,
      isShowErrorPopUp: false,
      isShowSubmitted: false,
      isLoading: false,
      isOpen: false,
      currencyMapper,
      defaultCountry: undefined,
      countryCode: 'GB',
      tooltipText:
        'IBANs are long account numbers used by banks for cross-border transfers. Each country structures this number differently, but it always starts with a 2 digit country code',
      tooltipTextSortCode: 'A sort code is a 6/9 digit number that identifies your bank',
    };
  },
  computed: {
    ...mapGetters({
      currency: 'user/currency',
      converted: 'exchange/converted',
      selectedCoin: 'user/selectedCoin',
      balance: 'user/balance',
      availableBalance: 'user/availableBalance',
      freezedWithdraw: 'user/freezedWithdraw',
    }),
  },
  mounted() {
    const cCode = localStorage.getItem(countryCodeKey);
    if (cCode && countries.find(item => item.isoCode === cCode)) {
      const country = countries.find(item => item.isoCode === cCode);
      this.defaultCountry = country;
      this.country = country.county;
    } else {
      this.$http
        .get('/api/get-ip')
        .then(async res => {
          const data = await res.json();
          if (data?.countryCode) {
            const country = countries.find(item => item.isoCode === data.countryCode);
            this.countryCode = data.countryCode;
            this.defaultCountry = country;
            this.country = country.county;
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
      if (!(el === e.target || el.contains(e.target))) {
        this.isOpen = false;
        document.body.removeEventListener('click', this.clickOutsideEvent);
      }
    },
    handleCountrySelect(country) {
      this.country = country.county;
      this.countryCode = country.isoCode;
      this.isOpen = false;
    },
    reloadPage() {
      window.location.reload();
    },
    openPopUp() {
      this.validateForm();
      const isValid = Object.values(this.errors).every(item => Boolean(item) === false);
      if (isValid) {
        this.isShowPopUp = true;
      }
    },
    selectBalance() {
      const balance = this.balance - this.freezedWithdraw;
      this.amount = balance.toString();
      this.validateAmount();
    },
    validateAmount() {
      const balance = this.balance - this.freezedWithdraw;
      const amount = `${this.amount}`.replace(/[^\d.-]+/g, '');
      +amount > balance ? (this.errors.amount = 'You have insufficient balance') : (this.errors.amount = '');
    },
    handleInput() {
      this.amount = this.amount.replace(/[^0-9]/, '');
      this.validateAmount();
    },
    handleChange() {
      this.validateAmount();
    },
    handleInputIban() {
      this.iban = this.iban.replace(/[^0-9a-zA-Z]/g, '');
    },
    validateForm() {
      this.errors = {};
      this.validateAmount();

      if (!this.amount) {
        this.errors.amount = 'Field is required';
      } else if (this.amount === '0') {
        this.errors.amount = 'This value must be greater than or equal to 1';
      }
      !this.accountHolder ? (this.errors.accountHolder = 'Field is required') : (this.errors.accountHolder = '');
      !this.bankName ? (this.errors.bankName = 'Field is required') : (this.errors.bankName = '');
      !this.iban ? (this.errors.iban = 'Field is required') : (this.errors.iban = '');
      !this.sortCodeBSB ? (this.errors.sortCodeBSB = 'Field is required') : (this.errors.sortCodeBSB = '');
      !this.country ? (this.errors.country = 'Field is required') : (this.errors.cicountryty = '');
      !this.address ? (this.errors.address = 'Field is required') : (this.errors.address = '');
      !this.city ? (this.errors.city = 'Field is required') : (this.errors.city = '');
      !this.postCode ? (this.errors.postCode = 'Field is required') : (this.errors.postCode = '');
    },
    onSubmit() {
      if (this.isLoading) return;
      this.isLoading = true;

      const data = {
        amount: this.amount,
        account_holder: this.accountHolder,
        bank_name: this.bankName,
        iban: this.iban,
        sort_code: this.sortCodeBSB,
        country: this.country,
        address: this.address,
        city: this.city,
        post_code: this.postCode,
      };

      if (this.code) {
        data.code = this.code;
      }

      this.$http
        .post('/api/withdraw/bank-transfer', data)
        .then(async res => {
          if (res.status === 212) {
            this.qrcode = await res.text();
            this.isOpenQRPopup = true;
          } else {
            this.isOpenQRPopup = false;
            this.isShowSubmitted = true;
          }
        })
        .catch(err => {
          if (err.response) {
            const { status } = err.response;
            if (status === 500) {
              this.isShowPopUp = false;
              this.isShowErrorPopUp = true;
            } else if (status === 400) {
              this.isErrorCode = true;
            }
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    hadlePopupClose() {
      this.isOpenQRPopup = false;
    },
    codeSend(val) {
      this.code = val;
      this.onSubmit();
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  max-width: 653px;
}

.section {
  padding-top: 24px;
}

.title {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  color: $dark-grey;
}

label {
  display: inline-block;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: $dark-grey;
  padding-bottom: 8px;
}

.form-group-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.form-group {
  width: calc(50% - 8px);
  padding-top: 16px;
}

.form-control {
  padding: 8px 12px;
}

.form-control-container {
  position: relative;

  &[data-error='true'] {
    .icon-info {
      top: calc(50% - 10px);
    }
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

  &::placeholder {
    color: $grey-52-color;
  }
}

.container {
  width: 100%;
  padding-top: 16px;

  .row-amount {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .form-group {
    padding-top: 0;
  }
}

.balance {
  // display: flex;
  display: none;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: $dark-grey;
  width: calc(50% - 8px);

  span {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: $black;
    padding-top: 4px;
  }
}

.error-label {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: $bright-red;
}

.icon-info {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  z-index: 14;
}

.form-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: calc(50% - 8px);
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

.select-country {
  position: relative;

  .form-control {
    background-color: transparent;
    padding: 7px 25px 9px 45px;
    cursor: pointer;
  }
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

.countries-box {
  position: absolute;
  top: 48px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid $common-green-transparent;
  outline: 2px solid $light-mint;
  background-color: $common-white;
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
    color: $black;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    padding-left: 10px;
  }
}

@media (max-width: 480px) {
  .form-group {
    width: 100%;
  }

  .row-amount {
    flex-wrap: wrap;
  }

  .balance {
    width: 100%;
    padding-top: 10px;
  }

  .form-row {
    width: 100%;

    .form-group {
      width: calc(50% - 8px);
    }
  }

  .btn {
    width: 100%;
  }
}
</style>
<style lang="scss">
.form-group {
  .tooltip {
    min-width: 231px;
  }
  .relative {
    width: 24px;
    height: 24px;
  }
  svg {
    cursor: pointer;
    path {
      transition: all 0.3s ease;
    }
  }
}
</style>
