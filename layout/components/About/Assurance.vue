<template>
  <section class="welcome-section">
    <div class="wrapper">
      <div class="welcome-wrap">
        <div class="row row-2">
          <div
            v-for="(post, index) in feesItems"
            :key="index"
            class="col post"
          >
            <div class="img">
              <img
                :src="post.img"
                alt=""
              >
            </div>
            <h3
              class="title"
              v-html="post.title"
            />
            <p class="description">
              {{ post.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import itemImg1 from '../../static/img/company/advantages-icon-1.svg';
import itemImg2 from '../../static/img/company/advantages-icon-2.svg';
import itemImg3 from '../../static/img/company/advantages-icon-3.svg';

export default {
  data() {
    return {
      feesItems: [
        {
          img: itemImg1,
          title: 'Safeguarded',
          text: 'At Virturo, we aim to transform your financial future through our cutting-edge trading platform. Experience the best CFD trading platform designed for achieving financial freedom while ensuring safety in every trade.',
        },
        {
          img: itemImg2,
          title: 'Forward Thinking',
          text: 'At Virturo, we aim to transform your financial future through our cutting-edge trading platform. Experience the best CFD trading platform designed for achieving financial freedom while ensuring.',
        },
        {
          img: itemImg3,
          title: 'Individualized',
          text: 'At Virturo, we aim to transform your financial future through our cutting-edge trading platform. Experience the best CFD trading platform designed for achieving financial freedom while ensuring safety in every trade.',
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
.welcome-section {
  background-color: #D3F5EC;
  overflow: hidden;
  position: relative;

  .wrapper {
    max-width: 1340px;
    padding: 60px 30px 56px;
    margin: 0 auto;
    position: relative;

    @media (max-width: 998px) {
      &:nth-child(2) {
        padding: 0;
        // padding-left: 16px;
      }
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 21px;

    @media (max-width: 992px) {
      flex-wrap: wrap;
      gap: 15px;
    }

    @media (max-width: 768px) {
      flex-flow: column;
      gap: 16px 0;
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

  .post {
    padding: 32px;
    padding-left: 40px;
    display: flex;
    flex-flow: column;
    max-width: 430px;
    border-radius: 32px;
    background-color: #FFF;

    @media (max-width: 998px) {
      max-width: 48%;
      min-width: 327px;

      &:last-child {
        margin-right: 15px;
      }
    }

    @media (max-width: 768px) {
      max-width: none;
      width: 100%;
    }

    @media (max-width: 390px) {
      min-width: 300px;
    }

    @media (max-width: 356px) {
      min-width: 290px;
    }

    @media (max-width: 356px) {
      min-width: 280px;
    }
  }

  .img {
    margin-bottom: 12px;
    display: block;
    width: 40px;
    height: 40px;
  }

  .title {
    margin-bottom: 16px;
    color: #352F44;
    font: 500 24px/132% 'Poppins';

    @media (max-width: 359px) {
      font-size: 24px;
    }

  }

  .description {
    color: #352F44;
    font: 400 16px/140% 'Poppins';
  }

}

.post {
  width: 429px;
  align-self: stretch;
}

@media (max-width: 767px) {
  .welcome-section .heading {
    margin-top: 40px;
    max-width: 100%;
  }

  .welcome-section .heading h2 {
    margin-bottom: 32px;
    font-size: 32px;
    line-height: 120%;
    /* 38.4px */
    letter-spacing: -0.102px;
  }

  .welcome-section .welcome-wrap {
    padding: 0;
    max-width: none;
    margin: 0;
  }

  .welcome-section .wrapper {
    padding: 40px 16px;
  }
}
</style>
