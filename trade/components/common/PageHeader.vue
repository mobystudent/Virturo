<template>
  <div
    class="page-header"
    :class="[
      { 'bottom-line': device !== 'mobile' && (title === 'KYC' || title === 'Support' || title === 'Referral') },
      { 'referral-header': isReferralPage }
    ]"
  >
    <div class="page-header-inner">
      <div class="arrow-left">
        <ArrowLeftIcon />
        <h1 class="page-title">{{ title }}</h1>
      </div>
      <nuxt-link class="link-back" to="/">
        <span>Back to Trading</span>
      </nuxt-link>
      <span class="menu-btn" @click="toggleSideBar">
        <MenuIcon />
      </span>
    </div>
  </div>
</template>

<script>
import ArrowLeftIcon from '@/static/img/icons/arrow-left.svg?inline';
import MenuIcon from '@/static/img/icons/menu-icon.svg?inline';
import ResizeMixin from '@/mixin/ResizeHandler';

export default {
  name: 'PageHeader',
  components: { ArrowLeftIcon, MenuIcon },
  mixins: [ResizeMixin],
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    device() {
      return this.$store.state.settings.device;
    },
    isReferralPage() {
      return this.$route.path === '/referral';
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('settings/toggleSideBar');
    },
  },
};
</script> 

<style lang="scss" scoped>
.page-header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 40px;
  padding-bottom: 24px;
  background-color: $common-white;
  z-index: 15;

  &.bottom-line {
    padding-bottom: 28px;
    border-bottom: 1px solid $lighter-grey;
    max-width: 653px;

    &.referral-header {
      max-width: 664px;
    }
  }
}

.page-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 653px;
}

.referral-header {
  .page-header-inner {
    max-width: 664px;
  }
}

.page-title {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.4;
  color: $dark-grey;
}

.link-back {
  display: flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: 4px;
  background: $light-mint;

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: $dark-grey;
  }
}

.arrow-left {
  display: flex;
  align-items: center;

  svg {
    display: none;
  }
}

.menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid $common-green-transparent;
  background-color: $common-white;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

@media (max-width: 767px) {
  .menu-btn {
    display: flex;
  }

  .arrow-left svg {
    display: block;
    margin-right: 8px;
  }

  .link-back {
    display: none;
  }

  .page-header {
    background-color: $main-primary-color;
    padding: 24px 16px;

    &.bottom-line {
      max-width: 100%;
    }
  }

  .page-header-inner {
    max-width: 100%;
  }
}
</style>
