<template>
  <div v-if="showContent" />
</template>
<script>
export default {
  name: 'PrivacyPolicy',
  layout: 'mainlayout',
  data() {
    return {
      showContent: false,
    };
  },
  head() {
    return {
      title: 'Privacy Policy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Privacy Policy',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Privacy Policy',
        },
      ],
    };
  },
  mounted() {
    return this.$route.replace('404');
  },
};
</script>
