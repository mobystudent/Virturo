<template>
  <div class="trading-features">
    <h2>Trading Platform Features</h2>
    <div
      class="slider-container"
      @mouseenter="stopAutoplay()"
      @mouseleave="startAutoplay()"
    >
      <div class="swiper mySwiper">
        <div class="custom-controls">
          <div
            class="button-prev"
            @click="slideTo(swiperInstance.activeIndex - 1)"
          />
          <div class="bullets">
            <div
              v-for="(item, index) in sliderData"
              :key="item.id"
              :class="{ active: swiperInstance?.activeIndex === index }"
              class="button-bullet"
              @click="animateSlide(index)"
            >
              0{{ index +
                1
              }}
            </div>
          </div>
          <div
            class="button-next"
            @click="slideTo(swiperInstance.activeIndex + 1)"
          />
        </div>

        <div
          ref="swiperWrapper"
          class="swiper-wrapper"
        >
          <div
            v-for="item in sliderData"
            :key="item.id"
            class="swiper-slide"
            :class="{ hide: hideSlides }"
          >
            <div class="content">
              <div class="text-block">
                <h3>{{ item.title }}</h3>
                <p v-html="item.description" />
              </div>
              <div class="img-block">
                <img
                  :src="item.img"
                  alt=""
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sliderImg1 from '../../static/img/slider1_trading.png';
import sliderImg2 from '../../static/img/slider2_trading.png';
import sliderImg3 from '../../static/img/slider3_trading.png';
import sliderImg4 from '../../static/img/slider4_trading.png';

const sliderData = [
  {
    title: 'Trade Your Way',
    description: ['Achieve financial freedom with our advanced order execution for all trades. Benefit from guaranteed stop-loss, take-profit, and real-time alerts. Intuitive pending orders and proprietary trading tools, including a trading dashboard, journal, technical analysis, and news, ensure safe online trading.'].join('<br>'),
    img: sliderImg1,
  },
  {
    title: 'Intuitive Charting',
    description: ['Experience our dynamic trading platform with a proprietary charting package for seamless chart-based trading. Utilize 60+ technical indicators and advanced drawing tools for thorough technical analysis. Benefit from Multi-Chart views and Intuitive Module Linking, all while exploring diverse trading assets.'].join('<br>'),
    img: sliderImg2,
  },
  {
    title: 'Easily Customizable',
    description: 'Trade safely with our best CFD trading platform boasting a highly intuitive design. The platform\'s clean, simple interface offers easy drag & drop capability. Configure your trading environment using advanced profile settings and multiple trader workspaces to accommodate your evolving strategies. Optimize layouts by combining widgets through our modular tabs technology. Enjoy total control with enhanced search functionality embedded into multiple widgets.',
    img: sliderImg3,
  },
  {
    title: 'Power Watchlists',
    description: 'Optimize your trading with multiple watchlists across various market segments. Our platform offers flexible setup options with list and tile views. Execute quick trades directly from the watchlist. Improve risk management with pre-configured Stop Loss and Take Profit features. Access instrument information effortlessly from the watchlist. Discover a comprehensive array of trading assets on our automated trading platform.',
    img: sliderImg4,
  },
];

export default {
  data() {
    return {
      hideSlides: false,
      sliderData,
      swiperInstance: null,
      intervalId: null,
    };
  },
  mounted() {
    this.swiperInstance = new this.$Swiper('.mySwiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 4000,
      },
    });

    this.startAutoplay();
  },
  beforeUnmount() {
    this.stopAutoplay();
  },
  methods: {
    animateSlide(index) {
      this.hideSlides = true;
      this.swiperInstance.slideTo(index, 0);
      // eslint-disable-next-line no-return-assign
      setTimeout(() => this.hideSlides = false, 100);
    },
    slideTo(index) {
      const lastIndex = this.sliderData.length - 1;
      if (index > lastIndex) {
        this.animateSlide(0);
      } else if (index < 0) {
        this.animateSlide(lastIndex);
      } else {
        this.animateSlide(index);
      }
    },
    startAutoplay() {
      this.intervalId = setInterval(() => {
        this.slideTo(this.swiperInstance.activeIndex + 1);
      }, 5000);
    },
    stopAutoplay() {
      clearInterval(this.intervalId);
    },
  },
};

</script>

<style scoped lang="scss">
.custom-controls {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  height: 270px;
  justify-content: space-between;
  z-index: 10;
  padding-top: 10px;
}

.button-bullet {
  cursor: pointer;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 300;
  color: white;
  opacity: 0.7;

  &.active {
    color: #34FEC8;
    opacity: 1;
  }
}

.button-next {
  cursor: pointer;
  color: #34FEC8;
  transform: rotate(90deg);

  &::after {
    content: 'next';
    font-family: 'swiper-icons';
    font-size: 20px;
  }
}

.button-prev {
  cursor: pointer;
  color: #34FEC8;
  transform: rotate(90deg);

  &::after {
    content: 'prev';
    font-family: 'swiper-icons';
    font-size: 20px;
  }
}

.swiper-slide {
  position: relative;
  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  transform: translateY(0);
  opacity: 1;

  &.hide {
    transition: all 0s ease-in-out;
    visibility: hidden;
    transform: translateY(100%);
    opacity: 0;
  }
}

.swiper-wrapper {
  padding: 0 50px 50px 50px;
}

.trading-features {
  padding: 110px 0;

  h2 {
    text-align: left;
    font-size: 48px;
    line-height: 1.2;
    font-weight: 700;
    color: #ffffff;
  }

  h3 {
    color: #34FEC8;
    font-size: 28px;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 40px;
  }

  p {
    color: #FFFFFF;
    font-size: 16px;
    line-height: 1.6;
    font-weight: 300;
    margin-bottom: 20px;
  }

  .slider-container {
    padding: 10px;
    margin-top: 65px;
    height: 400px;

    .content {
      color: #ffffff;
      display: flex;

      .text-block {
        width: 35%;
        padding: 0 10px;
      }

      .img-block {
        width: 65%;
        display: flex;
        justify-content: center;

        img {
          width: 70%;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .trading-features {
    padding: 0;

    h2 {
      font-size: 22px;
      text-align: center;
    }

    .slider-container {
      height: auto;

      .custom-controls {
        position: relative;
        flex-direction: row;
        height: auto;
        margin-bottom: 40px;

        .bullets {
          display: flex;
          gap: 20px;
        }

        .button-prev,
        .button-next {
          transform: rotate(0deg);
        }
      }

      .swiper-wrapper {
        padding: 0;

        .swiper-slide {
          padding: 0 0 40px;
        }
      }

      .content {
        flex-direction: column;

        .text-block {
          width: 100%;

          p {
            font-size: 13px;
          }
        }

        .img-block {
          width: 100%;
          margin: 0 auto;

          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
