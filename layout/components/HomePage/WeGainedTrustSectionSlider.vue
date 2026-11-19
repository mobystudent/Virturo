<template>
  <section class="section">
    <div class="wrapper">
      <div class="main-block">
        <h2 class="title-main">
          We have gained trust
        </h2>
        <div class="control">
          <span
            class="arrow arrow-prev"
            @click="clickButtonPrev"
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
          <span
            class="arrow arrow-next"
            @click="clickButtonNext"
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
      <div class="companies swiper">
        <div class="swiper-wrapper">
          <div
            v-for="company in companies"
            :key="company.id"
            class="block swiper-slide"
          >
            <a
              class="logo"
              :href="company.link"
              target="_blank"
            >
              <img
                :src="company.logoUrl"
                :alt="company.title"
              >
            </a>
            <h5 class="title">
              {{ company.title }}
            </h5>
            <blockquote
              class="blockquote"
              :cite="company.cite"
            >
              {{ company.quote }}
            </blockquote>
            <a
              class="arrowBlock"
              :href="company.link"
              target="_blank"
            >
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 7L13.5657 7.56569L14.1314 7L13.5657 6.43431L13 7ZM0.999999 6.2C0.558171 6.2 0.199999 6.55817 0.199999 7C0.199999 7.44183 0.558171 7.8 0.999999 7.8L0.999999 6.2ZM7.56569 13.5657L13.5657 7.56569L12.4343 6.43431L6.43431 12.4343L7.56569 13.5657ZM13.5657 6.43431L7.56568 0.434316L6.43431 1.56569L12.4343 7.56569L13.5657 6.43431ZM13 6.2L0.999999 6.2L0.999999 7.8L13 7.8L13 6.2Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import coinMarketCap from '../../static/img/home/companies/coinmarketcap.png';
// import nasdaq from '../../static/img/home/companies/nasdaq.png';
import businessInsider from '../../static/img/home/companies/business insider.png';
import FinanceMagnates from '../../static/img/home/companies/FinanceMagnates.svg';
import Brokersview from '../../static/img/home/companies/Brokersview.svg';
import FXMAG from '../../static/img/home/companies/FXMAG.svg';
import TradingView from '../../static/img/home/companies/TradingView.svg';

