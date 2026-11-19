<template>
  <section
    id="part_of_capital"
    class="section part-of-capital-section"
  >
    <div class="wrapper">
      <h2>A trading platform made to improve your Financial future</h2>
      <p class="text-center">
        We aim to transform your financial future through our cutting-edge trading platform. Experience
        the best CFD trading platform designed for achieving financial freedom while ensuring safety in every trade.
        With advanced risk management tools and secure trading features, we empower traders to navigate the dynamic
        Forex market confidently. Take charge of your financial journey with us and unlock the potential for
        success.
      </p>
      <div class="text-image-block">
        <div class="image-block">
          <img
            src="@/static/img/capital1.png"
            alt=""
          >
        </div>
        <div class="text-block">
          <h3>Attain Financial Autonomy</h3>
          <p>
            Our empowers you to forge a new path towards financial independence. With a growing selection of
            digital assets at your disposal and the guidance of our dedicated experts, we equip you with the essential
            tools to expand your investment portfolio.
          </p>
        </div>
      </div>
      <div class="text-image-block">
        <div class="text-block">
          <h3>Steadfast Performance</h3>
          <p>
            We believe in letting the numbers speak for themselves. While past performance does not guarantee future
            results, our tools and guidance have consistently delivered solid results. The chart illustrates the average
            real-time performance over 3 and 6 months for investors with an account value of at least $25,000. We not only surpass industry benchmarks, but we also set new standards of excellence.
          </p>
        </div>
        <div class="image-block">
          <img
            src="@/static/img/capital2.png"
            alt=""
          >
        </div>
      </div>
      <div class="text-image-block">
        <div class="image-block">
          <img
            src="@/static/img/capital3.png"
            alt=""
          >
        </div>
        <div class="text-block">
          <h3>Seamless Accessibility</h3>
          <p>
            Our goal is to positively impact individuals' financial futures without unnecessary
            financial burdens. We ensure that your funds are readily available for effortless deposits and withdrawals.
            By
            offering instant crypto-backed withdrawals, our investors can conveniently access digital currencies on a
            global scale.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.part-of-capital-section {
  padding: 80px 0px 90px 0px;

  h2 {
    font-size: 48px;
    color: #000000;
    margin-bottom: 40px;
    font-weight: 700;
  }

  .text-center {
    max-width: 680px;
    margin: 0 auto;
    text-align: center;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.6;
  }

  .text-image-block {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;

    .text-block {
      max-width: 454px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        font-weight: 600;
        font-size: 32px;
        line-height: 1.2;
      }

      p {
        color: #000000;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.6;
        margin-top: 40px;
      }
    }

    .image-block {
      max-width: 520px;
      text-align: center;
    }
  }

}

@media (max-width: 1024px) {
  .wrapper {
    padding: 0 20px;
  }
}

@media (max-width: 768px) {
  .part-of-capital-section {

    h2 {
      font-size: 32px;
      line-height: 1;
    }

    .text-image-block {
      flex-direction: column;

      &:not(:nth-child(2n)) {
        flex-direction: column-reverse;
      }

      .text-block {
        width: 100%;
        text-align: center;

        p {
          margin-top: 20px;
        }
      }

      .image-block img {
        width: 100%;
      }
    }

  }
}
</style>
