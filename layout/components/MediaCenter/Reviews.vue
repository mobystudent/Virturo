<template>
  <section class="recent-press-releases">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="intro">
            <h2 class="block-title">
              Virturo reviews
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
          link: 'https://www.fxmag.com/forex/virturo-cfd-broker-review-and-analysis/',
          title: 'Virturo: CFD Broker Review and Analysis',
          data: '12 Jan 2024',
          place: 'FXMAG',
        },
        {
          link: 'https://www.brokersview.com/news/virturo-wins-top-industry-awards-for-excellence-in-multiasset-cfd-trading-255278/',
          title: 'Virturo Wins Top Industry Awards for Excellence in Multi-Asset CFD Trading',
          data: '21 May 2024',
          place: 'Brokers View',
        },
        {
          link: 'https://www.mitrade.com/insights/news/live-news/article-3-535275-20241220/',
          title: 'Virturo Review: AI-powered trading platform with real-time, data-driven insights',
          data: '12 Jan 2024',
          place: 'Brokers View',
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

    @media (max-width: 768px) {
      padding: 0 15px 40px;
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
