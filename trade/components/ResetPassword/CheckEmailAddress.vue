<template>
  <UserAccount>
    <template #title>Check your email address</template>
    <template #content>
      <p class="text">We've sent a password recovery link to your email address, {{ email }}. Please check your inbox and spam folder if you don't see it</p>
    </template>
    <template #bottom-text>
      <p class="tpl-text-link">
        Any questions? Contact us at
        <a class="tpl-link link" :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
      </p>
    </template>
  </UserAccount>
</template>

<script>
import UserAccount from '../common/UserAccount.vue';
import config from '@/project-config';

export default {
  name: 'CheckEmailAddress',
  components: {
    UserAccount,
  },
  props: {
    email: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      supportEmail: config.contacts.supportEmail,
    };
  },
};
</script>

<style lang="scss" scoped>
.text {
  padding-top: 32px;
  font-size: 16px;
  font-weight: 400;
  color: $common-green;
  line-height: 1.5;
}

.tpl-text-link {
  margin-top: auto;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: $dark-grey;

  .tpl-link {
    color: $dark-grey;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      border-bottom: 1px solid $dark-grey;
    }
  }
}
</style>
