<template>
  <section class="section optimize-profits">
    <div class="wrapper main-wrapper">
      <div class="main-block">
        <div class="title-col">
          <h1 class="title-main">
            ESG-Aware Investment Strategy
          </h1>
          <p class="desc">
            Empower your investment journey with an ESG-aware approach. Our platform equips you with tools and resources to incorporate ESG factors into your decision-making process. By considering a company's environmental impact, social responsibility, and governance practices, you can align your investments with your values and contribute to positive change.
          </p>
        </div>
        <div class="mockup-col">
          <img
            class="main-img"
            src="@/static/img/esg/Save-Earth-PNG-Image.png"
            alt=""
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.optimize-profits {
  padding: 35px 0 54px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0 65px;
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
  width: 50%;

  .title-main {
    max-width: 530px;
    font: 500 52px/112% 'Poppins';
    letter-spacing: -0.52px;
    color: #352F44;
    margin-top: 72px;
    margin-bottom: 32px;

    @media (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 40px;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }

  .desc {
    font: 16px/140% 'Poppins';
    font-weight: 400;
    color: #352F44;
    margin-bottom: 85px;
    max-width: 520px;

    @media (max-width: 768px) {
      margin-bottom: 72px;
      max-width: none;
    }
  }
}

.mockup-col {
  width: 50%;
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
  }

  .mockup-col {
    width: 50%;
  }
}

@media (max-width: 768px) {

  .title-col {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
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
