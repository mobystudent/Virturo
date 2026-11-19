<template>
  <div
    v-if="showContent"
    class="main"
  >
    <GlobalHeader />
    <Nuxt />
    <GlobalFooter />
    <!-- <Cookie /> -->
    <HubSpot />
    <ButtonUp v-if="shouldShowButtonUp" />
  </div>
</template>
<script>
import GlobalHeader from '@/components/common/GlobalHeader.vue';
import GlobalFooter from '@/components/common/GlobalFooter.vue';
// import Cookie from '@/components/common/Cookie.vue';
// TODO uncomment when it will needed
import HubSpot from '@/components/common/HubSpot.vue';
import ButtonUp from '@/components/common/ButtonUp.vue';

export default {
  name: 'Mainlayout',
  components: {
    // Cookie,
    ButtonUp,
    GlobalHeader,
    GlobalFooter,
    HubSpot,
  },
  data() {
    return {
      shouldShowButtonUp: false,
      showContent: true,
    };
  },
  head() {
    return {
      script: [
        {
          src: 'https://cdn-cookieyes.com/client_data/e37623af7f13cf379a9ddf31/script.js',
          // async: true,
          id: 'cookieyes',
        },
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-R814CD7FR6',
          async: true,
        },
        {
          type: 'text/javascript',
          src: '/gtag.js',
        },
      ],
    };
  },
  created() {
    // this.checkRoute();
  },
  methods: {
    // onConsentAccepted() {
    //   this.consentAccepted = true;
    // },

    // checkRoute() {
    //   const currentRoute = this.$route.path;
    //   const allowedRoutes = ['/', '/trading-accounts', '/trading-accounts/', '/about', '/about/', '/support', '/support/', '/legal', '/legal/', '/learn', '/learn/'];

    //   if (!allowedRoutes.includes(currentRoute)) {
    //     // if (this.$route.path !== '/' && this.$route.path !== '/trading-accounts') {
    //     // Переадресация на 404
    //     this.$router.replace('/404');
    //   } else {
    //     this.showContent = true;
    //   }
    // },
  },
};
</script>

<style scoped lang="scss">
.main {
  overflow: hidden;
}
</style>
