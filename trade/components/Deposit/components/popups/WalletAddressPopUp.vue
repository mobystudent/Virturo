<template>
  <transition name="modal" appear>
    <div class="popup-wrapper">
      <div class="popup-container">
        <h2 class="title">Wallet address</h2>
        <p class="subtitle">Scan this QR Code with your phone camera</p>
        <div class="qr-code">
          <QrcodeVue :value="address" background="#ffffff" foreground="#0e0523" size="144" level="H"></QrcodeVue>
        </div>
        <p class="info">
          <InfoIcon />
          <span>Send only {{ (selectedCoin && selectedCoin.short_code) || '' }} to this deposit address</span>
        </p>
        <div class="rows">
          <p class="row">
            <span class="title-row">Deposit address:</span>
            <span class="value">{{ address }}</span>
          </p>
          <p class="row">
            <span class="title-row">Network:</span>
            <span class="value">{{ selectedNetwork.short_code }}</span>
          </p>
        </div>
        <CloseIcon class="close" @click="$emit('close')" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';
import QrcodeVue from 'qrcode.vue';
import CloseIcon from '@/static/img/icons/close-popup.svg?inline';
import InfoIcon from '@/static/img/icons/info.svg?inline';

export default {
  name: 'WalletAddressPopUp',
  components: {
    QrcodeVue,
    CloseIcon,
    InfoIcon,
  },
  props: {
    address: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters({
      selectedNetwork: 'user/selectedNetwork',
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
  padding: 30px 30px 40px;
  background-color: $common-white;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.title {
  color: $dark-grey;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  padding-bottom: 12px;
}

.subtitle {
  color: $dark-grey;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  padding-bottom: 24px;
}

.qr-code {
  width: 160px;
  height: 160px;
  border-radius: 10px;
  border: 0.8px solid rgba(7, 68, 41, 0.2);
  background-color: $common-white;
  padding: 8px;
}

.info {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: $common-green;
  padding-top: 24px;
  padding-bottom: 24px;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }
}

.rows {
  width: 100%;
  overflow: hidden;

  .row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: $common-green;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;

    .title-row {
      color: $dark-grey;
      padding-bottom: 4px;
    }

    &:not(:first-child) {
      padding-top: 12px;
      margin-top: 12px;
      border-top: 1px dashed $light-silver;
    }
  }
}

.close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 22px;
  height: 22px;
  cursor: pointer;
}

@media (max-width: 375px) {
  .popup-container {
    width: calc(100% - 32px);
  }
}
</style>
