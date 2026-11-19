<template>
  <section class="partners-tabs-section">
    <div class="wrapper wrapper-heading">
      <div class="row row-heading">
        <div class="heading">
          <div class="block-chars">
            <div
              v-for="(item, index) in chars"
              :key="index"
              class="item-char"
              @click="setActiveItem(item.title)"
            >
              <span :class="{ active: item.isActive }">{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper-slider">
      <div class="partners-tabs-wrap">
        <div class="">
          <div class="tabs-wrapper">
            <div
              v-for="item in sliderData"
              :key="item.id"
              class="post"
              :class="{ active: item.isActive }"
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
      </div>
    </div>
  </section>
</template>

<script>

const sliderData = [
  {
    char: 'Affiliate Partnership',
    isActive: false,
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
    isActive: false,
    category: 'Client Referral Program',
    color: '#2BD770',
    title: 'Client Referral Program',
    description: ['Existing clients can participate in our Client Referral Program and be rewarded<br> for sharing the Virturo experience.'].join('<br>'),
    content: [
      { title: 'Referral Bonuses', description: 'Earn bonuses for every successful referral, creatinga win-win for both you and your referred friends.' },
      { title: 'Exclusive Promotions', description: 'Access special promotions and incentives as a token of our appreciation for your loyalty and advocacy.' },
      { title: 'Seamless Tracking', description: 'Our user-friendly referral tracking system ensures that you are duly credited for each referral.' },
    ],
  },
  {
    char: 'Introducing Broker Program',
    isActive: false,
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
      sliderData,
      accountLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up/`,
    };
  },

  computed: {

    chars() {
      return this.sliderData.map((item) => ({
        title: item.char,
        isActive: item.isActive,
      }));
    },

  },
  mounted() {
    this.setActiveItem(this.sliderData[0].char); // Set the first char as active by default
  },

  methods: {

    setActiveItem(char) {
      this.activeChar = char;
      this.sliderData.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.isActive = item.char === char;
      });
    },

  },
};

</script>

<style lang="scss" scoped>
.post:not(.active) {
  display: none;
}

.partners-tabs-section {
  padding-bottom: 40px;
  background-color: #352F44;
  overflow: hidden;

  @media (max-width: 998px) {
    padding-bottom: 0;
  }

  .swiper {

    .category {
      display: none;
      color: #2BD770;
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

  .partners-tabs-wrap,
  .wrapper {
    max-width: 1230px;
    margin: 0 auto;
  }

  .partners-tabs-wrap {
    position: relative;
    padding-bottom: 40px;
  }

  .wrapper-slider {
    position: relative;
    max-width: 1320px;
    margin: 0 auto;

    @media (max-width: 992px) {
      padding: 0 30px;
    }

    @media (max-width: 768px) {
      padding: 0 15px;
    }

    .item-char {
      flex: 0 0 auto;
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
    margin-bottom: 34px;
  }

  .col {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }

    &:first-child {
      max-width: 420px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media (max-width: 768px) {
        max-width: none;
      }
    }

    &:nth-child(2) {
      max-width: 430px;

      @media (max-width: 768px) {
        max-width: none;
      }
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
      color: #2BD770;
      font: 500 48px/56px 'Poppins';
      letter-spacing: -0.154px;
    }

    p {
      color: #FFF;
      font: 400 20px/140% 'Poppins';
    }
  }

  .list {
    li {
      margin-bottom: 24px;
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
    background: #F7F7F7;
    position: absolute;
    top: 50%;
    cursor: pointer;
    transition: background .25s ease-in;

    @media (max-width: 992px) {
      display: none;
    }

    &:hover {
      background: #E8F2E4;
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
      fill: #074429;
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
    border-radius: 22px;
    background-color: #ECECE4;

    @media (max-width: 998px) {
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
    margin-bottom: 24px;
    color: #352F44;
    font: 500 48px/56px 'Poppins';

    @media (max-width: 992px) {
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }

  .blog-item-description {
    color: #282929;
    font: 400 16px/150% 'Poppins';

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
      max-width: 300px;
    }
  }
}

.block-chars {
  display: flex;
  flex-flow: row;
  gap: 24px;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  overflow-x: auto;
  overflow-y: hidden;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
}

.item-char {
  flex: 0 0 auto;

  span {
    color: #FFF;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
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
    width: 100%;
    justify-content: center;
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
  .partners-tabs-section .heading {
    margin-top: 40px;
    max-width: 100%;
  }

  .partners-tabs-section .heading h2 {
    margin-bottom: 4px;
    font-size: 32px;
    line-height: 120%;
    /* 38.4px */
    letter-spacing: -0.102px;
  }

  .partners-tabs-section .heading p {
    margin-bottom: 40px;
  }

  .partners-tabs-section .partners-tabs-wrap {
    padding: 0;
    padding-bottom: 40px;
    max-width: none;
    margin: 0;
  }

  .partners-tabs-section .wrapper.wrapper-heading {
    padding: 0;
  }

  .partners-tabs-section .row {
    gap: 15px;
  }
}

@media (max-width: 679px) {
  .partners-tabs-section .row {
    gap: 0;
    flex-flow: column;
    align-items: flex-start;
  }
}
</style>
