<template>
  <div class="section">
    <AccountAuthPopup v-if="isShowAuthPopUp" @close="isShowAuthPopUp = false" />
    <h2 class="title">Two-Factor Authentication</h2>
    <div class="row">
      <p>Help protect your account from unauthorized access by requiring a second authentication method</p>
      <div class="switch">
        <label>
          <input id="two-factor-auth" type="checkbox" :checked="user.twoFa" @click.prevent="handleAuth" />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AccountAuthPopup from '@/components/Account/popups/AccountAuthPopup';

export default {
  name: 'Authentication',
  components: {
    AccountAuthPopup,
  },
  data() {
    return {
      isShowAuthPopUp: false,
    };
  },
  computed: {
    ...mapGetters({
      user: 'user',
      twofa: 'settings/twofa',
    }),
  },
  methods: {
    async handleAuth() {
      if (this.user.twoFa) {
        await this.$http.post('/api/auth/change-auth-2fa', { two_fa: false });
        this.$store.dispatch('user/setTwoFa', false);
      } else {
        this.isShowAuthPopUp = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  max-width: 653px;
  padding-top: 24px;
}

.title {
  color: $dark-grey;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
}

.row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-top: 16px;

  p {
    max-width: 595px;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: $black;
  }
}

.switch {
  margin-left: 16px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  label {
    position: relative;
    display: inline-block;
    width: 42px;
    height: 24px;
  }
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $grey-common;
  border-radius: 20px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: 2px;
    bottom: 2px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: $common-white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
}

input:checked + .slider {
  background-color: $common-green;
}

input:focus + .slider {
  box-shadow: 0 0 1px $common-green;
}

input:checked + .slider:before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}

@media (max-width: 767px) {
  .section {
    max-width: 100%;
  }
}
</style>
