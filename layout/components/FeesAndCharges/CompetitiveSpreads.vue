<template>
  <section class="section competitive-spreads">
    <div class="wrapper main-wrapper">
      <div class="row main-block">
        <div class="col title-col">
          <h1 class="title-main">
            Competitive Spreads
          </h1>
        </div>
        <div class="col">
          <p class="desc">
            At Virturo, we offer exceptionally tight buy/sell spreads to ensure cost-efficient transactions for our clients. With rates as low as 0.01% on FX pairs and 0.025% on Crypto and Stocks, our competitive spread structure is integral to maximizing your trading potential. This allows for more precise and economical trade executions. Our commitment to tight spreads reflects our dedication to providing an advantageous trading environment, making your financial success our top priority.
          </p>

          <div class="row-fee">
            <div class="block-fee">
              <div class="percent-bl">
                <div class="number">
                  0.01
                </div>
                <div class="percent">
                  %
                </div>
              </div>
              <div class="per">
                On FX pairs
              </div>
            </div>
            <div class="block-fee">
              <div class="percent-bl">
                <div class="number">
                  0.025
                </div>
                <div class="percent">
                  %
                </div>
              </div>
              <div class="per">
                On Crypto and Stocks
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.competitive-spreads {
  padding: 60px 0;
  background-color: #157275;
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
}

.wrapper {
  display: flex;
  flex-flow: wrap;
}

.row {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.title-col {
  .title-main {
    max-width: 416px;
    font: 500 52px/112% 'Poppins';
    letter-spacing: -0.52px;
    color: #FFF;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 40px;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }

}

.desc {
  font: 16px/140% 'Poppins';
  font-weight: 400;
  color: #FFF;
  margin-bottom: 60px;
  max-width: 740px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    max-width: none;
  }
}

.row-fee {
  display: flex;
  flex-flow: row;
  gap: 60px;
  position: relative;

  @media (max-width: 768px) {
    flex-flow: column;
    gap: 40px;
  }
}

.block-fee {
  display: flex;
  flex-flow: column;

  &:first-child {
    margin-bottom: 32px;

    @media (max-width: 992px) {
      margin-bottom: 0;
    }
  }

  .number {
    color: #FFF;
    font-family: 'Poppins';
    font-size: 120px;
    font-weight: 400;
    line-height: 100%; /* 120px */
    letter-spacing: -0.384px;

    @media (max-width: 992px) {
      font-size: 80px;
      line-height: 100%; /* 80px */
      letter-spacing: -0.256px;
    }
  }

  .percent {
    color: #FFF;
    font-family: 'Poppins';
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;

    @media (max-width: 992px) {
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;
    }
  }

  .per {
    color: #FFF;
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 500;
    line-height: 140%; /* 28px */
  }

  .percent-bl {
    display: flex;
    flex-flow: row;
    align-items: flex-end;
  }
}

@media (max-width: 992px) {
  .title-col {
    width: 50%;
  }

  .mockup-col {
    width: 50%;
  }

  .row {
    flex-flow: column;
    margin-bottom: 0;
  }
}

@media (max-width: 768px) {

  .title-col {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    align-items: flex-start;
  }

  .mockup-col {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    .main-img {
      position: relative;
      max-width: 100%;
    }
  }
}

@media (max-width: 520px) {
  .mockup-col {
    width: 100%;
  }
}
</style>
