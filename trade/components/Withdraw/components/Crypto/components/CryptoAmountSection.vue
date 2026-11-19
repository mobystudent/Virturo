<template>
  <div class="section">
    <ConfirmPopUp
      v-if="isShowConfirmPopUp"
      :destination-address="destinationAddress"
      :amount="amount"
      @close="isShowConfirmPopUp = false"
      @submit="handleConfimSubmit"
    />
    <SubmittedPopUp v-if="isShowSubmittedPopUp" :destination-address="destinationAddress" :amount="amount" @close="reloadPage" />
    <ErrorPopUp v-if="isShowErrorPopUp" @close="isShowErrorPopUp = false" />
    <ErrorPopUpCustom v-if="isShowCustomError" :message="errorMessage" @close="isShowCustomError = false" />
    <InsufficientFundsPopUp v-if="isShowInsufficientFundsPopUp" @close="isShowInsufficientFundsPopUp = false" />

    <h2 v-if="isMobile" class="title">{{ titleAmount }}</h2>
    <h2 v-else class="title">{{ titleCoin }}</h2>
    <div class="form-grid">
      <div class="grid-item">
        <div class="row">
          <SelectBox v-if="!isMobile" :label="labelCoin" :selected="selectedCoin" :items="coinsWithNetwork" @update="handleChangeCoin" />
    
          <div class="grid-item info desktop" :class="{ pb: isError }">
            <p class="balance">
              Available funds:<span @click="selectBalance">
                {{ converted }} {{ selectedCoin.short_code || '' }} &#8776; {{ currencyMapper[currency] || '' }}{{ availableBalance }}
              </span>
            </p>
          </div>
        </div>
      </div>
      <!-- convert -->
      <div class="form-control-container grid-item form-group">
        <label>{{ labelAmount }}</label>
        <div class="dual-inputs">
          <!-- Fiat and Crypto inputs swapped by isSwapped -->
          <template v-if="!isSwapped">
          <!-- Fiat -->
            <div class="input-wrapper">
              <input
                ref="fiatInput"
                v-model="currencyAmount"
                class="form-control"
                :class="{ error: errorAmount }"
                type="number"
                @input="handleCurrencyInput"
                @blur="trimCurrencyAmount"
              />
              <span class="current-currency">{{ currency }}</span>
            </div>

            <!-- Icon arrow -->
            <span class="switch-icon" @click="toggleSwap">⇄</span>

            <!-- Crypto -->
            <div class="input-wrapper">
              <input
                ref="cryptoInput"
                v-model="amount"
                class="form-control"
                :class="{ error: errorAmount }"
                type="number"
                @input="handleCryptoInput"
              />
              <span class="current-currency">{{ selectedCoin.short_code }}</span>
              
            </div>
          </template>

          <template v-else>
            <!-- Crypto -->
            <div class="input-wrapper">
              <input
                ref="cryptoInput"
                v-model="amount"
                class="form-control"
                :class="{ error: errorAmount }"
                type="number"
                @input="handleCryptoInput"
              />
              <span class="current-currency">{{ selectedCoin.short_code }}</span>
            </div>

            <!-- Icon arrow -->
            <span class="switch-icon" @click="toggleSwap">⇄</span>

            <!-- Fiat -->
            <div class="input-wrapper">
              <input
                ref="fiatInput"
                v-model="currencyAmount"
                class="form-control"
                :class="{ error: errorAmount }"
                type="number"
                @input="handleCurrencyInput"
              />
              <span class="current-currency">{{ currency }}</span>
            </div>
          </template>
        </div>
        <span v-if="errorAmount" class="error-label">{{ errorAmount }}</span>
      </div>

      <div class="grid-item form-group destination-address-bl">
        <div class="row">
          <div class="col">
            <label>Destination Address</label>
            <input
              v-model="destinationAddress"
              class="form-control"
              :class="{ error: isError }"
              type="text"
              :placeholder="`Ensure the address network is ${selectedNetwork.short_code}`"
              @focus="inputFocus"
              @blur="validateDestinationAddress"
            />
            <span v-if="isError" class="error-label">The address is not valid on the selected network</span>
          </div>
          <div class="col desktop">
            <div class="grid-item info" :class="{ pb: isError }">
              <NetworkInfo :network-name="selectedNetwork.short_code" />
            </div>
          </div>
        </div>
        
          
      </div>
      <div class="grid-item info mobile" :class="{ pb: isError }">
        <p class="balance">
          Available funds:<span @click="selectBalance">
            {{ converted }} {{ selectedCoin.short_code || '' }} &#8776; {{ currencyMapper[currency] || '' }}{{ availableBalance }}
          </span>
        </p>
        <NetworkInfo :network-name="selectedNetwork.short_code" />
      </div> 
    </div>
    <div class="buttons-row">
      <button class="btn btn-back" type="button" @click="goToPreviousStep">Back</button>
      <button class="btn" type="submit" @click="showConfirmPopUp">Continue</button>
    </div>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WAValidator from 'multicoin-address-validator';
