<template>
  <div>
    <MainSection />
    <Awards />
    <LeadingPurposeSection />
    <WeGainedTrustSection />
    <CoreValuesSection />
    <BannerSection />
    <ReviewsSection />
    <SubscribeSection />
    <BlogItemsSection />
  </div>
</template>

<script>
import MainSection from '@/components/HomePage/MainSection.vue';
import Awards from '@/components/HomePage/Awards.vue';
import LeadingPurposeSection from '@/components/HomePage/LeadingPurposeSection.vue';
import CoreValuesSection from '@/components/HomePage/CoreValuesSection.vue';
import WeGainedTrustSection from '@/components/HomePage/WeGainedTrustSection.vue';
import BannerSection from '@/components/HomePage/BannerSection.vue';
import ReviewsSection from '@/components/HomePage/ReviewsSection.vue';
import SubscribeSection from '@/components/common/SubscribeSection.vue';
import BlogItemsSection from '@/components/HomePage/BlogItemsSection.vue';

export default {
  name: 'HomePage',
  components: {
    MainSection,
    LeadingPurposeSection,
    CoreValuesSection,
    WeGainedTrustSection,
    BannerSection,
    ReviewsSection,
    SubscribeSection,
    BlogItemsSection,
    Awards,
  },
  layout: 'mainlayout',
  data() {
    return {
      isMain: true,
      isBlack: false,
      shouldShowComingSoon: !process.env.NUXT_APP_DEV_ENV,
    };
  },
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0]; 

    return {
      title: 'Virturo | Virtue in Every Trade',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Virturo combines excellence and innovation to deliver trusted trading solutions. Start trading with confidence, backed by proven track records, transparent processes, and excellent support.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Virturo | Virtue in Every Trade',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Virturo, online trading, trusted trading platforms, secure trading, financial trading, Virtue in Every Trade',
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
.section {
  width: 100%;
  background-color: #ffffff;

  .wrapper {
    max-width: 1340px;
    width: 100%;
    padding: 0 30px;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }

  &-black {
    background-color: #1C1C1C;

    .wrapper {
      max-width: 1160px;
    }
  }
}
</style>
