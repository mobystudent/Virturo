<template>
  <section class="recent-press-releases">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="intro">
            <h2 class="block-title">
              Recent Press Releases
            </h2>
          </div>
        </div>

        <div class="col">
          <div
            v-for="(post, index) in posts.slice(0, commentsToShow)"
            :key="index"
            class="post"
          >
            <div class="info-wrap">
              <div class="place">
                {{ post.place }}
              </div>
              <div class="data">
                {{ post.data }}
              </div>
            </div>
            <h2 class="title">
              <a
                :href="post.link"
                target="_blank"
              >{{ post.title }}</a>
            </h2>
          </div>

          <div
            v-if="commentsToShow < totalComments"
            class="block-load-more"
          >
            <button
              class="link-load-more"
              @click="loadMore"
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          link: 'https://coinmarketcap.com/community/articles/6764f191becf5b033c613a5d/',
          title: 'Virturo Continues to Redefine CFD Trading with Cutting-Edge Technology and Professional Expertise',
          data: '12 Jan 2024',
          place: 'Coin Market',
        },
        {
          link: 'https://www.marketwatch.com/press-release/virturo-elite-club-unlock-exclusive-wealth-building-opportunities-for-high-net-worth-individuals-c6bc8134/',
          title: 'Virturo specializes in helping investors revitalize these dormant assets and transform them into high-performing investments.',
          data: '21 May 2024',
          place: 'Coin Market',
        },
        {
          link: 'https://www.financemagnates.com/thought-leadership/virturo-the-ultimate-secure-platform-for-wealth-growth-in-online-trading/',
          title: 'Virturo: The Ultimate Secure Platform for Wealth Growth in Online Trading',
          data: '12 Jan 2024',
          place: 'Finance Magnates',
        },
        {
          link: 'https://www.globenewswire.com/news-release/2024/12/12/2996172/0/en/Virturo-Unveils-Next-Gen-CFD-Trading-Platform-Empowered-by-AI-and-Human-Expertise.html/',
          title: 'Virturo Unveils Next-Gen CFD Trading Platform Empowered by AI and Human Expertise',
          data: '12 Jan 2024',
          place: 'Finance Magnates',
        },
        {
          link: 'https://www.advfn.com/stock-market/stock-news/95143154/virturo-elite-club-unlock-exclusive-wealth-buildi/',
          title: 'Optimizing Portfolios with Tax-Efficient Investments in the UK and Netherlands',
          data: '21 May 2024',
          place: 'Finance Magnates',
        },
        {
          link: 'https://markets.businessinsider.com/news/stocks/virturo-unveils-next-gen-cfd-trading-platform-empowered-by-ai-and-human-expertise-1034129524/',
          title: 'Virturo Unveils Next-Gen CFD Trading Platform Empowered by AI and Human Expertise',
          data: '12 Jan 2024',
          place: 'Business Insider',
        },
        // template for item
        // {
        //   link: '',
        //   title: '',
        //   data: '',
        //   place: '',
        // },
      ],
      commentsToShow: 6,
      totalComments: 0,
    };
  },
  mounted() {
    this.totalComments = this.posts.length;

    // Set initial commentsToShow based on screen size
    this.commentsToShow = this.getLoadMoreIncrement();
  },

  methods: {
    loadMore() {
      if (this.commentsToShow < this.totalComments) {
        this.commentsToShow += 6;
      }
    },
    getLoadMoreIncrement() {
      // Determine the number of elements to load based on screen size
      return window.innerWidth <= 768 ? 4 : 6; // Adjust the breakpoint and values accordingly
    },
  },

};
</script>

<style lang="scss" scoped>
.recent-press-releases {
  position: relative;

  .intro {
    display: flex;
    flex-flow: column;
    font-family: 'Poppins';

    .block-title {
      margin-bottom: 50px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 52px;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;

      @media (max-width: 768px) {
        margin-bottom: 0;
        font-size: 32px;
        line-height: 140%; /* 44.8px */
      }
    }
  }

  .info-wrap {
    display: flex;
    align-items: flex-start;
    gap: 24px;
  }

  .place,
  .data {
    color: #352F44;
    font-size: 12px;
    font-family: 'Poppins';
  }

  .data {
    font-weight: 400;
    line-height: 146%; /* 17.52px */
  }

  .place {
    font-weight: 600;
    line-height: 146%; /* 17.52px */
  }

  .title {
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #352F44;
    color: #282929;
    font-size: 24px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 140%; /* 28px */
    text-decoration-line: underline;
    &:hover {
      text-decoration: none;
    }

    a {
      color: #282929;
    }
  }

  .container {
    margin: 0 auto;
    max-width: 1340px;
    padding: 60px 30px;
    box-sizing: border-box;
    position: relative;

    &:after {
      display: block;
      content: '';
      width: calc(100% - 60px);
      height: 1px;
      background-color: #352F44;
      position: absolute;
      left: 30px;
      bottom: 0;

      @media (max-width: 768px) {
        display: none;
      }
    }

    @media (max-width: 768px) {
      padding: 40px 15px;
    }

    .row {
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      justify-content: space-between;
      row-gap: 40px;

      @media (max-width: 768px) {
        margin: 0;
        row-gap: 50px;
      }
    }

    .col {
      &:nth-child(1) {
        width: 100%;
        max-width: 418px;
      }
      &:nth-child(2) {
        display: flex;
        width: 100%;
        max-width: 740px;
        flex-flow: column;
        gap: 24px;
        @media (max-width: 1218px) {
          max-width: none;
          gap: 50px;
        }
      }
    }

  }

  .block-load-more {
    margin: 16px 0 0;
    display: flex;

    .link-load-more {
      padding: 16px 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #157275;
      color: #FFF;
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 22.4px */
      border: 1px solid #157275;
      border-radius: 4px;
      transition: ease 0.5s background-color;

      &:hover {
        border: 1px solid #157275;
        background-color: transparent;
        color: #157275;
      }

      &:active {
        border: 1px solid #157275;
        background-color: transparent;
        color: #157275;
      }
    }
  }

}
</style>
