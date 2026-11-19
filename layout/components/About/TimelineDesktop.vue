<template>
  <section class="section timeline-mobile">
    <div class="wrapper main-wrapper">
      <div class="title-wrap">
        <h2 class="title-main">
          Navigating the future<br> of financial excellence
        </h2>
      </div>
    </div>
    <div class="wrapper-timelime-block">
      <img
        class="internal-bg left"
        src="@/static/img/company/timeline/snowflake-bg-left.png"
        alt="review background"
      >
      <img
        class="internal-bg right"
        src="@/static/img/company/timeline/snowflake-bg-right.png"
        alt="review background"
      >

      <div class="wrap-timeline timeline">
        <div class="logo">
          <img
            class="timeline-logo"
            src="@/static/img/company/timeline/timeline-logo.png"
            alt="timeline logo"
          >
        </div>
        <div class="roadmap">
          <div class="wrap-time time-1">
            <div class="line left line-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="113"
                viewBox="0 0 61 113"
                fill="none"
              >
                <path
                  d="M60 0L60 97C60 105.284 53.2843 112 45 112H0"
                  stroke="#157275"
                  stroke-width="2"
                  stroke-dasharray="4 4"
                />
              </svg>
            </div>
            <div class="wrap-content left">
              <div class="icon">
                <img
                  class="img"
                  src="@/static/img/company/timeline/01.svg"
                  alt="icon"
                >
              </div>
              <h5 class="title">
                Foundation and technology enhancement
              </h5>
              <div class="description">
                Optimize trading platform for speed and security. Strengthen regulatory compliance, integrate blockchain protocols.
              </div>
            </div>
          </div>
          <div class="wrap-time time-2">
            <div class="line line-right line-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="113"
                viewBox="0 0 61 113"
                fill="none"
              >
                <path
                  d="M0.999992 0L1 97C1 105.284 7.71572 112 16 112H61"
                  stroke="#157275"
                  stroke-width="2"
                  stroke-dasharray="4 4"
                />
              </svg>
            </div>
            <div class="wrap-content right">
              <div class="icon">
                <img
                  class="img"
                  src="@/static/img/company/timeline/02.svg"
                  alt="icon"
                >
              </div>
              <h5 class="title">
                Diversification and education
              </h5>
              <div class="description">
                Introduce new asset classes, explore emerging markets. Launch an extensive client education program.
              </div>
            </div>
          </div>

          <div class="wrap-time time-3">
            <div class="line left line-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="113"
                viewBox="0 0 61 113"
                fill="none"
              >
                <path
                  d="M60 0L60 97C60 105.284 53.2843 112 45 112H0"
                  stroke="#157275"
                  stroke-width="2"
                  stroke-dasharray="4 4"
                />
              </svg>
            </div>
            <div class="wrap-content left">
              <div class="icon">
                <img
                  class="img"
                  src="@/static/img/company/timeline/03.svg"
                  alt="icon"
                >
              </div>
              <h5 class="title">
                Technology leadership
              </h5>
              <div class="description">
                Explore blockchain integration and decentralized finance. Invest in AI for advanced market analysis and predictive tools.
              </div>
            </div>
          </div>

          <div class="wrap-time time-4">
            <div class="line line-right line-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="113"
                viewBox="0 0 61 113"
                fill="none"
              >
                <path
                  d="M0.999992 0L1 97C1 105.284 7.71572 112 16 112H61"
                  stroke="#157275"
                  stroke-width="2"
                  stroke-dasharray="4 4"
                />
              </svg>
            </div>

            <div class="wrap-content right">
              <div class="icon">
                <img
                  class="img"
                  src="@/static/img/company/timeline/04.svg"
                  alt="icon"
                >
              </div>
              <h5 class="title">
                Global expansion and community
              </h5>
              <div class="description">
                Establish strategic global offices.<br>Foster community engagement through social media and loyalty programs.
              </div>
            </div>
          </div>

          <div class="wrap-time time-5">
            <div class="line left line-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="113"
                viewBox="0 0 61 113"
                fill="none"
              >
                <path
                  d="M60 0L60 97C60 105.284 53.2843 112 45 112H0"
                  stroke="#157275"
                  stroke-width="2"
                  stroke-dasharray="4 4"
                />
              </svg>
            </div>
            <div class="wrap-content left">
              <div class="icon">
                <img
                  class="img"
                  src="@/static/img/company/timeline/05.svg"
                  alt="icon"
                >
              </div>
              <h5 class="title">
                Continuous improvement
              </h5>
              <div class="description">
                Embrace agile development for swift adaptations. Stay vigilant on emerging technologies and market trends.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="caption">
        Virturo commits to evolving with market dynamics, fostering client success, and shaping the future of online trading. Join us on this journey towards financial excellence.
      </div>

      <div class="wrap-btn">
        <a
          :href="link"
          class="btn-trade"
        >Trade with Virturo</a>
      </div>
    </div>
  </section>
