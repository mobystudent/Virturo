<template>
  <div class="crypto-content">
    <template v-if="currentStep === 1">
      <CryptoCoinSection :title="titleCoin" :current-step="currentStep" @setStep="stepSend" />
    </template>
    <template v-else>
      <CryptoAmountSection :title-amount="titleAmount" :title-coin="titleCoin" :current-step="currentStep" @setStep="stepSend" />
    </template>
  </div>
</template>

<script>
import CryptoCoinSection from './components/CryptoCoinSection.vue';
import CryptoAmountSection from './components/CryptoAmountSection.vue';

export default {
  name: 'CryptoTabContent',
  components: {
    CryptoCoinSection,
    CryptoAmountSection,
  },
  data() {
    return {
      currentStep: 1,
      titleCoin: 'Create a withdrawal',
      titleAmount: 'Enter Amount',
    };
  },
  methods: {
    stepSend(step) {
      this.currentStep = step;
    },
  },
};
</script>

<style lang="scss" scoped>
.crypto-content {
  padding-top: 24px;
}
</style>
