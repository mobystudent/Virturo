<template>
  <PageWrapper :title="title">
    <template #content>
      <SupportContent />
    </template>
  </PageWrapper>
</template>

<script>
import SupportContent from '@/components/Support/SupportContent.vue';
import PageWrapper from '@/components/common/PageWrapper.vue';

export default {
  name: 'Support',
  components: { PageWrapper, SupportContent },
  layout: 'layout',
  data() {
    return {
      title: 'Support',
    };
  },
};
</script>