</template>

<script>

export default {

  data() {
    return {
      link: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up/`,
    };
  },
};
</script>

<style lang="scss" scoped>
.timeline-mobile {
  padding: 60px 0;

  .wrapper {
    max-width: 1340px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .title-main {
    margin-bottom: 59px;
    text-align: center;
    color: #352F44;
    font-family: "Poppins";
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
  }

  .wrap-btn {
    display: flex;
    justify-content: center;
  }

  .btn-trade {
    border: none;
    display: flex;
    height: 56px;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    background-color: #157275;
    border-radius: 4px;
    color: #FFF;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    transition: box-shadow 0.5s linear, background-color 0.5s linear;

    &:hover {
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12);
    }

    &:active {
      // background-color: #074429;
      color: #FFF;
    }
  }

  .caption {
    margin: 0 auto;
    margin-bottom: 40px;
    max-width: 650px;
    color: #282929;
    text-align: center;
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }

  .roadmap {
    position: relative;
    height: 519px;
  }

  .title {
    margin-bottom: 8px;
    color: #352F44;
    text-align: right;
    font-size: 15px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 140%; /* 21px */
  }

  .description {
    margin-bottom: 16px;
    color: #352F44;
    text-align: center;
    font-size: 14px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 130%;
    /* 21px */
  }

  .icon {
    margin-bottom: 14px;
    display: flex;
    width: 52px;
    height: 52px;
    justify-content: center;
    align-items: center;
  }

  .line {
    margin-bottom: 10px;
    position: absolute;

    &.long-line {
      margin-top: 0;
      margin-bottom: 18px;
    }

    &.left {
      left: 50%;
      transform: translateX(-55%);
    }

    &.right {
      right: 50%;
      transform: translateX(-55%);
    }

    &.line-2 {
      left: 50%;
      padding-left: 25px;
      top: 183px;
      max-width: 431px;
    }

    &.line-3 {
      top: 280px;
    }

    &.line-4 {
      left: 50%;
      padding-left: 25px;
      top: 386px;
      max-width: 431px;
    }

    &.line-5 {
      top: 485px;
    }
  }

  .wrap-time {
    width: 100%;
    position: absolute;

    &.time-1 {
      .line.line-1 {
        top: -34px;
      }

      .wrap-content {
        // left: 25px;
        left: 0;
      }

    }

    &.time-2 {
      top: 66px;

      .line.line-2 {
        top: -29px;
      }

      .wrap-content {
        top: 5px;
      }
    }

    &.time-3 {
      top: 177px;

      .line.line-3 {
        top: -35px;
      }

      .wrap-content {
        left: 0;
      }
    }

    &.time-4 {
      top: 252px;

      .line.line-4 {
        top: -32px;
      }

      .wrap-content {
        top: 3px;
      }
    }

    &.time-5 {
      top: 276px;

      .line.line-5 {
        top: 48px;
      }

      .wrap-content {
        top: 82px;
        left: 0;
      }
    }
  }

  .wrap-content {
    max-width: 340px;
    display: flex;
    flex-flow: column;
    position: relative;

    &.left {
      align-items: flex-end;
      left: 0;

      .description {
        text-align: right;
      }
    }

    &.right {
      padding-left: 115px;
      // max-width: 413px;
      max-width: 442px;
      align-items: flex-start;
      left: 50%;

      .description {
        text-align: left;
      }
    }

  }

  .timeline {
    position: relative;
    width: 100%;
    max-width: 805px;
    margin: 0 auto;
    padding: 15px 0 44px;
  }

  .logo {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

}

.internal-bg {
  position: absolute;
  top: 39%;
  transform: translateY(-50%);
  height: 100%;
  max-width: 280px;
  max-height: 600px;

  &.right {
    right: 0;
  }

  &.left {
    left: 0;
  }

  @media (max-width: 1250px) {
    max-width: 170px;
  }

  @media (max-width: 992px) {
    display: none;
  }
}

.wrapper-timelime-block {
  position: relative;
}

.logo .timeline-logo {
  transform: translateX(26px);
}
</style>
