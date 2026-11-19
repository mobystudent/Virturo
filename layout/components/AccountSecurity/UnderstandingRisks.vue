<template>
  <section class="contact-media-team">
    <div class="wrapper">
      <div class="intro">
        <h2 class="title">
          Understanding risks<br> and countering<br> phishing attempts
        </h2>
        <div class="description">
          <p>
            The term "phishing" represents malicious attempts to acquire personal data by impersonating trustworthy entities through fake websites, emails, calls, or SMS messages. Criminals aim to misuse this data for financial gain, emphasizing the need for vigilance. Unfortunately, the online trading industry is not immune, exemplified by a 2021 Europol collaboration that dismantled a €30 million ($36 million) investment fraud and money laundering ring.
          </p>
          <p class="attention">
            To safeguard against such threats, always verify your interaction with the official Virturo platform and representatives, preventing falling victim to impostors.
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
    // margin-bottom: 28px;
    max-width: 524px;
    width: 100%;
    color: #352F44;
    font-family: "Poppins";
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;

    @media (max-width: 768px) {
      // margin-bottom: 40px;
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
    // text-align: center;

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
      line-height: 140%;
      /* 28px */
    }
  }

}
</style>