export default {
  data() {
    return {
      companies: [
        {
          id: 1,
          title: 'Virturo Continues to Redefine CFD Trading with Cutting-Edge Technology',
          quote: 'Virturo is transforming CFD crypto trading by merging advanced technological solutions with the insights of experienced professionals.',
          cite: 'coinMarketCap',
          logoUrl: coinMarketCap,
          link: 'https://coinmarketcap.com/community/articles/6764f191becf5b033c613a5d/',
        },
        {
          id: 2,
          title: 'Virturo: The Ultimate Secure Platform for Wealth Growth in Online Trading',
          quote: 'With cutting-edge cybersecurity measures, a transparent trading environment, and intuitive tools, Virturo empowers investors to manage their portfolios confidently..',
          cite: 'Finance Magnates',
          logoUrl: FinanceMagnates,
          link: 'https://www.financemagnates.com/thought-leadership/virturo-the-ultimate-secure-platform-for-wealth-growth-in-online-trading/',
        },
        {
          id: 3,
          title: 'Virturo Wins Top Industry Awards for Excellence in Multi-Asset CFD Trading',
          quote: 'Virturo sets itself apart by offering a seamless trading experience for both beginner and experienced investors.',
          cite: 'Brokersview',
          logoUrl: Brokersview,
          link: 'https://www.brokersview.com/news/virturo-wins-top-industry-awards-for-excellence-in-multiasset-cfd-trading-255278',
        },
        {
          id: 4,
          title: 'Virturo Unveils Next-Gen CFD Trading Platform Empowered by AI and Human Expertise',
          quote: 'Virturo redefines the trading landscape with the integration of advanced automated trading systems, embodying the principles of precision and discipline.',
          cite: 'Business Insider',
          logoUrl: businessInsider,
          link: 'https://markets.businessinsider.com/news/stocks/virturo-unveils-next-gen-cfd-trading-platform-empowered-by-ai-and-human-expertise-1034129524',
        },
        {
          id: 5,
          title: 'Virturo: CFD Broker Review and Analysis',
          quote: 'The broker\'s platform is designed to support both experienced traders and beginners, providing an array of automated trading tools.',
          cite: 'FXMAG',
          logoUrl: FXMAG,
          link: 'https://www.fxmag.com/forex/virturo-cfd-broker-review-and-analysis',
        },
        {
          id: 6,
          title: 'Unlock Exclusive Wealth-Building Opportunities for High-Net-Worth Individuals',
          quote: 'Virturo\'s Elite Club offers exclusive access to high-return, inflation-beating investments.',
          cite: 'TradingView',
          logoUrl: TradingView,
          link: 'https://www.tradingview.com/news/reuters.com,2024-12-20:newsml_GNX5M4SQN:0-virturo-elite-club-unlock-exclusive-wealth-building-opportunities-for-high-net-worth-individuals/',
        },
        // {
        //   id: 1,
        //   title: '',
        //   quote: '',
        //   cite: '',
        //   logoUrl: coinMarketCap,
        //   link: '#',
        // },
      ],
      swiperInstance: null,
    };
  },
  mounted() {
    this.createdSlider();
  },
  methods: {
    createdSlider() {
      this.swiperInstance = new this.$Swiper('.companies', {
        slidesPerView: 3,
        spaceBetween: 15,
        autoHeight: true,
        breakpoints: {
          360: {
            slidesPerView: 'auto',
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        },
      });
    },
    clickButtonPrev() {
      this.swiperInstance.slidePrev();
    },
    clickButtonNext() {
      this.swiperInstance.slideNext();
    },
    // animateSlide(index) {
    //   this.swiperInstance.slideTo(index, 0);
    // },
    // slideTo(index) {
    //   const lastIndex = this.companies.length - 1;
    //
    //   this.animateSlide(index > lastIndex ? 0 : index);
    // },
  },
};
</script>

<style scoped lang="scss">
.section {
  padding: 60px 0;
  background: #ECECE4;

  @media (max-width: 1200px) {
    padding: 50px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }
}

.main-block {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 25px 35px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
}

.title-main {
  font: 500 52px/58px 'Poppins', sans-serif;
  letter-spacing: -.1px;
  color: #352F44;

  @media (max-width: 1024px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    font-size: 32px;
    line-height: 44px;
  }
}

.control {
  display: flex;
  align-items: center;
  column-gap: 15px;

  @media (max-width: 768px) {
    margin-left: auto;
  }
}

.arrow {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  transition: background .25s ease-in;

  &:hover {
    background: #D3F5EC;

    svg {
      fill: #352F44;
    }
  }

  &-next {
    transform: rotate(180deg);
  }

  svg {
    fill: #352F44;
    transition: fill .25s ease-in;
  }
}

.companies {
  overflow: hidden;

  @media (max-width: 768px) {
    overflow: visible;
  }
}

.swiper-wrapper {
  display: flex;
  align-items: stretch;
}

.block {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  row-gap: 20px;
  min-height: 380px;
  height: auto;
  padding: 30px;
  border-radius: 16px;
  background: #F7F7F7;

  @media (max-width: 768px) {
    width: 325px;
  }
}

.logo {
  display: inline-flex;
  margin-bottom: 15px;

  img {
    width: auto;
    height: 100%;
    max-height: 36px;
    object-fit: contain;
  }
}

.title {
  min-height: 56px;
  font: 500 20px/28px 'Poppins', sans-serif;
  color: #282929;
  @media (max-width: 768px) {
    min-height: initial;
  }
}

.blockquote {
  quotes: "“" "”";
  font: italic 16px/22px 'Poppins', sans-serif;
  color: #282929;
  margin-bottom: auto;

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }
}

.arrowBlock {
  display: inline-flex;
  align-self: flex-end;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
  transition: background .25s ease-in;

  &:hover {
    background: #352F44;

    svg {
      fill: #48C3A8;
    }
  }

  svg {
    width: 100%;
    height: 100%;
    fill: #352F44;
    transition: fill .25s ease-in;
  }
}
</style>
