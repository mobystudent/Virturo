<template>
  <section class="grid-images">
    <div class="wrapper">
      <div class="row">
        <div
          v-for="(post, index) in gridItems"
          :key="index"
          class="col"
        >
          <h3 class="title">
            {{ post.title }}
          </h3>
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
import itemImg1 from '../../static/img/account-security/certificates-images/certificate-1.png';
import itemImg2 from '../../static/img/account-security/certificates-images/certificate-2.png';
import itemImg3 from '../../static/img/account-security/certificates-images/certificate-3.png';
import itemImg4 from '../../static/img/account-security/certificates-images/certificate-4.png';

export default {
  data() {
    return {
      gridItems: [
        {
          img: itemImg1,
          title: 'GDPR Compliant',
        },
        {
          img: itemImg2,
          title: 'SOC 2',
        },
        {
          img: itemImg3,
          title: 'PCI DSS',
        },
        {
          img: itemImg4,
          title: 'ISO/IEC 27001',
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
.grid-images {
  padding: 60px 0;
  position: relative;

  @media (max-width: 1034px) {
    padding-bottom: 32px;
  }

  @media (max-width: 768px) {
    padding: 40px 0 50px;
  }

  .wrapper {
    max-width: 1340px;
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

  .row {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 10px;
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
      width: calc(50% - 20px);
    }
  }

  .box-img {
    // width: 206px;
    // height: 206px;
    max-width: 206px;
    max-height: 206px;

    img {
      width: 100%;
    }
  }

  .title {
    margin-bottom: 24px;
    color: #282929;
    text-align: center;
    font-family: "Poppins";
    font-size: 24px;
    font-weight: 400;
    line-height: 132%; /* 31.68px */
    text-align: center;

    @media (max-width: 992px) {
      font-size: 16px;
      line-height: 140%; /* 22.4px */
    }

    @media (max-width: 768px) {
      align-self: flex-start;
    }
  }

}
</style>
