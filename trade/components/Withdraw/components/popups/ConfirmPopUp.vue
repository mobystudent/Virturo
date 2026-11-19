<template>
  <transition name="modal" appear>
    <div class="popup-wrapper">
      <div class="popup-container">
        <h2 class="title">Confirm your Withdrawal</h2>
        <p class="subtitle">Please make sure your transaction details are correct</p>
        <p class="row">
          <span class="row-title">Amount:</span>
          <span class="row-value">
            <img class="icon" :src="selectedCoin && selectedCoin.icon ? `${API_URL}${selectedCoin.icon}` : ''" />
            {{ amount }} {{ selectedCoin.short_code || '' }}
          </span>
        </p>
        <p class="row">
          <span class="row-title">Network:</span>
          <span class="row-value">{{ selectedNetwork && selectedNetwork.short_code ? selectedNetwork.short_code : '' }}</span>
        </p>
        <p class="row">
          <span class="row-title">Withdrawal address:</span>
          <span class="row-value">{{ destinationAddress }}</span>
        </p>
        <p class="row">
          <span class="row-title">Transfer fee:</span>
          <span class="row-value">${{ transfer }}</span>
        </p>
        <p class="row total">
          <span class="row-title">Total:</span>
          <span class="row-value">
            <img class="icon" :src="selectedCoin && selectedCoin.icon ? `${API_URL}${selectedCoin.icon}` : ''" />
            {{ amount }} {{ selectedCoin.short_code || '' }}
          </span>
        </p>
        <button class="btn" type="submit" @click="confirmWithdrawal">
          <img v-if="isLoading" class="spinner rotating" src="~/static/img/btn-spinner.png" />
          {{ isLoading ? '' : 'Confirm' }}
        </button>
        <CloseIcon class="close" @click="$emit('close')" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';
import CloseIcon from '@/static/img/icons/close-popup.svg?inline';
import { API_URL } from '@/constants';

export default {
  name: 'ConfirmPopUp',
  components: {
    CloseIcon,
  },
  props: {
    amount: {
      type: String,
      default: '',
    },
    destinationAddress: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      API_URL,
      isLoading: false,
      transfer: 0,
    };
  },
  computed: {
    ...mapGetters({
      selectedCoin: 'user/selectedCoin',
      selectedNetwork: 'user/selectedNetwork',
    }),
  },
  methods: {
    confirmWithdrawal() {
      this.isLoading = true;
      this.$emit('submit');
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

.row {
  width: 100%;
  color: $dark-grey;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;

  &:not(:last-of-type) {
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
