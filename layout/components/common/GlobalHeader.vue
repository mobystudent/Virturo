<template>
  <div class="header-wrap">
    <TopBar />
    <header
      id="header"
      class="header"
      :class="[{ 'active': isMenuOpen }, setTheme]"
    >
      <div class="wrapper">
        <div class="logo">
          <nuxt-link
            class="static"
            to="/"
          >
            <img
              v-if="!isBlack"
              src="@/static/img/header/logo.svg"
              alt="logo"
            >
            <img
              v-else
              src="@/static/img/header/logo-light.svg"
              alt="logo"
            >
          </nuxt-link>
        </div>
        <div class="menu">
          <div class="menu-list">
            <div
              v-for="(item, index) in menuLinks"
              :key="index"
              class="menu__item"
            >
              <div
                v-if="item.hasOwnProperty('link')"
                class="menu__link"
                :class="[{ active: $nuxt.$route.path === item.link }]"
                @click="toggleDropdown(index)"
              >
                <nuxt-link
                  :key="index"
                  :to="item.link"
                >
                  <span class="menu__title">{{ item.title }}</span>
                </nuxt-link>
              </div>
              <!-- <div
                v-else
                class="menu__link menu__link-wrap"
                :class="{ active: item.dropdownVisible }"
                @click="toggleDropdown(index)"
              >
                <span class="menu__title">{{ item.title }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                >
                  <path
                    d="M1 8L7.5 2L14 8"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                </svg>
                <ul
                  class="menu__dropdown"
                  :class="{ 'active': item.dropdownVisible }"
                >
                  <li
                    v-for="(subitem, subindex) in item.list"
                    :key="subindex"
                    class="menu__link menu__link--sub"
                    @click.stop="toggleDropdown(-1)"
                  >
                    <nuxt-link
                      :key="subindex"
                      class="menu__sublink"
                      :to="subitem.link"
                    >
                      <span class="menu__title">{{ subitem.title }}</span>
                      <span class="menu__subtitle">{{ subitem.subtitle }}</span>
                    </nuxt-link>
                  </li>
                </ul>
              </div> -->

              <div
                v-else
                class="menu__link menu__link-wrap"
                :class="{ 'active': item.dropdownVisible }"
                @click="toggleDropdown(index)"
              >
                <span class="menu__title">{{ item.title }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                >
                  <path
                    d="M1 8L7.5 2L14 8"
                    stroke="white"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  />
                </svg>
                <ul
                  class="menu__dropdown"
                  :class="{ 'active': item.dropdownVisible }"
                >
                  <li
                    v-for="(subitem, subindex) in item.list"
                    :key="subindex"
                    class="menu__link menu__link--sub"
                    @click="handleMenuState"
                  >
                    <nuxt-link
                      :key="subindex"
                      class="menu__sublink"
                      :to="subitem.link"
                    >
                      <span class="menu__title">{{ subitem.title }}</span>
                      <span class="menu__subtitle">{{ subitem.subtitle }}</span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="menu-arrows">
            <nuxt-link
              v-for="(item, index) in menuArrows"
              :key="index"
              class="menu__link menu__link-arrow"
              :class="{ active: $nuxt.$route.path === item.link }"
              :to="item.link"
            >
              <span class="menu__title">{{ item.title }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 20"
                fill="none"
              >
                <path
                  d="M2.34968 8H8.6V14.2182H7.5556V9.83171L1.80338 15.6L1 14.7966L6.75222 9.0444H2.36575L2.34968 8Z"
                />
              </svg>
            </nuxt-link>
          </div>
        </div>
        <a
          class="header-button"
          :href="loginLink"
        >Login</a>
        <button
          class="burger"
          :class="{ 'active': isMenuOpen, 'hide': isSearchOpen, 'burger-white': isBlack }"
          @click="handleMenuState"
        >
          <span />
        </button>
      </div>
    </header>
    <div
      class="search-popup"
      :class="{ active: isSearchOpen }"
    >
      <div class="search-wrapper">
        <div class="wrapper">
          <div class="search-content">
            <div class="search-block">
              <input
                v-model="searchValue"
                class="search-field"
                type="text"
                placeholder="Search"
                @input="filterResults"
              >
              <button
                class="clear"
                type="button"
                :disabled="isClearDisabled"
                @click="clearSearchField"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M17 1L1 17"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1L17 17"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="suggestions">
              <h4 class="suggestions-title">
                {{ searchValue.length > 0 ? "Looking for this?" : "Quick links" }}
              </h4>
              <ul
                v-if="searchValue.length > 0"
                class="suggestions-list"
              >
                <nuxt-link
                  v-for="(suggestions, index) in resultArr"
                  :key="index"
                  class="suggestions-item"
                  :to="suggestions.link"
                  @click="searchResult(suggestions)"
                >
                  {{ suggestions.title }}
                </nuxt-link>
              </ul>
              <ul
                v-else
                class="suggestions-list"
              >
                <nuxt-link
                  v-for="(quickLInk, index) in quickLinks"
                  :key="index"
                  class="suggestions-item"
                  :to="quickLInk.link"
                  @click="searchResult(suggestions)"
                >
                  {{ quickLInk.title }}
                </nuxt-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="menu-popup"
      :class="{ active: isMenuOpen }"
    >
      <div class="menu-column">
        <div class="menu-list">
          <div
            v-for="(item, index) in menuLinks"
            :key="index"
            class="menu__item"
          >
            <div
              v-if="item.hasOwnProperty('link')"
              class="menu__link"
              :class="[{ active: $nuxt.$route.path === item.link }]"
              @click="handleMenuState"
            >
              <nuxt-link
                :key="index"
                :to="item.link"
              >
                <span class="menu__title">{{ item.title }}</span>
              </nuxt-link>
            </div>
            <div
              v-else
              class="menu__link menu__link-wrap"
              :class="{ 'active': item.dropdownVisible }"
              @click="toggleDropdown(index)"
            >
              <span class="menu__title">{{ item.title }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
              >
                <path
                  d="M1 8L7.5 2L14 8"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
              <ul
                class="menu__dropdown"
                :class="{ 'active': item.dropdownVisible }"
              >
                <li
                  v-for="(subitem, subindex) in item.list"
                  :key="subindex"
                  class="menu__link menu__link--sub"
                  @click="handleMenuState"
                >
                  <nuxt-link
                    :key="subindex"
                    class="menu__sublink"
                    :to="subitem.link"
                  >
                    <span class="menu__title">{{ subitem.title }}</span>
                    <span class="menu__subtitle">{{ subitem.subtitle }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="menu-arrows">
          <li
            v-for="(item, index) in menuArrows"
            :key="index"
            class="menu__link"
            :class="{ active: $nuxt.$route.path === item.link }"
            @click="handleMenuState"
          >
            <nuxt-link
              class="menu__link-arrow"
              :to="item.link"
            >
              <span class="menu__title">{{ item.title }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 20"
                fill="none"
              >
                <path
                  d="M2.34968 8H8.6V14.2182H7.5556V9.83171L1.80338 15.6L1 14.7966L6.75222 9.0444H2.36575L2.34968 8Z"
                />
              </svg>
            </nuxt-link>
          </li>
        </div>
        <a
          class="menu__link"
          :href="loginLink"
        >
          <span class="menu__title">Log in</span>
        </a>
      </div>
    </div>
    <!--    <div-->
    <!--      v-show="isMain"-->
    <!--      class="header-space"-->
    <!--    />-->
  </div>
</template>

<script>

import TopBar from '@/components/common/TopBar.vue';

export default {
  name: 'GlobalHeader',
  components: {
    TopBar,
  },
  data() {
    return {
      isMenuOpen: false,
      isSearchOpen: false,
      prevScrollPos: 0,
      isClearDisabled: true,
      isBlack: false,
      isMain: false,
      loginLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/login/`,
      menuLinks: [
        {
          title: 'Trade',
          dropdownVisible: false,
          list: [
            {
              title: 'Trading Accounts',
              subtitle: 'Trade 3,000+ assets with tight spreads',
              link: '/trading-accounts/',
            },
            {
              title: 'Assets',
              subtitle: 'Securely trade stocks, crypto, and more',
              link: '/assets/',
            },
            {
              title: 'Fees and Charges',
              subtitle: 'Tailored fees for each investor',
              link: '/fees-and-charges/',
            },
            {
              title: 'Deposits & Withdrawals',
              subtitle: 'Securely manage your funds',
              link: '/deposits-and-withdrawals/',
            },
          ],
        },
        {
          title: 'Learn',
          link: '/learn/',
        },
        {
          title: 'Company',
          dropdownVisible: false,
          list: [
            {
              title: 'About',
              subtitle: 'Get to know us',
              link: '/about/',
            },
            {
              title: 'Account Security',
              subtitle: 'Safeguard your data',
              link: '/account-security/',
            },
            {
              title: 'ESG',
              subtitle: 'Environmental, Social, and Governance',
              link: '/esg/',
            },
          ],
        },
        {
          title: 'Insights',
          dropdownVisible: false,
          list: [
            {
              title: 'Blog',
              subtitle: 'Financial articles, trading tutorials and more',
              link: '/blog/',
            },
            {
              title: 'Media Center',
              subtitle: 'News, press releases, and media assets',
              link: '/media-center/',
            },
          ],
        },
        {
          title: 'Support',
          link: '/support/',
        },
      ],
      menuArrows: [
        {
          title: 'Partners',
          link: '/partners/',
        },
        {
          title: 'Invest',
          link: '/invest/',
        },
        {
          title: 'Pro',
          link: '/pro/',
        },
      ],
      whiteSections: [
        'header',
        'main_section',
        'part_of_capital',
        'achieve_financial_section',
        'app_section',
        'trading_section',
        'partner_section',
        'partnership_section',
        'testimonials_section',
        'powered_by_section',
        'contact_section',
        'send_message_section',
      ],
      quickLinks: [
        {
          title: 'MarketFlow',
          link: '#',
        },
        {
          title: 'CryptoVault',
          link: '#',
        },
        {
          title: 'Crypto',
          link: '#',
        },
        {
          title: 'Elite Club',
          link: '#',
        },
        {
          title: 'Market',
          link: '#',
        },
        {
          title: 'Bitcoin',
          link: '#',
        },
      ],
      searchSuggesions: [
        {
          title: 'MarketFlow',
          link: '#',
        },
        {
          title: 'CryptoVault',
          link: '#',
        },
        {
          title: 'Crypto',
          link: '#',
        },
        {
          title: 'Elite Club',
          link: '#',
        },
        {
          title: 'Market',
          link: '#',
        },
        {
          title: 'Bitcoin',
          link: '#',
        },
      ],
      menuColor: '#000000',
      greenColor: '#34FEC8',
      searchValue: '',
      resultArr: [],
    };
  },
  computed: {
    setTheme() {
      const { path } = this.$route;
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.isBlack = path === '/pro';
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.isMain = path === '/';

      if (path === '/pro') {
        return 'header-black';
        // eslint-disable-next-line
      } else if (path === '/') {
        return 'header-main';
      } else {
        return 'header';
      }
    },
  },
  mounted() {
    this.currentScrollPos = window.pageYOffset;
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('click', this.handleClickMenu);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('click', this.handleClickMenu);
  },
  methods: {
    handleMenuState() {
      this.isMenuOpen = !this.isMenuOpen;
      // eslint-disable-next-line no-restricted-syntax, guard-for-in
      // for (const i in this.menuLinks) {
      //   this.menuLinks[i].dropdownVisible = false;
      // }
      Object.keys(this.menuLinks).forEach((i) => {
        this.menuLinks[i].dropdownVisible = false;
      });
    },
    handleSearchState() {
      this.isSearchOpen = !this.isSearchOpen;
      if (!this.isSearchOpen) {
        this.searchValue = '';
      }
    },
    clearSearchField() {
      this.searchValue = '';
    },
    searchResult(result) {
      this.searchValue = result;
      this.resultArr = [];
    },
    filterResults() {
      if (this.searchValue === '') {
        this.resultArr = [];
        this.isClearDisabled = true;
      } else {
        const searchWord = this.searchValue.toLowerCase();
        this.resultArr = this.searchSuggesions.filter((item) => item.title.toLowerCase().includes(searchWord));
        this.isClearDisabled = false;
      }
    },
    // eslint-disable-next-line no-restricted-syntax
    // toggleDropdown(index) {
    //   // eslint-disable-next-line no-restricted-syntax
    //   for (const i in this.menuLinks) {
    //     if (index !== i) {
    //       this.menuLinks[i].dropdownVisible = false;
    //     }
    //   }

    //   if (index < 0) return;

    //   this.menuLinks[index].dropdownVisible = !this.menuLinks[index].dropdownVisible;
    // },
    // toggleDropdown(index) {
    //   // If the dropdown is already open, close it.
    //   if (this.menuLinks[index].dropdownVisible) {
    //     this.menuLinks[index].dropdownVisible = false;
    //   } else {
    //     // We close all other dropdowns
    //     // for (const i in this.menuLinks) {
    //     //   this.menuLinks[i].dropdownVisible = false;
    //     // }
    //     Object.keys(this.menuLinks).forEach((i) => {
    //       this.menuLinks[i].dropdownVisible = false;
    //     });
    //     // Open the selected dropdown
    //     this.menuLinks[index].dropdownVisible = true;
    //   }
    // },
    toggleDropdown(index) {
    // Check if there is an element with this index
      if (!this.menuLinks[index]) {
        console.warn(`Menu item at index ${index} does not exist.`);
        return;
      }

      // If the drop-down menu is already open, close it.
      if (this.menuLinks[index].dropdownVisible) {
        this.menuLinks[index].dropdownVisible = false;
      } else {
      // Close all other drop-down menus
        Object.keys(this.menuLinks).forEach((i) => {
          this.menuLinks[i].dropdownVisible = false;
        });
        // Open the selected drop-down menu
        this.menuLinks[index].dropdownVisible = true;
      }
    },
    handleClickMenu({ target }) {
      const parentMenuLinkWrap = target.closest('.menu__link-wrap');
      if (!parentMenuLinkWrap && !target.classList.contains('menu__link-wrap')) {
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        // for (const index in this.menuLinks) {
        //   this.menuLinks[index].dropdownVisible = false;
        // }
        Object.keys(this.menuLinks).forEach((index) => {
          this.menuLinks[index].dropdownVisible = false;
        });
      }
    },
  },
};

</script>

<style lang="scss" scoped>
.header {
  position: relative;
  padding: 24px 0;
  width: 100%;
  z-index: 110;
  transition: background .25s ease-in;
  background: #352F44;

  @media (max-width: 1024px) {
    min-height: 64px;
    padding: 20px 0;
  }

  &-main {
    border-bottom: 1px solid rgba(217, 217, 217, 0.15);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #352F44;

    @media (max-width: 768px) {
      border: none;
    }

    &.active {
      @media (max-width: 1024px) {
        background: #352F44;
      }
    }
  }

  //&-black {
  //  background: #1C1C1C;
  //  border-bottom: 1px solid #282929;
  //
  //  @media (max-width: 1200px) {
  //    &~.menu-popup {
  //      .menu__dropdown {
  //        background: #1c1c1c;
  //      }
  //
  //      .menu__title {
  //        color: #fff;
  //
  //        &::before {
  //          background: #fff;
  //        }
  //      }
  //
  //      svg {
  //        stroke: #fff;
  //      }
  //    }
  //  }
  //
  //  .menu__link {
  //    &:hover .menu__title::before {
  //      background: #fff;
  //    }
  //
  //    svg {
  //      stroke: #fff;
  //    }
  //  }
  //
  //  .menu__link--sub:hover {
  //    .menu__title {
  //      color: #074429;
  //    }
  //  }
  //
  //  .menu__title,
  //  .header-button {
  //    color: #fff;
  //  }
  //
  //  .menu__dropdown {
  //    background: #1C1C1C;
  //    border-color: rgba(255, 255, 255, .5);
  //  }
  //
  //  &~.menu-popup {
  //    background: #1C1C1C;
  //  }
  //}
}

.wrapper {
  display: grid;
  grid-template: 'logo menu button' auto / 185px 1fr 105px;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  max-width: 1340px;
  padding: 0 30px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: minmax(110px, 180px) 1fr 105px;
    column-gap: 15px;
    padding: 0 20px;
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
}

.logo {
  grid-area: logo;
  display: flex;
  align-items: center;
  max-width: 185px;
  max-height: 54px;

  @media (max-width: 768px) {
    max-width: 110px;
  }

  a {
    display: inline-flex;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

.menu {
  grid-area: menu;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;

  @media (max-width: 1200px) {
    column-gap: 5px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
}

.menu-list {
  display: flex;
  align-items: center;
  column-gap: 10px;

  @media (max-width: 1200px) {
    column-gap: 5px;
  }

  @media (max-width: 1024px) {
    flex-flow: column;
    align-items: flex-start;
    row-gap: 5px;
  }
}

.menu-arrows {
  display: flex;
  align-items: center;
  column-gap: 10px;

  @media (max-width: 1200px) {
    column-gap: 5px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 15px;
    flex-flow: column;
    align-items: flex-start;
    row-gap: 8px;
  }
}

.menu__link-arrow {
  position: relative;
  display: inline-flex;
  column-gap: 10px;

  @media (max-width: 1200px) {
    column-gap: 5px;
  }

  svg {
    width: 10px;
    height: 20px;
    fill: #fff;
    transition: color .25s ease-in;

    @media (max-width: 1200px) {
      column-gap: 5px;
      position: relative;
      bottom: 2px;
    }

    @media (max-width: 1024px) {
      width: 14px;
      height: auto;
    }
  }
}

.menu-arrows .menu__link  .menu__link-arrow  .menu__title {
  @media (max-width: 1024px) {
    margin-right: 0;
  }
}

.menu__link {
  display: inline-flex;
  padding: 8px 10px;

  @media (max-width: 1024px) {
    & > a:not(.menu__sublink) .menu__title,
    & > .menu__title {
      margin-right: 10px;
      font-size: 24px;
      line-height: 32px;
    }
  }

  &:hover {
    &>.menu__title::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 1px;
    }
  }

  a {
    display: inline-flex;
  }
}

.menu__link-wrap {
  position: relative;
  align-items: center;
  column-gap: 10px;
  cursor: pointer;

  @media (max-width: 1200px) {
    column-gap: 5px;
  }

  @media (max-width: 1024px) {
    flex-flow: wrap;
  }

  svg {
    width: 11px;
    height: 11px;
    fill: none;
    stroke: #fff;
    transform: rotate(180deg);
    @media (max-width: 1024px) {
      width: 14px;
    }
  }

  &.active {
    svg {
      transform: rotate(360deg);
    }
  }
}

.menu__link--sub {
  width: 100%;
  border-radius: 12px;
  transition: background .25s ease-in;

  &:hover {
    background: rgba(#000, .2);
  }
}

.menu__dropdown {
  position: absolute;
  top: 40px;
  left: 0;
  width: 280px;
  padding: 12px 10px;
  border-radius: 12px;
  background: #352F44;
  opacity: 0;
  visibility: hidden;
  z-index: 2;
  transition: opacity .25s ease-in, visibility .25s ease-in;

  @media (max-width: 1024px) {
    display: none;
    position: static;
    width: 100%;
    margin: 0 -10px;
    // padding: 15px 0;
    padding: 0;
    border: none;
  }

  &.active {
    opacity: 1;
    visibility: visible;

    @media (max-width: 1200px) {
      padding-top: 15px;
      display: flex;
      flex-flow: column;
      row-gap: 5px;
    }
  }
}

.menu__sublink {
  display: flex;
  flex-flow: column;
}

.menu__title {
  position: relative;
  font: 400 16px/22px 'Poppins', sans-serif;
  color: #fff;
}

.menu__subtitle {
  font: 400 12px/146% 'Poppins', sans-serif;
  color: #DAD8C4;
}

.header-button {
  grid-area: button;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  color: #352F44;
  background: #D3F5EC;
  border: 1px solid #D3F5EC;
  font: 500 16px/22px 'Poppins';
  border-radius: 4px;
  cursor: pointer;
  transition: color .25s ease-in, background .25s ease-in;

  @media (max-width: 1024px) {
    display: none;
  }

  &:hover {
    background: transparent;
    border: 1px solid #D3F5EC;
    color: #D3F5EC;
  }
}

.search-popup {
  display: none;
}

.burger {
  display: none;
  position: relative;
  height: 22px;
  align-items: center;
  background: none;

  @media (max-width: 1024px) {
    display: inline-flex;
  }

  @media (max-width: 768px) {
    height: 16px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    transition: transform .25s ease-in;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  span,
  &::before,
  &::after {
    height: 2px;
    width: 28px;
    background: #fff;

    @media (max-width: 768px) {
      width: 18px;
    }
  }

  &.active {
    span {
      opacity: 0;
    }

    &::before {
      top: 45%;
      transform: rotate(45deg);
    }

    &::after {
      bottom: 45%;
      transform: rotate(-45deg);
    }
  }

  &.hide {
    display: none;
  }

  &-white {
    span,
    &::before,
    &::after {
      background: #fff;
    }
  }
}

.menu-popup {
  position: absolute;
  top: 73px;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-110vh);
  transition: opacity .75s ease-in, visibility .75s ease-in, transform .75s ease-in;
  background: #352F44;
  width: 100vw;
  height: calc(100vh - 73px);
  overflow: scroll;
  z-index: 100;

  @media (max-width: 768px) {
    top: 64px;
    height: calc(100vh - 64px);
  }

  &.active {
    position: absolute;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);

    @media (min-width: 1025px) {
      display: none;
    }
  }
}

.menu-column {
  display: none;
  flex-flow: column;
  row-gap: 45px;
  min-height: 625px;
  padding: 30px 20px;

  @media (max-width: 1024px) {
    display: flex;
    padding-top: 45px;
    padding-bottom: 140px;
  }
}

.header-space {
  height: 132px;

  @media (max-width: 1024px) {
    height: 73px;
  }

  @media (max-width: 768px) {
    height: 64px;
  }
}
</style>
