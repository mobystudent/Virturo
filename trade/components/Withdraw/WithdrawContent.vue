<template>
  <div class="page-content">
    <template v-if="loading">
      <div class="loader-wrapper">
        <Loader />
      </div>
    </template>
    <template v-else>
      <div class="page-inner">
        <Tabs :enabled="enwithdraw">
          <Tab label="Crypto">
            <CryptoTabContent />
            <RecentWithdrawalsSection />
            <FAQ :links="faqCryptoLinks" />
          </Tab>
          <Tab label="Bank Transfer">
            <BankAmountSection />
            <RecentWithdrawalsSection />
            <FAQ :links="faqBankLinks" />
          </Tab>
        </Tabs>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RecentWithdrawalsSection from './components/Crypto/components/RecentWithdrawalsSection.vue';
import CryptoTabContent from './components/Crypto/CryptoTabContent.vue';
import BankAmountSection from './components/Bank/BankAmountSection.vue';
import Tabs from '@/components/common/Tabs.vue';
import Tab from '@/components/common/Tab.vue';
import Loader from '@/components/common/Loader.vue';
import FAQ from '@/components/common/FAQ/FAQ.vue';
import { WITHDRAW_BANK_ID, WITHDRAW_CRYPTO_ID } from '@/constants';

export default {
  name: 'WithdrawContent',
  components: {
    Tabs,
    Tab,
    CryptoTabContent,
    RecentWithdrawalsSection,
    BankAmountSection,
    Loader,
    FAQ,
  },
  data() {
    return {
      loading: true,
      faqCryptoLinks: [],
      faqBankLinks: [],
    };
  },
  computed: {
    ...mapGetters({
      enwithdraw: 'settings/enwithdraw',
      links: 'settings/faqwithdraw',
    }),
  },
  watch: {
    links(val) {
      this.faqCryptoLinks = val[WITHDRAW_CRYPTO_ID] || [];
      this.faqBankLinks = val[WITHDRAW_BANK_ID] || [];
    },
  },
  created() {
    this.faqCryptoLinks = this.links[WITHDRAW_CRYPTO_ID] || [];
    this.faqBankLinks = this.links[WITHDRAW_BANK_ID] || [];
  },
  mounted() {
    Promise.all([
      this.$store.dispatch('getCoins'),
      this.$store.dispatch('exchange/getExchangeRates'),
      this.$store.dispatch('user/getLastWithdraws'),
    ]).finally(() => {
      this.loading = false;
    });
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
