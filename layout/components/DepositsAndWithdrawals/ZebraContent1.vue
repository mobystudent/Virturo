<template>
  <section class="section zebra-content">
    <div class="light-block block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <div class="content">
              <h2 class="title-main">
                Step-by-Step <br>secure withdrawal process
              </h2>
              <h4><span class="number">1</span>Securely access your account</h4>
              <p>
                Securely log into your Virturo account, assured that our platform's security measures are constantly updated to protect against unauthorized access.
              </p>
              <h4><span class="number">2</span>Navigate to withdrawals</h4>
              <p>
                Find the deposit section within your dashboard, which is safeguarded to prevent unauthorized access, ensuring that your transaction remains private and secure.
              </p>
              <h4><span class="number">3</span>Check your balance</h4>
              <p>
                Our platform ensures that your available balance is accurately displayed, taking into account the highest security standards to protect your account information.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="box-img">
              <img
                class="img"
                src="@/static/img/deposits-and-withdrawals/mobile-img-4.png"
                alt="Trading Assets"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dark-block block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <div class="content">
              <h2 class="title-main custom-size">
                Withdrawal Requirements
              </h2>
              <div class="content-body">
                <h4>Minimum Amount</h4>
                <p>
                  Setting a minimum withdrawal amount ensures the economic efficiency and security of transactions, reducing the potential for micro-transaction fraud.
                </p>
                <h4>Withdrawable funds verification</h4>
                <p>
                  Our system securely verifies your available funds for withdrawal, ensuring that only legitimately available funds are withdrawn, protecting against account manipulation.
                </p>
                <h4>Account verification for enhanced security</h4>
                <p>
                  Full account verification is a critical security step, ensuring that withdrawals are made by the legitimate account holder. This process is protected by secure document upload protocols.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="content">
              <h2 class="title-main custom-size">
                Withdrawal Processing
              </h2>
              <div class="content-body">
                <h4>Crypto wallet</h4>
                <p>
                  Immediate transfers that leverage blockchain's inherent security, providing a secure and verifiable transaction record.
                </p>
                <h4>Bank transfer</h4>
                <p>
                  Every transaction is securely processed in partnership with reputable banking institutions, guaranteeing the safety of your funds. The entire transfer process may take up to 7 business days.
                </p>
              </div>
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
    overflow: hidden;

    &.dark-block {
      background-color: #ECECE4;

      .row {
        display: flex;
        justify-content: flex-start;
        gap: 124px;
        width: 100%;
      }

      .col {
        width: 50%;
        max-width: 525px;
        display: flex;
      }
    }

    &.light-block {
      background-color: #FFFFFF;
      padding: 60px 0 80px;

      .row {
        display: flex;
        justify-content: space-between;
        gap: 5px;
        width: 100%;
      }

      .col {
        position: relative;
        width: 50%;
        max-width: 632px;
        display: flex;

        &:nth-child(2) {
          justify-content: flex-end;
        }
      }
    }
  }

  .wrapper {
    max-width: 1340px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .content {
    .title-main {
      color: #352F44;
      font-family: 'Poppins';
      font-size: 52px;
      font-style: normal;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;
      margin-bottom: 40px;

      &.custom-size {
        font-size: 40px;
        letter-spacing: normal;
      }
    }

    h4 {
      display: flex;
      align-items: flex-start;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 24px;
      font-weight: 500;
      line-height: 132%; /* 31.68px */
      margin-bottom: 16px;

      .number {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 28px;
        height: 28px;
        background-color: #D3F5EC;
        border-radius: 50%;
        color: #352F44;
        font-family: 'Poppins';
        font-size: 16px;
        font-weight: 500;
        line-height: 140%; /* 22.4px */
        margin-right: 16px;
      }
    }

    p {
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
      margin-bottom: 32px;
    }

    .content-body {
      p {
        margin-bottom: 40px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  .box-img {
    display: flex;
    align-items: flex-end;
    position: absolute;
    bottom: -215px;
    right: 35px;
    max-width: 430px;

    img {
      width: 100%;
      height: auto;
    }
  }
}

@media (max-width: 992px) {
  .zebra-content {
    .block {
      &.dark-block {
        .row {
          gap: 60px;
        }
      }
    }

    .content {
      .title-main {
        font-size: 32px;
        line-height: 140%; /* 44.8px */
        letter-spacing: normal;

        &.custom-size {
          font-size: 32px;
          line-height: 140%; /* 44.8px */
        }
      }

      h4 {
        font-size: 20px;
        line-height: 140%; /* 28px */
      }
    }

    .box-img {
      position: static;
      right: 0px;
      max-width: 343px;
    }
  }
}

@media (max-width: 768px) {
  .zebra-content {
    .block {
      padding: 40px 0;

      &.light-block {
        padding: 40px 0;

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

      &.dark-block {
        .row {
          flex-flow: column;
        }

        .col {
          width: 100%;
          max-width: 100%;
        }
      }
    }

    .wrapper {
      padding: 0 16px;
    }

    .content {
      p:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
