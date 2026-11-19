<template>
  <section class="faq">
    <div class="wrapper">
      <h2>General Questions</h2>
      <div class="row">
        <div class="col">
          <div class="questions">
            <details class="question">
              <summary>
                How can I invest in the Fund?
                <img
                  class="icon plus"
                  src="@/static/img/invest/plus.svg"
                  alt="Expand"
                >
                <img
                  class="icon minus"
                  src="@/static/img/invest/minus.svg"
                  alt="Collapse"
                >
              </summary>
              <p>
                Investment is by invitation only. To get started, complete the Check Eligibility form.
                If approved, you will be invited for a financial assessment, after which you may receive an offer to open an account.
              </p>
            </details>
            <details class="question">
              <summary>
                What is the minimum investment amount?
                <img
                  class="icon plus"
                  src="@/static/img/invest/plus.svg"
                  alt="Expand"
                >
                <img
                  class="icon minus"
                  src="@/static/img/invest/minus.svg"
                  alt="Collapse"
                >
              </summary>
              <p>The minimum initial investment is $250,000 USD.</p>
            </details>
            <details class="question">
              <summary>
                How long does it take to process my investment?
                <img
                  class="icon plus"
                  src="@/static/img/invest/plus.svg"
                  alt="Expand"
                >
                <img
                  class="icon minus"
                  src="@/static/img/invest/minus.svg"
                  alt="Collapse"
                >
              </summary>
              <p>Once your account is approved and funded, investment processing takes up to 7 business days.</p>
            </details>
          </div>
        </div>
        <div class="col">
          <div class="questions">
            <details class="question">
              <summary>
                How can I withdraw my funds?
                <img
                  class="icon plus"
                  src="@/static/img/invest/plus.svg"
                  alt="Expand"
                >
                <img
                  class="icon minus"
                  src="@/static/img/invest/minus.svg"
                  alt="Collapse"
                >
              </summary>
              <p>Withdrawals are processed securely with no restrictive limits—only ensuring available balance.</p>
            </details>
            <details class="question">
              <summary>
                How often can I withdraw funds?
                <img
                  class="icon plus"
                  src="@/static/img/invest/plus.svg"
                  alt="Expand"
                >
                <img
                  class="icon minus"
                  src="@/static/img/invest/minus.svg"
                  alt="Collapse"
                >
              </summary>
              <p>After the cooldown period, withdrawals are available monthly, subject to fund liquidity conditions.</p>
            </details>
            <details class="question">
              <summary>
                Is there a lock-up period?
                <img
                  class="icon plus"
                  src="@/static/img/invest/plus.svg"
                  alt="Expand"
                >
                <img
                  class="icon minus"
                  src="@/static/img/invest/minus.svg"
                  alt="Collapse"
                >
              </summary>
              <p>Yes. There is a 6-month cooldown period after your initial funding before any withdrawals can be requested.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.faq {
  padding: 128px 0;
  background-color: #EDF4F2;
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
    font-weight: 400;
    line-height: 120%; /* 48px */
    text-align: center;
    @media (max-width: 992px) {
      margin-bottom: 48px;
      font-size: 24px;
    }
  }

  .row {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    @media (max-width: 992px) {
      gap: 0;
    }

    .col {
      width: calc(50% - 6px);
      @media (max-width: 992px) {
        width: 100%;
      }
    }
  }

  .questions {
    width: 100%;

    .question {
      margin-bottom: 16px;
      border-radius: 14px;
      border: 1px solid #282929;
      background: #D3F5EC;
      overflow: hidden;
      @media (max-width: 992px) {
        margin-bottom: 12px;
      }

      summary {
        padding: 20px;
        cursor: pointer;
        position: relative;
        color: #282929;
        font-family: Unbounded;
        font-size: 16px;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
        list-style: none;
        @media (max-width: 1150px) {
          padding-right: 40px;
          display: flex;
          align-items: center;
          min-height: 78px;
        }

        @media (max-width: 992px) {
          display: block;
          padding-right: 40px;
          width: 100%;
          min-height: auto;
        }

        .icon {
          position: absolute;
          right: 20px;
          width: 20px;
          height: 20px;
          top: 50%;
          transform: translateY(-50%);
          transition: opacity 0.3s ease;
        }

        .plus {
          opacity: 1;
        }

        .minus {
          opacity: 0;
        }
      }

      &[open] {
        .plus {
          opacity: 0;
        }

        .minus {
          opacity: 1;
        }
      }

      p {
        padding: 24px 20px;
        min-height: 125px;
        background: #f9f9f9;
        margin: 0;
        color: rgba(40, 41, 41, 0.75);
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
        @media (max-width: 992px) {
          min-height: auto;
        }
      }
    }
  }
}

.question p {
  transition: height 0.3s ease;
}

</style>
