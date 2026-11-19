<template>
  <div v-if="showContent">
    <TopSection />
    <FinancialHorizon />
    <EmpoweringTradingSuccess />
    <EliteClubSection />
    <TradingMassonry />
    <TradingView />
    <TimingIsEverything />
    <PowerfulTrading />
    <OptimizeOprofits />
  </div>
</template>

<script>
import TopSection from '@/components/TradingAccounts/TopSection.vue';
import TimingIsEverything from '@/components/TradingAccounts/TimingIsEverything.vue';
import EliteClubSection from '@/components/TradingAccounts/EliteClubSection.vue';
import EmpoweringTradingSuccess from '@/components/TradingAccounts/EmpoweringTradingSuccess.vue';
import OptimizeOprofits from '@/components/TradingAccounts/OptimizeOprofits.vue';
import PowerfulTrading from '@/components/TradingAccounts/PowerfulTrading.vue';
import TradingMassonry from '@/components/TradingAccounts/TradingMassonry.vue';
import FinancialHorizon from '@/components/TradingAccounts/FinancialHorizon.vue';
import TradingView from '@/components/TradingAccounts/TradingView.vue';

export default {
  name: 'TradingAccounts',
  components: {
    PowerfulTrading,
    OptimizeOprofits,
    TopSection,
    TimingIsEverything,
    EliteClubSection,
    EmpoweringTradingSuccess,
    TradingMassonry,
    FinancialHorizon,
    TradingView,
  },
  layout: 'mainlayout',
  data() {
    return {
      showContent: true,
    };
  },
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0];

    return {
      title: 'Trading Accounts | Virturo - Accounts for Every Trader',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Discover Virturo’s range of trading accounts designed for traders of all levels. Choose from flexible options to meet your trading goals.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Trading Accounts | Virturo - Accounts for Every Trader',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Virturo trading accounts, online trading accounts, beginner accounts, professional trading accounts, flexible trading',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `${baseUrl}${path}`
        }
      ]
    };
  },
  mounted() {
    // return this.$route.replace('404');
  },
};
</script>

<style lang="scss">
  .container {
    max-width: 1150px;
    padding: 0 15px;
    margin: 0 auto;
  }
</style>
