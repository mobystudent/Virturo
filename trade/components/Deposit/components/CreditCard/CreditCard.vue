<template>
  <div class="credit-card-content">
    <ErrorPopUp v-if="isShowErrorPopUp" @close="isShowErrorPopUp = false" />
    <DepositPopUp
      v-if="isShowPopUp"
      title="Credit Card Deposit Successful"
      subtitle="Your request has been confirmed"
      @close="isShowPopUp = false"
    />
    <form class="form" autocomplete="on" @submit.prevent="onSubmit">
      <div class="section">
        <h2 class="title">Credit Card Deposit</h2>
        <div class="form-group">
          <label>Amount</label>
          <div class="amount-block">
            <div class="form-control-container">
              <input
                v-model="amount"
                :data-error="!!cardErrors.amount"
                class="form-control"
                type="number"
                step="any"
                @focus="cardErrors.amount = ''"
                @input="validateNumbersAfterDot"
                @keydown="validCharacterFilter"
              />
              <span v-if="cardErrors.amount" class="error-label">
                {{ cardErrors.amount }}
              </span>
              <span class="current-currency">{{ currency }}</span>
            </div>
            <p class="amounts-add">
              <span v-for="amountItem in addAmountList" :key="amountItem" @click="addAmount(amountItem)">
                {{ currencyMapper[currency] || '' }}{{ amountItem }}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="section top-32">
        <h2 class="title">Credit Card</h2>
        <div class="form-group-wrapper">
          <div class="form-group">
            <label>Card Number</label>
            <input
              v-model="cardNumber"
              v-cardformat:formatCardNumber
              :data-error="!!cardErrors.cardNumber"
              class="form-control"
              type="tel"
              maxlength="19"
              autocomplete="cc-number"
              @focus="cardErrors.cardNumber = ''"
            />
            <span v-if="cardErrors.cardNumber" class="error-label">
              {{ cardErrors.cardNumber }}
            </span>
          </div>
          <div class="form-group">
            <label>Card holder name</label>
            <input
              v-model="cardName"
              :data-error="!!cardErrors.cardName"
              class="form-control"
              type="text"
              autocomplete="cc-name"
              @focus="cardErrors.cardName = ''"
            />
            <span v-if="cardErrors.cardName" class="error-label">
              {{ cardErrors.cardName }}
            </span>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Expiry Date</label>
              <input
                ref="cardExpInput"
                v-model="cardExpiry"
                v-cardformat:formatCardExpiry
                :data-error="!!cardErrors.cardExpiry"
                class="form-control"
                type="tel"
                maxlength="7"
                autocomplete="cc-exp"
                placeholder="MM/YY"
                @focus="cardErrors.cardExpiry = ''"
              />
              <span v-if="cardErrors.cardExpiry" class="error-label">
                {{ cardErrors.cardExpiry }}
              </span>
            </div>
            <div class="form-group">
              <label>Security Code (CVV)</label>
              <div class="form-control-container">
                <input
                  ref="cardCvvInput"
                  v-model="cardCvv"
                  v-cardformat:formatCardCVC
                  :data-error="!!cardErrors.cardCvv"
                  class="form-control"
                  type="tel"
                  maxlength="4"
                  autocomplete="cc-csc"
                  placeholder="CVV"
                  @focus="cardErrors.cardCvv = ''"
                />
                <span v-if="cardErrors.cardCvv" class="error-label">
                  {{ cardErrors.cardCvv }}
                </span>
                <div class="icon-info">
                  <Tooltip :text="tooltipText">
                    <InfoIcon />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="btn" type="submit">
          <img v-if="isLoading" class="spinner rotating" src="~/static/img/btn-spinner.png" />
          {{ isLoading ? '' : 'Submit' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import DepositPopUp from '../popups/DepositPopUp.vue';
import { currencyMapper } from '@/constants';
import ErrorPopUp from '@/components/common/ErrorPopUp.vue';
import Tooltip from '@/components/common/Tooltip.vue';
import InfoIcon from '@/static/img/icons/info.svg?inline';

const addAmountList = [500, 1000, 5000];

export default {
  name: 'CreditCard',
  components: {
    DepositPopUp,
    ErrorPopUp,
    Tooltip,
    InfoIcon,
  },
  data() {
    return {
      isLoading: false,
      isShowPopUp: false,
      isShowErrorPopUp: false,
      amount: '',
      cardName: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvv: '',
      cardExpiryFormatted: '',
      cardNumberFormatted: '',
      cardErrors: {},
      currencyMapper,
      addAmountList,
      tooltipText:
        'IBANs are long account numbers used by banks for cross-border transfers. Each country structures this number differently, but it always starts with a 2 digit country code',
    };
  },
  computed: {
    ...mapGetters({
      currency: 'user/currency',
      balance: 'user/balance',
    }),
  },
  watch: {
    cardNumber: function (val) {
      if (this.$cardFormat.validateCardNumber(val)) {
        this.$refs.cardExpInput.focus();
      }
    },
    cardExpiry: function (val) {
      if (this.$cardFormat.validateCardExpiry(val)) {
        this.$refs.cardCvvInput.focus();
      }
    },
  },
  methods: {
    validCharacterFilter(e) {
      if (/^0$/.test(e.target.value) && e.keyCode === 48) e.preventDefault();
      if (/^0\d+/.test(e.target.value)) e.target.value = +e.target.value;
      if ([187, 189, 69].includes(e.keyCode)) e.preventDefault();
    },
    validateNumbersAfterDot() {
      this.amount = this.amount.replace(/(\.\d{2})./g, '$1');
    },
    addAmount(currentAmount) {
      this.cardErrors.amount = '';
      this.amount = parseInt(this.amount + currentAmount);
    },
    validateForm() {
      this.cardErrors = {};

      if (!this.amount) {
        this.cardErrors.amount = 'Field is required';
      } else if (this.amount === '0') {
        this.cardErrors.amount = 'This value must be greater than or equal to 1';
      }
      if (!this.cardName) {
        this.cardErrors.cardName = 'Field is required';
      }
      if (!this.$cardFormat.validateCardNumber(this.cardNumber)) {
        this.cardErrors.cardNumber = 'Your card number is incorrect';
      }
      if (!this.$cardFormat.validateCardExpiry(this.cardExpiry)) {
        this.cardErrors.cardExpiry = 'Your expiry date is incorrect';
      }
      if (!this.$cardFormat.validateCardCVC(this.cardCvv)) {
        this.cardErrors.cardCvv = 'Your CVC is incorrect';
      }
    },

    async onSubmit() {
      if (this.isLoading) return;

      this.validateForm();

      this.isLoading = true;

      const isValid = Object.values(this.cardErrors).every(item => Boolean(item) === false);

      if (isValid) {
        const [month, year] = this.cardExpiry.replace(/ /g, '').split('/');
        this.cardExpiryFormatted = `${year}-${month}`;

        this.cardNumberFormatted = this.cardNumber.replace(/ /g, '');

        const body = {
          amount: this.amount,
          currency: this.currency,
          card_name: this.cardName,
          card_number: this.cardNumberFormatted,
          date_expiry: this.cardExpiryFormatted,
          cvv: this.cardCvv,
        };
        await this.$http
          .post('/api/deposit/credit-card/payment', body)
          .then(() => {
            const totalBalance = parseFloat(body.amount) + this.balance;
            this.$store.dispatch('user/setBalance', totalBalance);
            this.isLoading = false;
            this.isShowPopUp = true;
          })
          .catch(err => {
            if (err.response) {
              const { status } = err.response;
              if (status === 402) {
                this.cardErrors.cardNumber = 'Your card was declined';
              } else {
                this.isShowErrorPopUp = true;
              }
            }
          });
      }
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.credit-card-content {
  position: relative;
}

.form {
  max-width: 653px;
}

.section {
  padding-top: 24px;

  &.top-32 {
    padding-top: 32px;
  }
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

  .form-group {
    width: calc(50% - 8px);
  }

  .form-control {
    padding: 10px 12px;
  }
}

.form-group {
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

.amount-block {
  display: flex;
  align-items: flex-start;
}

.amounts-add {
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 16px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    height: 44px;
    border-radius: 6px;
    background-color: $light-mint;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.3;
    color: $dark-grey;
    padding: 10px 15px;
    cursor: pointer;

    &:not(:first-child) {
      margin-left: 8px;
    }
  }
}

.form-control-container {
  position: relative;
  width: 318px;
  flex-shrink: 0;
}

.form-control {
  width: 100%;
  height: 44px;
  background-color: $common-white;
  border: 1px solid $light-khaki;
  outline: 2px solid transparent;
  border-radius: 6px;
  padding: 10px 48px 10px 12px;
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

  &::placeholder {
    color: $common-grey;
  }
}

.form-row {
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  gap: 16px;
  align-items: flex-start;
  width: calc(50% - 8px);

  .form-group {
    width: 100%;
  }

  .form-control-container {
    width: auto;

    .form-control {
      padding: 8px 40px 8px 12px;
    }
  }
}

.current-currency {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;
  text-transform: uppercase;
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
  top: 10px;
  right: 12px;
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

@media (max-width: 970px) {
  .form-row {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 900px) {
  .form-control-container {
    width: 100%;
  }

  .amount-block {
    flex-direction: column;
  }

  .amounts-add {
    padding-top: 12px;
    margin-left: 0;
    width: 100%;

    span {
      flex-grow: 1;
    }
  }
}

@media (max-width: 767px) {
  .form {
    max-width: 100%;
  }

  .section {
    &.top-32 {
      padding-top: 24px;
    }
  }
}

@media (max-width: 480px) {
  .form-group-wrapper {
    .form-group {
      width: 100%;
    }
  }

  .btn {
    width: 100%;
  }
}

@media (max-width: 340px) {
  .form-row {
    .form-group label {
      font-size: 13px;
    }
  }
}
</style>
<style lang="scss">
.form-row {
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
