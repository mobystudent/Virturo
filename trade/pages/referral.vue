<template>
  <PageWrapper :title="title">
    <template #content>
      <ReferralContent />
    </template>
  </PageWrapper>
</template>

<script>
import PageWrapper from '@/components/common/PageWrapper';
import ReferralContent from '@/components/Referral/ReferralContent.vue';

export default {
  name: 'Referral',
  components: { PageWrapper, ReferralContent },
  layout: 'layout',
  data() {
    return {
      title: 'Referral',
    };
  },
};
</script>
