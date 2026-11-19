<template>
  <section class="section zebra-content">
    <div class="light-block block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <div class="content">
              <h2 class="title-main">
                Cryptocurrency
              </h2>
              <h4><span class="number">1</span>Access your account safely</h4>
              <p>
                Log into your Virturo platform through our secure portal, ensuring that all your personal information remains protected through state-of-the-art encryption technologies.
              </p>
              <h4><span class="number">2</span>Navigate to deposits</h4>
              <p>
                Find the deposit section within your dashboard, which is safeguarded to prevent unauthorized access, ensuring that your transaction remains private and secure.
              </p>
              <h4><span class="number">3</span>Select cryptocurrency</h4>
              <p>
                Choose from a variety of cryptocurrencies to deposit. Our platform uses advanced blockchain technology to secure your transactions, providing you with a transparent and immutable record of all deposits.
              </p>
              <h4><span class="number">4</span>Follow instructions for a secure transfer</h4>
              <p>
                Log into your Virturo platform through our secure portal, ensuring that all your personal information remains protected through state-of-the-art encryption technologies.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="box-img">
              <img
                class="img"
                src="@/static/img/deposits-and-withdrawals/mobile-img-1.png"
                alt="Cryptocurrency"
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
            <div class="box-img">
              <img
                class="img"
                src="@/static/img/deposits-and-withdrawals/mobile-img-2.png"
                alt="Trading Assets"
              >
            </div>
          </div>
          <div class="col">
            <div class="content">
              <h2 class="title-main">
                Credit Card
              </h2>
              <h4><span class="number">1</span>Secure account access</h4>
              <p>
                Log into your Virturo platform via a secure connection. Our website uses SSL encryption to protect your data and ensure your login credentials are safe.
              </p>
              <h4><span class="number">2</span>Find the deposit option</h4>
              <p>
                The deposit section is designed with your security in mind, featuring advanced fraud protection mechanisms to safeguard your financial information.
              </p>
              <h4><span class="number">3</span>Choose credit card</h4>
              <p>
                Selecting Credit Card as your deposit method activates our robust encryption protocols, which protect your card information during and after the transaction.
              </p>
              <h4><span class="number">4</span>Enter details securely</h4>
              <p>
                When you input your credit card details and confirm the transaction, our platform uses end-to-end encryption to ensure that your information is transmitted securely over the internet, safeguarding against interception or fraud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="light-block block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <div class="content">
              <h2 class="title-main">
                Wire Transfer
              </h2>
              <h4><span class="number">1</span>Access Your Account</h4>
              <p>
                Securely log into your Virturo account, assured that our platform's security measures are constantly updated to protect against unauthorized access.
              </p>
              <h4><span class="number">2</span>Navigate to deposits</h4>
              <p>
                Accessing the deposit section is not just easy but secure, with layers of security to maintain the confidentiality of your transaction details.
              </p>
              <h4><span class="number">3</span>Select Wire Transfer</h4>
              <p>
                When you choose Wire Transfer, you're provided with all the necessary bank details through a secure channel. Our system ensures that these details are encrypted and only accessible to you, the account holder.
              </p>
              <h4><span class="number">4</span>Complete Your Transfer With Assurance</h4>
              <p>
                Completing a wire transfer through your bank to Virturos safeguarded by both our platform's security measures and those of your banking institution, ensuring a double layer of protection for your funds.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="box-img">
              <img
                class="img"
                src="@/static/img/deposits-and-withdrawals/mobile-img-3.png"
                alt="Trading Assets"
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
    overflow: hidden;

    &.dark-block {
      background-color: #ECECE4;

      .box-img {
        left: 35px;
      }
    }

    &.light-block {
      background-color: #FFFFFF;

      .box-img {
        right: 35px;
      }
    }
  }

  .wrapper {
    max-width: 1340px;
    padding: 0 30px;
    margin: 0 auto;
  }

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

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .box-img {
    display: flex;
    align-items: flex-end;
    position: absolute;
    bottom: -190px;
    max-width: 360px;

    img {
      width: 100%;
      height: auto;
    }
  }
}

@media (max-width: 992px) {
  .zebra-content {
    .content {
      .title-main {
        font-size: 32px;
        line-height: 140%; /* 44.8px */
        letter-spacing: normal;
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

      &.dark-block {
        .row {
          flex-flow: column-reverse;
        }

        .col:nth-child(1) {
          justify-content: center;
        }
      }

      &.light-block {
        .col:nth-child(2) {
          justify-content: center;
        }
      }
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
    }
  }
}
</style>
