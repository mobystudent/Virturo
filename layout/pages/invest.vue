<template>
  <div>
    <Hero />
    <WhyInvest />
    <InvestmentFunds />
    <ProcessSection />
    <AssessmentSection />
    <SecuritySection />
    <FaqSection />
  </div>
</template>

<script>
import Hero from '@/components/Invest/Hero.vue';
import WhyInvest from '@/components/Invest/WhyInvest.vue';
import InvestmentFunds from '@/components/Invest/InvestmentFunds.vue';
import ProcessSection from '@/components/Invest/ProcessSection.vue';
import AssessmentSection from '@/components/Invest/AssessmentSection.vue';
import SecuritySection from '@/components/Invest/SecuritySection.vue';
import FaqSection from '@/components/Invest/FaqSection.vue';

export default {
  name: 'Invest',
  components: {
    Hero,
    WhyInvest,
    InvestmentFunds,
    ProcessSection,
    AssessmentSection,
    SecuritySection,
    FaqSection,
  },
  layout: 'mainlayout',
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0]; 
    
    return {
      title: 'Invest with Virturo | Exclusive High Growth Funds',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Invest with Virturo | Exclusive High Growth Funds',
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Gain access to exclusive, high-performing digital asset funds with Virturo. Invest in growth, staking, or balanced strategies tailored for sophisticated investors. Minimum investment: $250,000. By invitation only.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Virturo, invest in digital assets, blockchain investment, crypto fund, staking fund, private investment, alternative investments, high-net-worth investing, digital wealth management, asset growth',
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
