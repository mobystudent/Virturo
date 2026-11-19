<template>
  <section class="legal-section">
    <div class="wrapper">
      <div class="tabs-wrapper">
        <div class="tabs-titles">
          <div
            v-for="(item, index) in legalTabs"
            :key="index"
            class="tab-title"
            :class="{ active: activeIndex === index }"
            @click="handleTabChanging(index)"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="tabs-contents">
          <div
            v-for="(item, index) in legalTabs"
            v-show="activeIndex === index"
            :key="index"
            class="tab-content"
          >
            <component :is="item.text" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TermsConditions from './LegalTabContent/TermsConditions.vue';
import PrivacyPolicy from './LegalTabContent/PrivacyPolicy.vue';
import AntiMoneyLaundering from './LegalTabContent/AntiMoneyLaundering.vue';
import KnowYourCostumer from './LegalTabContent/KnowYourCostumer.vue';
import WithdrawalPolicy from './LegalTabContent/WithdrawalPolicy.vue';
import ReferralProgram from './LegalTabContent/ReferralProgram.vue';

export const LEGAL_TABS_HASH = {
  TERMS_AND_CONDITIONS: 'terms-and-conditions',
  PRIVACY_POLICY: 'privacy-policy',
  ANTI_MONEY_LAUNDERING: 'aml',
  KNOW_YOUR_COSTUMER: 'kyc',
  WITHDRAWAL_POLICY: 'withdrawal-policy',
  REFERRAL_PROGRAM: 'referral-program',
};

const LEGAL_TABS_HASH_ID = Object.keys(LEGAL_TABS_HASH).reduce((acc, id) => ({
  [LEGAL_TABS_HASH[id]]: id,
  ...acc,
}), {});

const legalTabs = {
  [LEGAL_TABS_HASH.TERMS_AND_CONDITIONS]: {
    title: 'Terms & Conditions',
    text: TermsConditions,
  },
  [LEGAL_TABS_HASH.PRIVACY_POLICY]: {
    title: 'Privacy Policy',
    text: PrivacyPolicy,
  },
  [LEGAL_TABS_HASH.ANTI_MONEY_LAUNDERING]: {
    title: 'Anti Money Laundering',
    text: AntiMoneyLaundering,
  },
  [LEGAL_TABS_HASH.KNOW_YOUR_COSTUMER]: {
    title: 'Know Your Costumer',
    text: KnowYourCostumer,
  },
  [LEGAL_TABS_HASH.WITHDRAWAL_POLICY]: {
    title: 'Withdrawal Policy',
    text: WithdrawalPolicy,
  },
  [LEGAL_TABS_HASH.REFERRAL_PROGRAM]: {
    title: 'Referral Program',
    text: ReferralProgram,
  },
};

export default {
  name: 'LegalContent',
  components: {
    TermsConditions,
    PrivacyPolicy,
    AntiMoneyLaundering,
    KnowYourCostumer,
    WithdrawalPolicy,
    ReferralProgram,
  },
  data() {
    return {
      activeIndex: LEGAL_TABS_HASH.TERMS_AND_CONDITIONS,
      legalTabs,
    };
  },
  watch: {
    $route($to, from) {
      if ($to.hash !== from.hash) {
        const hash = ($to.hash ?? '').slice(1);
        if (LEGAL_TABS_HASH_ID[hash]) this.activeIndex = hash;
        else this.activeIndex = LEGAL_TABS_HASH.TERMS_AND_CONDITIONS;
      }
    },
  },
  created() {
    const hash = (this.$router?.history.current.hash ?? '').slice(1);
    if (LEGAL_TABS_HASH_ID[hash]) this.activeIndex = hash;
    else this.activeIndex = LEGAL_TABS_HASH.TERMS_AND_CONDITIONS;
  },
  methods: {
    handleTabChanging(index) {
      this.$router.push({ hash: `#${index}` });
      if (window.innerWidth <= 768) {
        document.documentElement.scrollTop = 0;
      }
    },
    activeTabContent(index) {
      return this.activeIndex === index;
    },
  },
};

</script>

