<template>
  <div class="iframe-wrapper">
    <Loader v-show="loading" />
    <PageHeader :title="title" />
    <iframe :src="src" style="width: 100%; height: 100%" @load="handleLoad"> Hello! </iframe>
  </div>
</template>

<script>
import PageHeader from './PageHeader';
import { ssoCookie } from '~/middleware/token';
import Loader from '@/components/common/Loader.vue';
export default {
  name: 'TradeIframe',
  components: { PageHeader, Loader },
  data() {
    return {
      src: '',
      loading: false,
      title: 'Trade',
    };
  },
  watch: {
    $route(to) {
      if (to.path === '/') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      }
    },
  },
  mounted() {
    this.src = `${process.env.NUXT_ENV_DX_API_URL || 'https://platform.virturo.com'}?token=${this.$cookies.get(ssoCookie)}`;
  },
  methods: {
    handleLoad() {
      this.loading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.iframe-wrapper {
  height: 0;
  width: 0;
  overflow: hidden;
  position: relative;
  background-color: $main-primary-color;
}

.page-wrapper.sidebar-minimized .show-iframe {
  width: calc(100vw - 80px);
  margin-left: 80px;
}

.show-iframe {
  width: calc(100vw - 283px);
  height: 100vh;
  margin-left: 283px;
  margin-bottom: -16px;

  .page-header {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  iframe {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border: none;
    z-index: 1;
  }
  .loader {
    position: relative;
    z-index: 2;
  }
}

@media (max-width: 767px) {
  .show-iframe {
    width: 100vw;
    margin-left: 0;

    .page-header {
      display: block;
    }

    iframe,
    .loader {
      top: 88px;
    }
  }
}
</style>
