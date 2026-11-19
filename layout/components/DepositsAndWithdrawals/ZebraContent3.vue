<template>
  <section class="section zebra-content">
    <div class="block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <h2 class="title-main">
              Secure notification <br>of processed <br>withdrawals
            </h2>
            <div class="content">
              <h4>Immediate Crypto Confirmation</h4>
              <p>Leveraging the security of blockchain technology for immediate and secure confirmations.</p>
              <h4>Email Confirmation for Other Methods</h4>
              <p>Securely sent to your registered email, ensuring that you are informed every step of the way through a secure and verifiable communication channel.</p>
            </div>
          </div>
          <div class="col">
            <div class="box-img">
              <img
                class="img"
                src="@/static/img/deposits-and-withdrawals/laptop-img.png"
                alt="Withdraw"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.zebra-content {
  .block {
    padding: 60px 0;
    background-color: #FFFFFF;
  }

  .wrapper {
    max-width: 1340px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .row {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
  }

  .col {
    width: 50%;
    max-width: 632px;

    &:nth-child(2) {
      display: flex;
      justify-content: flex-end;
    }
  }

  .title-main {
    color: #352F44;
    font-family: 'Poppins';
    font-size: 52px;
    font-style: normal;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    margin-bottom: 40px;
  }

  .content {
    h4 {
      color: #352F44;
      font-family: 'Poppins';
      font-size: 24px;
      font-weight: 500;
      line-height: 132%; /* 31.68px */
      margin-bottom: 16px;
    }

    p {
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
      margin-bottom: 40px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .box-img {
    display: flex;
    align-items: flex-end;

    img {
      width: 560px;
      max-width: 100%;
    }
  }
}

@media (max-width: 992px) {
  .zebra-content {
    .title-main {
      font-size: 32px;
      line-height: 140%; /* 44.8px */
      letter-spacing: normal;
    }

    .content {
      h4 {
        font-size: 20px;
        line-height: 140%; /* 28px */
      }
    }
  }
}

@media (max-width: 768px) {
  .zebra-content {
    .block {
      padding: 40px 0;
    }

    .wrapper {
      padding: 0 16px;
    }

    .row {
      flex-flow: column;
      gap: 60px
    }

    .col {
      width: 100%;
      max-width: 100%;

      &:nth-child(2) {
        justify-content: center;
      }
    }
  }
}
</style>
