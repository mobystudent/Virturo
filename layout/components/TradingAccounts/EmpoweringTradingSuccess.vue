<template>
  <section class="section">
    <div class="wrapper">
      <h2 class="block-title">
        Empowering your<br> trading success
      </h2>
      <div class="caption">
        Virturo offers optimal trading conditions, so you can make the most of every single trade
      </div>
      <div class="blocks-wrap">
        <div
          v-for="item in items"
          :key="item.id"
          class="block"
        >
          <div class="wrap-img">
            <img
              class="img"
              :src="item.logoUrl"
              alt="#"
            >
          </div>
          <div class="title">
            {{ item.title }}
          </div>
          <div class="description">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img1 from '../../static/img/trading-accounts/sucess-icons/sucess-icon-1.svg';
import img2 from '../../static/img/trading-accounts/sucess-icons/sucess-icon-2.svg';
import img3 from '../../static/img/trading-accounts/sucess-icons/sucess-icon-3.svg';
import img4 from '../../static/img/trading-accounts/sucess-icons/sucess-icon-4.svg';
import img5 from '../../static/img/trading-accounts/sucess-icons/sucess-icon-5.svg';
import img6 from '../../static/img/trading-accounts/sucess-icons/sucess-icon-6.svg';

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Ultra-fast execution',
          description: 'Average trade execution times of under 0.04 seconds',
          logoUrl: img1,
        },
        {
          id: 2,
          title: 'Negative balance protection',
          description: 'Guaranteed protection from negative balances',
          cite: '#',
          logoUrl: img2,
        },
        {
          id: 3,
          title: 'No requotes',
          description: 'We strive to provide the most reliable trading execution',
          logoUrl: img3,
        },
        {
          id: 4,
          title: 'No hidden fees',
          description: 'What you see is what you get, with no hidden commissions or fees',
          logoUrl: img4,
        },
        {
          id: 5,
          title: 'Protection of funds',
          description: 'Your funds are kept segregated and covered, up to €85,000',
          logoUrl: img5,
        },
        {
          id: 6,
          title: 'Unbeatable spreads',
          description: 'Trade dozens of Forex CFDs with spreads from 0.25 pips',
          logoUrl: img6,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.section {
  padding: 60px 0;
  background-color: #FFF;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
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

  // .internal-bg {
  //   position: absolute;
  //   top: 0;
  //   height: 100%;

  //   &.right {
  //     right: 0;
  //   }

  //   &.left {
  //     left: 0;
  //   }

  //   @media (max-width: 992px) {
  //     display: none;
  //   }
  // }
}

.block-title {
  margin-bottom: 32px;
  color: #352F44;
  font-family: 'Poppins';
  font-size: 52px;
  font-weight: 500;
  line-height: 112%; /* 58.24px */
  letter-spacing: -0.52px;

  @media (max-width: 992px) {
    font-size: 38px;
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 140%; /* 44.8px */
  }
}

.caption {
  margin-bottom: 60px;
  max-width: 524px;
  color: #352F44;
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: 400;
  line-height: 140%; /* 28px */

  /* 24px */
  @media (max-width: 768px) {
    margin-bottom: 40px;
    font-family: 'Poppins';
    font-size: 15px;
    line-height: 150%; /* 22.5px */
  }
}

.blocks-wrap {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  gap: 16px;
}

.block {
  padding: 32px 40px 40px 40px;
  min-height: 240px;
  width: 100%;
  max-width: 32.333%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #ECECE4;
  border-radius: 32px;
  background: #ECECE4;

  @media (max-width: 1125px) {
    max-width: calc(32.333% - 8px);
  }

  @media (max-width: 860px) {
    max-width: calc(50% - 8px);
  }

  @media (max-width: 620px) {
    padding: 32px;
    max-width: 100%;
  }

  &:nth-child(2n) {
    background-color: #D3F5EC;
    border: 1px solid #D3F5EC;
  }
}

.wrap-img {
  margin-bottom: 16px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
}

.img {
  height: 40px;
  width: 40px;
}

.title {
  margin-bottom: 16px;
  color: #352F44;
  font-family: 'Poppins';
  font-size: 24px;
  font-weight: 500;
  line-height: 132%; /* 31.68px */
}

.description {
  color: #282929;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 150%; /* 22.5px */
  }
}
</style>
