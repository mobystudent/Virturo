<template>
  <section class="section">
    <div class="wrapper">
      <div class="content-wrapper">
        <div class="main-block">
          <h2 class="title-main">
            Where innovation and expertise come together
          </h2>
        </div>
        <div class="blocks-wrap">
          <div
            v-for="block in blocks"
            :key="block.id"
            class="block swiper-slide"
          >
            <div class="content">
              <h3 class="block-title">
                {{ block.title }}
              </h3>
              <p class="block-text">
                {{ block.text }}
              </p>
              <nuxt-link
                class="btn"
                :to="block.link"
              >
                Read more
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
              </nuxt-link>
            </div>
            <picture class="block-image">
              <img
                class="image"
                :src="block.picture"
                :alt="block.title"
              >
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import guidance from '@/static/img/home/core-values/guidance.png';
import knowledge from '@/static/img/home/core-values/knowledge.png';
import risk from '@/static/img/home/core-values/risk.png';

export default {
  data() {
    return {
      blocks: [
        {
          id: 1,
          title: 'Real-Time Guidance',
          text: 'At Virturo, we believe that technology is best when paired with human expertise. That’s why our platform connects you with experienced investment specialists who provide real-time insights tailored to your trading strategy. With Virturo, you’re never trading alone—you have real-time guidance from professionals who understand the markets.',
          picture: guidance,
          link: '/trading-accounts/',
        },
        {
          id: 2,
          title: 'Expand Your Knowledge',
          text: 'Virturo offers an extensive library of educational content, including expert insights, market analysis, and video tutorials. Whether you\'re diving into technical analysis or exploring the fundamentals of risk management, our resources are designed to expand your expertise and keep you ahead of the curve.',
          picture: knowledge,
          link: '/learn/',
        },
        {
          id: 3,
          title: 'Manage Your Risk',
          text: 'Risk management is a cornerstone of successful trading. We provide robust risk management tools that enable you to set stop-loss limits, track market volatility, and maintain control over your trades. Our platform is designed to help you minimize potential losses while maximizing your opportunities for growth.',
          picture: risk,
          link: '#',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.section {
  padding: 120px 0;
  background: #352F44;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 296px;
    left: -134px;
    width: 470px;
    height: 470px;
    background: url('../../static/img/home/core-values/snowflake.png') center/cover no-repeat;

    @media (max-width: 1328px) {
      left: -263px;
    }

    @media (max-width: 1200px) {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    padding: 80px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0 30px;
  }
}

.wrapper {
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: flex-end;
}

.content-wrapper {
  position: relative;
  max-width: 955px;
  width: 100%;
  z-index: 2;

  @media (max-width: 1200px) {
    margin: 0 auto;
  }
}

.main-block {
  margin-bottom: 60px;

  @media (max-width: 1200px) {
    margin-bottom: 40px;
  }
}

.title-main {
  font: 500 52px/58px 'Poppins', sans-serif;
  letter-spacing: -.1px;
  color: #FFFFFF;

  @media (max-width: 1024px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 44px;
  }
}

.blocks-wrap {
  display: flex;
  flex-flow: column;
  row-gap: 15px;

  @media (max-width: 768px) {
    flex-flow: row;
    column-gap: 15px;
    width: calc(100% + 30px);
    padding: 0 15px;
    margin: 0 -15px;
    overflow-x: auto;
  }
}

.block {
  display: flex;
  column-gap: 60px;
  border: 1px solid #fff;
  border-radius: 16px;
  padding: 50px;
  height: auto;
  background: #352F44;

  @media (max-width: 1024px) {
    column-gap: 30px;
    padding: 40px;
  }

  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center;
    row-gap: 50px;
    padding: 30px;
    width: 325px;
  }
}

.content {
  display: flex;
  flex-flow: column;
  row-gap: 30px;

  @media (max-width: 768px) {
    flex: 1 0 auto;
  }
}

.block-title {
  font: 500 24px/32px 'Poppins', sans-serif;
  color: #fff;
}

.block-text {
  font: 16px/22px 'Poppins', sans-serif;
  color: #fff;
  margin-bottom: auto;
}

.btn {
  display: inline-flex;
  align-items: center;
  column-gap: 10px;
  font: 500 16px/22px 'Poppins', sans-serif;
  color: #fff;
  transition: color .25s ease;

  &:hover {
    color: #D3F5EC;

    svg {
      fill: #D3F5EC;
    }
  }

  svg{
    width: 12px;
    height: 12px;
    fill: #fff;
    transition: fill .25s ease;
  }
}

.block-image {
  flex: 0 0 365px;
  height: 365px;

  @media (max-width: 1024px) {
    flex-basis: 330px;
    height: 330px;
  }

  @media (max-width: 768px) {
    flex-basis: 265px;
    height: 265px;
  }
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
