<template>
  <Error />
</template>
<script>
import Error from '@/components/common/Error.vue';

export default {
  components: { Error },
  layout: 'error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'], // you can set a custom layout for the error page
};
</script>
