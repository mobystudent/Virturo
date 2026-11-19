<template>
  <section class="crypto-fund-investment">
    <div class="wrapper">
      <div class="row">
        <div class="col col-1">
          <h2 class="block-title">
            Crypto Fund<br> Investment
          </h2>
        </div>
        <div class="col col-2">
          <div class="block-fee">
            <div class="title">
              Management Fee:
            </div>
            <div class="percent-bl">
              <div class="number">
                3
              </div>
              <div class="percent">
                %
              </div>
            </div>
            <div class="per">
              Per annum
            </div>
          </div>
          <div class="block-fee">
            <div class="title">
              Performance Fee:
            </div>
            <div class="percent-bl">
              <div class="number">
                30
              </div>
              <div class="percent">
                %
              </div>
            </div>
            <div class="per">
              On profits, calculated quarterly
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.crypto-fund-investment {
  background-color: #D3F5EC;

  .wrapper {
    max-width: 1340px;
    padding: 60px 30px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (max-width: 992px) {
        padding: 40px 30px;
    }

    @media (max-width: 768px) {
        padding: 0 15px;
    }

    .row {
        // max-width: 1164px;
        max-width: 1340px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        @media (max-width: 1150px) {
            padding: 40px 0;
            flex-flow: column;
        }
    }

    .block-title {
      max-width: 384px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 52px;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;

      @media (max-width: 1150px) {
        margin-bottom: 40px;
        font-size: 32px;
        line-height: 140%; /* 44.8px */
      }
    }

    .block-fee {
      margin-left: 124px;
      display: flex;
      flex-flow: column;

      &:nth-child(1) {
        margin-left: 0;
      }

      @media (max-width: 768px) {
        margin-left: 0;
        margin-bottom: 40px;

        &:last-child {
            margin-bottom: 0;
        }
      }

      .title {
        margin-bottom: 16px;
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

      .number {
        color: #352F44;
        font-family: 'Poppins';
        font-size: 120px;
        font-weight: 400;
        line-height: 100%; /* 120px */
        letter-spacing: -0.384px;
        @media (max-width: 768px) {
          font-size: 80px;
          letter-spacing: -0.256px;
        }
      }

      .percent {
        // margin-left: 6px;
        color: #352F44;
        font-family: 'Poppins';
        font-size: 52px;
        font-weight: 500;
        line-height: 112%; /* 58.24px */
        letter-spacing: -0.52px;
      }

      .per {
        color: #352F44;
        font-family: 'Poppins';
        font-size: 20px;
        font-weight: 500;
        line-height: 140%; /* 28px */
      }

      .percent-bl {
        margin-bottom: 8px;
        display: flex;
        flex-flow: row;
        align-items: flex-end;
      }
    }

    .col-2 {
      display: flex;
      flex-flow: row;
      // justify-content: space-between;
      max-width: 740px;
      width: 100%;

      @media (max-width: 768px) {
          gap: 40px;
      }

      @media (max-width: 520px) {
          flex-flow: column;
          gap: 0;
      }
    }
  }
}
</style>
