<template>
  <section class="section our-pillar-section">
    <div class="wrapper">
      <h2 class="bold green">
        Unlocking the Future
      </h2>
      <h2 class="bold">
        of Online Trading
      </h2>
      <div class="text-blocks">
        <div class="item">
          <div class="img-block">
            <img
              src="@/static/img/pillar1.png"
              alt=""
            >
          </div>
          <h3>Safeguarded</h3>
          <p>
            Safety is our top priority , and we offer investors unparalleled levels of
            protection. Our commitment to financial security includes negative balance protection and bank
            guarantees. On the technological front, we employ an impregnable platform design with cold
            storage or fiat-backed solutions and segregated accounts, ensuring the utmost security for you
            to trade safely.
          </p>
          <div class="read-more-btn">
            <nuxt-link :to="'/our-values'">
              <span>Read more</span>
            </nuxt-link>
          </div>
        </div>
        <div class="item">
          <div class="img-block">
            <img
              src="@/static/img/pillar2.png"
              alt=""
            >
          </div>
          <h3>Forward-Thinking</h3>
          <p>
            We are dedicated to embracing technological innovation. Our automated trading
            platform incorporates advanced functionalities such as pending orders, stop loss, and take
            profit, empowering traders with advanced trading capabilities. With immediate execution and a
            wide range of unique assets, our high-quality trading platform caters to diverse investment
            strategies. Furthermore, our investor platforms are fully customizable, allowing for a
            personalized trading experience.
          </p>
          <div class="read-more-btn">
            <nuxt-link :to="'/our-values'">
              <span>Read more</span>
            </nuxt-link>
          </div>
        </div>
        <div class="item">
          <div class="img-block">
            <img
              src="@/static/img/pillar3.png"
              alt=""
            >
          </div>
          <h3>Individualized</h3>
          <p>
            Our values the personal relationship with our clients, considering you as our partner
            rather than a mere product. Our team of financial market experts stands beside you, offering
            real-time knowledge, trading guidance, and comprehensive education to support you throughout
            your investment journey. Our Investor Care team is readily available through multiple
            communication channels to address any inquiries you may have. Furthermore, we strictly adhere to
            GDPR regulations, ensuring robust privacy protection measures are in place.
          </p>
          <div class="read-more-btn">
            <nuxt-link :to="'/our-values'">
              <span>Read more</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.our-pillar-section {
  position: relative;
  background: #000000;
  padding: 80px 0 124px;

  .wrapper {
    position: relative;
    z-index: 1;
  }

  h2 {
    color: #FFFFFF;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    text-align: left;

    &.green {
      color: #34FEC8;
    }
  }

  .text-blocks {
    padding-top: 80px;
    display: flex;

    .item {
      padding: 10px;
      width: 33.333%;

      .img-block {
        margin-bottom: 32px;
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
        padding: 0px 30px 0 0;
        margin-bottom: 40px;
        display: block;
        display: -webkit-box;
        height: 230px;
        -webkit-line-clamp: 9;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .read-more-btn {

        a {
          font-size: 14px;
          font-weight: 400;
          color: #34FEC8;
          border-style: solid;
          border-width: 1px 1px 1px 1px;
          border-color: #34FEC8;
          border-radius: 20px;
          padding: 12px 28px;
          display: inline-block;
          line-height: 1.4;
          transition: all .31s ease;

          &:hover {
            color: #000000;
            background-color: #34FEC8;
            border-color: #34FEC8;
          }

        }
      }

    }

  }

  .back-right {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
  }

  .back-left {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }

}

@media (max-width: 1024px) {

  .back-right,
  .back-left {
    display: none;
  }
}

@media (max-width: 768px) {
  .our-pillar-section {
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

    .wrapper {
      padding: 0 24px;
    }

    h2 {
      font-size: 32px;
      text-align: left;
    }

  }
}
</style>
