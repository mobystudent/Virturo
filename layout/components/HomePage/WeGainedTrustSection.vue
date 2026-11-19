<template>
  <section class="section">
    <div class="wrapper">
      <div class="main-block">
        <h2 class="title-main">
          We have gained trust
        </h2>
      </div>

      <div class="blocks-wrap">
        <a
          v-for="company in companies"
          :key="company.id"
          class="block"
          :href="company.link"
          target="_blank"
        >
          <span
            class="logo"
          >
            <img
              :src="company.logoUrl"
              :alt="company.title"
            >
          </span>
          <h5 class="title">
            {{ company.title }}
          </h5>
          <blockquote
            class="blockquote"
            :cite="company.cite"
          >
            {{ company.quote }}
          </blockquote>
          <div class="wrap-read-link">
            <button
              class="arrowBlock read-article-btn"
              :href="company.link"
            >
              <span class="btn-text">Read full article</span>
              <svg
                class="btn-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.0304 8.00001L12.5961 8.5657L13.1618 8.00001L12.5961 7.43433L12.0304 8.00001ZM3.30312 7.20001C2.86129 7.20001 2.50312 7.55819 2.50312 8.00001C2.50312 8.44184 2.86129 8.80001 3.30312 8.80001L3.30312 7.20001ZM8.23244 12.9293L12.5961 8.5657L11.4647 7.43433L7.10107 11.798L8.23244 12.9293ZM12.5961 7.43433L8.23244 3.07069L7.10107 4.20206L11.4647 8.5657L12.5961 7.43433ZM12.0304 7.20001L3.30312 7.20001L3.30312 8.80001L12.0304 8.80001L12.0304 7.20001Z"
                  fill="#48C3A8"
                />
              </svg>
            </button>
          </div>
        </a>
      </div>

      <div class="wrap-link">
        <nuxt-link
          to="/media-center/"
          class="link-all-news"
        >
          <span>View our latest's news</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M17 11L17.5657 11.5657L18.1314 11L17.5657 10.4343L17 11ZM5 10.2C4.55817 10.2 4.2 10.5582 4.2 11C4.2 11.4418 4.55817 11.8 5 11.8L5 10.2ZM11.5657 17.5657L17.5657 11.5657L16.4343 10.4343L10.4343 16.4343L11.5657 17.5657ZM17.5657 10.4343L11.5657 4.43432L10.4343 5.56569L16.4343 11.5657L17.5657 10.4343ZM17 10.2L5 10.2L5 11.8L17 11.8L17 10.2Z"
              fill="#282929"
              fill-opacity="0.75"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import coinMarketCap from '../../static/img/home/companies/coinmarketcap_logo.svg';
// import nasdaq from '../../static/img/home/companies/nasdaq.png';
import businessInsider from '../../static/img/home/companies/business_insider.svg';
import FinanceMagnates from '../../static/img/home/companies/Finance_Magnates.svg';
import Brokersview from '../../static/img/home/companies/Brokersview_logo.svg';
import FXMAG from '../../static/img/home/companies/FXMAG_1.svg';
import TradingView from '../../static/img/home/companies/Trading_View.svg';

