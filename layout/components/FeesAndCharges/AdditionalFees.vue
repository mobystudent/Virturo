<template>
  <section class="section additional-fees">
    <div class="wrapper main-wrapper">
      <div class="main-block">
        <div class="col">
          <h2 class="title-main">
            Additional Fees
          </h2>
          <div class="description">
            The fees below could be applied to your account, depending on your trading activity:
          </div>
        </div>
        <div class="col">
          <div class="content">
            <h4>Overnight Funding</h4>
            <p>
              An overnight funding amount is either added to or subtracted from your account when holding a position after a certain time. Rates vary based on market conditions.
            </p>

            <h4>Upgraded Services</h4>
            <p>
              A unique order type used to help you manage risks by guaranteeing the stop loss level. If you choose to use this feature, please note that as it guarantees that your position closes at a specific requested rate, it is therefore subject to an extra fee. For in-depth market analysis, we offer comprehensive, real-time data access at $15/month. Additionally, you can upgrade to our advanced platform tools for $20/month, which includes sophisticated tools and customizable options to refine your trading strategy.
            </p>

            <h4>Maintenance and Inactivity Fees</h4>
            <p>
              A fee of up to USD 25 per month will be charged if no trades are executed in your trading account for a period of at least three months. This fee will be applied once a month from that point forward, as long as no trades are made in the account. Additionally, a maintenance fee of USD 50 per month will be imposed after six months of trading inactivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.additional-fees {
  padding: 60px 0;
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

.main-wrapper {
  display: flex;
  flex-flow: wrap;
}

.main-block {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1150px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-flow: column;
    gap: 0;
  }
}

.col {
  width: 100%;

  &:nth-child(1) {
    max-width: 416px;
  }

  &:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    max-width: 740px;
  }

  @media (max-width: 768px) {
    width: 100%;

    &:first-child {
      margin-bottom: 40px;
    }

    &:nth-child(2) {
      justify-content: flex-start;
    }
  }

  .title-main {
    margin-bottom: 32px;
    max-width: 416px;
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

  .description {
    font: 16px/140% 'Poppins';
    color: #352F44;
    max-width: 416px;

    @media (max-width: 768px) {
      max-width: none;
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
      margin-bottom: 32px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
      @media (max-width: 768px) {
        margin-bottom: 40px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

@media (max-width: 1200px) {}

@media (max-width: 992px) {}

@media (max-width: 768px) {}
</style>
