<template>
  <section
    id="main_section"
    class="section"
  >
    <div class="wrapper main-wrapper">
      <div class="main-block">
        <div class="title-col">
          <HeroBar />
          <h1 class="title-main">
            Redefine <br>the standard of excellence
          </h1>
          <p class="desc">
            Virturo guides you through waves of market volatility with clarity and direction. Powered by cutting-edge technology and integrity, we illuminate the path to a seamless trading experience.
          </p>
          <div class="info-line">
            <div class="buttons">
              <a
                class="btn btn-account"
                :href="accountLink"
              >Create account</a>
              <a
                class="btn btn-login"
                :href="loginLink"
              >Login</a>
            </div>
            <div class="review-rating">
              <a
                href="https://www.reviews.io/company-reviews/store/virturo.com?order=highest_rated"
                target="_blank"
              >
                <span class="rating">
                  4.3 out of 5
                </span>
                <picture class="review-text">
                  <img
                    src="@/static/img/home/hero/img-reviews.png"
                    alt="reviews image"
                  >
                </picture>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-block">
        <div class="features">
          <span
            v-for="feature in features"
            :key="feature.id"
            class="features__item"
          >
            <img
              :src="feature.image"
              :alt="feature.title"
            >
            {{ feature.title }}
          </span>
        </div>
      </div>
    </div>
    <picture class="mockup-col">
      <img
        class="main-img"
        src="@/static/img/home/hero/new-hero-bg.png"
        alt="background section"
      >
      <img
        class="mob-img"
        src="@/static/img/home/hero/new-hero-bg-mob.png"
        alt="background section"
      >
    </picture>
  </section>
</template>

<script>
import wallet from '@/static/img/home/hero/wallet.svg';
import shield from '@/static/img/home/hero/shield.svg';
import starsFlag from '@/static/img/home/hero/stars-flag.svg';
import HeroBar from '@/components/HomePage/HeroBar.vue';

