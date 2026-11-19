<template>
  <nav class="sidebar" :class="[{ compact: isCompactSidebar && device !== 'mobile' }, { open: sidebar }]">
    <span class="close" @click="toggleSideBar">
      <CloseIcon />
    </span>
    <header class="sidebar-header">
      <div class="logo">
        <a class="logo-link" :href="siteUrl" target="_blank">
          <img class="logo" :src="require(`~/static/${logo}`)" alt="logo" />
          <img class="logo-text" :src="require(`~/static/${logoText}`)" alt="logo text" />
        </a>
      </div>
    </header>
    <div class="menu-bar">
      <div class="menu">
        <ul class="menu-links">
          <li
            v-for="(item, index) in filteredRoutes"
            :key="index"
            class="nav-link"
            :class="{ active: $nuxt.$route.path === item.link }"
            @click="handleClick(item)"
          >
            <nuxt-link :to="item.link">
              <SidebarSvg :name="item.img" />
              <span class="link-text">{{ item.title }}</span>
            </nuxt-link>
          </li>
          <li class="nav-link log-out">
            <a @click="handleLogout">
              <SidebarSvg :name="'log-out'" />
              <span class="link-text">Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <div class="hide-show-menu" @click="toggleShow">
        <template v-if="!isCompactSidebar">
          <ShowMenuIcon class="menu-icon show-icon" />
          <span>Close panel</span>
        </template>
        <template v-else>
          <HiddenMenuIcon class="menu-icon show-icon" />
        </template>
      </div>
      <div
        class="account-link"
        :class="{ active: $nuxt.$route.path === menuItems.find(item => item.title === 'Account').link }"
        @click="handleClick({ title: 'Account' })"
      >
        <nuxt-link :to="menuItems.find(item => item.title === 'Account').link">
          <div class="account-icon">{{ getInitials(user.fullName) }}</div>
          <div class="account-info">
            <span class="account-name">{{ user.fullName }}</span>
            <span class="account-email">{{ user.email }}</span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import SidebarSvg from './SidebarSvg';
import ShowMenuIcon from '@/static/img/sidebar/show-menu.svg?inline';
import HiddenMenuIcon from '@/static/img/sidebar/hidden-menu.svg?inline';
import CloseIcon from '@/static/img/icons/close-popup.svg?inline';
import ResizeMixin from '@/mixin/ResizeHandler';

import { DEPOSIT_PATH, WITHDRAW_PATH, KYC_PATH, VISIT_URS } from '@/constants';
import config from '@/project-config';

