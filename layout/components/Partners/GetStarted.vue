<template>
  <section class="get-started">
    <div class="container">
      <div class="wrap-title">
        <h2 class="block-title">
          How to Get Started
        </h2>
      </div>

      <div class="row">
        <div class="col">
          <div class="numb">
            1
          </div>
          <h3 class="title">
            Explore Your Options
          </h3>
          <p class="desc">
            Choose the partnership program that aligns with your interests and goals.
          </p>
        </div>
        <div class="col">
          <div class="numb">
            2
          </div>
          <h3 class="title">
            Sign Up
          </h3>
          <p class="desc">
            Fill out the online application, |and our team will guide you through the onboarding process.
          </p>
        </div>
        <div class="col">
          <div class="numb">
            3
          </div>
          <h3 class="title">
            Start Earning
          </h3>
          <p class="desc">
            Once approved, access your partner dashboard, and begin earning commissions and rewards.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      accountLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up`,
    };
  },
};

</script>

<style lang="scss" scoped>
.get-started {
  position: relative;

  .container {
    max-width: 1155px;
    box-sizing: border-box;
    padding: 60px 30px 0;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 40px 15px 0;
    }
  }

  .row {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    column-gap: 20px;
  }

  .col {
    margin-bottom: 80px;
    max-width: 318px;

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }

    @media (max-width: 690px) {
      max-width: none;
    }
  }

  .block-title {
    margin-bottom: 60px;
    color: #074429;
    font-family: 'Poppins';
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 56px;
    /* 116.667% */
    letter-spacing: -0.154px;
    text-align: center;
    z-index: 1;

    @media (max-width: 768px) {
      margin-bottom: 40px;
      font-size: 32px;
      line-height: 120%;
      /* 38.4px */
      letter-spacing: -0.102px;
    }
  }

  .caption {
    margin-bottom: 60px;
    color: #282929;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    text-align: center;

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  }

  .title {
    margin-bottom: 24px;
    color: #282929;
    font-family: 'Poppins';
    font-size: 32px;
    font-weight: 500;
    line-height: 120%;
    /* 38.4px */
    letter-spacing: -0.102px;
  }

  .numb {
    margin-bottom: 16px;
    display: flex;
    width: 40px;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2BD770;
    color: #282929;
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 500;
    line-height: 140%;
    /* 28px */
    border-radius: 50%;
  }

  .desc {
    color: #282929;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
  }

  .wrap-btn {
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }

  .btn-create-account {
    width: 206px;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    background-color: #2BD770;
    color: #074429;
    font-size: 16px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    /* 24px */
    border-radius: 4px;
  }
}

.wrap-btn {
  display: flex;

  .btn {
    font: 500 16px 'Poppins';
    padding: 15px 30px;
    border-radius: 4px;
    color: #0E0523;
    background-color: #E8F2E4;
    transition: color .25s ease-in, background-color .25s ease-in;
  }

  .btn-account {
    display: inline-flex;
    align-items: center;
    column-gap: 5px;
    color: #074429;
    background-color: #2BD770;
    transition: .25s box-shadow ease-in;

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);

      .icons {
        transform: translateX(0);
      }
    }

    &:active {
      color: #fff;
      background-color: #074429;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);

      path {
        fill: #fff;
      }
    }

    svg {
      flex: 0 0 auto;
      transform: translateY(2px) rotate(180deg);
    }

    path {
      fill: #074429;
      transition: fill .25s ease-in;
    }
  }
}

.icon-btn {
  width: 24px;
  height: 24px;
  overflow: hidden;
}

.icons {
  display: flex;
  transform: translateX(-100%);
  transition: .25s transform ease-in;
}

@media (max-width: 768px) {
  .wrap-title {
    display: flex;
    flex-flow: column;
  }

}
</style>
