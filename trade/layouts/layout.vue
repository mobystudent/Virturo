<template>
  <div class="page-wrapper" :class="{ 'sidebar-minimized': isSidebarMinimized && device !== 'mobile', 'global-loading': globalLoading }">
    <template v-if="globalLoading">
      <div class="loader-wrapper">
        <Loader />
      </div>
    </template>
    <template v-else>
      <Sidebar @sidebarToggle="toggleSidebar" />
      <Chat />
      <TradeIframe :class="{ 'show-iframe': $nuxt.$route.path === '/' }" />
      <Nuxt />
    </template>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Echo from 'laravel-echo';
import { accessToken } from '../middleware/token';
import { API_URL, DEPOSIT_PATH, WITHDRAW_PATH } from '@/constants';
import Sidebar from '@/components/common/Sidebar.vue';
import Chat from '@/components/common/Chat.vue';
import Loader from '@/components/common/Loader.vue';
import TradeIframe from '@/components/common/TradeIframe.vue';
import ResizeMixin from '@/mixin/ResizeHandler';

const INACTIVE_USER_TIME_THRESHOLD = 30 * 60 * 1000; // 30 minutes
const USER_ACTIVITY_THROTTLER_TIME = 1000; // check user is active every second
const CURRENT_TIMESTAMP_KEY = 'currentTimeStamp';
const INACTIVE_TIME_FOR_CLOSED_PAGE = 20000;

export default {
  name: 'Layout',
  components: { Sidebar, Chat, Loader, TradeIframe },
  mixins: [ResizeMixin],
  data() {
    return {
      isInactive: false,
      userActivityThrottlerTimeout: null,
      userActivityTimeout: null,
      isSidebarMinimized: false,
    };
  },
  computed: {
    ...mapGetters({
      globalLoading: 'globalLoading',
    }),
    device() {
      return this.$store.state.settings.device;
    },
  },
  beforeMount() {
    this.activateActivityTracker();
  },

  beforeDestroy() {
    this.deactivateActivityTracker();
    clearTimeout(this.userActivityTimeout);
    clearTimeout(this.userActivityThrottlerTimeout);
  },
  created() {
    this.$nuxt.$route.path === '/' ? (this.isSidebarMinimized = true) : (this.isSidebarMinimized = false);
    const localStorageCurrentTime = localStorage.getItem(CURRENT_TIMESTAMP_KEY);
    if (localStorageCurrentTime && new Date().getTime() - localStorageCurrentTime > INACTIVE_TIME_FOR_CLOSED_PAGE) {
      this.$store.dispatch('logout');
      return;
    }
    localStorage.removeItem(CURRENT_TIMESTAMP_KEY);
    this.$store.dispatch('setGlobalLoading', true);
    const token = localStorage.getItem(accessToken);
    this.$store.dispatch('setToken', token);
    try {
      const url = API_URL;
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.Echo = new Echo({
        broadcaster: 'socket.io',
        host: url,
        auth: { headers: { Authorization: `Bearer ${token}` } },
      });
    } catch (_e) {
      // console.log(e);
    }
    this.$store
      .dispatch('getUserInfo')
      .catch(() => {
        this.$store.dispatch('logout');
      })
      .finally(() => {
        setTimeout(() => this.$store.dispatch('setGlobalLoading', false));
        try {
          const id = this.$store.state.user.id;
          if (id) {
            // eslint-disable-next-line nuxt/no-globals-in-created
            window.Echo.private(`user-${id}`).listen('UserEvent', e => {
              if (e.update) {
                this.$store.dispatch('getUserInfo');
              }
            });
            // eslint-disable-next-line nuxt/no-globals-in-created
            window.Echo.private(`payment-${id}`).listen('PaymentEvent', e => {
              if (e.update) {
                this.$store.dispatch('user/setBalance', e.available_balance);
                this.$store.dispatch('user/setFreezedWithdraw', e.freezedWithdraw);
                // eslint-disable-next-line nuxt/no-globals-in-created
                if (window.location.pathname.includes(WITHDRAW_PATH)) {
                  this.$store.dispatch('user/getLastWithdraws');
                  // eslint-disable-next-line nuxt/no-globals-in-created
                } else if (window.location.pathname.includes(DEPOSIT_PATH)) {
                  this.$store.dispatch('user/getLastDeposits');
                }
              }
            });
          }
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e);
        }
      });
  },
  methods: {
    activateActivityTracker() {
      window.addEventListener('mousemove', this.userActivityThrottler);
      window.addEventListener('scroll', this.userActivityThrottler);
      window.addEventListener('keydown', this.userActivityThrottler);
      window.addEventListener('resize', this.userActivityThrottler);
      window.addEventListener('beforeunload', this.setLocalStorageTimeStamp);
    },
    deactivateActivityTracker() {
      window.removeEventListener('mousemove', this.userActivityThrottler);
      window.removeEventListener('scroll', this.userActivityThrottler);
      window.removeEventListener('keydown', this.userActivityThrottler);
      window.removeEventListener('resize', this.userActivityThrottler);
      window.removeEventListener('beforeunload', this.setLocalStorageTimeStamp);
    },
    resetUserActivityTimeout() {
      clearTimeout(this.userActivityTimeout);
      this.userActivityTimeout = setTimeout(() => {
        this.userActivityThrottler();
        this.inactiveUserAction();
      }, INACTIVE_USER_TIME_THRESHOLD);
    },

    userActivityThrottler() {
      if (this.isInactive) {
        this.isInactive = false;
      }

      if (!this.userActivityThrottlerTimeout) {
        this.userActivityThrottlerTimeout = setTimeout(() => {
          this.resetUserActivityTimeout();
          clearTimeout(this.userActivityThrottlerTimeout);
          this.userActivityThrottlerTimeout = null;
        }, USER_ACTIVITY_THROTTLER_TIME);
      }
    },
    inactiveUserAction() {
      this.isInactive = true;
      this.$store.dispatch('logout');
    },
    setLocalStorageTimeStamp() {
      localStorage.setItem(CURRENT_TIMESTAMP_KEY, new Date().getTime()?.toString());
    },
    toggleSidebar(value) {
      this.isSidebarMinimized = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  min-height: 100vh;
  background-color: $main-primary-color;
  padding-bottom: 16px;

  &.global-loading {
    padding-bottom: 0;

    .loader-wrapper {
      height: 100vh;
    }
  }
}

.loader-wrapper {
  height: calc(100vh - 16px);
  width: 100vw;
}

@media (max-width: 767px) {
  .page-wrapper {
    padding-bottom: 0;
  }
}
</style>

<style lang="scss">
.intercom-launcher {
  transform: translateY(200%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.page-wrapper.sidebar-minimized .menu-page-inner {
  margin-left: 205px;
}

.page-wrapper.sidebar-minimized .menu-page {
  width: calc(100% - 80px);
  margin: 16px 16px 16px 80px;
}

@media (max-width: 1376px) {
  .page-wrapper.sidebar-minimized .menu-page-inner {
    margin-left: 110px;
  }
}
</style>
