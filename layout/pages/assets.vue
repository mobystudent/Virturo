<template>
  <div class="page-wrapper">
    <TopSection />
    <AssetsItems />
    <AssetsContent />
  </div>
</template>
<script>
import TopSection from '@/components/Assets/TopSection.vue';
import AssetsContent from '@/components/Assets/AssetsContent.vue';
import AssetsItems from '@/components/Assets/AssetsItems.vue';

export default {
  name: 'Assets',
  components: { TopSection, AssetsContent, AssetsItems },
  layout: 'mainlayout',
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0]; 
    
    return {
      title: 'Trade Assets | Virturo - A World of Opportunities',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Trade a variety of assets with Virturo, including stocks, forex, cryptocurrencies, commodities, and indices. Diversify and grow your portfolio today.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Trade Assets | Virturo - A World of Opportunities',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'trading assets, forex trading, stock trading, crypto trading, commodities, indices, asset diversification',
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
