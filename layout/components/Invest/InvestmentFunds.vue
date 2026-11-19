<template>
  <section class="investment-funds">
    <div class="wrapper">
      <h2>Explore Our Investment Funds</h2>
      <div class="funds">
        <div class="fund full">
          <div class="col">
            <h3>Growth Funds</h3>
            <p>Ideal for high-risk investors chasing aggressive growth in early-stage blockchain, DeFi, and digital innovations.</p>
            <a
              href="/files/Grow.pdf"
              class="view-btn"
              target="_blank"
            >View KIID</a>
          </div>
          <div class="col">
            <div class="box-img">
              <img
                src="@/static/img/invest/growth-team.png"
                alt="Growth Team"
                class="lg-img"
              >
              <img
                src="@/static/img/invest/team.png"
                alt="Team"
                class="team"
              >
            </div>
          </div>
        </div>
        <div class="fund-row">
          <div class="fund income col-1">
            <h3>Income Funds</h3>
            <p>Ideal for stable, passive income via staking, dividends, and lending with lower risk and consistent returns.</p>
            <a
              href="/files/Stake.pdf"
              class="view-btn"
              target="_blank"
            >View KIID</a>
            <div class="roi-card">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="69"
                  height="69"
                  viewBox="0 0 69 69"
                  fill="none"
                >
                  <path
                    d="M20.125 40.25L26.7174 33.6576C27.2565 33.1186 27.9877 32.8159 28.75 32.8159C29.5123 32.8159 30.2435 33.1186 30.7826 33.6576L35.3424 38.2174C35.8815 38.7564 36.6127 39.0591 37.375 39.0591C38.1373 39.0591 38.8685 38.7564 39.4076 38.2174L48.875 28.75M48.875 28.75V35.9375M48.875 28.75H41.6875"
                    stroke="#282929"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M63.25 34.5C63.25 48.0528 63.25 54.8291 59.0381 59.0381C54.832 63.25 48.0528 63.25 34.5 63.25C20.9473 63.25 14.1709 63.25 9.959 59.0381C5.75 54.832 5.75 48.0528 5.75 34.5C5.75 20.9473 5.75 14.1709 9.959 9.959C14.1738 5.75 20.9473 5.75 34.5 5.75C48.0528 5.75 54.8291 5.75 59.0381 9.959C61.8384 12.7593 62.7756 16.6951 63.0919 23"
                    stroke="#282929"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div class="text">
                <span class="label">Low Volatility</span>
                <div class="value">
                  <span class="number">0.75</span>
                  <span class="unit">Beta</span>
                </div>
              </div>
            </div>
          </div>
          <div class="fund balanced col-2">
            <h3>Balanced Funds</h3>
            <p>Ideal for balanced investors, blending growth and income for moderate risk and steady returns.</p>
            <a
              href="/files/Balance.pdf"
              class="view-btn"
              target="_blank"
            >View KIID</a>

            <div class="roi-card">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <path
                    d="M32.084 5.8335C20.2569 5.85391 14.0648 6.14558 10.104 10.1035C5.83398 14.3735 5.83398 21.2481 5.83398 34.9972C5.83398 48.7464 5.83398 55.621 10.104 59.8939C14.3798 64.1639 21.2515 64.1639 35.0007 64.1639C48.7498 64.1639 55.6244 64.1639 59.8944 59.8939C63.8552 55.936 64.144 49.7439 64.1644 37.9139"
                    stroke="#282929"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M37.9167 32.0835L64.1667 5.8335M64.1667 5.8335H48.58M64.1667 5.8335V21.4202M61.25 8.75016L35 35.0002M35 35.0002H46.6667M35 35.0002V23.3335"
                    stroke="#282929"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="text">
                <span class="label">Sharpe Ratio</span>
                <div class="value">
                  <span class="number">1.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.investment-funds {
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
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 48px */
    @media (max-width: 992px) {
      margin-bottom: 48px;
      font-size: 24px;
      text-align: center;
    }
  }

  .description {
    display: none;
    @media (max-width: 992px) {
      display: block;
      margin-bottom: 48px;
      color: rgba(40, 41, 41, 0.75);
      font-family: Poppins;
      font-size: 16px;
      font-weight: 400;
      line-height: 120%; /* 19.2px */
      text-align: center;
    }

  }

  .funds {
    .fund {
      background: white;
      padding: 48px;
      margin-bottom: 16px;
      @media (max-width: 992px) {
        padding: 24px;
      }

      @media (max-width: 768px) {
        border-radius: 14px 48px 14px 14px;
      }

      @media (max-width: 350px) {
        padding: 16px;
      }

      h3 {
        margin-bottom: 16px;
        color: #282929;
        font-family: Unbounded;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 38.4px */
        @media (max-width: 992px) {
          font-size: 20px;
        }
      }

      p {
        color:  rgba(40, 41, 41, 0.75);
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
      }

      .view-btn {
        margin-bottom: 52px;
        display: inline-block;
        color: #282929;
        text-align: center;
        font-family: Unbounded;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
        text-decoration: underline;
        transition: opacity 0.5s ease;
        @media (max-width: 992px) {
          margin-bottom: 0;
        }

        &:hover {
          opacity: 0.75;
        }
      }

      .box-img {
        position: relative;
        display: inline-block;
        font-size: 0;

        @media (max-width: 768px) {
          display: block;
        }
      }

      .roi {
        font-size: 24px;
        color: #00A693;
        margin: 16px 0;
      }

      &.full {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        gap: 32px;
        border-radius: 14px 48px 14px 14px;
        border: 1px solid #157275;
        background: #FFF;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);

        @media (max-width: 992px) {
          flex-flow: column;
        }

        .col:nth-child(2) {
          @media (max-width: 992px) {
            text-align: center;
          }
        }

        img.lg-img {
          height: 304px;
          @media (max-width: 768px) {
            width: 100%;
            height: auto;
          }
        }

        img.team {
          width: 204px;
          height: auto;
          position: absolute;
          left: -89px;
          bottom: -24px;
          @media (max-width: 992px) {
            left: auto;
            right: 6px;
            bottom: 6px;
          }
        }

        p {
          max-width: 530px;
        }
      }

      &.col-1 {
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start;
        border-radius: 20px 48px 20px 20px;
        border: 1px solid  #157275;
        background: #FFF;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
      }

      &.col-2 {
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start;
        border-radius: 48px 20px 20px 20px;
        border: 1px solid #157275;
        background: #FFF;
        box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
      }
    }

    .fund-row {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      gap: 16px;
      @media (max-width: 768px) {
        flex-flow: column;
        gap: 0;
      }

      .fund {
        width: 50%;
        @media (max-width: 768px) {
          width: 100%;
          border-radius: 14px 48px 14px 14px;
        }
      }

      .view-btn {
        @media (max-width: 992px) {
          margin-bottom: 94px;
        }
      }
    }

    .view-btn {
      display: inline-block;
      color: #00A693;
      text-decoration: none;
      margin-top: 16px;
      font-weight: 500;
    }
  }
}

.roi-card {
  display: flex;
  align-items: center;
  align-self: flex-end;
  padding: 24px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 1px solid #282929;
  background: #48C3A8;
  width: fit-content;
  @media (max-width: 768px) {
    align-self: flex-start;
    width: 100%;
  }

  @media (max-width: 350px) {
    padding: 9px;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    margin-right: 20px;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 9px;

    .label {
      color:  #282929;
      font-family: Unbounded;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 120%; /* 16.8px */
    }

    .value {
      display: flex;
      align-items: baseline;
      line-height: 32px;

      .number {
        margin-right: 8px;
        color: #282929;
        font-family: Unbounded;
        font-size: 32px;
        font-weight: 600;
        line-height: 120%; /* 38.4px */
      }

      .unit {
        color: #282929;
        font-family: Unbounded;
        font-size: 12px;
        font-weight: 300;
        line-height: 32px;
      }
    }
  }
}

.col-2 {
  .roi-card {
    border-radius: 20px;
    border: 1px solid  #282929;
    background: #D3F5EC;
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.10);

    .text {
      gap: 14px;
      padding-top: 9px;
    }

    .text .label {
      font-size: 16px;
    }

    .text .value {
      position: relative;
      top: -5px;
    }
  }
}
</style>
