<template>
  <section class="contact-media-team">
    <div class="wrapper">
      <div class="intro">
        <h2 class="title">
          Global perspective<br>on financial fraud
        </h2>
        <div class="description">
          <h4>
            UK Statistics
          </h4>
          <p>
            In 2022, more than £1.2 billion was stolen through fraud in the UK, highlighting the significant challenge of financial crime. Notably, a large portion of Authorised Push Payment (APP) fraud cases began online.
          </p>

          <h4>
            Global Trends
          </h4>
          <p>
            Financial fraud is a global concern, with online platforms being a common origin point for fraudulent activities. The rise in digital banking and online transactions has led to an increase in sophisticated cybercrime tactics.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-media-team {
  padding: 60px 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  .wrapper {
    max-width: 1340px;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (max-width: 1024px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }

  .intro {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 1024px) {
      flex-flow: column;
      gap: 40px;
    }
  }

  .title {
    max-width: 524px;
    width: 100%;
    color: #352F44;
    font-family: "Poppins";
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 140%; /* 44.8px */

      br {
        display: none;
      }
    }
  }

  .description {
    max-width: 631px;
    width: 100%;
    color: #352F44;
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */

    h4 {
      margin-bottom: 12px;
      color:#352F44;
      font-size: 20px;
      font-weight: 500;
      line-height: 140%; /* 28px */

      @media (max-width: 768px) {
        margin-bottom: 16px;
      }
    }

    p {
      margin-bottom: 32px;

      @media (max-width: 768px) {
        margin-bottom: 40px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      color: #352F44;
      text-decoration-line: underline;

      &:hover {
        color: #352F44;
        text-decoration: none;
      }
    }

    .attention {
      color: #157275;
      font-size: 20px;
      font-weight: 500;
      line-height: 140%; /* 28px */
    }
  }
}
</style>
