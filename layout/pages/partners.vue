<template>
  <div v-if="showContent">
    <TopSection />
    <PartnersSection />
    <StartEarning />
    <NumbersSection />
    <BackgroundPanelSection />
    <SendMessageSection />
  </div>
</template>

<script>
import TopSection from '@/components/Partners/TopSection.vue';
import StartEarning from '@/components/Partners/StartEarning.vue';
import BackgroundPanelSection from '@/components/Partners/BackgroundPanelSection.vue';
import SendMessageSection from '@/components/Partners/SendMessageSection.vue';
import NumbersSection from '@/components/Partners/NumbersSection.vue';
import PartnersSection from '@/components/Partners/PartnersSection.vue';

export default {
  name: 'Partners',
  components: {
    TopSection,
    StartEarning,
    BackgroundPanelSection,
    SendMessageSection,
    NumbersSection,
    PartnersSection,
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
      title: 'Partners | Virturo',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Partners | Virturo',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Partners | Virturo',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Virturo media center, press releases, trading news, Virturo updates, online trading announcements',
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
  // mounted() {
  //   return this.$route.replace('404');
  // },
};
</script>
