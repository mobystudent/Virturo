<template>
  <section class="section timing-is-everything-section">
    <div class="wrapper">
      <h2 class="bold">
        Timing is everything
      </h2>
      <h2 class="thin">
        Commence your derivative trading journey today
      </h2>
      <div class="steps-block">
        <div class="step">
          <div class="step-num">
            <div>
              <img
                src="../../static/img/step1.png"
                alt=""
              >
            </div>
            <div class="arrow">
              <img
                src="../../static/img/arrow-right.png"
                alt=""
              >
            </div>
          </div>
          <div class="step-text">
            <h3>Select an Asset</h3>
            <p>
              Offers a wide array of assets spanning various market segments, providing you with numerous
              options for liquidity and diversification.
            </p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">
            <div>
              <img
                src="../../static/img/step2.png"
                alt=""
              >
            </div>
            <div class="arrow">
              <img
                src="../../static/img/arrow-right.png"
                alt=""
              >
            </div>
          </div>
          <div class="step-text">
            <h3>Choose contract type</h3>
            <p>
              Regardless of whether you are buying or selling, our platform enables traders to seize opportunities
              during
              market downturns and leverage their investments for maximum returns.
            </p>
          </div>
        </div>
        <div class="step">
          <div class="step-num">
            <div>
              <img
                src="../../static/img/step3.png"
                alt=""
              >
            </div>
          </div>
          <div class="step-text">
            <h3>Execute</h3>
            <p>
              Benefit from our advanced platform capabilities, which include lightning-fast execution, comprehensive
              monitoring tools, and convenient access on the go.
            </p>
          </div>
        </div>
      </div>
      <div class="trade-on">
        <h2>Trade on 5,000+ market assets in a minute</h2>
        <p>
          We understand the significance of diverse trading assets in maximizing your Forex trading
          potential. Having access to a wide range of assets is a key factor in achieving success and profitability. Our
          trading platform stands out as the best CFD trading platform for online trading, offering a comprehensive
          selection of assets across different classes, including forex pairs, indices, metals, and energy commodities.
        </p>

        <div class="text-blocks">
          <div class="item">
            <div class="img-block">
              <img
                src="@/static/img/forex.png"
                alt=""
              >
            </div>
            <h3>Forex pairs</h3>
            <p>
              Forex pairs form the cornerstone of our trading platform. With major, minor, and exotic currency pairs
              available, traders can capitalize on global economic trends and political developments to make informed
              decisions and seize trading opportunities.
            </p>
          </div>
          <div class="item">
            <div class="img-block">
              <img
                src="@/static/img/Indices.png"
                alt=""
              >
            </div>
            <h3>Indices</h3>
            <p>
              Indices are another crucial asset class available. Traders gain exposure to entire markets,
              tracking the performance of leading stock exchanges worldwide. Diversifying your portfolio with indices
              allows you to hedge against market volatility while benefiting from overall market growth.
            </p>
          </div>
          <div class="item">
            <div class="img-block">
              <img
                src="@/static/img/metals.png"
                alt=""
              >
            </div>
            <h3>Metals</h3>
            <p>
              Metals, such as gold and silver, have intrinsic value and serve as safe-haven assets during economic
              uncertainties. Our platform enables traders to tap into the potential of precious metals and diversify
              their investments for long-term stability.
            </p>
          </div>
          <div class="item">
            <div class="img-block">
              <img
                src="@/static/img/energy.png"
                alt=""
              >
            </div>
            <h3>Energy</h3>
            <p>
              For those seeking to trade energy commodities, Offers access to the dynamic world of oil and
              natural gas. Energy prices are influenced by geopolitical events and supply-demand dynamics, providing
              traders with ample opportunities to profit from market fluctuations.
            </p>
          </div>
        </div>
      </div>
      <TradingFeaturesSlider />
    </div>
  </section>
</template>

<script>
import TradingFeaturesSlider from './TradingFeaturesSlider.vue';

