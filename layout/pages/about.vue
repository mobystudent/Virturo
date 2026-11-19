<template>
  <div v-if="showContent">
    <TopSection />

    <!-- <CompanyVideo /> -->

    <Assurance />

    <div class="desktop-modal">
      <OurLeaders />
    </div>
    <div class="mob-modal">
      <OurLeaderMob />
    </div>

    <GridImages />

    <ZebraContent2 />
    <Reviews />
    <div class="desktop-timeline">
      <TimelineDesktop />
    </div>
    <div class="mob-timeline">
      <TimelineMobile />
    </div>
  </div>
</template>

<script>

import TopSection from '@/components/About/TopSection.vue';
import GridImages from '@/components/About/GridImages.vue';
import Assurance from '@/components/About/Assurance.vue';
import Reviews from '@/components/About/Reviews.vue';
import ZebraContent2 from '@/components/About/ZebraContent2.vue';
import TimelineMobile from '@/components/About/TimelineMobile.vue';
import TimelineDesktop from '@/components/About/TimelineDesktop.vue';
import OurLeaders from '@/components/About/OurLeaders.vue';
import OurLeaderMob from '@/components/About/OurLeaderMob.vue';

export default {
  name: 'Company',
  components: {
    ZebraContent2,
    TopSection,
    GridImages,
    Assurance,
    Reviews,
    TimelineMobile,
    TimelineDesktop,
    OurLeaders,
    OurLeaderMob,
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
      title: 'About Virturo | Trust and Excellence in Online Trading',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Learn about Virturo’s mission to connect traders with reliable platforms. Discover how trust, integrity, and innovation define Virturo.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'About Virturo | Trust and Excellence in Online Trading',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'about Virturo, online trading mission, trusted platforms, reliable trading, trading company vision',
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

<style lang="scss">
  .container {
    max-width: 1080px;
    padding: 0 24px;
    margin: 0 auto;
    box-sizing: content-box;
  }

  .desktop-timeline,
  .desktop-modal {
    display: block;
    @media (max-width: 998px) {
      display: none;
    }
  }

  .mob-timeline,
  .mob-modal {
    display: none;
    max-width: none;
    @media (max-width: 998px) {
      display: block;
    }
  }
</style>
