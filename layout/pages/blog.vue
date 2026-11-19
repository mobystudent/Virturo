<template>
  <div v-if="showContent">
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'Blog',
  layout: 'mainlayout',
  scrollToTop: true,
  data() {
    return {
      showContent: true,
    };
  },
};
</script>

<style lang="scss">
  .container {
    max-width: 1080px;
    padding: 0 24px;
    margin: 0 auto;
    box-sizing: content-box;
  }
  li {
    list-style: none;
  }
</style>
