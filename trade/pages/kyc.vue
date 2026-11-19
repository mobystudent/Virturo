<template>
  <PageWrapper :title="title">
    <template #content>
      <KYCContent />
    </template>
  </PageWrapper>
</template>

<script>
import KYCContent from '@/components/KYC/KYCContent.vue';
import PageWrapper from '@/components/common/PageWrapper.vue';

export default {
  name: 'KYC',
  components: { PageWrapper, KYCContent },
  layout: 'layout',
  data() {
    return {
      title: 'KYC',
    };
  },
};
</script>
