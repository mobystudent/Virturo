<template>
  <div class="page-content" :class="{ limited: kyc !== KYC_YES && kyc !== KYC_VERIFICATION }">
    <template v-if="kyc === KYC_YES">
      <InformationSection :text="textApproved" :is-profile="isProfile" />
    </template>
    <template v-else-if="kyc === KYC_VERIFICATION">
      <InformationSection :text="textVerification" />
    </template>
    <template v-else>
      <UploadFiles />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import InformationSection from './InformationSection.vue';
import UploadFiles from './UploadFiles.vue';
import { KYC_YES, KYC_VERIFICATION } from '@/constants';

export default {
  name: 'KYCContent',
  components: {
    InformationSection,
    UploadFiles,
  },
  data() {
    return {
      KYC_YES,
      KYC_VERIFICATION,
      textVerification: "We are checking your documents and will let you know if anything's missing.",
      textApproved: "Approved. You're all set.",
      isProfile: true,
    };
  },
  computed: {
    ...mapGetters({
      kyc: 'user/kyc',
    }),
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  padding-bottom: 16px;
  max-width: 653px;

  &.limited {
    max-width: 540px;
  }
}
@media (max-width: 767px) {
  .page-content {
    max-width: 100%;
  }
}
</style>
