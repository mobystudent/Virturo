<template>
  <section class="top">
    <div class="top-inner">
      <div class="row">
        <div class="col">
          <h1 class="title">
            Forex & CFDs trading platform with real-time guidance
          </h1>
        </div>
        <div class="col">
          <p>
            Utilize leverage on a wide range of 3,000+ trading assets.
            Experience tight spreads, instant execution, and transparent pricing. Precise charting and advanced automated tools.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.top {
  background-color: #D3F5EC;
  position: relative;

  .top-inner {
    max-width: 1340px;
    padding: 100px 30px;
    // box-sizing: content-box;
    margin: 0 auto;

    .row {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      gap: 40px;

      @media (max-width: 992px) {
        gap: 0;
      }
    }

    .col {
      max-width: 514px;

      @media (max-width: 992px) {
        max-width: none;
      }

      &:nth-child(2) {
        align-self: flex-start;
      }
    }

    h1 {
      color: #352F44;
      font-family: 'Poppins';
      font-size: 52px;
      font-style: normal;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;
      z-index: 1;
    }

    p {
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }
  }

  .title {
    font-weight: 700;
    font-size: 56px;
    line-height: 1.2;
    color: #ffffff;
  }
}

@media (max-width: 992px) {
  .top .top-inner {
    padding: 100px 0;
  }
}

@media (max-width: 1024px) {
  .top {
    background-position: center;

    .top-inner h1,
    .title {
      font-size: 36px;
    }
  }
}

@media (max-width: 998px) {
  .top .top-inner .row {
    flex-flow: column;
    padding: 0 20px;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {

  .top {

    .internal-bg {
      width: 100%;
    }

    .top-inner {
      padding: 60px 16px;

      h1 {
        margin-bottom: 40px;
        font-size: 32px;
        line-height: 140%; /* 44.8px */
      }

      p {
        line-height: 150%; /* 24px */
      }
    }
  }

  .top .top-inner .row {
    padding: 0;
  }
}
</style>
