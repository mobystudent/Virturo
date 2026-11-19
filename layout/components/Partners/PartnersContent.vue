<template>
  <div>
    <section class="what-we-offer">
      <h2>What we offer</h2>
      <div class="steps">
        <div class="item">
          <div class="image">
            <img
              src="../../static/img/step1.png"
              alt=""
            >
          </div>
          <div class="text">
            <p class="title">
              Generous payouts
            </p>
            <ul>
              <li>Up to 70% profit share</li>
              <li>Up to $1200 per client</li>
              <li>Tailor-made offers</li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="image">
            <img
              src="../../static/img/step2.png"
              alt=""
            >
          </div>
          <div class="text">
            <p class="title">
              We pay for every lead
            </p>
            <ul>
              <li>Live and transparent statistics</li>
              <li>High payouts per each funded client</li>
              <li>Payouts once a week</li>
            </ul>
          </div>
        </div>
        <div class="item">
          <div class="image">
            <img
              src="../../static/img/step3.png"
              alt=""
            >
          </div>
          <div class="text">
            <p class="title">
              Special offers
            </p>
            <ul>
              <li>Free funded account</li>
              <li>Discounts on commissions</li>
              <li>Welcome bonuses</li>
            </ul>
          </div>
        </div>
      </div>

      <button class="primary-btn">
        <a href="#contact-us">Get offer</a>
      </button>
    </section>

    <section class="who-we-are-looking-for">
      <h2>Who we are looking for</h2>

      <p class="sub-title">
        We offer flexible conditions to our partners. Reach us out and we will make a perfect offer
        for you and your audience. We have an exclusive offer for every partner.
      </p>

      <div class="steps">
        <div class="item">
          <div class="svg-wrapper">
            <img
              src="@/static/img/trading-accounts/grow-icons/professional-color.png"
              alt=""
            >
          </div>
          <p class="name">
            Traders with an active community
          </p>
          <p class="description">
            Youtube, Instagram, Facebook or Twitter, Trading view, Telegram signal group, streamers
          </p>
        </div>

        <div class="item">
          <div class="svg-wrapper">
            <img
              src="@/static/img/trading-accounts/grow-icons/webapp-color.png"
              alt=""
            >
          </div>
          <p class="name">
            Media resource owner
          </p>
          <p class="description">
            Regional Influencers, trading bloggers, website owners, thought leaders, editors
          </p>
        </div>

        <div class="item">
          <div class="svg-wrapper">
            <img
              src="@/static/img/trading-accounts/grow-icons/news-color.png"
              alt=""
            >
          </div>
          <p class="name">
            Education centers
          </p>
          <p class="description">
            Crypto Trading Education, Forex Trading Education, trading in other assets
          </p>
        </div>
      </div>
    </section>

    <section class="feedback-about-us">
      <h2>Feedback about us</h2>

      <div class="slider-wrapper">
        <button
          class="next"
          @click="moveSlide(activeIndex + 1)"
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="16.3536"
              y1="0.853553"
              x2="1.35355"
              y2="15.8536"
              stroke="#858585"
            />
            <line
              y1="-0.5"
              x2="21.2132"
              y2="-0.5"
              transform="matrix(0.707107 0.707107 0.707107 -0.707107 1 15.5)"
              stroke="#858585"
            />
          </svg>
        </button>

        <button
          class="prev"
          @click="moveSlide(activeIndex - 1)"
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="16.3536"
              y1="0.853553"
              x2="1.35355"
              y2="15.8536"
              stroke="#858585"
            />
            <line
              y1="-0.5"
              x2="21.2132"
              y2="-0.5"
              transform="matrix(0.707107 0.707107 0.707107 -0.707107 1 15.5)"
              stroke="#858585"
            />
          </svg>
        </button>

        <div
          :style="{ width: 4 * slides.length }"
          class="inner"
        >
          <div
            v-for="(item, index) in slides"
            :key="index"
            ref="slides"
            :class="['slide', { active: index === activeIndex }]"
          >
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section
      id="contact-us"
      class="contact-us"
    >
      <h2>Contact us</h2>

      <p>
        To participate  ambassador program, please сontact us and provide brief information about you and
        we will bet back shortly with unique partnership offer. Please reach us at
        <a href="mailto:mail@example.com">mail@example.com</a>
      </p>

      <div class="contact-form">
        <p>Become our partner</p>
        <PartnersForm />
      </div>
    </section>
  </div>
</template>

<script>
import PartnersForm from './PartnersForm.vue';

