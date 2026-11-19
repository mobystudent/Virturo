<template>
  <section class="section zebra-content">
    <div class="dark-block block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <h2 class="title-main">
              Recognizing phishing<br> attempts
            </h2>
          </div>
          <div class="col">
            <div class="content">
              <h4>Unexpected requests</h4>
              <p>Be cautious of unsolicited requests for sensitive information.</p>

              <h4>Check email addresses</h4>
              <p>Fraudulent emails might mimic legitimate addresses with minor discrepancies.</p>

              <h4>Spelling/Grammar mistakes</h4>
              <p>Professional organizations usually don’t have significant errors in their communications.</p>

              <h4>Be wary of links and attachments</h4>
              <p>Avoid clicking on links or downloading attachments from unverified sources.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="light-block block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <h2 class="title-main">
              Protecting yourself<br> from phishing
            </h2>
          </div>
          <div class="col">
            <div class="content">
              <h4>Verify the source</h4>
              <p>Contact the organization directly through verified means if in doubt.</p>

              <h4>Update security software</h4>
              <p>Use the latest security software, browsers, and operating systems.</p>

              <h4>Do not share sensitive information</h4>
              <p>Legitimate organizations won’t ask for passwords or PINs via email.</p>

              <h4>Stay informed</h4>
              <p>Keep abreast of the latest phishing techniques.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dark-block block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <h2 class="title-main">
              Virtura’s commitment<br> to your safety
            </h2>
          </div>
          <div class="col">
            <div class="content">
              <h4>Official contact policy</h4>
              <p>We will never contact you via a third party regarding your account. Only official Virturo representatives will reach out to you directly.</p>

              <h4>Guard your information</h4>
              <p>Never give out personal details, account information, or security credentials to anyone contacting you through various forms of media.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="light-block block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <h2 class="title-main">
              What to do if you<br> encounter phishing
            </h2>
          </div>
          <div class="col">
            <div class="content">
              <h4>Do not respond or click links</h4>
              <p>If you receive a suspicious email, do not engage.</p>

              <h4>Report suspected phishing</h4>
              <p>Forward the email to the official address of the impersonated organization.</p>

              <h4>Change credentials if compromised</h4>
              <p>Professional organizations usually don’t have significant errors in their communications.</p>

              <h4>Seek support</h4>
              <p>Contact Virturo.com’s support team for assistance and guidance.</p>
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

    @media (max-width: 768px) {
      padding: 40px 0;
    }
  }

  .dark-block {
    background-color: #ECECE4;
  }

  .light-block {
    background-color: #fff;
  }

  .wrapper {
    max-width: 1340px;
    box-sizing: border-box;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
        padding: 0 15px;
    }
  }
}

.wrapper {
  display: flex;
  flex-flow: wrap;
}

.row {
  position: relative;
  display: flex;
  width: 100%;

  @media (max-width: 992px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-flow: column;
    gap: 0;
  }
}

.col {
  width: 50%;

  &:nth-child(2) {
    display: flex;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    width: 100%;

    &:first-child {
      margin-bottom: 40px;
    }

    &:nth-child(2) {
      justify-content: flex-start;
    }
  }

  .title-main {
    margin-bottom: 24px;
    // max-width: 438px;
    font: 500 40px/112% 'Poppins';
    color: #352F44;

    @media (max-width: 992px) {
      font-size: 28px;
    }

    @media (max-width: 768px) {
      margin-bottom: 0;
      max-width: none;
      font-size: 22px;
      line-height: 140%; /* 30.8px */
    }
  }

  .description {
    font: 16px/150% 'Poppins';
    color: #282929;
    max-width: 440px;

    @media (max-width: 768px) {
      max-width: none;
    }
  }

  .content {
    @media (max-width: 768px) {
      padding-left: 5px;
    }

    h4 {
      margin-bottom: 12px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 20px;
      font-weight: 500;
      line-height: 140%;
      /* 28px */

      @media (max-width: 768px) {
        margin-bottom: 8px;
      }
    }

    p {
      margin-bottom: 32px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-weight: 400;
      line-height: 140%; /* 22.4px */

      @media (max-width: 768px) {
        margin-bottom: 24px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  ul {
    padding-left: 20px;
    display: flex;
    flex-flow: column;
    gap: 16px;
    list-style: none;

    li {
      color: #000;
      font-size: 16px;
      font-family: 'Poppins';
      font-weight: 400;
      line-height: 150%;
      /* 24px */
      position: relative;
      list-style: none;

      &::before {
        content: '•';
        display: block;
        width: 4px;
        color: #000;
        font-family: 'Poppins';
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        /* 24px */
        position: absolute;
        left: -15px;
        top: 0;
      }

      a {
        color: #000;
        text-decoration: underline;

        &:hover {
            color: #000;
            text-decoration: none;
        }
      }
    }
  }
}
</style>
