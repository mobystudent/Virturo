<template>
  <div
    v-if="showContent"
    class="page-wrapper"
  >
    <TopSection />
    <RecentPressReleases />
    <Reviews />
    <ContactMediaTeam />
    <FollowUsSocialMedia />
  </div>
</template>
<script>
import TopSection from '@/components/MediaCenter/TopSection.vue';
import Reviews from '@/components/MediaCenter/Reviews.vue';
import FollowUsSocialMedia from '@/components/MediaCenter/FollowUsSocialMedia.vue';
import ContactMediaTeam from '@/components/MediaCenter/ContactMediaTeam.vue';
import RecentPressReleases from '@/components/MediaCenter/RecentPressReleases.vue';

export default {
  name: 'MediaCenter',
  components: {
    TopSection,
    RecentPressReleases,
    ContactMediaTeam,
    FollowUsSocialMedia,
    Reviews,
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
      title: 'Media Center | Virturo - News and Updates',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explore Virturo’s Media Center for the latest announcements, press releases, and industry news. Stay updated with everything Virturo.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Media Center | Virturo - News and Updates',
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
};
</script>