export default {
  name: 'PartnersContent',
  components: { PartnersForm },
  data() {
    return {
      activeIndex: 0,
      slides: [
        {
          text: '“The platform was built on the lessons learned by equity and forex market portfolio managers and decades of testing other exchange products.”',
          img: '../../static/img/step1.png',
        },
        {
          text: '"Our products and services are designed to meet the needs of both new and professional traders, allowing them to actively trade popular digital assets, profit from market rallies and declines or hedge existing cryptocurrency holdings.."',
          img: '../../static/img/step1.png',
        },
        {
          text: '"Our addresses problems like low liquidity, inability to earn from falling markets, unexpected down-times, long KYC approvals, high trading fees, limited order types, and poor UI."',
          img: '../../static/img/step1.png',
        },
      ],
    };
  },
  methods: {
    moveSlide(index) {
      let nextIndex = this.slides.length === index ? 0 : index;
      nextIndex = nextIndex < 0 ? this.slides.length - 1 : nextIndex;

      this.$refs.slides[this.activeIndex].classList.remove('active');
      this.$refs.slides[nextIndex].classList.add('active');

      this.activeIndex = nextIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-wrapper {
  margin: 0 auto;
  position: relative;
  width: 960px;
  padding: 0 40px;
  overflow: hidden;

  .slide {
    display: flex;
    align-items: center;
    visibility: hidden;
    min-height: 72px;
    position: absolute;

    &.active {
      visibility: visible;
      position: relative;
    }

    p {
      text-align: center;
      padding: 0 15px;
      font-size: 20px;
      line-height: 1.2;
      color: #000000;
    }
  }

  .next,
  .prev {
    width: 15px;
    height: 30px;
    background: transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .next {
    right: 0;
    transform: translateY(-50%) rotate(180deg);
  }

  .prev {
    left: 0;
  }
}

h2 {
  color: #000000;
  font-weight: 700;
  font-size: 48px;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 48px;
}

.what-we-offer {
  padding: 20px 20px 120px;
  background-color: #FFFFFF;
}

.primary-btn {
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 55px;
  width: 180px;
  height: 48px;
  border-radius: 30px;
  margin: 48px auto 0 auto;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Inter', sans-serif;

  a {
    color: #ffffff;
  }
}

.steps {
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  margin: 0 auto;
}

.item {
  width: 32%;
  display: flex;
  align-items: center;

  .image img {
    margin-right: 20px;
  }

  .title {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.4;
    color: #000000;
    margin-bottom: 16px;
  }

  ul li {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.4;
    color: #000000;
    list-style: none;
    list-style-position: inside;
  }
}

.who-we-are-looking-for {
  padding-bottom: 108px;

  .sub-title {
    font-weight: 300;
    font-size: 20px;
    line-height: 1.4;
    text-align: center;
    color: #000000;
    margin: 0 auto 60px auto;
    max-width: 1080px;
  }

  h2 {
    margin-bottom: 20px;
  }

  .item {
    flex-direction: column;
    padding: 0 40px;

    .name {
      margin-bottom: 16px;
    }
  }

  .name {
    font-weight: 700;
    font-size: 22px;
    line-height: 1.4;
    text-align: center;
    color: #000000;
  }

  .description {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.4;
    text-align: center;
    color: #000000;
  }

  .svg-wrapper {
    margin-bottom: 24px;
  }
}

.feedback-about-us {
  padding: 60px 24px 140px 24px;

  h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 1.2;
    text-align: center;
    color: #000000;
  }
}

.contact-us {
  background-color: #000000;
  padding: 60px 20px;

  h2 {
    color: #FFFFFF;
  }

  p {
    font-weight: 300;
    font-size: 20px;
    line-height: 1.4;
    color: #ffffff;
    text-align: center;
    max-width: 1080px;
    margin: 0 auto;

    a {
      color: #FFFFFF;
      font-weight: 500;
    }
  }

  .contact-form {
    margin-top: 60px;

    p {
      font-weight: 500;
      font-size: 24px;
      margin-bottom: 28px;
    }
  }
}

@media (max-width: 768px) {
  .what-we-offer {
    padding: 60px 24px;
  }

  .steps {
    flex-direction: column;
  }

  .item {
    width: 100%;
    margin-bottom: 32px;
  }

  .who-we-are-looking-for {
    padding: 60px 24px;
  }

  .slider-wrapper {
    width: 100%;
  }

  h2 {
    font-size: 28px;
  }
}

.feedback-about-us {
  h2 {
    font-size: 28px;
  }
}
</style>
