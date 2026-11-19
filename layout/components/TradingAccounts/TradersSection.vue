<template>
  <section class="traders">
    <div class="container">
      <div class="inner">
        <p class="headline">
          We recognize the individuality of each trader. While expectations may vary, our diverse online
          trading account options cater to your specific needs. Choose from various CFD trading account plans, ensuring
          an ideal fit for your interests. With personalized account features and dedicated support, open a trading
          account today to kickstart your personalized trading journey.
        </p>
        <p class="under-headline">
          Catering to your specific trading needs is crucial. We offer a variety of account features and
          advantages across different plans, ensuring that each trader finds a suitable option. Our team is dedicated to
          personalizing your trading experience.
        </p>
        <h2 class="title">
          Join us for growth
        </h2>
        <p class="subtitle">
          Discover the perfect solution tailored to your needs. Inclusive account features include:
        </p>
        <ul class="traders-list">
          <li>
            <img src="@/static/img/trading-accounts/grow-icons/trading-size.png">
            <img
              class="hovered"
              src="@/static/img/trading-accounts/grow-icons/trading-size-color.png"
              alt="Trading Platform"
            >
            Trading size as low as 0.01 lots
          </li>
          <li>
            <img
              src="@/static/img/trading-accounts/grow-icons/leverage.png"
              alt="Cfd Trading"
            >
            <img
              class="hovered"
              src="@/static/img/trading-accounts/grow-icons/leverage-color.png"
              alt="Cfd Trading"
            >
            Leverage up to 200:1
          </li>
          <li>
            <img
              src="@/static/img/trading-accounts/grow-icons/heading.png"
              alt="Trading Platform"
            >
            <img
              class="hovered"
              src="@/static/img/trading-accounts/grow-icons/heading-color.png"
              alt="Trading Platform"
            >
            Heading and scalping permissions
          </li>
          <li>
            <img
              src="@/static/img/trading-accounts/grow-icons/news.png"
              alt="Cfd Trading"
            >
            <img
              class="hovered"
              src="@/static/img/trading-accounts/grow-icons/news-color.png"
              alt="Cfd Trading"
            >
            Integrated news trading
          </li>
          <li>
            <img
              src="@/static/img/trading-accounts/grow-icons/inmediate-execution.png"
              alt="Cfd Trading"
            >
            <img
              class="hovered"
              src="@/static/img/trading-accounts/grow-icons/inmediate-execution-color.png"
              alt="Cfd Trading"
            >
            Immediate execution
          </li>
          <li>
            <img
              src="@/static/img/trading-accounts/grow-icons/one-click.png"
              alt="Cfd Trading"
            >
            <img
              class="hovered"
              src="@/static/img/trading-accounts/grow-icons/one-click-color.png"
              alt="Cfd Trading"
            >
            One-click trading
          </li>
          <li>
            <img
              src="@/static/img/trading-accounts/grow-icons/professional.png"
              alt="Cfd Trading"
            >
            <img
              class="hovered"
              src="@/static/img/trading-accounts/grow-icons/professional-color.png"
              alt="Trading Platform"
            >
            Professional charting
          </li>
          <li>
            <img
              src="@/static/img/trading-accounts/grow-icons/webapp.png"
              alt="Trading Platform"
            >
            <img
              class="hovered"
              src="@/static/img/trading-accounts/grow-icons/webapp-color.png"
              alt="Trading Platform"
            >
            Web trader & trading apps
          </li>
          <li>
            <img
              src="@/static/img/trading-accounts/grow-icons/live-support.png"
              alt="Trading Platform"
            >
            <img
              class="hovered"
              src="@/static/img/trading-accounts/grow-icons/live-support-color.png"
              alt="Trading Platform"
            >
            Live support team
          </li>
          <li>
            <img
              src="@/static/img/trading-accounts/grow-icons/crypto-wallet.png"
              alt="Trading Assets"
            >
            <img
              class="hovered"
              src="@/static/img/trading-accounts/grow-icons/crypto-wallet-color.png"
              alt="Trading Assets"
            >
            Crypto wallet services
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TradersSection',
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.traders {
  background-color: #000000;
}

.headline {
  padding-bottom: 24px;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;
  color: #ffffff;
  max-width: 650px;
}

.under-headline {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: #D6D6D6;
  margin-bottom: 128px;
  max-width: 650px;
}

.title {
  padding-bottom: 24px;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
}

.subtitle {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  color: #FFFFFF;
}

.traders-list {
  padding-top: 80px;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    color: #ffffff;
    text-align: center;
    transition: 0.2s;

    &:hover img:first-child {
      opacity: 0;
    }

    &:hover {
      color: #34FEC8;

      img:first-child {
        opacity: 0;
      }
    }

    &:hover img:last-child {
      opacity: 1;
    }

    img {
      margin-bottom: 16px;
      transition: 0.2s;

      &:last-child {
        opacity: 0;
      }
    }
  }
}

.trading-btn {
  display: none;
}

.hovered {
  position: absolute;
  opacity: 0;
  transition: 0.2s;

  &.active {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .traders {
    .inner {
      padding-top: 30px;
    }
  }

  .headline {
    padding-bottom: 55px;
    font-size: 24px;
  }

  .subtitle {
    padding-bottom: 15px;
  }

  .under-headline {
    margin-bottom: 80px;
  }

  .traders-list {
    padding-top: 40px;

    li {
      margin-left: 10px;
      width: calc((100% - 30px) / 3);
    }
  }

  .trading-btn {
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 44px;
    padding: 8px 33px;
    background-color: #f4503e;
    color: #ffffff;
    border-radius: 30px;
    border: 1px solid #f4503e;
  }
}

@media (max-width: 520px) {
  .traders-list {
    li {

      &:last-child {
        width: 100%;
      }
    }
  }
}
</style>
