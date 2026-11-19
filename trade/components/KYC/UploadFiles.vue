<template>
  <div class="upload">
    <h2 class="title">Submit Documents</h2>
    <div class="content">
      <p class="upload-text">Please submit the following documents to ensure your account is fully verified:</p>
      <ProofContent />
      <UploadSection />
    </div>
  </div>
</template>

<script>
import ProofContent from './ProofContent.vue';
import UploadSection from './UploadSection.vue';

export default {
  name: 'UploadFiles',
  components: {
    UploadSection,
    ProofContent,
  },
};
</script>

<style lang="scss" scoped>
.upload {
  padding-top: 24px;
}

.title {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;
}

.content {
  margin-top: 12px;
}

.upload-text {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: $dark-grey;
}

@media (max-width: 767px) {
  .upload {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
