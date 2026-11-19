<template>
  <section class="top">
    <div class="top-inner">
      <div class="row">
        <div class="col">
          <h1 class="title">
            Guide to Managing Your Virturo Account: Deposits and Withdrawals
          </h1>
        </div>
        <div class="col">
          <p>
            Welcome to your comprehensive guide for managing funds on the Virturo platform. We are dedicated to offering a seamless, transparent, and secure experience for all your financial transactions. In the sections below, you'll find step-by-step instructions for depositing and withdrawing funds through various methods, with a focus on the robust safety and security measures we have implemented to safeguard your investments.
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
      flex-flow: row;
      justify-content: space-between;
    }

    .col {
      max-width: 540px;
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
      max-width: 524px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }
  }
}

@media (max-width: 1400px) {
  .top .top-inner {
    padding: 80px 20px;
  }
}

@media (max-width: 1024px) {
  .top {
    .top-inner {
      .title {
        font-size: 32px;
        line-height: 140%; /* 44.8px */
        letter-spacing: normal;
        margin-bottom: 40px;
      }
    }
  }
}

@media (max-width: 992px) {
  .top .top-inner .row {
    flex-flow: column;
    align-items: flex-start;

    .col,
    p {
      max-width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .top {
    .top-inner {
      padding: 60px 16px 60px;
    }
  }
}
</style>
