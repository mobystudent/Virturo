<template>
  <div class="accordion-hor">
    <div class="item">
      <input
        id="section-1"
        type="checkbox"
        name="trade-acc-1"
        class="trade-radio tab-1"
        checked
      >
      <label for="section-1">
        <div class="label">Basic</div>
        <div class="price">$500</div>

        <div class="accord-content">
          <div class="tab-content">
            <div class="block-title">Basic</div>
            <div class="content">
              <div class="row">
                <div class="col">
                  <ul class="list">
                    <li><span>Basic spreads</span></li>
                    <li><span>Entry-level leverage</span></li>
                    <li><span>Entry-level commissions</span></li>
                    <li><span>Basic market analysis tools</span></li>
                    <li><span>Educational resources</span></li>
                    <li><span>Economic calendar and crypto news</span></li>
                    <li><span>Weekly market newsletter</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom-content">
              <div class="row">
                <div class="col">
                  <div class="title">Required total deposit</div>
                  <div class="total-price">$500</div>
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
      </label>
    </div>
    <div class="item">
      <input
        id="section-2"
        type="checkbox"
        name="trade-acc-1"
        class="trade-radio tab-2"
      >
      <label for="section-2">
        <div class="label">Prime</div>
        <div class="price">$2,500</div>

        <div class="accord-content">
          <div class="tab-content">
            <div class="block-title">Prime</div>
            <div class="content">
              <div class="row">
                <div class="col">
                  <ul class="list">
                    <li><span>Improved spreads</span></li>
                    <li><span>Upgraded leverage</span></li>
                    <li><span>Improved commissions</span></li>
                    <li><span>Advanced market analysis</span></li>
                    <li><span>Unlimited access to educational resources</span></li>
                    <li><span>Economic calendar and crypto news</span></li>
                  </ul>
                </div>
                <div class="col">
                  <ul class="list">
                    <li><span>Weekly market newsletter</span></li>
                    <li class="green"><span>Dedicated specialist</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom-content">
              <div class="row">
                <div class="col">
                  <div class="title">Required total deposit</div>
                  <div class="total-price">$2,500</div>
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
      </label>
    </div>
    <div class="item">
      <input
        id="section-3"
        type="checkbox"
        name="trade-acc-1"
        class="trade-radio tab-3"
      >
      <label for="section-3">
        <div class="label">Apex</div>
        <div class="price">$25,000</div>
        <div class="accord-content">
          <div class="tab-content">
            <div class="block-title">Apex</div>
            <div class="content">
              <div class="row">
                <div class="col">
                  <ul class="list">
                    <li><span>Market-grade spreads</span></li>
                    <li><span>Maximum leverage</span></li>
                    <li><span>Tailored commissions</span></li>
                    <li><span>Advanced market analysis</span></li>
                    <li><span>Unlimited access to educational resources</span></li>
                    <li><span>Economic calendar and crypto news</span></li>
                  </ul>
                </div>
                <div class="col">
                  <ul class="list">
                    <li><span>Exclusive analyst sessions</span></li>
                    <li><span>Dedicated specialist</span></li>
                    <li class="green"><span>Priority support</span></li>
                    <li class="green"><span>Premier events access</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom-content">
              <div class="row">
                <div class="col">
                  <div class="title">Required total deposit</div>
                  <div class="total-price">$25,000</div>
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
      </label>
    </div>
    <div class="item">
      <input
        id="section-4"
        type="checkbox"
        name="trade-acc-1"
        class="trade-radio tab-4"
      >
      <label for="section-4">
        <div class="label">Alpha</div>
        <div class="price">$100,000</div>

        <div class="accord-content">
          <div class="tab-content">
            <div class="block-title">Alpha</div>
            <div class="content">
              <div class="row">
                <div class="col">
                  <ul class="list">
                    <li><span>Market-grade spreads</span></li>
                    <li><span>Maximum leverage</span></li>
                    <li><span>Tailored commissions</span></li>
                    <li><span>On demand market analysis</span></li>
                    <li><span>Unlimited access to educational resources</span></li>
                    <li><span>Economic calendar and crypto news</span></li>
                  </ul>
                </div>
                <div class="col">
                  <ul class="list">
                    <li><span>Exclusive analyst sessions</span></li>
                    <li><span>Dedicated specialist</span></li>
                    <li><span>Premier events access</span></li>
                    <li class="green">
                      <span>Zero commissions</span>
                    </li>
                    <li class="green"><span>Guaranteed stop loss</span></li>
                    <li class="green"><span>TradingView Pro</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom-content">
              <div class="row">
                <div class="col">
                  <div class="title">Required total deposit</div>
                  <div class="total-price">$100,000</div>
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
      </label>
    </div>
    <div class="item">
      <input
        id="section-5"
        type="checkbox"
        name="trade-acc-1"
        class="trade-radio tab-5"
      >
      <label for="section-5">
        <div class="label">Zenith</div>
        <div class="price">$250,000</div>

        <div class="accord-content">
          <div class="tab-content">
            <div class="block-title">Zenith</div>
            <div class="content">
              <div class="row">
                <div class="col">
                  <ul class="list">
                    <li><span>Market-grade spreads</span></li>
                    <li><span>Maximum leverage</span></li>
                    <li><span>Tailored commissions</span></li>
                    <li><span>On demand market analysis</span></li>
                    <li><span>Unlimited access to educational resources</span></li>
                    <li><span>Economic calendar and crypto news</span></li>
                    <li><span>Exclusive analyst sessions</span></li>
                  </ul>
                </div>
                <div class="col">
                  <ul class="list">
                    <li><span>Premier events access</span></li>
                    <li><span>Zero Commissions</span></li>
                    <li><span>Guaranteed Stop Loss</span></li>
                    <li><span>TradingView Pro</span></li>
                    <li class="green"><span>Dedicated specialist</span></li>
                    <li class="green"><span>IPO and ICO Access</span></li>
                    <li class="green"><span>Priority Transactions</span></li>
                    <li class="green"><span>Loyalty Package</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bottom-content">
              <div class="row">
                <div class="col">
                  <div class="title">Required total deposit</div>
                  <div class="total-price">$250,000</div>
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
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up/`,
    };
  },
};

</script>

<style lang="scss" scoped>
.tab-content {
  max-width: 651px;
  padding: 36px 30px 38px;
  background-color: #fff;
  border-radius: 22px;
  opacity: 0;

  @media (max-width: 1150px) {
    max-width: none;
  }

  .block-title {
    border-bottom: 1px solid rgba(7, 68, 41, 0.20);
    padding-bottom: 32px;
    color: #352F44;
    font-size: 32px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 1;
    /* 116.667% */
    letter-spacing: -0.154px;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }

  li {
    margin-bottom: 13px;
    max-width: 260px;
    color: #352F44;
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    list-style: none;
    position: relative;

    span {
      display: inline-flex;
      padding-bottom: 2px;
      padding-left: 32px;
      padding-right: 10px;

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
    }

    &.green {
      color: #FFF;

      // &:last-child {
      //   margin-bottom: 0;
      // }

      span {
        padding-top: 2px;
        padding-left: 16px;
        padding-right: 16px;
        background-color: #157275;
        border-radius: 30px;
      }

      span::before {
        background: none;
      }
    }
  }

  .content {
    padding-top: 25px;
    padding-bottom: 13px;

    .row {
      display: flex;
      justify-content: space-between;
      flex-flow: column;
    }
  }

  .bottom-content {
    padding-top: 24px;
    border-top: 1px solid rgba(7, 68, 41, 0.20);
    @media (max-width: 768px) {
      padding-top: 25px;
    }

    .row {
      display: flex;
      flex-flow: column;
    }

    .title {
      display: block;
      margin-bottom: 4px;
      color: #352F44;
      font-size: 15px;
      font-family: 'Poppins';
      font-weight: 400;
      line-height: 150%; /* 22.5px */
    }

    .total-price {
      margin-bottom: 15px;
      color: #352F44;
      font-size: 32px;
      font-family: 'Poppins';
      font-weight: 500;
      line-height: 140%; /* 44.8px */
      letter-spacing: -0.102px;
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
    transition: .25s background-color ease-in;

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

  @media (max-width: 1150px) {
    flex-flow: column;
    margin-right: 0;
  }

  input[type="checkbox"] {
    display: none;
  }

  label {
    padding-top: 30px;
    width: 151px;
    background-color: #ECECE4;
    color: #352F44;
    padding: 0;
    display: block;
    cursor: pointer;
    border-radius: 22px;
    display: flex;
    flex-flow: column;
    transition: all 0.3s ease;

    @media (max-width: 1150px) {
      width: 100%;
    }

    .label {
      margin-bottom: 8px;
      padding-top: 32px;
      padding-left: 30px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 22px;
      font-weight: 500;
      line-height: 140%; /* 30.8px */
    }

    .price {
      padding-left: 30px;
      padding-bottom: 32px;
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
    transition: width 0.5s linear;
    border-radius: 22px;

    @media (max-width: 1150px) {
      width: 100%;
      height: 0;
      transition: height 0.5s linear;
    }
  }

  input:checked+label {

    .price,
    .label {
      display: none;
    }

  }

  input:checked+label .accord-content {
    width: 651px;

    @media (max-width: 1150px) {
      width: 100%;
      height: 526px;
    }

    .tab-content {
      opacity: 1;

      @media (max-width: 1150px) {
        width: 100%;
      }
    }
  }

  .item {
    margin-right: 16px;
    display: flex;
    max-height: 560px;

    @media (max-width: 1150px) {
      max-height: none;
      margin-right: 0;
      margin-bottom: 16px;
      flex-flow: column;
    }
  }
}

.accordion-hor .tab-1:checked+label .accord-content {
  @media (max-width: 1150px) {
    height: 612px;
  }
}

.accordion-hor .tab-2:checked+label .accord-content {
  @media (max-width: 1150px) {
    height: 670px;
  }
}

.accordion-hor .tab-3:checked+label .accord-content {
  @media (max-width: 1150px) {
    height: 750px;
  }
}

.accordion-hor .tab-4:checked+label .accord-content {
  @media (max-width: 1150px) {
    height: 855px;
  }
}

.accordion-hor .tab-5:checked+label .accord-content {
  @media (max-width: 1150px) {
    height: 970px;
  }
}
</style>
