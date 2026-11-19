<template>
  <section class="timing-is-everything">
    <div class="container">
      <div class="wrap-title">
        <h2 class="block-title">
          Timing is everything
        </h2>
        <div class="caption">
          Commence your derivative trading journey today
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div class="row-title">
            <div class="numb">
              1
            </div>
            <h3 class="title">
              Select an Asset
            </h3>
          </div>
          <p class="desc">
            Virturo offers a wide array of assets spanning various market segments, providing you with numerous options for liquidity and diversification.
          </p>
        </div>
        <div class="col">
          <div class="row-title">
            <div class="numb">
              2
            </div>
            <h3 class="title">
              Choose contract type
            </h3>
          </div>
          <p class="desc">
            Regardless of whether you are buying or selling, our platform enables traders to seize opportunities during market downturns and leverage their investments for maximum returns.
          </p>
        </div>
        <div class="col">
          <div class="row-title">
            <div class="numb">
              3
            </div>
            <h3 class="title">
              Execute
            </h3>
          </div>
          <p class="desc">
            Benefit from our advanced platform capabilities, which include lightning-fast execution, comprehensive monitoring tools, and convenient access on the go..
          </p>
        </div>
      </div>

      <div class="wrap-btn">
        <a
          class="btn btn-account"
          :href="accountLink"
        >Create account
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      accountLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up/`,
    };
  },
};

</script>

<style lang="scss" scoped>
.timing-is-everything {
  background-color: #ECECE4;
  position: relative;

  .container {
    max-width: 1340px;
    box-sizing: border-box;
    padding: 60px 30px;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 40px 15px 40px;
    }
  }

  .row {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    column-gap: 20px;
  }

  .col {
    margin-bottom: 60px;
    // max-width: 318px;
    max-width: 373px;

    @media (max-width: 768px) {
      margin-bottom: 50px;

      &:last-child {
        margin-bottom: 20px;
      }
    }

    @media (max-width: 690px) {
      max-width: none;
    }
  }

  .block-title {
    margin-bottom: 8px;
    color: #352F44;
    font-family: 'Poppins';
    font-size: 52px;
    font-style: normal;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    z-index: 1;

    @media (max-width: 768px) {
      margin-bottom: 24px;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }

  .caption {
    margin-bottom: 60px;
    color: #352F44;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */

    @media (max-width: 768px) {
      margin-bottom: 37px;
    }
  }

  .row-title {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    @media (max-width: 768px) {
      margin-bottom: 24px;
      flex-flow: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .title {
    color: #352F44;
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 500;
    line-height: 132%; /* 31.68px */
    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 140%; /* 30.8px */
    }
  }

  .numb {
    display: flex;
    width: 40px;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #157275;
    color: #FFF;
    font-family: 'Poppins';
    font-size: 23px;
    font-weight: 500;
    line-height: 140%; /* 32px */
    border-radius: 50%;
  }

  .desc {
    color: #352F44;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    @media (max-width: 768px) {
      font-size: 15px;
      line-height: 150%; /* 22.5px */
    }
  }

  .wrap-btn {
    display: flex;

    @media (max-width: 768px) {
      margin-top: 20px;
    }
  }

  .btn-create-account {
    width: 206px;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    background-color: #157275;
    color: #FFF;
    font-size: 16px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    border-radius: 4px;
  }
}

.wrap-btn {
  display: flex;

  .btn {
    font: 500 16px 'Poppins';
    line-height: 140%; /* 22.4px */
    padding: 15px 30px;
    border-radius: 4px;
    color: #fff;
    background-color: #157275;
    transition: color .25s ease-in, background-color .25s ease-in;
  }

  .btn-account {
    display: inline-flex;
    align-items: center;
    column-gap: 5px;
    color: #fff;
    background-color: #157275;
    transition: .25s box-shadow ease-in;

    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
    }

    &:active {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
    }
  }
}

@media (max-width: 768px) {
  .wrap-title {
    display: flex;
    flex-flow: column;
  }
}
</style>