export default {
  // components: {},
  components: {
    HeroBar,
  },
  data() {
    return {
      loginLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/login/`, // /login
      accountLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up/`, // /sign-up
      features: [
        {
          id: 1,
          image: wallet,
          title: 'Segregated accounts',
        },
        {
          id: 2,
          image: shield,
          title: 'Protected up to Euro 85,000',
        },
        {
          id: 3,
          image: starsFlag,
          title: 'GDPR compliant',
        },
      ],
      awards: [
        {
          id: 1,
          title: 'Best Trading Platform',
          desc: 'FinTech Breakthrough 2024',
        },
        {
          id: 2,
          title: 'Best Derivatives trading',
          desc: 'HFM European Technology 2020',
        },
        {
          id: 3,
          title: 'Best Finance App',
          desc: 'Red Dot design 2022',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.section {
  position: relative;
  padding: 78px 0 80px;
  min-height: 750px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #352F44;

  @media (max-width: 768px) {
    padding: 40px 0 520px;
    background: #2A2636;
  }

  @media (max-width: 480px) {
    padding: 40px 0 510px;
  }

  @media (max-width: 430px) {
    padding-bottom: 466px;
  }

  @media (max-width: 350px) {
    padding-bottom: 460px;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 144px;
    width: 100%;
    background: linear-gradient(rgba(42, 38, 54, 0), #2A2636);
    z-index: 1;

    @media (max-width: 1024px) {
      height: 100%;
    }

    @media (max-width: 768px) {
      background: linear-gradient(rgba(42, 38, 54, 0) 0, rgba(42, 38, 54, 0) 31%, #2A2636 33%, #2A2636 100%);
      height: 500px;
      opacity: 0;
    }

    @media (max-width: 480px) {
      height: 500px;
    }

    @media (max-width: 430px) {
      height: 580px;
      top: auto;
      bottom: 50px;
      opacity: 0;
    }
    
    @media (max-width: 366px) {
      height: 80px;
      top: auto;
      bottom: -52px;
      opacity: 1;
    }
  }
}

.main-wrapper {
  position: relative;
  z-index: 3;
}

.main-block {
  margin-bottom: 72px;

  @media (max-width: 1024px) {
    margin-bottom: 62px;
  }

  @media (max-width: 768px) {
    margin-bottom: 56px;
  }
}

.title-col {
  max-width: 635px;

  @media (max-width: 1200px) {
    max-width: 500px;
  }
}

.title-main {
  font: 500 88px/88px 'Poppins', sans-serif;
  letter-spacing: -.32px;
  color: #D3F5EC;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    font-size: 72px;
    line-height: 72px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    margin-bottom: 24px;
  }
}

.desc {
  font: 16px/22px 'Poppins', sans-serif;
  color: #fff;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    margin-bottom: 56px;
  }
}

.info-line {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    flex-flow: column;
    align-items: flex-start;
    row-gap: 24px;
  }
}

.buttons {
  display: flex;
  column-gap: 10px;
}

.btn {
  font: 500 16px/22px 'Poppins', sans-serif;
  padding: 15px 30px;
  border-radius: 4px;
  transition: color .25s ease-in, border-color .25s ease-in, background-color .25s ease-in;
}

.btn-login {
  color: #D3F5EC;
  border: 1px solid #D3F5EC;
  transition: color .25s ease-in, background .25s ease-in;

  &:hover {
    color: #352F44;
    border-color: #D3F5EC;
    background-color: #D3F5EC;
  }

  &:active {
    color: #352F44;
    border-color: #D3F5EC;
    background-color: #D3F5EC;
  }
}

.btn-account {
  color: #352F44;
  background-color: #D3F5EC;
  border: 1px solid #D3F5EC;
  transition: color .25s ease-in, background .25s ease-in;

  &:hover {
    background-color: transparent;
    color: #D3F5EC;
  }

  &:active {
    background-color: transparent;
    color: #D3F5EC;
  }
}

.review-rating a {
  display: flex;
  column-gap: 15px;
}

.rating {
  font: 16px/22px 'Poppins', sans-serif;
  color: #fff;
  flex: 0 0 auto;
}

.review-text {
  width: 100%;
}

.mockup-col {
  position: absolute;
  top: -5px;
  right: 0;
  height: 100%;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 430px;
    top: auto;
  }

  @media (max-width: 480px) {
    max-width: 420px;
    top: auto;
  }
}

.main-img {
  width: auto;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }
}

.mob-img {
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

.bottom-block {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  column-gap: 40px;

  @media (max-width: 1200px) {
    flex-flow: column;
    row-gap: 15px;
  }

  @media (max-width: 768px) {
    row-gap: 40px;
  }
}

.features {
  display: flex;
  flex-flow: column;
  gap: 10px;
  flex: 0 0 auto;

  @media (max-width: 1200px) {
    flex-flow: row;
    justify-content: space-around;
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-flow: column;
    gap: 12px;
  }
}

.features__item {
  display: inline-flex;
  align-items: center;
  column-gap: 10px;
  font: 500 12px/18px 'Poppins', sans-serif;
  color: #fff;

  img {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    padding: 1px;
  }
}

.awards {
  position: relative;
  display: flex;
  justify-content: flex-end;
  gap: 30px;
  width: 100%;
  max-width: 1005px;
  z-index: 1;

  @media (max-width: 1440px) {
    justify-content: space-evenly;
  }

  @media (max-width: 1200px) {
    flex-flow: wrap;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    flex-flow: column;
  }
}

.award_item {
  display: flex;
  align-items: center;
  column-gap: 15px;
  max-width: 315px;
  width: 100%;

  @media (max-width: 1440px) {
    width: auto;
  }

  img {
    width: 44px;
    height: 35px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-flow: column;
    height: 100%;
  }
}

.award-title {
  font: 600 16px/22px 'Poppins', sans-serif;
  color: #fff;
  text-transform: uppercase;
}

.award-desc {
  font: 14px/20px 'Poppins', sans-serif;
  color: #fff;
}
</style>
