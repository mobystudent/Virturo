<template>
  <section class="top">
    <div class="top-inner">
      <div class="row">
        <div class="col">
          <h1 class="title">
            Careers
          </h1>
        </div>
        <div class="col">
          <p>Discover exciting career opportunities at Virturo and join our talented and innovative team. Explore our current openings below and find the perfect role to showcase your skills and passion for investment and digital assets.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.top {
  background-color: #D3F5EC;
  position: relative;

  .top-inner {
    max-width: 1340px;
    padding: 100px 30px;
    // box-sizing: content-box;
    margin: 0 auto;

    .row {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
    }

    .col {
      max-width: 540px;
    }

    h1 {
      color: #352F44;
      font-family: 'Poppins';
      font-size: 52px;
      font-style: normal;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;
      z-index: 1;
    }

    p {
      max-width: 524px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }
  }

  .title {
    font-weight: 500;
    font-size: 52px;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    color: #ffffff;
  }
}

@media (max-width: 1400px) {
  .top .top-inner {
    padding: 80px 20px;
  }
}

@media (max-width: 1024px) {
  .top {
    background-position: center;

    .top-inner h1,
    .title {
      font-size: 32px;
      line-height: 140%; /* 44.8px */
      margin-bottom: 40px;
    }
  }
}

@media (max-width: 998px) {
  .top .top-inner .row {
    flex-flow: column;
    // padding: 0 20px;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {

  .top {
    .top-inner {
      padding: 60px 16px 60px;

      h1 {
        margin-bottom: 40px;
        font-size: 32px;
        line-height: 150%; /* 24px */
      }
    }
  }

  .top .top-inner .row {
    padding: 0;
  }
}
</style>