<style lang="scss">
.legal-section {

  .wrapper {
    margin: 0 auto;
    max-width: 1340px;
    width: 100%;
    padding: 0 30px;
    @media (max-width: 1020px) {
      padding: 0;
    }

    h2 {
      margin-bottom: 24px;
      color: #352F44;
      font-family: "Poppins";
      font-size: 52px;
      font-style: normal;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;

      @media (max-width: 768px) {
        font-size: 32px;
        line-height: 44px;
      }
    }

    h3 {
      margin-bottom: 24px;
      color: #352F44;
      font-size: 24px;
      font-family: "Poppins";
      font-weight: 500;
      line-height: 132%; /* 31.68px */

      @media (max-width: 768px) {
        margin-bottom: 16px;
        font-size: 22px;
        line-height: 30px;
      }
    }

    h4 {
      margin-bottom: 16px;
      color: #352F44;
      font-size: 1.25rem; // 24px
      font-family: "Poppins";
      font-weight: 500;
      line-height: 140%;
      /* 33.6px */
    }

    ol,
    ul {
      margin-bottom: 24px;
    }

    ul li {
      list-style: disc;
    }

    ol li {
      list-style: decimal;
    }

    li {
      color: #352F44;
      font-family: "Poppins";
      font-size: 16px;
      font-weight: 400;
      line-height: 140%;
      @media (max-width: 992px) {
        font-size: 15px;
        line-height: 140%; /* 21px */
      }
    }

    a {
      color: #352F44;
      text-decoration: underline;

      &:hover,
      &:active {
        color: #352F44;
        text-decoration: none;
      }
    }

    .tabs-wrapper {
      display: flex;
      flex-flow: column;
      padding: 60px 0;

      @media screen and (max-width: 782px) {
        padding-top: 40px;
        padding-bottom: 100px;
      }

      .tabs-titles {
        margin-bottom: 60px;
        width: 100%;
        display: flex;
        gap: 16px;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;

        @media (max-width: 1020px) {
          padding-left: 30px;
          padding-right: 30px;
        }

        @media screen and (max-width: 992px) {
          margin-bottom: 40px;
        }

        @media screen and (max-width: 782px) {
          padding-right: 16px;
        }

        @media screen and (max-width: 768px) {
          padding-left: 15px;
        }

        .tab-title {
          flex: 0 0 auto;
          min-width: 142px;
          background: #ecece4;
          color: #352f44;
          font: 16px / 22px "Poppins", sans-serif;
          list-style-type: none;
          padding: 12px 25px;
          transition: color .25s ease-in, background .25s ease-in;
          cursor: pointer;

          &:hover {
            background: #352f44;
            color: #fff;
          }

          &.active {
            background: #352f44;
            color: #fff;
          }
        }

        .tab-content-mobile {
          display: none;
        }
      }

      .tabs-contents {
        margin: 0 auto;
        width: 100%;
        max-width: 850px;
        @media (max-width: 1020px) {
          padding: 0 30px;
        }

        @media (max-width: 768px) {
          padding: 0 15px;
        }

        .tab-content {
          color: #352F44;
          font-family: "Poppins";

          p {
            margin-bottom: 24px;
            color: #352F44;
            font-size: 16px;
            font-family: "Poppins";
            font-weight: 400;
            line-height: 140%; /* 22.4px */

            &:last-child {
              margin-bottom: 0;
            }

            @media (max-width: 992px) {
              font-size: 15px;
              line-height: 140%; /* 21px */
            }

            strong {
              font-weight: 500;
            }
          }

          a {
            color: #352F44;
            text-decoration: none;
          }

          .link {
            color: #352F44;
            text-decoration: none;
          }

          ol,
          ul {
            padding-left: 20px;
            margin-bottom: 20px;
          }

        }

      }

    }
  }
}

@media (max-width: 768px) {
  .legal-section {

    .wrapper {

      .tabs-wrapper {
        .tabs-titles {
          width: 100%;

          .tab-title {
            &.active {
              .tab-content-mobile {
                display: none;
              }
            }
          }
        }

        .tab-content-mobile {
          display: none;
        }
      }
    }
  }
}
</style>
