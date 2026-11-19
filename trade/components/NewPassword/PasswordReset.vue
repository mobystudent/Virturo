<template>
  <UserAccount>
    <template #title>Successful password reset!</template>
    <template #content>
      <p class="text">You can use your new password to log in to your account</p>
      <nuxt-link class="btn-form" to="/login">Log In</nuxt-link>
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
  name: 'PasswordReset',
  components: {
    UserAccount,
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
  font-size: 15px;
  font-weight: 400;
  color: $common-green;
  line-height: 1.5;
}

.btn-form {
  display: block;
  width: 100%;
  height: 44px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  background-color: $common-green-transparent;
  border: 1px solid transparent;
  text-align: center;
  color: $dark-grey;
  border-radius: 6px;
  padding: 10px;
  margin-top: 32px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: $common-white;
    border-color: $common-green-transparent;
  }
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
