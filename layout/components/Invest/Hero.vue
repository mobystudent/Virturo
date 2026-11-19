<template>
  <div class="hero">
    <div class="wrapper">
      <h1 class="title">
        Unlock long-term growth with <br>managed digital portfolios.
      </h1>
      <p class="subtitle">
        Virturo offers investors access to a carefully curated selection of high-potential
        digital assets, blockchain innovations, and emerging technologies.
      </p>
      <button
        class="cta-button"
        @click="scrollToAssessment"
      >
        Check Eligibility
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.91602 10H16.941"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div class="stats-container">
        <img
          src="@/static/img/invest/plant.png"
          alt="Growth illustration"
        >

        <div class="roi-card return">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="48"
              viewBox="0 0 60 48"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.75 36C13.75 35.7348 13.8817 35.4804 14.1161 35.2929C14.3505 35.1054 14.6685 35 15 35H45C45.3315 35 45.6495 35.1054 45.8839 35.2929C46.1183 35.4804 46.25 35.7348 46.25 36C46.25 36.2652 46.1183 36.5196 45.8839 36.7071C45.6495 36.8946 45.3315 37 45 37H15C14.6685 37 14.3505 36.8946 14.1161 36.7071C13.8817 36.5196 13.75 36.2652 13.75 36Z"
                fill="#282929"
              />
              <path
                d="M22.5 23H17.5C16.8096 23 16.25 23.4477 16.25 24V36C16.25 36.5523 16.8096 37 17.5 37H22.5C23.1904 37 23.75 36.5523 23.75 36V24C23.75 23.4477 23.1904 23 22.5 23Z"
                fill="#282929"
              />
              <path
                d="M32.5 11H27.5C26.8096 11 26.25 11.4477 26.25 12V36C26.25 36.5523 26.8096 37 27.5 37H32.5C33.1904 37 33.75 36.5523 33.75 36V12C33.75 11.4477 33.1904 11 32.5 11Z"
                fill="#282929"
              />
              <path
                d="M42.5 17H37.5C36.8096 17 36.25 17.4477 36.25 18V36C36.25 36.5523 36.8096 37 37.5 37H42.5C43.1904 37 43.75 36.5523 43.75 36V18C43.75 17.4477 43.1904 17 42.5 17Z"
                fill="#282929"
              />
            </svg>
          </div>
          <div class="text">
            <span class="label">Avg. Annual Return*</span>
            <div class="value">
              <span class="number">15.7%</span>
            </div>
          </div>
        </div>

        <div class="roi-card asset">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M11.668 23.3332L15.4896 19.5115C15.8022 19.1991 16.226 19.0235 16.668 19.0235C17.1099 19.0235 17.5338 19.1991 17.8463 19.5115L20.4896 22.1548C20.8022 22.4673 21.226 22.6428 21.668 22.6428C22.1099 22.6428 22.5338 22.4673 22.8463 22.1548L28.3346 16.6665M28.3346 16.6665V20.8332M28.3346 16.6665H24.168"
                stroke="#282929"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M36.6673 19.9999C36.6673 27.8566 36.6673 31.7849 34.2257 34.2249C31.7873 36.6666 27.8573 36.6666 20.0007 36.6666C12.144 36.6666 8.21565 36.6666 5.77398 34.2249C3.33398 31.7866 3.33398 27.8566 3.33398 19.9999C3.33398 12.1433 3.33398 8.21492 5.77398 5.77325C8.21732 3.33325 12.144 3.33325 20.0007 3.33325C27.8573 3.33325 31.7857 3.33325 34.2257 5.77325C35.849 7.39659 36.3923 9.67825 36.5757 13.3333"
                stroke="#282929"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div class="text">
            <div class="value">
              <span class="number">$1.2B</span>
            </div>
            <span class="label">Asset Under Management</span>
          </div>
        </div>
      </div>

      <p class="description">
        *Past performance is not a reliable indicator of future results. The average annual return of 15.7% is based on net performance data over the three-year period ending 1.1.2025, after fees. Investment values may fluctuate, and investors may not get back the full amount invested.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvestHero',
  methods: {
    scrollToAssessment() {
      const element = document.getElementById('financial-assessment-banner');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;600&family=Poppins:wght@300;400&display=swap");

.hero {
  padding: 88px 0;
  background: #EDF4F2;
  @media (max-width: 992px) {
    padding: 64px 0;
  }
}

.wrapper {
  max-width: 1340px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 992px) {
    padding: 0 20px;
  }
}

.title {
  margin-bottom: 24px;
  color: #282929;
  text-align: center;
  font-family: Unbounded;
  font-size: 56px;
  font-weight: 400;
  line-height: 120%;
  @media (max-width: 992px) {
    margin-bottom: 24px;
    font-size: 32px;
  }
}

.subtitle {
  margin-bottom: 64px;
  color: rgba(40, 41, 41, 0.75);
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 120%;
  @media (max-width: 992px) {
    font-size: 16px;
  }
}

.cta-button {
  margin-bottom: 100px;
  display: flex;
  height: 48px;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #282929;
  background: #157275;
  color: #FFF;
  text-align: center;
  font-family: Unbounded;
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
  cursor: pointer;
  @media (max-width: 992px) {
    margin-bottom: 64px;
  }
}

.cta-button svg {
  width: 0;
  height: 20px;
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity 1s linear, width 0.5s ease, transform 0.5s ease;
  margin-left: 0;
}

.cta-button:hover svg {
  width: 20px;
  opacity: 1;
  transform: translateX(0);
  margin-left: 10px;
}

.stats-container {
  display: flex;
  gap: 20px;
  position: relative;
  max-width: 592px;
  @media (max-width: 768px) {
    img {
      width: 100%;
      height: auto;
    }
  }
}

.stat-box {
  display: inline-flex;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #282929;
}

.return {
  background: #D3F5EC;
}

.asset {
  background: #48C3A8;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 24px;
}

.label {
  color: #282929;
  font-family: Unbounded;
  font-size: 14px;
  font-weight: 300;
  line-height: 120%;
}

.value {
  color: #282929;
  font-family: Unbounded;
  font-size: 24px;
  font-weight: 600;
  line-height: 120%;
}

.description {
  margin: 20px auto 0;
  max-width: 592px;
  color: rgba(40, 41, 41, 0.75);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 300;
  line-height: 120%;
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

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    margin-right: 20px;

    @media (max-width: 992px) {
      margin-right: 8px;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 9px;
    @media (max-width: 992px) {
      gap: 8px;
    }

    .label {
      color:  #282929;
      font-family: Unbounded;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 120%; /* 16.8px */
      @media (max-width: 992px) {
        font-size: 10px;
      }
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
        @media (max-width: 992px) {
          font-size: 16px;
        }
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

.return {
  position: absolute;
  right: -102px;
  top: -49px;
  @media (max-width: 992px) {
    right: auto;
    top: auto;
    left: 10px;
    bottom: 10px;
  }
  &.roi-card {
    padding: 20px;
    border-radius: 20px;
    border: 1px solid  #282929;
    background: #D3F5EC;
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.10);
    @media (max-width: 992px) {
      padding: 16px;
      border-radius: 14px;
      border: 1px solid #282929;
      background: #48C3A8;
    }

    .icon {
      width: 60px;
      height: 48px;
    }

    .text {
      gap: 12px;
      padding-top: 0;
    }

    .text .value {
      position: relative;
    }
  }
}

.asset {
  align-items: flex-start;
  position: absolute;
  left: 16px;
  bottom: 16px;
  @media (max-width: 992px) {
    display: none;
  }

  .icon {
    margin-bottom: 20px;
    width: 40px;
    height: 40px;
  }

  .text .value .number {
    color: #282929;
    font-family: Unbounded;
    font-size: 24px;
    font-weight: 600;
  }

  .text {
    gap: 12px;
    padding-top: 0;
  }
}
</style>
