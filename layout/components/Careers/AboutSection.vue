<template>
  <section class="about-section">
    <div class="wrapper">
      <div class="row">
        <div class="col">
          <h1 class="title">
            About the Company
          </h1>
        </div>
        <div class="col">
          <p>
            Welcome to Virturo, a dynamic and innovative online trading firm based in the heart of London. At Virturo, we believe in fostering talent, encouraging growth, and building a collaborative environment where individuals thrive. If you're passionate about finance, technology, and making a meaningful impact, explore the exciting career opportunities that await you.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-section {
  position: relative;

  .wrapper {
    max-width: 1340px;
    padding: 60px 30px;
    margin: 0 auto;

    @media (max-width: 992px) {
      padding: 40px 20px;
    }

    @media (max-width: 768px) {
      padding: 40px 16px;
    }

    .row {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: flex-start;
      @media (max-width: 1200px) {
        flex-flow: column;
      }
    }

    .col {
      // max-width: 540px;

      &:nth-child(2) {
        max-width: 740px;
      }
    }

    h1 {
      max-width: 300px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 52px;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;
      z-index: 1;

      @media (max-width: 1200px) {
        margin-bottom: 24px;
        max-width: none;
      }

      @media (max-width: 768px) {
        margin-bottom: 24px;
        max-width: none;
        font-size: 32px;
        line-height: 140%; /* 44.8px */
      }
    }

    p {
      color: #352F44;
      font-family: 'Poppins';
      font-size: 20px;
      font-weight: 400;
      line-height: 140%; /* 28px */
      @media (max-width: 768px) {
        font-size: 15px;
        line-height: 150%; /* 22.5px */
      }
    }
  }
}
</style>
