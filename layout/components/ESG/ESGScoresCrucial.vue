<template>
  <section class="section optimize-profits">
    <div class="wrapper main-wrapper">
      <div class="main-block">
        <div class="col">
          <h1 class="title-main">
            What makes ESG scores crucial for investors?
          </h1>
        </div>
        <div class="col">
          <p class="desc">
            ESG scores, or ESG ratings, provide investors with supplementary insights into a company that typically go beyond conventional financial analyses. Considerations like their stance on climate change and human rights, for instance, may exert a notable influence on the performance of their stocks.<br> A company that effectively addresses ESG concerns is better positioned for long-term resilience, earning it a reputation for sustainability. Consequently, investors are more likely to view such a company as enduring and capable of weathering challenges.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.optimize-profits {
  padding: 60px 0;

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
}

.main-wrapper {
  display: flex;
  flex-flow: wrap;
}

.main-block {
  position: relative;
  display: flex;
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

    &:nth-child(2) {
      justify-content: flex-start;
    }
  }

  .title-main {
    max-width: 524px;
    font: 500 52px/112% 'Poppins';
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

  .desc {
    font: 16px/140% 'Poppins';
    color: #352F44;
    max-width: 630px;

    @media (max-width: 768px) {
      max-width: none;
    }
  }
}
</style>
