<template>
  <div class="accordion-hor">
    <div
      class="item"
      :class="{ active: isSectionActive(1) }"
    >
      <input
        id="section1"
        v-model="activeSection"
        type="radio"
        name="trade-acc"
        class="trade-radio"
        value="1"
        @change="changeSection(1)"
      >
      <label for="section1">
        <div class="wrap-title">
          <div class="title">Basic</div>
          <div class="price">$500</div>
        </div>
      </label>
      <div class="accord-content">
        <div class="tab-content">
          <div class="block-title">
            Basic
          </div>
          <div class="content">
            <div class="row">
              <div class="col">
                <ul class="list">
                  <li>Basic spreads</li>
                  <li>Entry-level leverage</li>
                  <li>Entry-level commissions</li>
                  <li>Basic market analysis tools</li>
                  <li>Educational resources</li>
                  <li>Economic calendar and crypto news</li>
                  <li>Weekly market newsletter</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bottom-content">
            <div class="row">
              <div class="col">
                <div class="title">
                  Required total deposit
                </div>
                <div class="total-price">
                  $500
                </div>
              </div>
              <div class="col">
                <div class="wrap-btn">
                  <a
                    class="btn btn-account"
                    :href="accountLink"
                  >Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="item"
      :class="{ active: isSectionActive(2) }"
    >
      <input
        id="section2"
        v-model="activeSection"
        type="radio"
        name="trade-acc"
        class="trade-radio"
        value="2"
        @change="changeSection(2)"
      >
      <label for="section2">
        <div class="wrap-title">
          <div class="title">Prime</div>
          <div class="price">$2,500</div>
        </div>
      </label>
      <div class="accord-content">
        <div class="tab-content">
          <div class="block-title">
            Prime
          </div>
          <div class="content">
            <div class="row">
              <div class="col">
                <ul class="list">
                  <li>Improved spreads</li>
                  <li>Upgraded leverage</li>
                  <li>Improved commissions</li>
                  <li>Advanced market analysis</li>
                  <li>Unlimited access to educational resources</li>
                  <li>Economic calendar and crypto news</li>
                  <li>Weekly market newsletter</li>
                </ul>
              </div>
              <div class="col">
                <ul class="list">
                  <li class="green">
                    Dedicated specialist
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bottom-content">
            <div class="row">
              <div class="col">
                <div class="title">
                  Required total deposit
                </div>
                <div class="total-price">
                  $2,500
                </div>
              </div>
              <div class="col">
                <div class="wrap-btn">
                  <a
                    class="btn btn-account"
                    :href="accountLink"
                  >Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="item"
      :class="{ active: isSectionActive(3) }"
    >
      <input
        id="section3"
        v-model="activeSection"
        type="radio"
        name="trade-acc"
        class="trade-radio"
        value="3"
        @change="changeSection(3)"
      >
      <label for="section3">
        <div class="wrap-title">
          <div class="title">Apex</div>
          <div class="price">$25,000</div>
        </div>
      </label>
      <div class="accord-content">
        <div class="tab-content">
          <div class="block-title">
            Apex
          </div>
          <div class="content">
            <div class="row">
              <div class="col">
                <ul class="list">
                  <li>Market-grade spreads</li>
                  <li>Maximum leverage</li>
                  <li>Tailored commissions</li>
                  <li>Advanced market analysis</li>
                  <li>Unlimited access to educational resources</li>
                  <li>Economic calendar and crypto news</li>
                  <li>Exclusive analyst sessions</li>
                </ul>
              </div>
              <div class="col">
                <ul class="list">
                  <li>Dedicated specialist</li>
                  <li class="green">
                    Priority support
                  </li>
                  <li class="green">
                    Premier events access
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bottom-content">
            <div class="row">
              <div class="col">
                <div class="title">
                  Required total deposit
                </div>
                <div class="total-price">
                  $25,000
                </div>
              </div>
              <div class="col">
                <div class="wrap-btn">
                  <a
                    class="btn btn-account"
                    :href="accountLink"
                  >Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="item"
      :class="{ active: isSectionActive(4) }"
    >
      <input
        id="section4"
        v-model="activeSection"
        type="radio"
        name="trade-acc"
        class="trade-radio"
        value="4"
        @change="changeSection(4)"
      >
      <label for="section4">
        <div class="wrap-title">
          <div class="title">Alpha</div>
          <div class="price">$100,000</div>
        </div>
      </label>
      <div class="accord-content">
        <div class="tab-content">
          <div class="block-title">
            Alpha
          </div>
          <div class="content">
            <div class="row">
              <div class="col">
                <ul class="list">
                  <li>Market-grade spreads</li>
                  <li>Maximum leverage</li>
                  <li>Tailored commissions</li>
                  <li>On demand market analysis</li>
                  <li>Unlimited access to educational resources</li>
                  <li>Economic calendar and crypto news</li>
                  <li>Exclusive analyst sessions</li>
                </ul>
              </div>
              <div class="col">
                <ul class="list">
                  <li>Dedicated specialist</li>
                  <li>Premier events access</li>
                  <li class="green">
                    Zero commissions
                  </li>
                  <li class="green">
                    Guaranteed stop loss
                  </li>
                  <li class="green">
                    TradingView Pro
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bottom-content">
            <div class="row">
              <div class="col">
                <div class="title">
                  Required total deposit
                </div>
                <div class="total-price">
                  $100,000
                </div>
              </div>
              <div class="col">
                <div class="wrap-btn">
                  <a
                    class="btn btn-account"
                    :href="accountLink"
                  >Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="item"
      :class="{ active: isSectionActive(5) }"
    >
      <input
        id="section5"
        v-model="activeSection"
        type="radio"
        name="trade-acc"
        class="trade-radio"
        value="5"
        @change="changeSection(5)"
      >
      <label for="section5">
        <div class="wrap-title">
          <div class="title">Zenith</div>
          <div class="price">$250,000</div>
        </div>
      </label>
      <div class="accord-content">
        <div class="tab-content">
          <div class="block-title">
            Zenith
          </div>
          <div class="content">
            <div class="row">
              <div class="col">
                <ul class="list">
                  <li>Market-grade spreads</li>
                  <li>Maximum leverage</li>
                  <li>Tailored commissions</li>
                  <li>On demand market analysis</li>
                  <li>Unlimited access to educational resources</li>
                  <li>Economic calendar and crypto news</li>
                  <li>Exclusive analyst sessions</li>
                </ul>
              </div>
              <div class="col">
                <ul class="list">
                  <li>Premier events access</li>
                  <li>Zero Commissions</li>
                  <li>Guaranteed Stop Loss</li>
                  <li>TradingView Pro</li>
                  <li class="green">
                    Dedicated team
                  </li>
                  <li class="green">
                    IPO and ICO Access
                  </li>
                  <li class="green">
                    Priority Transactions
                  </li>
                  <li class="green">
                    Loyalty Package
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bottom-content">
            <div class="row">
              <div class="col">
                <div class="title">
                  Required total deposit
                </div>
                <div class="total-price">
                  $250,000
                </div>
              </div>
              <div class="col">
                <div class="wrap-btn">
                  <a
                    class="btn btn-account"
                    :href="accountLink"
                  >Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 1,
      accountLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up/`,
    };
  },
  methods: {
    isSectionActive(section) {
      return this.activeSection === section;
    },

    changeSection(section) {
      this.activeSection = section;
    },
  },
};

</script>

<style lang="scss" scoped>
.tab-content {
  max-width: 651px;
  padding: 32px 40px;
  background-color: #fff;
  border-radius: 22px;
  opacity: 0;
  transition: opacity 0.2s linear;

  @media (max-width: 992px) {
    max-width: none;
  }

  .block-title {
    // border-bottom: 1px solid rgba(7, 68, 41, 0.20);
    border-bottom: 1px solid #DAD8C4;
    padding-bottom: 20px;
    color: #352F44;
    font-size: 24px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 132%; /* 31.68px */

    @media (min-width: 1151px) and (max-width: 1500px) and (max-height: 920px) {
      padding-bottom: 15px;
    }
  }

  li {
    // margin-bottom: 6px;
    margin-bottom: 14px;
    padding-bottom: 2px;
    padding-left: 32px;
    color: #282929;
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    list-style: none;
    position: relative;
    display: inline-flex;
    padding-right: 10px;

    @media (min-width: 1151px) and (max-width: 1500px) and (max-height: 920px) {
      margin-bottom: 2px;
    }

    &::before {
      content: '';
      background-image: url("@/static/img/trading-accounts/icon-union.svg");
      background-position: center center;
      width: 24px;
      height: 18px;
      position: absolute;
      left: 2px;
      // top: 50%;
      // transform: translateY(-50%);
      top: 2px;
    }

    &.green {
      padding-top: 2px;
      padding-left: 16px;
      padding-right: 16px;
      background-color: #157275;
      color: #FFF;
      border-radius: 30px;

      &::before {
        // background-image: url("@/static/img/trading-accounts/icon-check-white.svg");
        background: none;
      }
    }
  }

  .content {
    padding-top: 24px;
    padding-bottom: 30px;

    @media (min-width: 1151px) and (max-width: 1500px) and (max-height: 920px) {
      padding-top: 18px;
      padding-bottom: 20px;
    }

    .row {
      display: flex;
      justify-content: space-between;
    }

    .col {
      width: 50%;
    }
  }

  .bottom-content {
    padding-top: 20px;
    border-top: 1px solid rgba(7, 68, 41, 0.20);

    @media (min-width: 1151px) and (max-width: 1500px) and (max-height: 920px) {
      padding-top: 11px;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .title {
      margin-bottom: 4px;
      color: #352F44;
      font-size: 16px;
      font-family: 'Poppins';
      font-weight: 400;
      line-height: 140%; /* 22.4px */

      @media (min-width: 1151px) and (max-width: 1500px) and (max-height: 920px) {
        margin-bottom: 2px;
      }
    }

    .total-price {
      color: #352F44;
      font-size: 46px;
      font-family: 'Poppins';
      font-weight: 500;
      line-height: 112%; /* 51.52px */
    }
  }
}

.wrap-btn {
  display: flex;

  .btn {
    font: 500 16px 'Poppins';
    line-height: 140%; /* 22.4px */
    padding: 15px 30px;
    border-radius: 4px;
    color: #FFF;
    transition: color .25s ease-in, background-color .25s ease-in;
  }

  .btn-account {
    display: inline-flex;
    align-items: center;
    column-gap: 5px;
    color: #FFF;
    background-color: #157275;
    transition: .25s box-shadow ease-in;

    &:hover {
      border: 1px solid #157275;
      background-color: transparent;
      color: #157275;
    }

    &:active {
      border: 1px solid #157275;
      background-color: transparent;
      color: #157275;
    }
  }
}

.icon-btn {
  width: 24px;
  height: 24px;
  overflow: hidden;
}

.icons {
  display: flex;
  transform: translateX(-100%);
  transition: .25s transform ease-in;
}

/***/
.accordion-hor {
  display: flex;
  margin-right: -16px;

  @media (max-width: 992px) {
    flex-flow: column;
    margin-right: 0;
  }

  input[type="radio"] {
    display: none;
  }

  label {
    padding-top: 30px;
    // width: 151px;
    width: 100%;
    background-color: #ECECE4;
    color: #352F44;
    padding: 10px;
    padding-top: 32px;
    display: block;
    cursor: pointer;
    border-radius: 22px;
    display: flex;
    flex-flow: column;
    align-items: center;
    // transition: all 0.3s ease;
    transition: all 0s ease;

    @media (max-width: 992px) {
      padding: 32px 30px;
      width: 100%;
    }

    .title {
      margin-bottom: 8px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 24px;
      font-weight: 500;
      line-height: 132%; /* 31.68px */
    }

    .price {
      color: #352F44;
      font-size: 16px;
      font-family: 'Poppins';
      font-weight: 500;
      line-height: 140%; /* 22.4px */
    }
  }

  .accord-content {
    width: 0;
    overflow: hidden;
    background-color: #f1f1f1;
    // transition: width 0.3s linear;
    transition: width 0s ease;
    border-radius: 22px;

    @media (max-width: 992px) {
      width: 100%;
      height: 0;
      transition: height 0.3s linear;
    }
  }

  input:checked+label {
    display: none;
  }

  input:checked+label+.accord-content {
    width: 651px;

    @media (max-width: 992px) {
      width: 100%;
      height: 526px;
    }

    .tab-content {
      opacity: 1;

      @media (max-width: 992px) {
        width: 100%;
      }
    }
  }

  .item {
    margin-right: 16px;
    display: flex;
    max-height: 560px;
    width: 100%;
    max-width: 151px;
    flex-shrink: 1;

    &.active {
      width: 651px;
      max-width: 651px;
    }

    @media (min-width: 1151px) and (max-width: 1500px) and (max-height: 920px) {
      max-height: 470px;
    }

    @media (max-width: 992px) {
      max-height: none;
      margin-right: 0;
      margin-bottom: 16px;
      flex-flow: column;
    }
  }
}

.item:nth-child(2) .tab-content .content {
  padding-bottom: 10px;
}

.item:nth-child(3) .tab-content .content {
  padding-bottom: 10px;
}

.item:nth-child(4) .tab-content .content {
  padding-bottom: 10px;
}

.item:nth-child(5) .tab-content .content {
  padding-bottom: 10px;

  @media (min-width: 1151px) and (max-width: 1500px) and (max-height: 920px) {
    padding-top: 8px;
    padding-bottom: 10px;
  }
}
</style>
