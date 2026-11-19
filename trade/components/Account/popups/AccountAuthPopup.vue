<template>
  <div v-if="isShowSuccessAuthPopup">
    <AccountSuccessAuthPopup @close="$emit('close')" />
  </div>
  <div v-else>
    <AccountAuthForm @close="$emit('close')" @openSuccessPopup="isShowSuccessAuthPopup = true" />
  </div>
</template>

<script>
import AccountSuccessAuthPopup from '@/components/Account/popups/AccountSuccessAuthPopup';
import AccountAuthForm from '@/components/Account/popups/AccountAuthForm';

export default {
  name: 'AccountAuthPopup',
  components: { AccountAuthForm, AccountSuccessAuthPopup },
  data() {
    return {
      isShowSuccessAuthPopup: false,
    };
  },
};
</script>
