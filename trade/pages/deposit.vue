<template>
  <PageWrapper :title="title">
    <template #content>
      <DepositContent />
    </template>
  </PageWrapper>
</template>

<script>
import PageWrapper from '@/components/common/PageWrapper.vue';
import DepositContent from '@/components/Deposit/DepositContent.vue';

export default {
  name: 'Deposit',
  components: { PageWrapper, DepositContent },
  layout: 'layout',
  data() {
    return {
      title: 'Deposit',
    };
  },
};
</script>
