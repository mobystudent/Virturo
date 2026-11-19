<template>
  <div class="wallet-address-content">
    <div class="section">
      <Notification />
      <WalletAddressPopUp v-if="isShowPopUp" :address="addressWallet" @close="isShowPopUp = false" />
      <h2 class="title">Wallet address</h2>
      <p class="subtitle" v-if="isShowAddress && addressWallet">
        This wallet address is personal and linked to your account
      </p>
      <p class="subtitle" v-else>
        To make a deposit, first create a wallet by clicking “Generate new.”
      </p>

      <div class="section-content">
        <div class="generated-wallet-address">
          <div class="top">
            <div class="generated-address-container">
              <input
                ref="address"
                :value="addressWallet"
                class="generated-address"
                type="text"
                placeholder="Your new wallet address will appear here."
                readonly="readonly"
              />
              <p class="info" v-if="isShowAddress && addressWallet">
                <InfoIcon />
                <span>Send only {{ (selectedCoin && selectedCoin.short_code) || '' }} to this deposit address</span>
              </p>
              <p class="error-message" v-if="errorMessage">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.4898 2 2 6.4898 2 12C2 17.5102 6.4898 22 12 22C17.5102 22 22 17.5102 22 12C22 6.4898 17.5102 2 12 2ZM11.1837 8.42857C11.1837 8.02041 11.4898 7.61225 12 7.61225C12.5102 7.61225 12.8163 7.91837 12.8163 8.42857V12.5102C12.8163 12.9184 12.5102 13.3265 12 13.3265C11.4898 13.3265 11.1837 13.0204 11.1837 12.5102V8.42857ZM12 16.5918C11.4898 16.5918 10.9796 16.0816 10.9796 15.5714C10.9796 15.0612 11.4898 14.551 12 14.551C12.5102 14.551 13.0204 15.0612 13.0204 15.5714C13.0204 16.0816 12.5102 16.5918 12 16.5918Z" fill="#D95353"/>
                </svg>
                <span>{{ errorMessage }}</span>
              </p>
            </div>

            <div class="copy-qr-section">
              <template v-if="isShowGenerateButton">
                <button @click="generateNewAddress" class="btn-generation-new" :disabled="isButtonDisabled">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4.5 9H13.5" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 13.5V4.5" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Generate New</button>
              </template>

              <template v-if="isShowButton">
                <button @click="revealAddress" class="btn-view-address">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 6C8.41146 6 8.79948 6.07812 9.16406 6.23438C9.52865 6.39062 9.84635 6.60417 10.1172 6.875C10.388 7.14583 10.6042 7.46615 10.7656 7.83594C10.9271 8.20573 11.0052 8.59375 11 9C11 9.41667 10.9219 9.80469 10.7656 10.1641C10.6094 10.5234 10.3958 10.8411 10.125 11.1172C9.85417 11.3932 9.53385 11.6094 9.16406 11.7656C8.79427 11.9219 8.40625 12 8 12C7.58333 12 7.19531 11.9219 6.83594 11.7656C6.47656 11.6094 6.15885 11.3958 5.88281 11.125C5.60677 10.8542 5.39062 10.5365 5.23438 10.1719C5.07812 9.80729 5 9.41667 5 9C5 8.58854 5.07812 8.20052 5.23438 7.83594C5.39062 7.47135 5.60417 7.15365 5.875 6.88281C6.14583 6.61198 6.46354 6.39583 6.82812 6.23438C7.19271 6.07292 7.58333 5.99479 8 6ZM8 11C8.27604 11 8.53385 10.9479 8.77344 10.8438C9.01302 10.7396 9.22656 10.5964 9.41406 10.4141C9.60156 10.2318 9.74479 10.0208 9.84375 9.78125C9.94271 9.54167 9.99479 9.28125 10 9C10 8.72396 9.94792 8.46615 9.84375 8.22656C9.73958 7.98698 9.59635 7.77344 9.41406 7.58594C9.23177 7.39844 9.02083 7.25521 8.78125 7.15625C8.54167 7.05729 8.28125 7.00521 8 7C7.72396 7 7.46615 7.05208 7.22656 7.15625C6.98698 7.26042 6.77344 7.40365 6.58594 7.58594C6.39844 7.76823 6.25521 7.97917 6.15625 8.21875C6.05729 8.45833 6.00521 8.71875 6 9C6 9.27604 6.05208 9.53385 6.15625 9.77344C6.26042 10.013 6.40365 10.2266 6.58594 10.4141C6.76823 10.6016 6.97917 10.7448 7.21875 10.8438C7.45833 10.9427 7.71875 10.9948 8 11ZM8 2C8.74479 2 9.48438 2.09115 10.2188 2.27344C10.9531 2.45573 11.6458 2.72917 12.2969 3.09375C12.9479 3.45833 13.5365 3.90104 14.0625 4.42188C14.5885 4.94271 15.0208 5.55208 15.3594 6.25C15.5677 6.68229 15.7266 7.1276 15.8359 7.58594C15.9453 8.04427 16 8.51562 16 9H15C15 8.38542 14.9062 7.8099 14.7188 7.27344C14.5312 6.73698 14.2734 6.2474 13.9453 5.80469C13.6172 5.36198 13.2266 4.96615 12.7734 4.61719C12.3203 4.26823 11.8385 3.97396 11.3281 3.73438C10.8177 3.49479 10.2734 3.3125 9.69531 3.1875C9.11719 3.0625 8.55208 3 8 3C7.4375 3 6.8724 3.0625 6.30469 3.1875C5.73698 3.3125 5.19531 3.49479 4.67969 3.73438C4.16406 3.97396 3.67969 4.26823 3.22656 4.61719C2.77344 4.96615 2.38542 5.36198 2.0625 5.80469C1.73958 6.2474 1.47917 6.73698 1.28125 7.27344C1.08333 7.8099 0.989583 8.38542 1 9H0C0 8.52083 0.0546875 8.05208 0.164062 7.59375C0.273438 7.13542 0.432292 6.6875 0.640625 6.25C0.973958 5.5625 1.40365 4.95573 1.92969 4.42969C2.45573 3.90365 3.04688 3.45833 3.70312 3.09375C4.35938 2.72917 5.05208 2.45833 5.78125 2.28125C6.51042 2.10417 7.25 2.01042 8 2Z" fill="#352F44"/>
                  </svg>
                  View Address</button>
              </template>

              <template v-if="isShowAddress && addressWallet">
                <div @click="copyAddress"><CopyIcon />Copy</div>
                <div @click="isShowPopUp = true"><QrIcon />QR</div>
              </template>

              <template v-if="isGenerating">
                <button class="btn-generation" disabled>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path class="spinner-path" d="M10.8334 1.66663H9.16675V6.66663H10.8334V1.66663ZM10.8334 13.3333H9.16675V18.3333H10.8334V13.3333ZM18.3334 9.16662V10.8333H13.3334V9.16662H18.3334ZM6.66675 10.8333V9.16662H1.66675V10.8333H6.66675ZM12.5001 5.83329H14.1667V7.49996H12.5001V5.83329ZM15.8334 4.16663H14.1667V5.83329H15.8334V4.16663ZM7.50008 5.83329H5.83341V7.49996H7.50008V5.83329ZM4.16675 4.16663H5.83341V5.83329H4.16675V4.16663ZM12.5001 14.1666H14.1667V15.8333H15.8334V14.1666H14.1667V12.5H12.5001V14.1666ZM5.83341 14.1666V12.5H7.50008V14.1666H5.83341ZM5.83341 14.1666V15.8333H4.16675V14.1666H5.83341Z" fill="#352F44"/>
                  </svg>
                  Generating...</button>
              </template>
            </div>
          </div>

          <p v-if="isGenerating" class="generation-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0C4.4898 0 0 4.4898 0 10C0 15.5102 4.4898 20 10 20C15.5102 20 20 15.5102 20 10C20 4.4898 15.5102 0 10 0ZM9.1837 6.42857C9.1837 6.02041 9.4898 5.61225 10 5.61225C10.5102 5.61225 10.8163 5.91837 10.8163 6.42857V10.5102C10.8163 10.9184 10.5102 11.3265 10 11.3265C9.4898 11.3265 9.1837 11.0204 9.1837 10.5102V6.42857ZM10 14.5918C9.4898 14.5918 8.9796 14.0816 8.9796 13.5714C8.9796 13.0612 9.4898 12.551 10 12.551C10.5102 12.551 11.0204 13.0612 11.0204 13.5714C11.0204 14.0816 10.5102 14.5918 10 14.5918Z" fill="#48C3A8"/>
            </svg>
            Click the “View Address” button to reveal it
          </p>

          <p v-if="isShowButton" class="reveal-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0C4.4898 0 0 4.4898 0 10C0 15.5102 4.4898 20 10 20C15.5102 20 20 15.5102 20 10C20 4.4898 15.5102 0 10 0ZM9.1837 6.42857C9.1837 6.02041 9.4898 5.61225 10 5.61225C10.5102 5.61225 10.8163 5.91837 10.8163 6.42857V10.5102C10.8163 10.9184 10.5102 11.3265 10 11.3265C9.4898 11.3265 9.1837 11.0204 9.1837 10.5102V6.42857ZM10 14.5918C9.4898 14.5918 8.9796 14.0816 8.9796 13.5714C8.9796 13.0612 9.4898 12.551 10 12.551C10.5102 12.551 11.0204 13.0612 11.0204 13.5714C11.0204 14.0816 10.5102 14.5918 10 14.5918Z" fill="#48C3A8"/>
            </svg>
            Click the “View Address” button to reveal it
          </p>
        </div>

        <ul class="info-list" v-if="isShowAddress && addressWallet">
          <li class="item">
            <p class="caption">Expected arrival:</p>
            <p class="text">12 network confirmations</p>
          </li>
          <li class="item">
            <p class="caption">Expected unlock:</p>
            <p class="text">12 network confirmations</p>
          </li>
          <li class="item">
            <p class="caption">Minimum deposit</p>
            <p class="text">0.00000001 {{ (selectedCoin && selectedCoin.short_code) || '' }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WalletAddressPopUp from '../popups/WalletAddressPopUp.vue';
import { COIN_USDT, COIN_ETH } from '@/constants';
import Notification from '@/components/common/Notification.vue';
import CopyIcon from '@/static/img/icons/copy.svg?inline';
import QrIcon from '@/static/img/icons/qr.svg?inline';
import InfoIcon from '@/static/img/icons/info.svg?inline';

export default {
  name: 'WalletAddress',
  components: { CopyIcon, QrIcon, InfoIcon, WalletAddressPopUp, Notification },
  data() {
    return {
      generatedAddress: '',
      isShowPopUp: false,
      isGenerating: false,
      isShowAddress: false,
      isShowButton: false,
      isShowGenerateButton: false,
      addressWallet: '',
      isNewlyGenerated: false,
      errorCount: 0,
      isButtonDisabled: false,
      errorMessage: '',
    };
  },
  computed: {
    ...mapGetters({
      coins: 'coins',
      selectedCoin: 'user/selectedCoin',
      wallets: 'user/wallets',
    }),
  },
  watch: {
    selectedCoin(val) {
      if (val.short_code === COIN_USDT) {
        const eth = this.coins.find(el => el.short_code === COIN_ETH);
        const key = eth ? eth.id : '';
        this.generatedAddress = this.wallets[key] || '';
      } else {
        this.generatedAddress = this.wallets[val.id] || '';
      }
      this.errorMessage = '';
      this.errorCount = 0;
      this.isButtonDisabled = false;
      this.addressWallet = this.generatedAddress ?? '';
      this.checkButtons();
    },
    wallets(val) {
      if (this.selectedCoin.short_code === COIN_USDT) {
        const eth = this.coins.find(el => el.short_code === COIN_ETH);
        const key = eth ? eth.id : '';
        this.generatedAddress = val[key] || '';
      } else {
        this.generatedAddress = val[this.selectedCoin.id] || '';
      }
      this.errorMessage = '';
      // this.errorCount = 0;
      this.isButtonDisabled = false;
      this.checkButtons();
    },
  },
  created() {
    if (this.selectedCoin.short_code === COIN_USDT) {
      const eth = this.coins.find(el => el.short_code === COIN_ETH);
      const key = eth ? eth.id : '';
      this.generatedAddress = this.wallets[key] || '';
    } else {
      this.generatedAddress = this.wallets[this.selectedCoin.id] || '';
    }

    this.errorMessage = '';
    this.errorCount = 0;
    this.isButtonDisabled = false;
    this.addressWallet = this.generatedAddress ?? '';
    this.checkButtons();
  },
  methods: {
    copyAddress() {
      navigator.clipboard.writeText(this.$refs.address.value);
      this.$notify({
        group: 'custom-style',
        text: 'Copied',
      });
    },

    async generateNewAddress() {
      this.isGenerating = true;
      this.isShowGenerateButton = false;
      this.errorMessage = '';
      try {
        const coinId = this.selectedCoin.id;
        const requestData = { coin_id: coinId };

        const response = await this.$http.post('/api/users/webhook-generate-wallet', requestData);

        if (response.status === 200 || response.status === 204) {
          await this.$store.dispatch('getUserInfoLight');
          if (this.generatedAddress) {
            this.errorMessage = '';
            this.errorCount = 0;
            this.isShowGenerateButton = false;
            this.isShowButton = true;
            this.isNewlyGenerated = true;
          } else {
            this.errorActions();
          }
        }
      } catch (error) {
        if (error.response?.status === 500) {
          this.errorActions();
        }
      } finally {
        this.isGenerating = false;
      }
    },
    revealAddress() {
      // this.isShowAddress = false;
      // this.isNewlyGenerated = false;
      this.isShowGenerateButton = false;
      this.addressWallet = this.generatedAddress ?? '';
      this.checkButtons();
    },
    checkButtons() {
      if (this.generatedAddress) {
        this.isShowAddress = true;
        this.isNewlyGenerated = false;
        this.isShowGenerateButton = false;
        this.isShowButton = false;
      } else {
        this.isNewlyGenerated = false;
        this.isShowGenerateButton = true;
        this.isShowButton = false;
      }
    },
    errorActions() {
      this.errorCount++;
      if (this.errorCount >= 3) {
        this.errorMessage = "Too many failed attempts. Please contact support";
        this.isShowGenerateButton = true;
        this.isButtonDisabled = true;
      } else {
        this.isShowGenerateButton = true;
        this.errorMessage = "We couldn't generate your wallet. Please try again";
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.wallet-address-content {
  padding-top: 32px;
}

.section {
  max-width: 653px;
}

.title {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;
}

.subtitle {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.2;
  color: $dark-grey;
  padding-top: 2px;
}

.section-content {
  padding-top: 16px;
}

.top {
  display: flex;
  align-items: flex-start;
}

.generated-address-container {
  flex-grow: 1;
}

.generated-address {
  width: 100%;
  border-radius: 6px;
  border: 1px solid $light-khaki;
  outline: 2px solid transparent;
  padding: 10px 12px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: $common-green-transparent;
    outline-color: $light-mint;
  }

  &:hover:not(:focus) {
    border-color: $common-green-transparent;
  }

  &::placeholder {
    color: rgba(53, 47, 68, 0.40);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
}

.btn-generation-new {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  min-width: 165px;
  border-radius: 6px;
  border: 1px solid #48C3A8;
  background-color: transparent;
  color: #157275;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 22.5px */
  cursor: pointer;
  &:disabled {
    border: 1px solid #D9D9D9;
    background: #F5F5F5;
    color: #979797;
    cursor: not-allowed;

    svg path {
      stroke: #979797;
    }
  }
}

.btn-generation {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  min-width: 98px;
  border-radius: 6px;
  background: rgba(72, 195, 168, 0.50);
  color: #352F44;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 22.5px */
  cursor: not-allowed;
}

.btn-view-address {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  min-width: 98px;
  border-radius: 6px;
  background: var(--Green-02, #48C3A8);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
  color: #352F44;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 22.5px */
  cursor: pointer;
}

.generation-message,
.reveal-message {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #352F44;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
}

.error-message {
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #B82222;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
}

.copy-qr-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 98px;
    border-radius: 6px;
    background-color: $common-green-transparent;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: $dark-grey;
    padding: 10px;
    cursor: pointer;

    &:not(:first-child) {
      margin-left: 11px;
    }
  }

  svg {
    width: 22px;
    height: 22px;
    margin-right: 4px;
  }
}

.info {
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: $dark-grey;
  padding-top: 8px;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }
}

.info-list {
  width: 430px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  margin-top: 12px;

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 8px;
    padding-bottom: 8px;

    &:not(:last-child) {
      border-bottom: 1px solid $light-gray;
    }

    .caption {
      color: $dark-grey;
      padding-right: 5px;
    }

    .text {
      color: $dark-grey;
    }
  }
}

@media (max-width: 992px) {
  .top {
    justify-content: flex-start;
  }

  .btn-generation-new {
    min-width: 174px;
    font-size: 14px;
  }
}

@media (max-width: 767px) {
  .section {
    max-width: 100%;
  }

  .info-list {
    width: 100%;

    .item {
      padding-top: 12px;
    }
  }
}

@media (max-width: 480px) {
  .top {
    flex-direction: column;
  }

  .generated-address-container {
    width: 100%;
  }

  .copy-qr-section {
    width: 100%;
    margin-left: 0;
    padding-top: 16px;

    div {
      width: calc(50% - 8px);

      &:not(:first-child) {
        margin-left: 16px;
      }
    }
  }
}

@keyframes fade {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.spinner-path {
  animation: fade 2s ease-in-out infinite;
}

@for $i from 1 through 12 {
  .spinner-path:nth-of-type(#{$i}) {
    animation-delay: #{($i - 1) * 0.1}s;
  }
}
</style>
