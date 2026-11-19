<template>
  <section class="grid-images">
    <div class="wrapper">
      <h2 class="title-main">
        Powered by
      </h2>
    </div>
    <div class="wrapper">
      <div class="row">
        <div
          v-for="(post, index) in gridItems"
          :key="index"
          class="col"
        >
          <div class="box-img">
            <img
              :src="post.img"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import itemImg1 from '../../static/img/company/grid-logo-1.png';
import itemImg2 from '../../static/img/company/grid-logo-2.png';
import itemImg3 from '../../static/img/company/grid-logo-3.png';
// import itemImg4 from '../../static/img/company/grid-logo-4.png';
import itemImg5 from '../../static/img/company/grid-logo-5.png';

export default {
  data() {
    return {
      gridItems: [
        {
          img: itemImg1,
          link: 'https://www.tradingview.com/',
        },
        {
          img: itemImg2,
          link: '#',
        },
        {
          img: itemImg3,
          link: '#',
        },
        // {
        //   img: itemImg4,
        // },
        {
          img: itemImg5,
          link: '#',
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
.grid-images {
  background-color: #ECECE4;
  padding: 60px 0 80px;
  position: relative;

  @media (max-width: 1034px) {
    padding-bottom: 60px;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  .wrapper {
    max-width: 1156px;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (max-width: 1024px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }

  .title-main {
    margin-bottom: 60px;
    width: 100%;
    text-align: center;
    font: 500 52px/58px 'Poppins';
    letter-spacing: -0.52px;
    color: #352F44;

    @media (max-width: 992px) {
      font-size: 38px;
    }

    @media (max-width: 768px) {
      max-width: none;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }

  .row {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
      flex-flow: column;
      gap: 78px 0;
    }
  }

  .col {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1034px) {
      margin-bottom: 28px;
    }

    @media (max-width: 768px) {
      width: calc(100% - 20px);

      &:nth-child(1) {
        .box-img {
          max-width: 156px;
        }
      }

      &:nth-child(2) {
        .box-img {
          max-width: 189px;
        }
      }

      &:nth-child(3) {
        .box-img {
          max-width: 107px;
        }
      }

      &:nth-child(4) {
        .box-img {
          max-width: 135px;
        }
      }

      &:nth-child(5) {
        .box-img {
          max-width: 200px;
        }
      }
    }
  }

  .box-img {
    max-width: 200px;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }

    img {
      width: 100%;
    }
  }

  .title {
    margin-bottom: 24px;
    color: #352F44;
    text-align: center;
    font-family: "Poppins";
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    text-align: center;

    @media (max-width: 992px) {
      font-size: 20px;
      line-height: 140%;
      /* 28px */
    }
  }

}
</style>
