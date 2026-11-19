<template>
  <section class="top">
    <div class="top-inner">
      <div class="row">
        <div class="col">
          <h1 class="title">
            Trading Assets
          </h1>
        </div>
        <div class="col">
          <p>
            A multi asset trading platform that allows you to invest safely in stocks, crypto, commodities and more.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.top {
  position: relative;
  background-color: #D3F5EC;

  .top-inner {
    max-width: 1340px;
    padding: 100px 30px;
    margin: 0 auto;

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-flow: row;
      gap: 40px;
    }

    .col {
      max-width: 535px;
      flex-shrink: 0;

      &:last-child {
        flex-shrink: 1;
      }
    }

    .title {
      color: #352F44;
      font-family: 'Poppins';
      font-size: 52px;
      font-style: normal;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;
    }

    p {
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
    }
  }
}

@media (max-width: 992px) {
  .top .top-inner {
    .title {
      font-size: 32px;
      line-height: 140%; /* 44.8px */
      letter-spacing: normal;
    }
  }
}

@media (max-width: 768px) {
  .top {
    .top-inner {
      padding: 60px 16px 108px;

      .row {
        flex-flow: column;
        align-items: flex-start;
      }
    }
  }
}
</style>
