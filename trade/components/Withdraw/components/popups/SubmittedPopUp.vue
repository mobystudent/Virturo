<template>
  <transition name="modal" appear>
    <div class="popup-wrapper">
      <div class="popup-container">
        <h2 class="title">Withdrawal Request Submitted</h2>
        <div class="success-icon">
          <SuccessIcon />
        </div>
        <div class="rows">
          <p class="row">
            <span class="row-title">Amount:</span>
            <span class="row-value">
              <img class="icon" :src="selectedCoin && selectedCoin.icon ? `${API_URL}${selectedCoin.icon}` : ''" />
              {{ amount }} {{ selectedCoin && selectedCoin.short_code ? selectedCoin.short_code : '' }}
            </span>
          </p>
          <p class="row">
            <span class="row-title">Transfer fee:</span>
            <span class="row-value">${{ transfer }}</span>
          </p>
          <p class="row">
            <span class="row-title">Withdrawal address:</span>
            <span class="row-value">{{ destinationAddress }}</span>
          </p>
        </div>
        <p class="info">
          After your receive the withdraw successful email from virturo, it means that crypto has been transferred out from virturo.
        </p>
        <button class="btn" type="button" @click="$emit('close')">Done</button>
        <CloseIcon class="close" @click="$emit('close')" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';
import { API_URL } from '@/constants';
import CloseIcon from '@/static/img/icons/close-popup.svg?inline';
import SuccessIcon from '@/static/img/icons/success.svg?inline';

export default {
  name: 'SubmittedPopUp',
  components: {
    SuccessIcon,
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
      transfer: 0,
    };
  },
  computed: {
    ...mapGetters({
      selectedCoin: 'user/selectedCoin',
    }),
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
  }
}

.info {
  font-size: 10px;
  font-weight: 400;
  line-height: 1.3;
  color: $dark-grey;
  margin-top: 24px;
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

@media (max-width: 375px) {
  .popup-container {
    width: calc(100% - 32px);
  }
}
</style>