import ConfirmPopUp from '../../popups/ConfirmPopUp.vue';
import SubmittedPopUp from '../../popups/SubmittedPopUp.vue';
import NetworkInfo from './NetworkInfo.vue';
import ErrorPopUpCustom from '@/components/common/ErrorPopUpCustom.vue';
import ErrorPopUp from '@/components/common/ErrorPopUp.vue';
import InsufficientFundsPopUp from '@/components/common/InsufficientFundsPopUp';
import { currencyMapper, API_URL } from '@/constants';
import QRAuthPopup from '~/components/common/QRAuthPopup';
import SelectBox from '@/components/common/SelectBox.vue';

const MOBILE_BREAKPOINT = 767;

export default {
  name: 'CryptoAmountSection',
  components: {
    ConfirmPopUp,
    SubmittedPopUp,
    ErrorPopUp,
    InsufficientFundsPopUp,
    QRAuthPopup,
    ErrorPopUpCustom,
    NetworkInfo,
    SelectBox,
  },
  props: {
    currentStep: {
      type: Number,
      default: 0,
    },
    titleCoin: {
      type: String,
      required: true,
    },
    titleAmount: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      labelCoin: 'Select coin',
      labelAmount: 'Enter Amount',
      isMobile: false,
      isOpenQRPopup: false,
      isErrorCode: false,
      code: '',
      qrcode: '',
      isLoading: false,
      amount: '',
      destinationAddress: '',
      errorAmount: '',
      isError: false,
      isShowConfirmPopUp: false,
      isShowErrorPopUp: false,
      isShowInsufficientFundsPopUp: false,
      isShowSubmittedPopUp: false,
      isShowCustomError: false,
      errorMessage: '',
      currencyMapper,
      API_URL,
      rate: null,
      currencyAmount: '',
      coinsWithNetwork: [],
      isSwapped: false,
      isAmountTouched: false,
    };
  },
  computed: {
    ...mapGetters({
      coins: 'coins',
      balance: 'user/balance',
      availableBalance: 'user/availableBalance',
      currency: 'user/currency',
      converted: 'exchange/converted',
      selectedCoin: 'user/selectedCoin',
      selectedNetwork: 'user/selectedNetwork',
      exchageRates: 'exchange/exchageRates',
    }),
  },
  watch: {
    selectedCoin(val) {
      this.setRate();
      this.convert();
      this.setAmount(this.currencyAmount);
    },
    coins(val) {
      this.coinsWithNetwork = val.filter(coin => coin.networks.length > 0);
      this.$store.dispatch('user/setSelectedCoin', this.coinsWithNetwork[0] || {});
    },
    currencyAmount(val) {
      this.handleCurrencyInput();
    },

  },
  created() {
    this.coinsWithNetwork = this.coins.filter(coin => coin.networks.length > 0);
    // this.$store.dispatch('user/setSelectedCoin', this.coinsWithNetwork[0] || {});
  },
  mounted() {
    this.setRate();
    this.checkViewport();
    window.addEventListener('resize', this.checkViewport);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkViewport);
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    inputFocus() {
      this.isError = false;
    },
    goToPreviousStep() {
      const step = this.currentStep - 1;
      this.$emit('setStep', step);
    },

    selectBalance() {
      this.amount = this.converted;
      this.currencyAmount = this.availableBalance;

      this.validateAmount(this.converted, false);
    },

    toggleSwap() {
      this.isSwapped = !this.isSwapped;
    },

    trimAmount() {
      if (typeof this.amount === 'string') {
        this.amount = this.amount.replace(/\.?0+$/, ''); // "1.230000" → "1.23", "100.000" → "100"
      } else if (typeof this.amount === 'number') {
        this.amount = parseFloat(this.amount.toString()).toString();
      }
    },

    trimCurrencyAmount() {
      if (typeof this.currencyAmount === 'string') {
        this.currencyAmount = this.currencyAmount.replace(/^0+(?=\d)/, '');
      }
    },

    validateAmount(value = this.amount, updateCurrency = false) {
      if (!this.isAmountTouched) {
        this.errorAmount = '';
        return true;
      }

      this.errorAmount = '';
      const balanceCrypto = parseFloat(this.availableBalance);
      const cleanedValue = `${value}`.replace(/[^\d.-]+/g, '');
      const amount = parseFloat(cleanedValue);

      if (isNaN(amount)) {
        this.errorAmount = 'Enter a valid amount';
        return false;
      }

      const fiatValue = this.rate ? (parseFloat(amount) / this.rate) : 0;

      if (fiatValue < 0.06) {
        this.errorAmount = 'Minimum amount is 0.06';
        return false;
      }

      const roundTo = (num, digits = 8) => Math.round(num * 10 ** digits) / 10 ** digits;


      if (updateCurrency && this.rate) {
        this.currencyAmount = Number(amount / this.rate).toFixed(2);
      }

      const inputEl = this.$refs.cryptoInput;
      const fiatEl = this.$refs.fiatInput;

      const isValid = !isNaN(amount) && fiatValue >= 0.06;

      const addOrRemoveClass = (el) => {
        if (!el) return;
        if (!isValid) el.classList.add('error-input');
        else el.classList.remove('error-input');
      };

      addOrRemoveClass(inputEl);
      addOrRemoveClass(fiatEl);

      return true;
    },

    setRate() {
      const rate = Object.values(this.exchageRates[this.currency] ?? {}).find(
        item => item.crypto_currency === this.selectedCoin.short_code,
      );
      if (rate) {
        this.rate = Number(rate.buy);
      }
    },
    setAmount(value) {
      if (!value) {
        this.amount = '';
        return;
      }

      const newCur = Number(value * this.rate).toFixed(6);
      if (newCur !== this.amount) this.amount = newCur;
    },
    convert() {
      if (this.currency) {
        const cur = (this.selectedCoin.short_code || '').toLowerCase();
        this.$store.dispatch('exchange/convert', cur);
      } else {
        this.$store.dispatch('exchange/clearConverted');
      }
    },
    handleInput() {
      this.validateAmount(true);
    },
    handleChange() {
      this.validateAmount(true);
    },

    handleCurrencyInput() {

        const cleaned = `${this.currencyAmount}`.replace(/[^\d.-]+/g, '');
        const numericValue = parseFloat(cleaned);

        if (!isNaN(numericValue) && this.rate) {
          const cryptoEquivalent = Number(numericValue * this.rate).toFixed(6);
          this.amount = cryptoEquivalent;
          this.validateAmount(cryptoEquivalent); // valid crypto
        } else {
          this.amount = '';
          if (this.isAmountTouched) {
            this.errorAmount = 'Enter a valid number';
          } else {
            this.errorAmount = '';
          }
        }
    },

    handleCurrencyChange({ target }) {
      if (target.value) {
        this.setAmount(target.value);
        this.validateAmount(false);
        this.currencyAmount = Number(`${target.value}`.replace(/[^\d.-]+/g, ''));
      }
    },
    validateDestinationAddress() {
      const validAddress = WAValidator.validate(this.destinationAddress, this.selectedCoin.short_code, this.selectedNetwork.short_code);
      validAddress ? (this.isError = false) : (this.isError = true);
      return validAddress;
    },
    showConfirmPopUp() {
      if (this.validateDestinationAddress() && this.validateAmount()) {
        this.isShowConfirmPopUp = true;
      }
    },
    handleConfimSubmit() {
      this.onSubmit();
    },
    onSubmit() {
      if (this.isLoading) return;
      this.isLoading = true;
      const data = {
        amount: this.amount,
        currencyAmount: this.currencyAmount,
        coin_id: this.selectedCoin.id,
        network_id: this.selectedNetwork.id,
        address: this.destinationAddress,
      };
      if (this.code) {
        data.code = this.code;
      }
      this.$http
        .post('/api/withdraw/crypto', data)
        .then(async res => {
          if (res.status === 212) {
            this.isShowConfirmPopUp = false;
            this.qrcode = await res.text();
            this.isOpenQRPopup = true;
          } else {
            this.isOpenQRPopup = false;
            this.openSubmittedPopUp();
          }
        })
        .catch(err => {
          if (err.response) {
            if (err.response.status === 402) {
              this.openInsufficientFundsPopUp();
            } else if (err.response.status === 400) {
              if (err.response.data && err.response.data.message.includes('is too small')) {
                this.errorMessage = err.response.data.message;
                this.openCustomPopUp();
              } else {
                this.isErrorCode = true;
              }
            } else {
              this.openErrorPopUp();
            }
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    openCustomPopUp() {
      this.isShowCustomError = true;
      this.isShowSubmittedPopUp = false;
      this.isShowInsufficientFundsPopUp = false;
      this.isShowConfirmPopUp = false;
      this.isShowErrorPopUp = false;
    },
    openSubmittedPopUp() {
      this.isShowCustomError = false;
      this.isShowSubmittedPopUp = true;
      this.isShowInsufficientFundsPopUp = false;
      this.isShowConfirmPopUp = false;
      this.hadlePopupClose();
    },
    openInsufficientFundsPopUp() {
      this.isShowCustomError = false;
      this.isShowSubmittedPopUp = true;
      this.isShowInsufficientFundsPopUp = true;
      this.isShowConfirmPopUp = false;
      this.isShowErrorPopUp = false;
      this.hadlePopupClose();
    },
    openErrorPopUp() {
      this.isShowCustomError = false;
      this.isShowErrorPopUp = true;
      this.isShowInsufficientFundsPopUp = false;
      this.isShowConfirmPopUp = false;
      this.hadlePopupClose();
    },
    codeSend(val) {
      this.code = val;
      this.onSubmit();
    },
    hadlePopupClose() {
      this.code = '';
      this.isErrorCode = false;
      this.isOpenQRPopup = false;
    },
    handleChangeCoin(item) {
      this.$store.dispatch('user/setSelectedCoin', item);

      this.amount = '';
      this.currencyAmount = '';
      this.destinationAddress = '';
      this.errorAmount = '';
      this.isError = false;

      if (this.$refs.cryptoInput) {
        this.$refs.cryptoInput.classList.remove('error-input');
      }
      if (this.$refs.fiatInput) {
        this.$refs.fiatInput.classList.remove('error-input');
      }
    },
    checkViewport() {
      this.isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    },
    handleCryptoInput() {
      const numericValue = parseFloat(`${this.amount}`.replace(/[^\d.-]+/g, ''));
      if (!isNaN(numericValue) && this.rate) {
        this.currencyAmount = Number(numericValue / this.rate).toFixed(2);
        this.validateAmount(numericValue);
      }
    },
    handleCryptoChange({ target }) {
      const value = Number(target.value.replace(/[^\d.-]+/g, ''));
      this.amount = value;
      if (this.rate && !isNaN(value)) {
        this.currencyAmount = Number(value / this.rate).toFixed(2);
      }
      this.validateAmount();
    },

  },
};
</script>

<style lang="scss" scoped>
.section {
  max-width: 653px;
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
  line-height: 1.5;
  color: $dark-grey;
  padding-bottom: 8px;
}

.row {
  display: flex;
  align-items: end;
  flex-wrap: wrap;
}

.form-control-container {
  width: 207px;

  .input-wrapper {
    position: relative;
  }

  &:not(:first-child) {
    margin-left: 16px;
  }

  .icon {
    position: absolute;
    top: 10px;
    right: 12px;
    width: 24px;
    height: 24px;
  }

  .current-currency {
    position: absolute;
    top: 10px;
    right: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: $black;
    text-transform: uppercase;
  }
}

.form-group {
  width: 430px;
  padding-top: 16px;
}

.form-control {
  width: 100%;
  height: 44px;
  background-color: $common-white;
  border: 1px solid $light-khaki;
  outline: 2px solid transparent;
  border-radius: 6px;
  padding: 10px 44px 10px 12px;
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

  &[data-error='true'],
  &.error {
    border: 1px solid $red;
    outline-color: rgba(238, 64, 53, 0.2);

    &:hover {
      border-color: $red;
    }
  }

  &::placeholder {
    font-weight: 400;
    line-height: 1.5;
    color: $grey-52-color;
  }
}

.balance {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: $dark-grey;
  padding-left: 16px;

  span {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: $black;
    padding-top: 4px;
  }
}

.error-label {
  display: inline-block;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: $red;
  padding-top: 8px;
}

.buttons-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 430px;
  margin-top: 32px;
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
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: $common-white;
    border-color: $common-green-transparent;
  }

  &.btn-back {
    background-color: $light-mint;

    &:hover {
      background-color: $common-white;
    }
  }
}

