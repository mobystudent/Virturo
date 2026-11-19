<template>
  <section class="section timeline-mobile">
    <div class="wrapper main-wrapper">
      <div class="title-wrap">
        <h2 class="title-main">
          Navigating the Future of Financial Excellence
        </h2>
      </div>

      <div class="wrap-timeline">
        <div class="logo">
          <img
            class="timeline-logo"
            src="@/static/img/company/timeline/timeline-logo.png"
            alt="timeline logo"
          >
        </div>
        <div class="line long-line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="60"
            viewBox="0 0 2 60"
            fill="none"
          >
            <path
              d="M1 0V60"
              stroke="#157275"
              stroke-width="2"
              stroke-dasharray="4 4"
            />
          </svg>
        </div>
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
        <div class="line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="40"
            viewBox="0 0 2 40"
            fill="none"
          >
            <path
              d="M1 0V40"
              stroke="#157275"
              stroke-width="2"
              stroke-dasharray="4 4"
            />
          </svg>
        </div>
        <div class="icon">
          <img
            class="img"
            src="@/static/img/company/timeline/02.svg"
            alt="icon"
          >
        </div>
        <h5 class="title">
          Diversification and Education
        </h5>
        <div class="description">
          Introduce new asset classes, explore emerging markets. Launch an extensive client education program.
        </div>
        <div class="line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="40"
            viewBox="0 0 2 40"
            fill="none"
          >
            <path
              d="M1 0V40"
              stroke="#157275"
              stroke-width="2"
              stroke-dasharray="4 4"
            />
          </svg>
        </div>
        <div class="icon">
          <img
            class="img"
            src="@/static/img/company/timeline/03.svg"
            alt="icon"
          >
        </div>
        <h5 class="title">
          Technology Leadership
        </h5>
        <div class="description">
          Explore blockchain integration and decentralized finance. Invest in AI for advanced market analysis and predictive tools.
        </div>
        <div class="line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="40"
            viewBox="0 0 2 40"
            fill="none"
          >
            <path
              d="M1 0V40"
              stroke="#157275"
              stroke-width="2"
              stroke-dasharray="4 4"
            />
          </svg>
        </div>
        <div class="icon">
          <img
            class="img"
            src="@/static/img/company/timeline/04.svg"
            alt="icon"
          >
        </div>
        <h5 class="title">
          Global Expansion and Community
        </h5>
        <div class="description">
          Establish strategic global offices.<br>Foster community engagement through social media and loyalty programs.
        </div>
        <div class="line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height="40"
            viewBox="0 0 2 40"
            fill="none"
          >
            <path
              d="M1 0V40"
              stroke="#157275"
              stroke-width="2"
              stroke-dasharray="4 4"
            />
          </svg>
        </div>
        <div class="icon">
          <img
            class="img"
            src="@/static/img/company/timeline/05.svg"
            alt="icon"
          >
        </div>
        <h5 class="title">
          Continuous Improvement
        </h5>
        <div class="description">
          Embrace agile development for swift adaptations.<br>Stay vigilant on emerging technologies and market trends.
        </div>
      </div>

      <div class="caption">
        Virturo commits to evolving with market dynamics, fostering client success, and shaping the future of online trading. Join us on this journey towards financial excellence.
      </div>

      <div class="wrap-btn">
        <a
          href="#"
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
    margin-bottom: 60px;
    text-align: center;
    color: #352F44;
    font-family: "Poppins";
    font-size: 32px;
    font-weight: 500;
    line-height: 140%; /* 44.8px */
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
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    transition: box-shadow 0.5s linear, background-color 0.5s linear;

    &:hover {
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.12);
    }

    &:active {
      // background-color: #074429;
      // color: #FFF;
    }
  }

  .caption {
    margin-top: 38px;
    margin-bottom: 40px;
    color: #282929;
    text-align: center;
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }

  .wrap-timeline {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    margin-bottom: 8px;
    color: #282929;
    text-align: center;
    font-size: 15px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 150%; /* 22.5px */
  }

  .description {
    margin-bottom: 22px;
    color: #282929;
    text-align: center;
    font-size: 12px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 130%; /* 15.6px */
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

    &.long-line {
      margin-top: 0;
      margin-bottom: 18px;
    }
  }

}
</style>