export default {
  data() {
    return {
      companies: [
        {
          id: 1,
          title: 'Virturo Redefines CFD Trading with Cutting-Edge Tech',
          quote: 'Virturo revolutionizes CFD crypto trading with advanced technology and expert insights.',
          cite: 'coinMarketCap',
          logoUrl: coinMarketCap,
          link: 'https://coinmarketcap.com/community/articles/6764f191becf5b033c613a5d/',
        },
        {
          id: 2,
          title: 'The Ultimate Secure Platform for Growing Wealth Online',
          quote: 'With cutting-edge security, transparency, and intuitive tools, Virturo empowers confident trading.',
          cite: 'Finance Magnates',
          logoUrl: FinanceMagnates,
          link: 'https://www.financemagnates.com/thought-leadership/virturo-the-ultimate-secure-platform-for-wealth-growth-in-online-trading/',
        },
        {
          id: 3,
          title: 'Virturo Wins Top Industry Awards for Excellence in Multi-Asset CFD Trading.',
          quote: 'Virturo stands out with a seamless trading experience for all investors.',
          cite: 'Brokersview',
          logoUrl: Brokersview,
          link: 'https://www.brokersview.com/news/virturo-wins-top-industry-awards-for-excellence-in-multiasset-cfd-trading-255278/',
        },
        {
          id: 4,
          title: 'Unveiling a Next-Gen AI-Powered CFD Trading Platform.',
          quote: 'Virturo redefines trading with advanced automated systems, ensuring precision and discipline.',
          cite: 'Business Insider',
          logoUrl: businessInsider,
          link: 'https://markets.businessinsider.com/news/stocks/virturo-unveils-next-gen-cfd-trading-platform-empowered-by-ai-and-human-expertise-1034129524/',
        },
        {
          id: 5,
          title: 'Virturo: CFD Broker Review and Analysis',
          quote: 'The broker\'s platform supports all traders with advanced automated tools.',
          cite: 'FXMAG',
          logoUrl: FXMAG,
          link: 'https://www.fxmag.com/forex/virturo-cfd-broker-review-and-analysis/',
        },
        {
          id: 6,
          title: 'Unlock Exclusive Wealth Opportunities for High-Net-Worth Individuals.',
          quote: 'Virturo\'s Elite Club provides exclusive access to high-return, inflation-beating investments.',
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
      // swiperInstance: null,
      // shouldShowSlider: false,
    };
  },
};
</script>

<style scoped lang="scss">
.section {
  padding: 100px 0;
  background: #ECECE4;

  @media (max-width: 1200px) {
    padding: 50px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  .wrapper {
    max-width: 1340px;
    width: 100%;
    padding: 0 30px;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }
}

.main-block {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 25px 35px;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
}

.title-main {
  color: #282929;
  font-family: Poppins;
  font-size: 52px;
  font-weight: 500;
  line-height: 112%; /* 58.24px */
  letter-spacing: -0.52px;

  @media (max-width: 1024px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 768px) {
    color: #352F44;
    font-size: 32px;
    line-height: 110%; /* 35.2px */
  }
}

.companies {
  overflow: hidden;

  @media (max-width: 768px) {
    overflow: visible;
  }
}

.block {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  row-gap: 16px;
  height: auto;
  padding: 32px;
  min-height: 240px;
  width: 100%;
  max-width: calc(32.333% - 4px);
  border-radius: 16px;
  border: 1px solid #E3E5E8;
  background: #F7F7F7;
  transition: border .25s ease-in, box-shadow .25s ease-in;

  @media (max-width: 1125px) {
    max-width: calc(32.333% - 8px);
  }

  @media (max-width: 996px) {
    max-width: calc(50% - 10px);
  }

  @media (max-width: 768px) {
    padding: 20px;
    width: 325px;
  }

  @media (max-width: 650px) {
    max-width: 100%;
    width: 100%;
    min-height: auto;
  }

  &:hover {
    border: 1px solid #48C3A8;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.10);
  }
}

.logo {
  display: inline-flex;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }

  img {
    width: auto;
    height: 100%;
    max-height: 36px;
    object-fit: contain;
  }
}

.title {
  min-height: 56px;
  font: 500 18px/140% 'Poppins', sans-serif;
  color: #282929;

  @media (max-width: 768px) {
    min-height: initial;
    font: italic 16px/22px 'Poppins', sans-serif;
    quotes: "“" "”";
    &::before {
      content: open-quote;
    }

    &::after {
      content: close-quote;
    }
  }
}

.blockquote {
  quotes: "“" "”";
  font: italic 16px/22px 'Poppins', sans-serif;
  color: rgba(40, 41, 41, 0.75);
  margin-bottom: auto;

  &::before {
    content: open-quote;
  }

  &::after {
    content: close-quote;
  }

  @media (max-width: 768px) {
    display: none;
  }
}

.wrap-read-link {
  margin-top: 8px;
  display: flex;
  align-self: flex-end;
  @media (max-width: 768px) {
    margin-top: 0;
  }
}

.read-article-btn {
  display: inline-flex;
  height: 32px;
  padding: 6px 6px 6px 12px;
  align-items: center;
  border-radius: 49px;
  border: 1px solid #48C3A8;
  background: #FFF;
  color: #352F44;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  cursor: pointer;

  .btn-icon {
    width: 22px;
    height: 22px;
    padding: 2px;
    margin-left: 8px;
    vertical-align: middle;
    background: #D3F5EC;
    border-radius: 50%;
    transition: background .25s ease-in;

    path {
        fill: #177C66;
        transition: fill 0.3s ease-in;
    }
  }

  .btn-text {
      margin-right: 8px;
  }

  &:hover {
    .btn-icon {
      background: #fff;

    }

    .btn-icon path {
      fill: #48C3A8;
    }
  }
}

.blocks-wrap {
  margin-bottom: 64px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
    gap: 16px;
  }
}

.wrap-link {
  display: flex;
  justify-content: flex-end;

  .link-all-news {
    display: flex;
    color: rgba(40, 41, 41, 0.75);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    text-decoration: underline;

    svg {
      margin-left: 12px;
      width: 22px;
      height: 22px;
    }

    &:hover {
      color: #282929;

      svg {
        path {
          fill: #282929;
          fill-opacity: 1;
        }
      }
    }
  }
}
</style>
