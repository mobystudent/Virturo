<template>
  <div class="page-content" :class="{ 'not-loading': !loading }">
    <template v-if="loading">
      <div class="loader-wrapper">
        <Loader />
      </div>
    </template>
    <template v-else>
      <div class="page-inner">
        <ReferralProgram />
        <ReferralRewardStatistic />
      </div>
    </template>
  </div>
</template>

<script>
import Loader from '@/components/common/Loader';
import ReferralProgram from '@/components/Referral/ReferralProgram';
import ReferralRewardStatistic from '@/components/Referral/ReferralRewardStatistic';

export default {
  name: 'ReferralContent',
  components: {
    Loader,
    ReferralProgram,
    ReferralRewardStatistic,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = true;
    Promise.all([this.$store.dispatch('referral/getRewards'), this.$store.dispatch('referral/getReferrers')]).finally(() => {
      this.loading = false;
    });
  },
};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  height: calc(100vh - 142px);
  width: calc(100% + 94px);
  margin-left: -94px;
  margin-top: -1px;
  position: relative;
  z-index: 99;
  transition: margin-left 0.3s ease-in-out;
}

.page-content.not-loading {
  min-height: 745px;
  padding-bottom: 16px;
  max-width: 664px;
}

@media (max-width: 1380px) {
  .loader-wrapper {
    width: 100%;
    margin-left: 0;
  }
}

@media (max-width: 767px) {
  .page-inner {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 16px;
  }

  .loader-wrapper {
    height: calc(100vh - 88px);
    margin-top: 0;
  }

  .page-content {
    padding-bottom: 0;

    &.not-loading {
      max-width: 100%;
      padding-bottom: 0;
    }
  }
}
</style>