export default {
  components: { TradingFeaturesSlider },
  data() {
    return {
      link: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up`,
    };
  },
};
</script>

<style scoped lang="scss">
.timing-is-everything-section {
  padding: 120px 0 0 0;
  background-color: #000000;

  h2 {
    color: #FFFFFF;
    text-align: left;

    &.thin {
      font-weight: 300;
      font-size: 24px;
      line-height: 1.2;
    }

    &.bold {
      font-weight: 700;
      font-size: 48px;
      line-height: 1.2;
      margin-bottom: 14px;
    }
  }

  .steps-block {
    margin: 50px 0 40px;
    display: flex;

    .step {
      width: 33.333%;

      .step-num {
        display: flex;

        div {
          width: 50%;
          display: flex;
          align-items: center;
        }
      }

      h3 {
        color: #34FEC8;
        font-weight: 600;
        font-size: 28px;
        line-height: 1.2;
        margin: 32px 0 32px 10px;
      }

      p {
        color: #FFFFFF;
        font-weight: 300;
        font-size: 16px;
        line-height: 1.6;
        padding-left: 10px;
      }
    }
  }

  .trade-on {
    padding: 80px 0 0 0;
    text-align: center;

    h2 {
      font-size: 48px;
      line-height: 1.2;
      font-weight: 700;
      margin-bottom: 40px;
      max-width: 440px;
    }

    p {
      font-size: 24px;
      line-height: 1.4;
      font-weight: 300;
      color: #FFFFFF;
      text-align: left;
      max-width: 720px;

      span {
        color: #34FEC8;
      }
    }

    a {
      display: inline-block;
      font-size: 14px;
      font-weight: 500;
      color: #ffffff;
      background-color: #242C48;
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #242C48;
      border-radius: 29px 29px 29px 29px;
      padding: 11px 33px 11px 33px;
      margin-top: 35px;
      transition: all .31s ease;

      &:hover {
        color: #F4503E;
        background-color: #0E0523;
        border-color: #F4503E;
      }
    }
  }

  .text-blocks {
    padding-top: 80px;
    display: flex;

    .item {
      padding: 10px;
      width: 25%;

      .img-block {
        width: 100px;
        margin: 0 auto;
        margin-bottom: 16px;

        img {
          width: 100%;
        }
      }

      h3 {
        color: #FFFFFF;
        font-weight: 600;
        font-size: 28px;
        margin-bottom: 32px;
      }

      p {
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.6;
        padding: 0px 15px 0 0;
        margin-bottom: 40px;
      }
    }
  }

  .mobile-start-trading-btn {
    display: none;
  }
}

@media (max-width: 1024px) {
  .wrapper {
    padding: 0 24px;
  }

  .timing-is-everything-section .profit-from-market .img-block img {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .timing-is-everything-section {
    padding: 40px 0 0 0;

    h2 {
      text-align: left;

      &.bold {
        font-size: 32px;
      }
    }

    .steps-block {
      flex-direction: column;

      .step {
        width: 100%;
        display: flex;

        .step-num {
          flex-direction: column;
          width: 70px;

          .arrow {
            transform: rotate(-270deg);
            align-self: center;

            img {
              display: none;
              //width: 55px;
            }
          }
        }

        .step-text h3 {
          font-size: 22px;
          margin: 16px 0 32px 20px;
        }

        p {
          padding-left: 20px;
        }
      }
    }

    .mobile-start-trading-btn {
      display: block;
      text-align: center;

      .trading-btn {
        font-size: 14px;
        font-weight: 500;
        color: #FFFFFF;
        background-color: #F33C29E6;
        border-radius: 31px 31px 31px 31px;
        padding: 15px 34px 15px 34px;
      }
    }

    .trade-on {
      padding: 80px 20px 110px 20px;

      h2 {
        font-size: 32px;
        text-align: left;
        padding: 0;
      }
    }

    .profit-from-market {
      flex-direction: column;
      padding: 40px 20px;

      .text-block {
        width: 100%;
        text-align: center;
      }

      .img-block {
        width: 100%;
        margin-top: 32px;

        img {
          width: 100%;
        }
      }
    }

    .text-blocks {
      flex-direction: column;

      .item {
        width: 100%;
        margin-bottom: 50px;

        .img-block {
          display: inline-block;
          vertical-align: middle;
        }

        h3 {
          display: inline-block;
          vertical-align: middle;
          margin-left: 10px;
          font-size: 26px;
        }

        p {
          padding: 0;
        }
      }
    }
  }

}
</style>
