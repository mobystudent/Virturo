<template>
  <section class="process">
    <div class="wrapper">
      <h2>How does the process Work?</h2>
      <div class="steps">
        <div class="step">
          <div class="icon">
            <img
              src="@/static/img/invest/process-icon-1.svg"
              alt="process 1"
            >
          </div>
          <h3>Complete the Financial Assessment</h3>
          <p>Provide insights into your investment preferences and risk appetite.</p>
        </div>
        <div class="step">
          <div class="icon">
            <img
              src="@/static/img/invest/process-icon-2.svg"
              alt="process 2"
            >
          </div>
          <h3>Get Your Portfolio Recommendation</h3>
          <p>Based on your responses, we’ll suggest the most suitable fund type.</p>
        </div>
        <div class="step">
          <div class="icon">
            <img
              src="@/static/img/invest/process-icon-3.svg"
              alt="process 3"
            >
          </div>
          <h3>Invest & Track Your Growth</h3>
          <p>Start investing with Virturo and monitor your portfolio in real time.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.process {
  padding: 128px 0;
  background-color: #ECECE4;
  @media (max-width: 992px) {
    padding: 64px 0;
  }

  .wrapper {
    max-width: 1260px;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    @media (max-width: 992px) {
      padding: 0 20px;
    }
  }

  h2 {
    margin-bottom: 88px;
    color: #282929;
    font-family: Unbounded;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 48px */
    text-align: center;
    @media (max-width: 992px) {
      margin-bottom: 48px;
      font-size: 24px;
    }
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    @media (max-width: 992px) {
      display: flex;
      flex-flow: row wrap;
    }

    .step {
      border-radius: 24px;
      border: 1px solid #48C3A8;
      background: rgba(255, 255, 255, 0.50);
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
      text-align: center;
      padding: 24px;
      @media (max-width: 992px) {
        width: calc(50% - 12px);
        display: flex;
        flex-flow: column;
        justify-content: center;
      }

      @media (max-width: 768px) {
        width: 100%;
      }

      .icon {
        margin-bottom: 48px;
        height: 80px;
      }

      h3 {
        margin-bottom: 12px;
        max-width: 300px;
        color: #282929;
        font-family: Unbounded;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 24px */
        text-align: center;
        @media (max-width: 992px) {
          margin: 0 auto 12px;
          font-size: 18px;
        }
      }

      p {
        color: rgba(40, 41, 41, 0.75);
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
        text-align: center;
      }
    }
  }
}
</style>
