<template>
  <PageWrapper :title="title">
    <template #content>
      <AccountContent />
    </template>
  </PageWrapper>
</template>

<script>
import PageWrapper from '@/components/common/PageWrapper';
import AccountContent from '@/components/Account/AccountContent';

export default {
  name: 'Account',
  components: { PageWrapper, AccountContent },
  layout: 'layout',
  data() {
    return {
      title: 'Account',
    };
  },
};
</script>