.info {
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.pb {
    padding-bottom: 26px;
  }

  .network {
    padding-left: 16px;
  }
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  padding-top: 16px;
}

.grid-item:nth-child(1) {
  grid-column: 1;
  grid-row: 1;
}

.grid-item:nth-child(2) {
  grid-column: 1;
  grid-row: 2;
}

.grid-item:nth-child(3) {
  grid-column: 1;
  grid-row: 3;
}

.grid-item:nth-child(4) {
  grid-column: 2;
  grid-row: 1 / span 2;
}

.grid-item.info.mobile {
  display: none;
}

.destination-address-bl {
  width: 520px;
  // width: 100%;
  // max-width: 520px;

  .row {
    flex-flow: row wrap;
  }

  .col:nth-child(1) {
    // width: 430px;
    width: 100%;
    max-width: 430px;
  }
}

@media (max-width: 960px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .grid-item:nth-child(2) {
    grid-row: 3;
  }

  .grid-item:nth-child(3) {
    grid-column: 1;
    grid-row: 2;
  }

  .info {
    padding-top: 12px;
    flex-direction: row;
    justify-content: flex-start;

    &.pb {
      padding-bottom: 0;
    }
  }

  .balance {
    padding-left: 0;
  }

  .network {
    padding-left: 32px;
  }
}

