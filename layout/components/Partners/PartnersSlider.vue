<template>
  <section class="partners-slider-section">
    <div class="wrapper">
      <div class="row row-heading">
        <div class="heading">
          <div class="block-chars">
            <div
              v-for="(item, index) in chars"
              :key="index"
              class="item-char"
              @click="showSlidesForChar(item.title)"
            >
              <span :class="{ active: item.isActive }">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper-slider">
      <div class="partners-slider-wrap">
        <span
          class="arrow arrow-prev"
          @click="slideTo(swiperInstance.activeIndex - 1)"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector 9"
              d="M6 12L5.43432 12.5657L4.86863 12L5.43432 11.4343L6 12ZM18 11.2C18.4418 11.2 18.8 11.5582 18.8 12C18.8 12.4418 18.4418 12.8 18 12.8L18 11.2ZM11.4343 18.5657L5.43432 12.5657L6.56569 11.4343L12.5657 17.4343L11.4343 18.5657ZM5.43432 11.4343L11.4343 5.43432L12.5657 6.56569L6.56569 12.5657L5.43432 11.4343ZM6 11.2L18 11.2L18 12.8L6 12.8L6 11.2Z"
            />
          </svg>
        </span>
        <div class="swiper mySwiper3">
          <div
            ref="swiperWrapper"
            class="swiper-wrapper"
          >
            <div
              v-for="item in sliderData"
              :key="item.id"
              class="swiper-slide post"
              :class="{ hide: hideSlides }"
            >
              <div class="content blog-item">
                <div class="row">
                  <div class="col">
                    <h3
                      class="blog-item-title"
                      v-html="item.title"
                    />
                    <p
                      class="blog-item-description"
                      v-html="item.description"
                    />

                    <div class="wrap-btn btn-desktop">
                      <a
                        class="btn btn-account"
                        href="#send_message_section"
                      >Join now</a>
                    </div>
                  </div>
                  <div class="col">
                    <ul class="list">
                      <li
                        v-for="(itemL, index) in item.content"
                        :key="index"
                      >
                        <h4 class="list-title">
                          {{ itemL.title }}
                        </h4>
                        <p>{{ itemL.description }}</p>
                      </li>
                    </ul>

                    <div class="wrap-btn btn-mob">
                      <a
                        class="btn btn-account"
                        href="#send_message_section"
                      >Join now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span
          class="arrow arrow-next"
          @click="slideTo(swiperInstance.activeIndex + 1)"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector 9"
              d="M6 12L5.43432 12.5657L4.86863 12L5.43432 11.4343L6 12ZM18 11.2C18.4418 11.2 18.8 11.5582 18.8 12C18.8 12.4418 18.4418 12.8 18 12.8L18 11.2ZM11.4343 18.5657L5.43432 12.5657L6.56569 11.4343L12.5657 17.4343L11.4343 18.5657ZM5.43432 11.4343L11.4343 5.43432L12.5657 6.56569L6.56569 12.5657L5.43432 11.4343ZM6 11.2L18 11.2L18 12.8L6 12.8L6 11.2Z"
            />
          </svg>
        </span>
      </div>
    </div>
  </section>
</template>

<script>

const sliderData = [
  {
    char: 'Affiliate Partnership',
    category: 'Affiliate Partnership',
    color: '#2BD770',
    title: 'Affiliate Partnership',
    description: ['Become an Virturo Affiliate and turn your online presence into a revenue stream.'].join('<br>'),
    content: [
      { title: 'Generous Commissions', description: 'Enjoy attractive commissions for every qualified trader you refer to Virturo.' },
      { title: 'Marketing Tools', description: 'Access a suite of marketing materials and tracking tools to enhance your promotional efforts.' },
      { title: 'Real-Time Reporting', description: 'Monitor your performance with real-time reporting, ensuring transparency and accountability.' },
    ],
  },
  {
    char: 'Client Referral Program',
    category: 'Client Referral Program',
    color: '#2BD770',
    title: 'Client Referral Program',
    description: ['Existing clients can participate in our Client Referral Program and be rewarded<br> for sharing the Virturo experience.'].join('<br>'),
    content: [
      { title: 'Referral Bonuses', description: 'Earn bonuses for every successful referral, creating a win-win for both you and your referred friends.' },
      { title: 'Exclusive Promotions', description: 'Access special promotions and incentives as a token of our appreciation for your loyalty and advocacy.' },
      { title: 'Seamless Tracking', description: 'Our user-friendly referral tracking system ensures that you are duly credited for each referral.' },
    ],
  },
  {
    char: 'Introducing Broker Program',
    category: 'Introducing Broker Program',
    color: '#2BD770',
    title: 'Introducing Broker Program',
    description: ['Join our Introducing Broker Program and leverage the power of Virturo\'s cutting-edge trading platform.'].join('<br>'),
    content: [
      { title: 'Competitive Commissions', description: 'Benefit from a transparent and lucrative commission structure that rewards your efforts.' },
      { title: 'Comprehensive Support', description: 'Access marketing materials, educational resources, and dedicated support to enhance your client acquisition and retention strategies.' },
      { title: 'Advanced Analytics', description: 'Utilize our advanced analytics tools to track your performance and optimize your marketing efforts effectively.' },
    ],
  },

];

