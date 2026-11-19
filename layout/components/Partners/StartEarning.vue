<template>
  <section class="section start-earning">
    <div class="wrapper main-wrapper">
      <div class="main-block">
        <div class="col">
          <h2 class="title-main">
            Start earning from your traffic, today.
          </h2>
        </div>
        <div class="col">
          <div class="content">
            <div class="description">
              Monetize your traffic and earn commissions by promoting Virturo on your website
            </div>
            <h4>High Conversion Tools</h4>
            <p>
              Our marketing solutions can easily help maximize the potential of your website while promoting Virturo.
            </p>

            <h4>High Conversion Tools</h4>
            <p>
              Each Affiliate is accompanied by an Affiliate manager.<br>
              <nuxt-link
                class="menu-link"
                to="/support/"
              >
                Contact us
              </nuxt-link>
              for further information - we will be happy to assist!
            </p>
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
      accountLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up`,
    };
  },
};

</script>

<style scoped lang="scss">
.start-earning {
  padding: 80px 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  .wrapper {
    max-width: 1340px;
    box-sizing: border-box;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }

  .wrap-btn {
    padding-top: 8px;
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
}

.main-wrapper {
  display: flex;
  flex-flow: wrap;
}

.main-block {
  position: relative;
  display: flex;
  // align-items: center;
  width: 100%;

  @media (max-width: 992px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-flow: column;
    gap: 0;
  }
}

.col {
  width: 50%;

  &:nth-child(2) {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    width: 100%;

    &:first-child {
      // margin-bottom: 60px;
    }

    &:nth-child(2) {
      justify-content: flex-start;
    }
  }

  .title-main {
    margin-bottom: 24px;
    max-width: 416px;
    font: 500 52px/58px 'Poppins';
    letter-spacing: -0.52px;
    color: #352F44;

    @media (max-width: 992px) {
      font-size: 38px;
    }

    @media (max-width: 768px) {
      margin-bottom: 40px;
      max-width: none;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }

  .description {
    margin-bottom: 40px;
    max-width: 740px;
    color: #352F44;
    font: 500 24px/132% 'Poppins';

    @media (max-width: 768px) {
      max-width: none;
      font-size: 20px;
      line-height: 140%; /* 28px */
    }
  }

  .content {
    h4 {
      margin-bottom: 12px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 20px;
      font-weight: 500;
      line-height: 140%;
      /* 28px */

      @media (max-width: 768px) {
        margin-bottom: 16px;
      }
    }

    p {
      margin-bottom: 24px;
      max-width: 740px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-weight: 400;
      line-height: 140%; /* 22.4px */

      /* 24px */
      &:last-child {
        margin-bottom: 0;
      }

      @media (max-width: 768px) {
        max-width: none;
        margin-bottom: 40px;

        br {
          display: none;
        }
      }

      a {
        color: #282929;
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }
    }

  }
}

@media (max-width: 1200px) {}

@media (max-width: 992px) {}

@media (max-width: 768px) {}
</style>
