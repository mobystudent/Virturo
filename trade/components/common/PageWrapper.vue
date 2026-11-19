<template>
  <div class="menu-page" :class="{ 'open-sidebar': sidebar }">
    <div class="menu-page-inner">
      <PageHeader :title="title" />
      <slot name="content" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import PageHeader from './PageHeader';

export default {
  name: 'PageWrapper',
  components: { PageHeader },
  props: {
    title: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    ...mapGetters({
      sidebar: 'settings/sidebar',
    }),
  },
};
</script>

<style lang="scss" scoped>
.menu-page {
  display: flex;
  flex-direction: column;
  min-height: calc($min-page-height - 32px);
  width: calc(100% - 299px);
  background-color: $common-white;
  border: 1px solid $light-silver;
  border-radius: 12px;
  margin: 16px 16px 0 283px;
  transition: width 0.3s ease-in-out, margin 0.3s ease-in-out;
}

.menu-page-inner {
  position: relative;
  height: 100%;
  flex-grow: 1;
  margin-left: 110px;
  padding-right: 44px;
  transition: margin-left 0.3s ease-in-out;
}

@media (max-width: 1440px) {
  .menu-page-inner {
    padding-right: 16px;
  }
}

@media (max-width: 1380px) {
  .menu-page-inner {
    margin-left: 16px;
  }
}

@media (max-width: 767px) {
  .menu-page {
    min-height: $min-page-height;
    margin: 0;
    border: none;
    border-radius: 0;
    width: 100%;

    &.open-sidebar {
      position: relative;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $charcoal-grey-transparent;
        z-index: 15;
      }
    }
  }

  .menu-page-inner {
    max-width: 100%;
    margin-left: 0;
    padding: 0;
  }
}
</style>