export default {
  data() {
    return {
      hideSlides: false,
      sliderData,
      swiperInstance: null,
      intervalId: null,
      activeChar: 'Affiliate Partnership',
      accountLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up/`,
    };
  },

  computed: {
    chars() {
      return [
        {
          title: 'Affiliate Partnership',
          isActive: this.activeChar === 'Affiliate Partnership',
        },
        {
          title: 'Client Referral Program',
          isActive: this.activeChar === 'Client Referral Program',
        },
        {
          title: 'Introducing Broker Program',
          isActive: this.activeChar === 'Introducing Broker Program',
        },
      ];
    },

  },
  mounted() {
    this.swiperInstance = new this.$Swiper('.mySwiper3', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });

    this.swiperInstance.on('slideChange', (s) => {
      const index = s.activeIndex;
      this.activeChar = sliderData[index]?.char;
    });
  },

  methods: {

    showSlidesForChar(char) {
      const index = this.sliderData.findIndex((item) => item.char === char);
      this.slideTo(index);
    },

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

  },
};

</script>

<style lang="scss" scoped>
.partners-slider-section {
  padding-bottom: 60px;
  background-color: #352F44;
  overflow: hidden;

  @media (max-width: 998px) {
    padding-bottom: 0;
  }

  .swiper {

    .category {
      display: none;
      color: #352F44;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      /* 28px */
      font-family: 'Poppins';

      @media (max-width: 1028px) {
        display: block;
      }
    }
  }

  .partners-slider-wrap,
  .wrapper {
    max-width: 1274px;
    margin: 0 auto;
  }

  .partners-slider-wrap {
    padding: 0 66px;
    position: relative;
  }

  .wrapper-slider {
    position: relative;
    // max-width: 1406px;
    // margin: 0 auto;

    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .wrapper-slider {
    .row {
      height: 100%;

      @media (max-width: 679px) {
        height: auto;
      }
    }
  }

  .row.row-heading {
    justify-content: center;
    margin-bottom: 40px;
  }

  .col {
    width: 50%;

    &:first-child {
      max-width: 420px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &:nth-child(2) {
      max-width: 460px;
    }
  }

  .container {
    box-sizing: content-box;
    max-width: 1155px;
    padding: 0 30px;
    box-sizing: content-box;
    margin: 0 auto;
    position: relative;
  }

  .heading {
    margin: 60px 0 0;
    font-family: 'Poppins';

    h2 {
      margin-bottom: 24px;
      color: #352F44;
      font: 500 40px/45px 'Poppins';
    }

    p {
      color: #FFF;
      font: 400 20px/140% 'Poppins';
    }
  }

  .list {
    li {
      margin-bottom: 32px;
      list-style-type: none;
      padding-left: 42px;
      position: relative;

      &::before {
        content: '';
        display: block;
        width: 28px;
        height: 28px;
        background: url("@/static/img/partners/icon-check.svg") no-repeat center center;
        border: none;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    h4 {
      margin-bottom: 8px;
      color: #282929;
      font-size: 20px;
      font-family: 'Poppins';
      font-weight: 500;
      line-height: 140%;
      /* 28px */
    }

    p {
      color: #282929;
      font-size: 16px;
      font-family: 'Poppins';
      font-weight: 400;
      line-height: 150%;
      /* 24px */
    }
  }

  .list-title {
    margin-bottom: 8px;
    color: #282929;
    font-size: 20px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 140%;
    /* 28px */
  }

  .control {
    display: flex;
    align-items: center;
    column-gap: 15px;

    @media (max-width: 768px) {
      align-self: center;
    }
  }

  .arrow {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ECECE4;
    position: absolute;
    top: 50%;
    cursor: pointer;
    transition: background .25s ease-in;

    @media (max-width: 992px) {
      display: none;
    }

    &:hover {
      background: rgba(236, 236, 228, 0.60);
    }

    &-prev {
      left: 0;
      transform: translateY(-50%);

      @media (max-width: 1244px) {
        left: 8px;
      }
    }

    &-next {
      transform: translateY(-50%) rotate(180deg);
      right: 0;

      @media (max-width: 1244px) {
        right: 8px;
      }
    }

    path {
      fill: #352F44;
      transition: fill .25s ease-in;
    }
  }

  .blog-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;

    @media (max-width: 678px) {
      margin: 0;
    }
  }

  .blog-item {
    padding: 60px 120px 40px 60px;
    display: flex;
    flex-flow: column;
    height: 460px;
    border-radius: 16px;
    background-color: #ECECE4;

    @media (max-width: 998px) {
      padding: 40px 24px;
      height: auto;
    }

    @media (max-width: 768px) {
      padding: 40px 24px;
      height: auto;
    }

  }

  .blog-item-img {
    margin-bottom: 32px;
    display: block;
    width: 52px;
    height: 52px;

    img {
      width: 52px;
      height: 52px;
    }
  }

  .blog-item-title {
    margin-bottom: 20px;
    color: #352F44;
    font: 500 40px/45px 'Poppins';

    @media (max-width: 992px) {
      font-size: 32px;
      line-height: 120%;
      /* 38.4px */
    }

  }

  .blog-item-description {
    color: #282929;
    font: 400 16px/140% 'Poppins';

    @media (max-width: 679px) {
      margin-bottom: 40px;
    }
  }

}

.custom-controls {
  position: absolute;
  right: 8%;
  bottom: 0px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  z-index: 10;
  padding-top: 10px;
}

.button-next {
  margin-left: 16px;
  cursor: pointer;
  color: #000;
  transform: rotate(180deg);
}

.button-prev {
  cursor: pointer;
  color: #000;
}

.button-prev,
.button-next {
  &::after {
    content: '';
    display: block;
    width: 52px;
    height: 52px;
    background: #F7F7F7 url("@/static/img/arrow-right-slider.svg") no-repeat center center/contain;
    border-radius: 50%;
  }
}

.post {
  align-self: stretch;

  &:nth-child(2) {
    .blog-item-description {
      max-width: 330px;
    }
  }

  &:nth-child(3) {
    .blog-item-title {
      max-width: 360px;
    }

    .blog-item-description {
      max-width: 400px;
    }
  }
}

.block-chars {
  display: flex;
  flex-flow: row;
  gap: 26px;
  justify-content: center;
}

.item-char {
  span {
    color: #FFF;
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 400;
    line-height: 132%; /* 31.68px */
    text-align: center;
    cursor: pointer;
  }

  .active {
    text-decoration: underline;
  }

  &:nth-child(1) .active {
    color: #D3F5EC;
  }

  &:nth-child(2) .active {
    color: #D3F5EC;
  }

  &:nth-child(3) .active {
    color: #D3F5EC;
  }
}

.wrap-btn {
  display: flex;
  margin-top: auto;

  &.btn-mob {
    display: none;
    padding-top: 16px;
  }

  @media (max-width: 679px) {
    &.btn-desktop {
      display: none;
    }

    &.btn-mob {
      display: flex;
    }
  }

  .btn {
    font: 500 16px 'Poppins';
    padding: 15px 30px;
    border-radius: 4px;
    color: #0E0523;
    background-color: #E8F2E4;
    transition: color .25s ease-in, background-color .25s ease-in;
  }

  .btn-account {
    display: inline-flex;
    align-items: center;
    column-gap: 5px;
    color: #FFF;
    background-color: #157275;
    transition: .25s box-shadow ease-in;

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
    }

    &:active {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
    }
  }
}

@media (max-width: 767px) {

  .partners-slider-section .heading {
    margin-top: 40px;
    max-width: 100%;
  }

  .partners-slider-section .heading h2 {
    margin-bottom: 4px;
    font-size: 32px;
    line-height: 120%;
    /* 38.4px */
    letter-spacing: -0.102px;
  }

  .partners-slider-section .heading p {
    margin-bottom: 40px;
  }

  .partners-slider-section .partners-slider-wrap {
    padding: 0;
    max-width: none;
    margin: 0;
  }

  .partners-slider-section .wrapper {
    padding: 0 16px;
  }

  .partners-slider-section .row {
    gap: 15px;
  }
}

@media (max-width: 679px) {
  .partners-slider-section .row {
    gap: 0;
    flex-flow: column;
    align-items: flex-start;
  }
}
</style>
