<template>
  <section class="section protect-personal-data">
    <div class="wrapper">
      <div class="title-wrap">
        <h2 class="title-main">
          Protect your personal data
        </h2>
      </div>
    </div>

    <div class="content-wrapper">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <div class="box-content">
              <h3 class="title">
                Verified Virturo representatives will
              </h3>
              <div class="content">
                <ul>
                  <li>Only contact you through appropriate channels, such as the email address associated with your account</li>

                  <li>Provide Assistance: Offer help with platform-related queries, technical support, or guidance regarding your account and our services.</li>

                  <li>Representatives will communicate in a professional manner, using official Virturomail addresses or through verified channels on our platform.</li>

                  <li>They may verify your identity using standard security questions but only during a support call or interaction initiated by you.</li>

                  <li>Always respect your privacy and confidentiality, adhering to data protection laws and Virturo's privacy policy.</li>

                  <li>Keep you informed about new services, updates, and legitimate opportunities related to Virturo.com.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="box-content">
              <h3 class="title">
                Verified Virturo representatives <span>will not</span>
              </h3>
              <div class="content">
                <ul>
                  <li>Ask you to move your money to a so-called “safe account” or any other place</li>

                  <li>Virturo representatives will not contact you via personal emails or social media accounts.</li>

                  <li>Ask you for your account password or Two-Factor Authentication (2FA) code</li>

                  <li>Never ask for your password or security credentials. Remember, sharing your password compromises the security of your account.</li>

                  <li>We will never pressure you to make quick decisions or use high-pressure tactics. Our communications are always focused on providing clear and helpful information.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.protect-personal-data {
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 1340px;
    height: 1px;
    background-color: #D3F5EC;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 992px) {
      display: none;
    }
  }

  .content-wrapper {
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 50%;
      height: 100%;
      background-color: #D3F5EC;
      position: absolute;
      left: 0;
      top: 0;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .wrapper {
    max-width: 1340px;
    box-sizing: border-box;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    &::before {
      content: '';
      display: none;
      width: calc(100% - 60px);
      height: 1px;
      background-color: #D3F5EC;
      position: absolute;
      top: 0;
      left: 30px;

      @media (max-width: 992px) {
        display: block;
      }

      @media (max-width: 768px) {
        width: calc(100% - 30px);
        left: 15px;
      }
    }

    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }
}

.title-wrap {
  display: flex;
  flex-flow: column;
  align-items: center;

  .title-main {
    margin-top: 60px;
    margin-bottom: 55px;
    font: 500 40px/112% 'Poppins';
    color: #352F44;

    @media (max-width: 992px) {
      font-size: 38px;
    }

    @media (max-width: 768px) {
      margin-top: 40px;
      max-width: none;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }
}

.row {
  position: relative;
  display: flex;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 992px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-flow: column;
    gap: 0;
  }
}

.box-content {
  // max-width: 430px;

  @media (max-width: 768px) {
    // max-width: none;
    z-index: 1;
  }
}

.col {
  padding: 60px 0;
  width: 50%;
  display: flex;
  flex-flow: column;
  position: relative;

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  &:first-child {
    .content ul li::before {
      background: url("@/static/img/account-security/icon-yes.png") no-repeat center center;
    }

    &::before {
      content: '';
      display: none;
      width: calc(100% + 32px);
      height: 100%;
      background-color: #D3F5EC;
      position: absolute;
      top: 0;
      left: -16px;

      @media (max-width: 768px) {
        display: block;
      }
    }
  }

  &:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    padding-left: 83px;

    .content ul li::before {
      background: url("@/static/img/account-security/icon-not.svg") no-repeat center center;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    &:nth-child(2) {
      padding-left: 0;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .title {
    margin-bottom: 40px;
    font: 500 24px/132% 'Poppins';
    letter-spacing: -0.102px;
    color: #282929;

    span {
      color: #D95353;
    }

    @media (max-width: 768px) {
      max-width: none;
      font-size: 24px;
      line-height: 132%; /* 31.68px */
    }
  }

  .content {
    max-width: 514px;

    @media (max-width: 768px) {
      max-width: none;
      z-index: 1;
    }

    h4 {
      margin-bottom: 16px;
      color: #282929;
      font-family: 'Poppins';
      font-size: 20px;
      font-weight: 500;
      line-height: 140%;
      /* 28px */
    }

    p {
      margin-bottom: 32px;
      color: #282929;
      font-family: 'Poppins';
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;

      /* 24px */
      &:last-child {
        margin-bottom: 0;
      }
    }

    ul {
      padding-left: 33px;
      display: flex;
      flex-flow: column;
      gap: 20px;
      list-style: none;
      @media (max-width: 768px) {
        gap: 16px;
      }

      li {
        color: #282929;
        font-size: 16px;
        font-family: 'Poppins';
        font-weight: 400;
        line-height: 140%; /* 22.4px */
        position: relative;

        @media (max-width: 768px) {
          font-size: 15px;
          line-height: 150%; /* 22.5px */
        }

        &::before {
          content: '';
          display: block;
          width: 18px;
          height: 18px;
          position: absolute;
          left: -33px;
          top: 3px;
        }
      }
    }
  }
}

@media (max-width: 1200px) {}

@media (max-width: 992px) {}

@media (max-width: 768px) {}
</style>
