<template>
  <section
    id="app_section"
    class="section app-section"
  >
    <div class="wrapper content">
      <div class="img-block">
        <img
          src="@/static/img/gains-img.png"
          alt=""
        >
      </div>
      <div class="text-block text-block_first">
        <h2>Maximize Gains in Market Volatility</h2>
        <p>
          Empowers you to capitalize on both upward and downward market movements. With our platform, you
          can hedge existing assets, take advantage of stock market rallies and declines, and trade a diverse range of
          assets, including currencies, commodities, stocks, and cryptocurrencies, all in real-time.
        </p>
      </div>
    </div>
    <div class="wrapper content">
      <div class="text-block">
        <h2>Seize Opportunities On the Go</h2>
        <p>
          Participate in worldwide market trading, track open positions, and capitalize on profitable prospects right
          from your mobile device.
        </p>
        <p>
          <a
            class="custom-button-app"
            href="#"
            target="_blank"
            rel="noopener"
          >
            <font-awesome-icon icon="fab fa-apple" />
            App Store
          </a>
          <a
            class="custom-button-app"
            href="#"
            target="_blank"
            rel="noopener"
          >
            <font-awesome-icon icon="fab fa-google-play" />
            Google Play
          </a>
        </p>
      </div>
      <div class="img-block">
        <img
          :class="{ animated: isAnimated }"
          src="@/static/img/app-mobile.png"
          alt=""
        >
      </div>
    </div>
    <img
      class="app-background"
      src="@/static/img/app-background.png"
      alt=""
    >
  </section>
</template>

<script>
export default {
  data() {
    return {
      animateSection: null,
      isAnimated: false,
    };
  },
  mounted() {
    this.animateSection = window.document.querySelector('.app-section');
    window.addEventListener('scroll', this.userScroll);
  },
  beforeMount() {
    window.removeEventListener('scroll', this.userScroll);
  },
  methods: {
    userScroll() {
      if (this.isInViewport(this.animateSection) && !this.isAnimated) {
        this.isAnimated = true;
      }
    },
    isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0
        && rect.left >= 0
        && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
  },
};

</script>

<style lang="scss" scoped>
.section.app-section {
  background-color: transparent;
  position: relative;

  .content {
    padding-top: 120px;
    display: flex;
    justify-content: space-between;

    .text-block {
      width: 50%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      &.text-block_first {
        align-items: end;
      }

      h2 {
        color: #000000;
        font-size: 48px;
        line-height: 1.2;
        font-weight: 700;
        margin-bottom: 40px;
        text-align: left;
        max-width: 454px;
      }

      p {
        color: #000000;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.6;
        margin-bottom: 40px;
        max-width: 454px;
      }

      .custom-button-app {
        margin-right: 24px;
        border-radius: 6px;
        color: rgba(255, 255, 255, 0.9);
        font-size: 16px;
        font-weight: 500;
        background-color: #000000;
        padding: 10px 25px;
        transition: all .31s ease;
        cursor: pointer;

        &:hover {
          background-color: #34fec8;
          color: #fff;
        }
      }
    }

    .img-block {
      width: 50%;
      display: flex;
      justify-content: center;
      //overflow: hidden;

      img {
        width: 100%;
      }
    }
  }

  .app-background {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
}

@media (max-width: 1024px) {
  .section.app-section {
    .content {
      .text-block {
        width: 58%;

        h2 {
          font-size: 26px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .section.app-section {
    .content {
      flex-direction: column;
      padding: 80px 20px 0;

      &:nth-child(1) {
        flex-direction: column-reverse;
      }

      .text-block {
        width: 100%;
        text-align: center;

        h2 {
          text-align: center;
        }

        .custom-button-app {
          padding: 10px 15px;
          margin-right: 12px;
        }
      }

      .img-block {
        width: 100%;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
