<template>
  <section class="financial-horizon">
    <div class="wrapper">
      <div class="intro">
        <h2 class="block-title">
          Navigate your financial horizon
        </h2>
        <div class="desc">
          With Virturo MarketFlow:
        </div>
      </div>

      <div class="accordion-desktop">
        <TrandingTabs />
      </div>

      <div class="accordion-mobile">
        <TrandingTabsMob />
      </div>

      <div class="block-compare-accounts">
        <button
          :class="{ 'link-compare-accounts': true, active: showCompareTable }"
          @click="toggleCompareTable"
        >
          <span>Compare accounts</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 9L12 15L6 9"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>

    <transition name="slide">
      <div
        v-show="showCompareTable"
        class="block-table-compare-accounts"
      >
        <div class="wrapper">
          <TableCompareAccounts />
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import TrandingTabs from './TrandingTabs.vue';
import TableCompareAccounts from './TableCompareAccounts.vue';
import TrandingTabsMob from './TrandingTabsMob.vue';

export default {
  components: { TableCompareAccounts, TrandingTabs, TrandingTabsMob },
  data() {
    return {
      showCompareTable: false,
    };
  },
  methods: {
    toggleCompareTable() {
      this.showCompareTable = !this.showCompareTable;
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-enter-to,
.slide-leave {
  max-height: 390px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

.financial-horizon {
  padding-top: 60px;
  background-color: #352F44;

  @media (max-width: 992px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (min-width: 1151px) and (max-width: 1500px) and (max-height: 920px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}

.accordion-desktop {
  display: block;

  @media (max-width: 1150px) {
    display: none;
  }
}

.accordion-mobile {
  display: none;

  @media (max-width: 1150px) {
    display: block;
  }
}

.block-table-compare-accounts {
  padding: 40px 0 0;
  background-color: #fff;
}

.wrapper {
  max-width: 1340px;
  // max-width: 1440px;
  padding: 0 30px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
}

.intro {
  margin: 0 0 40px;

  @media (min-width: 1151px) and (max-width: 1500px) and (max-height: 920px) {
    margin: 0 0 30px;
  }

  .block-title {
    margin-bottom: 6px;
    color: #D3F5EC;
    font-size: 52px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;

    @media (max-width: 992px) {
      margin-bottom: 16px;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }

  .desc {
    color: #FFF;
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 500;
    line-height: 132%; /* 31.68px */

    @media (max-width: 992px) {
      font-size: 20px;
      line-height: 150%; /* 30px */
    }
  }
}

.block-compare-accounts {
  margin: 40px 0 0;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;

  @media (max-width: 1150px) {
    display: none;
  }

  @media (min-width: 1151px) and (max-width: 1500px) and (max-height: 920px) {
    margin: 25px 0 0;
  }
}

.link-compare-accounts {
  padding: 0;
  border: none;
  display: flex;
  align-items: center;
  background: none;
  color: #FFF;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */

  svg {
    margin-left: 10px;
    width: 24px;
    height: 24px;
  }

  &.active {
    svg {
      transform: rotate(180deg);
    }
  }
}

.block-table-compare-accounts {
  @media (max-width: 1150px) {
    display: none;
  }
}
</style>
