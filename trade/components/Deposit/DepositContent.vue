<template>
  <div class="page-content">
    <template v-if="loading">
      <div class="loader-wrapper">
        <Loader />
      </div>
    </template>
    <template v-else>
      <div class="page-inner">
        <Tabs :enabled="endeposit">
          <Tab label="Crypto">
            <CryptoDeposit :title="title" />
            <WalletAddress v-if="isShowWalletAddress" />
            <TableDeposits />
            <FAQ :links="faqCryptoLinks" />
          </Tab>
          <Tab label="Wire Transfer">
            <WireTransfer />
            <FAQ :links="faqBankLinks" />
          </Tab>
          <Tab label="Credit Card">
            <CreditCard />
            <FAQ :links="faqCardLinks" />
          </Tab>
        </Tabs>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import WireTransfer from './components/WireTransfer/WireTransfer.vue';
import CreditCard from './components/CreditCard/CreditCard.vue';
import WalletAddress from './components/CryptoDeposit/WalletAddress.vue';
import TableDeposits from './components/CryptoDeposit/TableDeposits.vue';
import CryptoDeposit from './components/CryptoDeposit/CryptoDeposit.vue';
import Tabs from '@/components/common/Tabs.vue';
import Tab from '@/components/common/Tab.vue';
import Loader from '@/components/common/Loader.vue';
import FAQ from '@/components/common/FAQ/FAQ.vue';
import { DEPOSIT_CRYPTO_ID, DEPOSIT_BANK_ID, DEPOSIT_CARD_ID } from '@/constants';

export default {
  name: 'DepositContent',
  components: {
    CryptoDeposit,
    WireTransfer,
    CreditCard,
    WalletAddress,
    TableDeposits,
    Tabs,
    Tab,
    Loader,
    FAQ,
  },
  data() {
    return {
      loading: true,
      isShowWalletAddress: true,
      title: 'Crypto Deposit',
      faqCryptoLinks: [],
      faqBankLinks: [],
      faqCardLinks: [],
    };
  },
  computed: {
    ...mapGetters({
      endeposit: 'settings/endeposit',
      links: 'settings/faqdeposit',
    }),
  },
  watch: {
    links(val) {
      this.faqCryptoLinks = val[DEPOSIT_CRYPTO_ID] || [];
      this.faqBankLinks = val[DEPOSIT_BANK_ID] || [];
      this.faqCardLinks = val[DEPOSIT_CARD_ID] || [];
    },
  },
  mounted() {
    Promise.all([
      this.$store.dispatch('getCoins'),
      this.$store.dispatch('exchange/getExchangeRates'),
      this.$store.dispatch('user/getLastDeposits'),
    ]).finally(() => {
      this.loading = false;
    });
  },
  created() {
    this.faqCryptoLinks = this.links[DEPOSIT_CRYPTO_ID] || [];
    this.faqBankLinks = this.links[DEPOSIT_BANK_ID] || [];
    this.faqCardLinks = this.links[DEPOSIT_CARD_ID] || [];
  },
};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  height: calc(100vh - 142px);
  width: calc(100% + 94px);
  margin-left: -94px;
  transition: margin-left 0.3s ease-in-out;
}

.page-content {
  padding-bottom: 16px;
}

@media (max-width: 1380px) {
  .loader-wrapper {
    width: 100%;
    margin-left: 0;
  }
}

@media (max-width: 767px) {
  .page-inner {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
  }

  .loader-wrapper {
    height: calc(100vh - 88px);
  }

  .page-content {
    padding-bottom: 0;
  }
}
</style>
