<template>
  <section class="section">
    <div class="wrapper">
      <h2 class="title">
        Key Features
      </h2>
      <p class="small-title">
        Our Professional Accounts offer the ultimate trading experience
      </p>
      <div class="grid">
        <div
          v-for="(block, index) in blocks"
          :key="index"
          class="block"
        >
          <div class="block-header">
            <picture class="img">
              <img
                :src="block.icon"
                :alt="block.title"
              >
            </picture>
            <h3 class="block-title">
              {{ block.title }}
            </h3>
          </div>
          <p
            class="text"
            v-html="block.description"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import icon1 from '@/static/img/pro/icons/icon1.svg';
import icon2 from '@/static/img/pro/icons/icon2.svg';
import icon3 from '@/static/img/pro/icons/icon3.svg';
import icon4 from '@/static/img/pro/icons/icon4.svg';
import icon5 from '@/static/img/pro/icons/icon5.svg';
import icon6 from '@/static/img/pro/icons/icon6.svg';

export default {
  data() {
    return {
      blocks: [
        {
          title: 'Cashback Programme',
          icon: icon1,
          description: 'The more you trade, <br>the more cash you get back.',
        },
        {
          title: 'Refer a Friend',
          icon: icon2,
          description: 'Earn up to $5,000 for you and each <br>person you introduce.',
        },
        {
          title: 'High Leverage',
          icon: icon3,
          description: 'Trade with leverage up to 1:400 <br>and a close-out level as low as 30%.',
        },
        {
          title: 'Protection of Funds',
          icon: icon4,
          description: 'Your funds are kept segregated <br>and covered by our enhanced <br>protection, up to $1,000,000.',
        },
        {
          title: 'Negative Balance Protection',
          icon: icon5,
          description: 'Guaranteed protection from negative balances.',
        },
        {
          title: 'Extended Trading Hours',
          icon: icon6,
          description: 'Access extended trading hours for increased flexibility and seizing global market opportunities beyond regular hours.',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.section {
  background-color: #25212F;
  padding: 60px 0;
}

.wrapper {
  position: relative;
  max-width: 1340px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    bottom: -66px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: calc(100% - 242px);
    height: 1px;
    background-color: #282929;
  }
}

.title {
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 52px;
  font-weight: 500;
  line-height: 112%; /* 58.24px */
  letter-spacing: -0.52px;
  margin-bottom: 32px;
}

.small-title {
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  margin-bottom: 60px;
}

.grid {
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 328px);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px 108px;
  background: url('@/static/img/pro/greenLine.png') no-repeat center;
  background-size: contain;
  margin: 0 auto;
}

.block-header {
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 24px;
}

.block-title {
  color: #D3F5EC;
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: 400;
  line-height: 140%; /* 28px */
}

.text {
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  opacity: 0.6;
}

.img {
  width: 32px;
  height: 32px;
}

@media (max-width: 1260px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 88px;
  }

  .block-header {
    align-items: flex-start;
  }
}

@media (max-width: 992px) {
  .title {
    font-size: 32px;
    line-height: 140%; /* 44.8px */
    letter-spacing: normal;
    margin-bottom: 24px;
  }

  .small-title {
    opacity: 0.6;
  }

  .block-title {
    color: #FFFFFF;
    line-height: 150%; /* 30 */
  }
}

@media (max-width: 768px) {
  .section {
    padding: 27px 0 66px;

    .wrapper {
      padding: 0 16px;

      &::after {
        max-width: calc(100% - 32px);
      }
    }
  }

  .grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: auto;
    gap: 80px 40px;
    background: none;
  }

  .block {
    position: relative;

      &:not(:nth-child(n + 5))::after {
      content: '';
      position: absolute;
      bottom: -40px;
      right: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(to left, rgba(211, 245, 236, 0) 0%, #D3F5EC 49.5%, rgba(211, 245, 236, 0) 100%);
    }
  }
}

@media (max-width: 575px) {
  .grid {
    grid-template-columns: 1fr;
    row-gap: 80px;
  }

  .block:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -40px;
    right: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(to left, rgba(211, 245, 236, 0) 0%, #D3F5EC 49.5%, rgba(211, 245, 236, 0) 100%);
  }
}
</style>