export default {
  name: 'Sidebar',
  components: { SidebarSvg, ShowMenuIcon, HiddenMenuIcon, CloseIcon },
  mixins: [ResizeMixin],
  data() {
    return {
      isCompactSidebar: true,
      menuItems: [
        {
          title: 'Trade',
          img: 'trade',
          link: '/',
        },
        {
          title: 'Account',
          img: 'account',
          link: '/account',
        },
        {
          title: 'Deposit',
          img: 'deposit',
          link: `/${DEPOSIT_PATH}`,
        },
        {
          title: 'Withdraw',
          img: 'withdraw',
          link: `/${WITHDRAW_PATH}`,
        },
        {
          title: 'KYC',
          img: 'kyc',
          link: `/${KYC_PATH}`,
        },
        {
          title: 'Referral',
          img: 'referral',
          link: '/referral',
        },
        {
          title: 'Support',
          img: 'support',
          link: '/support',
        },
      ],
      logo: config.logo,
      logoText: config.logoText,
    };
  },
  computed: {
    ...mapGetters({
      kycvalue: 'settings/kycvalue',
      balance: 'user/balance',
      freezedWithdraw: 'user/freezedWithdraw',
      isDemo: 'user/demo',
      user: 'user',
      sidebar: 'settings/sidebar',
    }),
    siteUrl() {
      return process.env.NUXT_ENV_SITE_URL;
    },
    filteredRoutes() {
      return this.menuItems.filter(el => {
        if (el.link === `/${KYC_PATH}`) {
          return this.showKYS();
        } else if ([`/${DEPOSIT_PATH}`, `/${WITHDRAW_PATH}`].includes(el.link)) {
          return !this.isDemo;
        } else if (el.title === 'Account') {
          return false;
        }
        return true;
      });
    },
    device() {
      return this.$store.state.settings.device;
    },
  },
  watch: {
    $route(to, _from) {
      this.handlePageChange(to.name);
    },
  },
  created() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    this.handlePageChange(window.location.pathname.slice(1));
    this.$nuxt.$route.path === '/' ? (this.isCompactSidebar = true) : (this.isCompactSidebar = false);
  },
  methods: {
    handleClick(item) {
      this.isCompactSidebar = item.title === 'Trade';
      this.$emit('sidebarToggle', this.isCompactSidebar);
    },
    toggleShow() {
      this.isCompactSidebar = !this.isCompactSidebar;
      this.$emit('sidebarToggle', this.isCompactSidebar);
    },
    handleLogout() {
      this.$store.dispatch('logout');
    },
    handlePageChange(path) {
      if (VISIT_URS.includes(path)) {
        this.$http.post('/api/visits', { path });
      }
    },
    showKYS() {
      const balance = this.balance - this.freezedWithdraw;
      return Math.abs(balance) > this.kycvalue;
    },
    getInitials(fullName) {
      const names = fullName.split(' ');
      const initials = names.map(name => name.charAt(0)).join('.');
      return initials + '.';
    },
    toggleSideBar() {
      this.$store.dispatch('settings/toggleSideBar');
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 283px;
  padding: 24px 16px 16px;
  min-height: $min-page-height;
  background-color: $main-primary-color;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
}

.sidebar-header {
  margin-bottom: 32px;
  transition: all 0.3s ease;
}

.logo-link {
  display: flex;
  align-items: center;
  max-width: 175px;
}

.logo-text {
  padding-left: 11px;
}

.sidebar.compact {
  width: 80px;

  .menu-links .link-text,
  .logo-text,
  .account-info {
    display: none;
  }

  .logo-link {
    max-width: 32px;
    margin: 0 auto;
  }

  .account-link {
    a {
      justify-content: center;
    }
    &:hover,
    &.active {
      a {
        background-color: transparent;
        border-color: transparent;
      }
    }
  }
}

.nav-link {
  list-style-type: none;

  a {
    display: flex;
    align-items: center;
    height: 48px;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 12px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  &:nth-child(3) {
    padding-bottom: 8px;
    border-bottom: 1px solid $light-gray;
  }

  &.log-out {
    padding-top: 8px;
    border-top: 1px solid $light-gray;
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover,
  &.active {
    a {
      background-color: $common-white;
      border-color: $common-green-transparent;
    }

    .link-text {
      color: $common-green;
    }
  }

  .link-text {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: $dark-grey;
    margin-left: 8px;
    white-space: nowrap;
    transition: all 0.3s ease-in-out;
  }
}

.account-link {
  padding-top: 8px;
  border-top: 1px solid $light-gray;
  min-height: 55px;

  a {
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  &:hover,
  &.active {
    a {
      background-color: $common-white;
      border-color: $common-green-transparent;
    }
  }
}

.account-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-color: $common-green-transparent;
  color: $dark-grey;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
}

.account-name {
  color: $common-green;
  font-size: 15px;
  font-weight: 400;
}

.account-email {
  color: $dark-grey;
  font-size: 12px;
  font-weight: 400;
}

.account-info {
  margin-left: 12px;
}

.bottom {
  margin-top: auto;
}

.hide-show-menu {
  position: relative;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
  cursor: pointer;

  span {
    width: 190px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: $dark-grey-2;
    padding-left: 30px;
    white-space: nowrap;
  }
}

.menu-icon {
  position: absolute;
  left: 12px;
  top: 13px;
  width: 22px;
  height: 22px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &.active {
    opacity: 1;
  }
}

.show-icon {
  opacity: 1;
}

.close {
  display: none;
}

@media (max-width: 767px) {
  .sidebar-header {
    margin-bottom: 24px;
  }

  .close {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 22px;
    height: 22px;
  }

  .sidebar {
    width: 282px;
    //height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
    z-index: 20;

    &.open {
      transform: translateX(0);
      left: 0;
    }
  }

  .hide-show-menu {
    display: none;
  }

  .account-link {
    margin-top: auto;
    border-top: none;
  }
}

.sidebar::-webkit-scrollbar {
  width: 1px;
}

.sidebar::-webkit-scrollbar-track {
  background-color: $main-primary-color;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: $main-primary-color;
}

@media (max-height: 630px) {
  .sidebar {
    height: 100vh;
    overflow-y: auto;
  }
}
</style>

<style lang="scss">
.menu-links li {
  .link-icon {
    width: 22px;
    height: 22px;

    path[fill] {
      fill: $dark-grey;
    }

    path[stroke] {
      stroke: $dark-grey;
    }
  }

  &:hover .link-icon path[fill],
  &.active .link-icon path[fill] {
    fill: $common-green;
  }

  &:hover .link-icon path[stroke],
  &.active .link-icon path[stroke] {
    stroke: $common-green;
  }
}
</style>
