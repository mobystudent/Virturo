const { body } = document;
const WIDTH = 767;

export default {
  watch: {
    $route(route) {
      if (this.device === 'mobile') {
        this.$store.dispatch('settings/closeSideBar');
      }
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.$_resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.$_resizeHandler);
  },
  mounted() {
    const isMobile = this.$_isMobile();
    if (isMobile) {
      this.$store.dispatch('settings/toggleDevice', 'mobile');
      this.$store.dispatch('settings/closeSideBar');
    }
  },
  methods: {
    // use $_ for mixins properties
    // https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential
    $_isMobile() {
      const rect = body.getBoundingClientRect();
      return rect.width - 1 < WIDTH;
    },
    $_resizeHandler() {
      if (!document.hidden) {
        const isMobile = this.$_isMobile();
        this.$store.dispatch('settings/toggleDevice', isMobile ? 'mobile' : 'desktop');

        if (isMobile) {
          this.$store.dispatch('settings/closeSideBar');
        }
      }
    },
  },
};
