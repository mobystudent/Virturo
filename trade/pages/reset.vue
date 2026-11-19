<template>
  <div>
    <ResetPasswordContent />
  </div>
</template>

<script>
import ResetPasswordContent from '@/components/ResetPassword/ResetPasswordContent.vue';

export default {
  name: 'Reset',
  components: { ResetPasswordContent },
  created() {
    localStorage.clear();
  },
};
</script>
