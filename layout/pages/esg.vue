<template>
  <div
    v-if="showContent"
    class="page-wrapper"
  >
    <TopSection />
    <ESGSlider />
    <BackgroundPanelSection />
    <ESGScoresCrucial />
    <ESGIntegration />
    <AwareInvestmentStrategy />
  </div>
</template>
<script>
import TopSection from '@/components/ESG/TopSection.vue';
import AwareInvestmentStrategy from '@/components/ESG/AwareInvestmentStrategy.vue';
import ESGScoresCrucial from '@/components/ESG/ESGScoresCrucial.vue';
import ESGIntegration from '@/components/ESG/ESGIntegration.vue';
import BackgroundPanelSection from '@/components/ESG/BackgroundPanelSection.vue';
import ESGSlider from '@/components/ESG/ESGSlider.vue';

export default {
  name: 'Assets',
  components: {
    TopSection,
    AwareInvestmentStrategy,
    ESGScoresCrucial,
    ESGIntegration,
    BackgroundPanelSection,
    ESGSlider,
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
      title: ' ESG Practices | Virturo - Sustainable and Ethical Trading',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Virturo prioritizes sustainability with its commitment to Environmental, Social, and Governance (ESG) principles. Trade responsibly with us.',
        },
        {
          hid: 'title',
          name: 'title',
          content: ' ESG Practices | Virturo - Sustainable and Ethical Trading',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: ' ESG trading, sustainable investing, ethical trading practices, Virturo ESG, responsible trading',
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

<style scoped>
.page-wrapper {
  background-color: #FFFFFF;
}
</style>
