<template>
  <div>
    <TopSection />
    <WelcomeSection />
    <CompetitiveSpreads />
    <AdditionalFees />
    <DepositsAndWithdrawals />
    <CryptoFundInvestment />
    <AccordionSection />
  </div>
</template>

<script>
import TopSection from '@/components/FeesAndCharges/TopSection.vue';
import AccordionSection from '@/components/FeesAndCharges/AccordionSection.vue';
import CryptoFundInvestment from '@/components/FeesAndCharges/CryptoFundInvestment.vue';
import WelcomeSection from '@/components/FeesAndCharges/WelcomeSection.vue';
import AdditionalFees from '@/components/FeesAndCharges/AdditionalFees.vue';
import DepositsAndWithdrawals from '@/components/FeesAndCharges/DepositsAndWithdrawals.vue';
import CompetitiveSpreads from '@/components/FeesAndCharges/CompetitiveSpreads.vue';

export default {
  name: 'TradingAccounts',
  components: {
    TopSection,
    AccordionSection,
    CryptoFundInvestment,
    WelcomeSection,
    AdditionalFees,
    DepositsAndWithdrawals,
    CompetitiveSpreads,
  },
  layout: 'mainlayout',
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0]; 
    return {
      title: 'Fees and Charges | Virturo - Transparent Costs for Traders',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Virturo offers clear and competitive fees with no hidden charges. Discover all the details of our pricing structure for hassle-free trading.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Fees and Charges | Virturo - Transparent Costs for Traders',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Virturo fees, trading costs, low trading fees, transparent pricing, commission-free trading',
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
};
</script>

<style lang="scss">
  .container {
    max-width: 1080px;
    padding: 0 24px;
    margin: 0 auto;
    box-sizing: content-box;
  }
</style>
