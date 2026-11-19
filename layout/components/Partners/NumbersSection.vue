<template>
  <section class="numbers-section">
    <div class="wrapper">
      <h2 class="block-title">
        With us your trust is perfectly placed.
      </h2>
      <div class="row">
        <div class="block-fee">
          <div class="percent-bl">
            <div class="number">
              5
            </div>
          </div>
          <div class="per">
            Supported Languages
          </div>
        </div>
        <div class="block-fee">
          <div class="percent-bl">
            <div class="number">
              10+
            </div>
          </div>
          <div class="per">
            Years of experience
          </div>
        </div>
        <div class="block-fee">
          <div class="percent-bl">
            <div class="number">
              3K
            </div>
          </div>
          <div class="per">
            Instruments
          </div>
        </div>
        <div class="block-fee">
          <div class="percent-bl">
            <div class="number">
              30K
            </div>
          </div>
          <div class="per">
            Users worldwide
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.numbers-section {
  background-color: #352F44;

  .wrapper {
    max-width: 1340px;
    padding: 60px 30px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    &:before {
      content: '';
      display: block;
      width: calc(100% - 60px);
      height: 1px;
      background-color: rgba(7, 68, 41, 0.20);
      position: absolute;
      bottom: 0;
      left: 30px;

      @media (max-width: 768px) {
        width: calc(100% - 32px);
        left: 16px;
      }
    }

    @media (max-width: 768px) {
      padding: 40px 15px;
    }

    .block-title {
      margin-bottom: 80px;
      max-width: 514px;
      color: #FFF;
      font-family: 'Poppins';
      font-size: 52px;
      font-style: normal;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;

      @media (max-width: 992px) {
        margin-bottom: 40px;
        font-size: 32px;
        line-height: 120%;
        /* 38.4px */
      }
    }

    .row {
      margin: 0 auto;
      max-width: 1340px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      @media (max-width: 992px) {
        flex-wrap: wrap;
      }

      @media (max-width: 768px) {
        padding: 0;
        flex-flow: column;
        align-items: center;
      }
    }

    .block-fee {
      display: flex;
      flex-flow: column;

      @media (max-width: 992px) {
        width: 50%;
      }

      @media (max-width: 768px) {
        margin-left: 0;
        margin-bottom: 56px;
        width: 100%;

        &:last-child {
          margin-bottom: 0;
        }
      }

      .number {
        color: #D3F5EC;
        font-family: 'Poppins';
        font-size: 120px;
        font-weight: 400;
        line-height: 100%; /* 120px */
        letter-spacing: -0.384px;
      }

      .percent {
        margin-left: 6px;
        color: #282929;
        font-family: 'Poppins';
        font-size: 60px;
        font-weight: 700;
        line-height: 56px;
        /* 93.333% */
        letter-spacing: -0.192px;
      }

      .per {
        color: #FFF;
        font-family: 'Poppins';
        font-size: 20px;
        font-weight: 400;
        line-height: 140%;
        /* 28px */
      }

      .percent-bl {
        display: flex;
        flex-flow: row;
        align-items: flex-end;
      }
    }

    .col-2 {
      display: flex;
      flex-flow: row;

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
