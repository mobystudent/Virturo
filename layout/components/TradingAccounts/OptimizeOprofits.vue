<template>
  <section class="section optimize-profits">
    <div class="wrapper main-wrapper">
      <div class="main-block">
        <div class="title-col">
          <h1 class="title-main">
            Optimize profits during market volatility
          </h1>
          <p class="desc">
            Virturo enables you to leverage both upward and downward market trends. Our platform allows you to protect existing investments, capitalize on both market upswings and downturns, and engage in real-time trading across a variety of assets, such as currencies, commodities, stocks, and cryptocurrencies.
          </p>
        </div>
        <div class="mockup-col">
          <img
            class="main-img"
            src="@/static/img/trading-accounts/optimize-profits-img.png"
            alt=""
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.optimize-profits {
  padding: 35px 0;
  overflow: hidden;

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
}

.main-wrapper {
  display: flex;
  flex-flow: wrap;
}

.main-block {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.title-col {
  width: 60%;

  .title-main {
    max-width: 632px;
    font: 500 52px/112% 'Poppins';
    letter-spacing: -0.52px;
    color: #352F44;
    margin-top: 99px;
    margin-bottom: 40px;
  }

  .desc {
    font: 16px/140% 'Poppins';
    color: #352F44;
    margin-bottom: 85px;
    max-width: 524px;
  }
}

.signup-buttons {
  display: flex;
  column-gap: 10px;

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

  .btn-login {
    color: #074429;
    background-color: #E8F2E4;

    &:hover {
      background-color: #2BD770;
      color: #000000;
    }

    &:active {
      background-color: #074429;
      color: #fff;
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

.mockup-col {
  width: 40%;
  height: 100%;
  position: relative;

  .main-img {
    height: auto;
    width: 100%;
    max-width: 576px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
}

@media (max-width: 1200px) {}

@media (max-width: 992px) {
  .title-col {
    width: 50%;

    .title-main {
      font-size: 38px;
    }
  }

  .mockup-col {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 40px 0;
  }

  .title-col {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;

    .title-main {
      margin-top: 0;
      margin-bottom: 24px;
      max-width: 100%;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }

    .desc {
      font-size: 15px;
      line-height: 150%; /* 22.5px */
      margin-bottom: 40px;
    }
  }

  .mockup-col {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 15px;

    .main-img {
      position: relative;
      max-width: 100%;
    }
  }

  .main-block {
    flex-flow: column;
    margin-bottom: 0;
  }
}
</style>