@media (max-width: 767px) {
  .form-control-container {
    width: 100%;
    max-width: 430px;
  }

  .grid-item.info.desktop {
    display: none;
  }

  .grid-item.info.mobile {
    display: flex;
    grid-column: 1;
    grid-row: 3;
    padding-top: 16px;
  }

  .grid-item:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }

  .grid-item:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
  }

  .grid-item:nth-child(3) {
    grid-column: 1;
    grid-row: 4;
  }

  .destination-address-bl {
    padding-top: 32px;
    width: 100%;
    max-width: 520px;
    .desktop {
      display: none;
    }
  }
}

@media (max-width: 480px) {
  .form-group,
  .form-control-container {
    width: 100%;
  }

  .buttons-row {
    width: 100%;
    margin-top: 24px;
  }

  .info .network {
    padding-left: 43px;
  }
}

.form-control-container.grid-item.form-group {
  margin-left: 0;
}

.dual-inputs {
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 480px) {
    flex-flow: column;
    gap: 8px;
  }
}

.input-wrapper {
  flex: 1;
  position: relative;
  @media (max-width: 480px) {
    width: 100%;
  }
}

.switch-icon {
  font-size: 18px;
  margin: 0 8px;
  user-select: none;
  @media (max-width: 480px) {
    margin: 0;
    font-size: 16px;
    transform: rotate(90deg);
  }
}
</style>
