<template>
  <section class="section-traiding-view-widgets">
    <div class="wrapper">
      <div class="intro">
        <h2 class="block-title">
          ESG Integration at Virturo
        </h2>

        <div class="description">
          <p>
            At Virturo, we prioritize ESG considerations, recognizing their significance in modern investment strategies.<br>
            Our commitment extends beyond conventional assets, offering a range of ESG-friendly investment opportunities that align with your values.
          </p>
          <p>
            Navigate the ESG landscape with ease using our intuitive scoring system.<br>
            We classify assets into three categories:
          </p>
        </div>
      </div>

      <div class="block-integration">
        <div class="row row-desktop">
          <div class="col">
            <div class="box red">
              CCC
            </div>
          </div>
          <div class="col">
            <div class="box red">
              B
            </div>
          </div>
          <div class="col">
            <div class="box yellow">
              BB
            </div>
          </div>
          <div class="col">
            <div class="box yellow">
              BBB
            </div>
          </div>
          <div class="col">
            <div class="box yellow">
              A
            </div>
          </div>
          <div class="col">
            <div class="box green">
              AA
            </div>
          </div>
          <div class="col">
            <div class="box green">
              AAA
            </div>
          </div>
        </div>
        <div class="row row-mobile">
          <div class="line">
            <div class="col">
              <div class="box red">
                CCC
              </div>
            </div>
            <div class="col">
              <div class="box red">
                B
              </div>
            </div>
          </div>
          <div class="line">
            <div class="col">
              <div class="box yellow">
                BB
              </div>
            </div>
            <div class="col">
              <div class="box yellow">
                BBB
              </div>
            </div>
            <div class="col">
              <div class="box yellow">
                A
              </div>
            </div>
          </div>
          <div class="line">
            <div class="col">
              <div class="box green">
                AA
              </div>
            </div>
            <div class="col">
              <div class="box green">
                AAA
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block-integration-info">
        <div class="row-info">
          <div class="col">
            <h4 class="title">
              Red
            </h4>
            <div class="desc">
              Highlights assets with identified ESG concerns, encouraging a closer examination of associated risks.
            </div>
          </div>
          <div class="col">
            <h4 class="title">
              Amber
            </h4>
            <div class="desc">
              Signifies a moderate ESG performance, with room for improvement in certain areas.
            </div>
          </div>
          <div class="col">
            <h4 class="title">
              Green
            </h4>
            <div class="desc">
              Indicates strong ESG performance, reflecting a commitment to sustainable practices.
            </div>
          </div>
        </div>
        <div class="info">
          Explore a spectrum of ESG-conscious assets in our portfolio, allowing you to make investment choices that reflect your commitment to sustainability. Whether you're interested in renewable energy, social impact bonds, or environmentally responsible technologies, we provide a diverse array of investment options.
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-traiding-view-widgets {
  padding: 60px 0;
  background-color: #ECECE4;
  position: relative;

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 490px;
    height: 490px;
    transform: translateY(-50%);
    background: url('@/static/img/home/snowflake.png') center/cover no-repeat;

    @media (max-width: 992px) {
      display: none;
    }
  }

  &:before {
    left: -270px;
  }

  &:after {
    right: -270px;
  }

  .wrapper {
    max-width: 848px;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
    box-sizing: content-box;
    z-index: 1;

    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }

  .intro {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-flow: column;
  }

  .block-title {
    margin-bottom: 40px;
    color: #352F44;
    text-align: center;
    font-family: "Poppins";
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;

    @media (max-width: 768px) {
      margin-bottom: 24px;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
      text-align: left;
    }
  }

  .description {
    margin-bottom: 40px;
    color: #282929;
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    text-align: center;

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }

    p {
      margin-bottom: 16px;

      @media (max-width: 768px) {
        margin-bottom: 16px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .block-integration {
    margin-bottom: 40px;

    @media (max-width: 768px) {
      margin-bottom: 40px;
    }

    .box {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 112px;
      height: 60px;
      font-family: "Poppins";
      font-size: 20px;
      font-weight: 500;
      line-height: 140%;

      /* 28px */
      @media (max-width: 396px) {
        width: 100px;
      }

      @media (max-width: 336px) {
        width: 90px;
      }
    }

    .red {
      background: #DC3628;
      color: #FFF;
    }

    .yellow {
      background: #FFBF00;
      color: #282929;
    }

    .green {
      background: #2BD770;
      color: #282929;
    }
  }

  .block-integration .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    &.row-desktop {
      display: flex;

      .col {
        &:nth-child(2) {
          margin-right: 5px;
        }

        &:nth-child(5) {
          margin-right: 5px;
        }
      }
    }

    &.row-mobile {
      display: none;
    }

    @media (max-width: 992px) {
      flex-wrap: wrap;
      justify-content: center;
      flex-flow: column;
      gap: 15px 8px;

      &.row-desktop {
        display: none;
      }

      &.row-mobile {
        display: flex;
      }
    }

    .line {
      display: flex;
      flex-flow: row;
      gap: 15px 8px;
    }
  }

  .row-info {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 47px;

    @media (max-width: 992px) {
      gap: 24px;
    }

    @media (max-width: 768px) {
      margin-bottom: 16px;
      flex-flow: column wrap;
    }

    .col {
      width: calc(100% / 3);

      @media (max-width: 992px) {
        width: 46%;
      }

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    .title {
      margin-bottom: 16px;
      color: #282929;
      font-size: 20px;
      font-weight: 500;
      line-height: 140%; /* 28px */
      font-family: "Poppins";

      @media (max-width: 768px) {
        font-size: 22px;
        line-height: 140%; /* 30.8px */
      }
    }

    .desc {
      color: #282929;
      font-size: 12px;
      font-weight: 400;
      line-height: 146%; /* 17.52px */
      font-family: "Poppins";

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 140%; /* 22.4px */
      }
    }
  }

  .info {
    color: #282929;
    font-size: 12px;
    font-weight: 400;
    line-height: 146%; /* 17.52px */
    font-family: "Poppins";

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 140%; /* 22.4px */
    }
  }

}
</style>
