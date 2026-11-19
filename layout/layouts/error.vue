<template>
  <Error />
</template>
<script>
import Error from '@/components/common/Error.vue';

export default {
  components: { Error },
  layout: 'error',
  props: ['error'],
  head() {
    return {
      title: 'Virturo - Sustainable and Ethical Trading',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Virturo - Sustainable and Ethical Trading',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Virturo - Sustainable and Ethical Trading',
        },
      ],
    };
  }, // you can set a custom layout for the error page
};
</script>
