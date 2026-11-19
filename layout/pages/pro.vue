<template>
  <div>
    <HeroSection />
    <KeyFeaturesSection />
    <TradingConditionsSection />
    <DedicatedExpertsSection />
    <ProfessionalAccountSection />
  </div>
</template>

<script>
import HeroSection from '@/components/Pro/HeroSection.vue';
import KeyFeaturesSection from '@/components/Pro/KeyFeaturesSection.vue';
import TradingConditionsSection from '@/components/Pro/TradingConditionsSection.vue';
import DedicatedExpertsSection from '@/components/Pro/DedicatedExpertsSection.vue';
import ProfessionalAccountSection from '@/components/Pro/ProfessionalAccountSection.vue';

export default {
  name: 'Pro',
  components: {
    HeroSection,
    KeyFeaturesSection,
    TradingConditionsSection,
    DedicatedExpertsSection,
    ProfessionalAccountSection,
  },
  layout: 'mainlayout',
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0]; 
    
    return {
      title: 'Pro Trading | Elevate Your Experience with Virturo',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Unlock advanced features and tools with Virturo Pro Trading. Designed for seasoned traders, enjoy precision, speed, and unparalleled insights to take your trading to the next level.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Pro Trading | Elevate Your Experience with Virturo',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Pro trading, advanced trading tools, Virturo Pro, professional trading, expert trading solutions, advanced trading platform, trading for pros',
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
