<template>
  <section class="powerful-trading">
    <div class="wrapper">
      <div class="row">
        <div class="inner">
          <h2 class="title">
            Powerful trading
            <span>on the move</span>
          </h2>
          <div class="description">
            <p>
              Packed with advanced features, yet intuitive and available to everyone; whatever the next step in your trading journey is, our platform is ready to help you get there. And if you need to trade on-the-go, our award-winning mobile app1 gives you all the functionality of our web platform in your pocket.
            </p>
          </div>

          <div class="download-images">
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.virturo.app"
            >
              <img
                src="@/static/img/trading-accounts/download/google-play-icon.svg"
                alt=""
              >
            </a>

            <a
              target="_blank"
              href="#"
            >
              <img
                src="@/static/img/trading-accounts/download/app-store-icon.svg"
                alt=""
              >
            </a>
          </div>
        </div>

        <div class="col-img" />
      </div>
    </div>
    <img
      class="internal-bg internal-bg-md right img-bg"
      src="@/static/img/trading-accounts/powerful-trading-all-bg.png"
      alt="Trading Assets"
    >
    <div class="img-icon-mob">
      <img
        class="icon-mob"
        src="@/static/img/trading-accounts/icon-mobile-img.png"
        alt="Trading Assets"
      >
    </div>
    <img
      class="internal-bg-mob bottom"
      src="@/static/img/trading-accounts/bg-union-mob.png"
      alt="Trading Assets"
    >
  </section>
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
.powerful-trading {
  background-color: #D3F5EC;
  padding: 100px 0 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 992px) {
    padding-top: 80px;
    padding-bottom: 415px;
  }

  .wrapper {
    max-width: 1340px;
    box-sizing: border-box;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (max-width: 1024px) {}

    @media (max-width: 768px) {
      padding: 0 15px;
    }

    .row {
      display: flex;
      justify-content: space-between;

      @media (max-width: 768px) {
        flex-flow: column;
      }
    }
  }

  .col-img {
    align-self: center;

    @media (max-width: 992px) {
      max-width: 232px;
    }

    @media (max-width: 768px) {
      margin-top: 64px;
      max-width: 232px;
    }

    .internal-bg.right {
      right: 5%;
    }
  }

  .internal-bg {
    position: absolute;
    top: 0;
    height: 100%;

    &.internal-bg-md {
      display: block;
      @media (max-width: 1500px) {
        width: 50%;
      }
    }

    &.internal-bg-lg {
      display: none;
      @media (min-width: 1501px) {
        display: block;
      }
    }

    &.right {
      right: 0;

      @media (max-width: 768px) {
        top: auto;
        bottom: 0;
      }
    }

    &.left {
      left: 0;
    }

    &.img-bg {
      // width: 50%;
      @media (max-width: 992px) {
        display: none;
      }
    }

    @media (max-width: 1460px) {
      &.img-bg {
        width: auto;
      }
    }

    @media (max-width: 992px) {
      &.mobile-img {
        height: auto;
        width: 100%;
        max-width: 35%;
        top: auto;
        bottom: 0;
      }

      &.img-bg {
        max-width: 53%;
      }
    }

    @media (max-width: 768px) {
      &.mobile-img {
        position: relative;
        height: auto;
        width: 100%;
        max-width: 100%;
        top: auto;
        bottom: -4px;
      }

      &.img-bg {
        width: auto;
        max-width: none;
        height: 440px;
        right: 50%;
        transform: translateX(50%);
      }
    }
  }

  .inner {
    margin-top: 40px;

    @media (max-width: 992px) {
      margin-top: 0;
    }
  }

  .description {
    margin-bottom: 40px;
    max-width: 524px;

    @media (max-width: 992px) {
      margin-bottom: 40px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    color: #352F44;
    font-family: 'Poppins';

    @media (max-width: 768px) {
      font-size: 15px;
      line-height: 150%; /* 22.5px */
    }
  }

  .title {
    padding-bottom: 40px;
    font-size: 52px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    color: #352F44;

    // max-width: 541px;
    @media (max-width: 992px) {
      font-size: 40px;
    }

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }

    span {
      display: block;
    }
  }
}

.download-images {
  margin-bottom: 98px;
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    gap: 16px;

    img {
      width: 100%;
    }
  }
}

.internal-bg-mob {
    display: none;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;

    @media (max-width: 992px) {
      display: block;
      // max-height: 440px;
      width: 560px;
      height: 560px;
      background-position: center;
      left: 50%;
      transform: translateX(-50%);
      bottom: -90px;
    }
  }

  .icon-mob {
    display: none;
    // max-height: 379px;
    position: absolute;
    transform: translateX(-52%);
    left: 50%;
    bottom: 0px;

    @media (max-width: 992px) {
      display: block;
    }
  }
</style>
