<template>
  <transition name="modal" appear>
    <div class="popup-wrapper">
      <div class="popup-container">
        <template v-if="isShowSubmitted">
          <h2 class="title">Withdrawal Request Submitted</h2>
          <div class="success-icon">
            <SuccessIcon />
          </div>
        </template>
        <template v-else>
          <h2 class="title">Confirm your Withdrawal</h2>
          <p class="subtitle">Please make sure your transaction details are correct</p>
        </template>
        <div class="rows">
          <p class="row">
            <span class="row-title">You will receive:</span>
            <span class="row-value">{{ currencyMapper[currency] || '' }}{{ amount }}</span>
          </p>
          <p class="row">
            <span class="row-title">To:</span>
            <span class="row-value">{{ bankName }}</span>
          </p>
          <p class="row">
            <span class="row-title">On the name of:</span>
            <span class="row-value">{{ accountHolder }}</span>
          </p>
          <p class="row">
            <span class="row-title">Transfer fee:</span>
            <span class="row-value">{{ transfer }}{{ currencyMapper[currency] || '' }}</span>
          </p>
          <p class="row total">
            <span class="row-title">Total:</span>
            <span class="row-value">{{ currencyMapper[currency] || '' }}{{ getTotalAmount }}</span>
          </p>
        </div>
        <template v-if="isShowSubmitted">
          <button class="btn" type="button" @click="$emit('close')">Done</button>
        </template>
        <template v-else>
          <button class="btn" type="submit" @click="confirm">
            <img v-if="loading" class="spinner rotating" src="~/static/img/btn-spinner.png" />
            {{ loading ? '' : 'Confirm' }}
          </button>
        </template>
        <CloseIcon class="close" @click="$emit('close')" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';
import { currencyMapper } from '@/constants';
import SuccessIcon from '@/static/img/icons/success.svg?inline';
import CloseIcon from '@/static/img/icons/close-popup.svg?inline';

export default {
  name: 'BankAmountSubmittedPopUp',
  components: {
    SuccessIcon,
    CloseIcon,
  },
  props: {
    amount: {
      type: String,
      default: '',
    },
    bankName: {
      type: String,
      default: '',
    },
    accountHolder: {
      type: String,
      default: '',
    },
    isShowSubmitted: {
      type: Boolean,
      default() {
        return false;
      },
    },
    isLoading: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  data() {
    return {
      transfer: 0,
      loading: false,
      currencyMapper,
    };
  },
  computed: {
    ...mapGetters({
      currency: 'user/currency',
    }),
    getTotalAmount() {
      return Number(this.amount) + this.transfer;
    },
  },
  watch: {
    isLoading(newVal) {
      this.loading = newVal;
    },
  },
  methods: {
    confirm() {
      this.$emit('confirm');
      this.loading = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.popup-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $charcoal-grey-transparent;
  z-index: 9998;
  transition: opacity 0.3s ease;
}

.popup-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 343px;
  padding: 32px 32px 25px;
  background-color: $common-white;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 22px;
  height: 22px;
  cursor: pointer;
}

.title {
  color: $dark-grey;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
}

.subtitle {
  color: $dark-grey;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  padding-top: 12px;
  padding-bottom: 10px;
}

.success-icon {
  width: 44px;
  height: 44px;
  margin-top: 24px;
  margin-bottom: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
}

.rows {
  width: 100%;

  .row {
    width: 100%;
    color: $dark-grey;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;

    &:not(:last-child) {
      padding-bottom: 12px;
      margin-bottom: 12px;
      border-bottom: 1px dashed $lighter-grey;
    }

    .row-value {
      display: flex;
      align-items: center;
      padding-top: 4px;

      img {
        width: 22px;
        height: 22px;
        margin-right: 8px;
      }
    }

    &.total {
      font-weight: 600;
      padding-top: 4px;
    }
  }
}

.btn {
  display: block;
  width: 100%;
  height: 44px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  background-color: $common-green-transparent;
  border: 1px solid transparent;
  color: $dark-grey;
  border-radius: 6px;
  padding: 10px;
  margin-top: 24px;
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

@media (max-width: 375px) {
  .popup-container {
    width: calc(100% - 32px);
  }
}
</style>
