<template>
  <PageWrapper :title="title">
    <template #content>
      <WithdrawContent />
    </template>
  </PageWrapper>
</template>

<script>
import WithdrawContent from '@/components/Withdraw/WithdrawContent.vue';
import PageWrapper from '@/components/common/PageWrapper.vue';
export default {
  name: 'Withdraw',
  components: { PageWrapper, WithdrawContent },
  layout: 'layout',
  data() {
    return {
      title: 'Withdraw',
    };
  },
};
</script>
