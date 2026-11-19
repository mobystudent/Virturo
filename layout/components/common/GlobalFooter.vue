<template>
  <footer :class="setTheme">
    <div class="wrapper">
      <div class="footer__upper">
        <div class="footer__column">
          <div class="logo">
            <nuxt-link
              class="static"
              to="/"
            >
              <img
                src="@/static/img/footer/logo.svg"
                alt="logo"
              >
            </nuxt-link>
          </div>
          <SubscribeForm block="footer" />
        </div>
        <div class="socials">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61570821814759"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_6897_72015)">
                <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" />
              </g>
              <defs>
                <clipPath id="clip0_6897_72015">
                  <rect
                    width="24"
                    height="24"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            target="_blank"
            href="https://x.com/virturoofficial"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.3263 1.90381H21.6998L14.3297 10.3273L23 21.7898H16.2112L10.894 14.8378L4.80995 21.7898H1.43443L9.31743 12.7799L1 1.90381H7.96111L12.7674 8.25814L18.3263 1.90381ZM17.1423 19.7706H19.0116L6.94539 3.81694H4.93946L17.1423 19.7706Z" />
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/@Virturo_Official"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_6927_20803)">
                <path d="M23.5216 6.18541C23.3859 5.67482 23.1185 5.20883 22.7462 4.83407C22.3738 4.4593 21.9095 4.18891 21.3998 4.04996C19.5234 3.54541 12.0234 3.54541 12.0234 3.54541C12.0234 3.54541 4.52344 3.54541 2.64707 4.04996C2.13737 4.18891 1.6731 4.4593 1.30073 4.83407C0.928354 5.20883 0.660943 5.67482 0.525256 6.18541C0.0234376 8.06996 0.0234375 12 0.0234375 12C0.0234375 12 0.0234376 15.93 0.525256 17.8145C0.660943 18.3251 0.928354 18.7911 1.30073 19.1658C1.6731 19.5406 2.13737 19.811 2.64707 19.95C4.52344 20.4545 12.0234 20.4545 12.0234 20.4545C12.0234 20.4545 19.5234 20.4545 21.3998 19.95C21.9095 19.811 22.3738 19.5406 22.7462 19.1658C23.1185 18.7911 23.3859 18.3251 23.5216 17.8145C24.0234 15.93 24.0234 12 24.0234 12C24.0234 12 24.0234 8.06996 23.5216 6.18541Z" />
                <path
                  d="M9.56934 15.5687V8.4314L15.8421 12L9.56934 15.5687Z"
                  fill="#074429"
                />
              </g>
              <defs>
                <clipPath id="clip0_6927_20803">
                  <rect
                    width="24"
                    height="24"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/virturo-uk/"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3451_9353)">
                <path
                  d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3451_9353">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div class="footer__menu">
          <h4 class="block-title">
            Sitemap
          </h4>
          <nav class="footer__nav">
            <div class="menu-col menu-col--1">
              <nuxt-link
                class="menu-link"
                to="/trading-accounts/"
              >
                Trading Accounts
              </nuxt-link>
              <nuxt-link
                class="menu-link"
                to="/assets/"
              >
                Assets
              </nuxt-link>
              <nuxt-link
                class="menu-link"
                to="/fees-and-charges/"
              >
                Fees and Charges
              </nuxt-link>
              <nuxt-link
                class="menu-link"
                to="/deposits-and-withdrawals/"
              >
                Deposits & Withdrawals
              </nuxt-link>
              <nuxt-link
                class="menu-link"
                to="/learn/"
              >
                Learn
              </nuxt-link>
              <nuxt-link
                class="menu-link"
                to="/about/"
              >
                About
              </nuxt-link>
              <nuxt-link
                class="menu-link"
                to="/careers/"
              >
                Careers
              </nuxt-link>
              <nuxt-link
                class="menu-link"
                to="/account-security/"
              >
                Account Security
              </nuxt-link>
              <nuxt-link
                class="menu-link"
                to="/esg/"
              >
                ESG
              </nuxt-link>
            </div>
            <div class="menu-col menu-col--2">
              <div>
                <nuxt-link
                  class="menu-link"
                  to="/blog/"
                >
                  Blog
                </nuxt-link>
                <nuxt-link
                  class="menu-link"
                  to="/media-center/"
                >
                  Media Center
                </nuxt-link>
                <nuxt-link
                  class="menu-link"
                  to="/legal/"
                >
                  Legal
                </nuxt-link>
                <nuxt-link
                  class="menu-link"
                  to="/support/"
                >
                  Support
                </nuxt-link>
              </div>
              <div>
                <nuxt-link
                  class="menu-link"
                  to="/partners/"
                >
                  Partners
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <path
                      d="M1.55994 0.215942H7.78394V6.40794H6.74394V2.03994L1.01594 7.78394L0.215942 6.98394L5.94394 1.25594H1.57594L1.55994 0.215942Z"
                      fill="#fff"
                    />
                  </svg>
                </nuxt-link>
                <nuxt-link
                  class="menu-link"
                  to="/invest/"
                >
                  Invest
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <path
                      d="M1.55994 0.215942H7.78394V6.40794H6.74394V2.03994L1.01594 7.78394L0.215942 6.98394L5.94394 1.25594H1.57594L1.55994 0.215942Z"
                      fill="#fff"
                    />
                  </svg>
                </nuxt-link>
                <nuxt-link
                  class="menu-link"
                  to="/pro/"
                >
                  Pro
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    fill="none"
                  >
                    <path
                      d="M1.55994 0.215942H7.78394V6.40794H6.74394V2.03994L1.01594 7.78394L0.215942 6.98394L5.94394 1.25594H1.57594L1.55994 0.215942Z"
                      fill="#fff"
                    />
                  </svg>
                </nuxt-link>
              </div>
            </div>
          </nav>
        </div>
        <div class="footer__contact">
          <h4 class="block-title">
            Download our app
          </h4>
          <p class="download-description">
            Get greater control and flexibility for peak performance trading when you're on the go.
          </p>
          <div class="download-items">
            <a
              target="_blank"
              href="#"
            >
              <img
                src="@/static/img/footer/app-store-icon.svg"
                alt="app-store"
              >
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.virturo.app"
            >
              <img
                src="@/static/img/footer/google-play-icon.svg"
                alt="google-play"
              >
            </a>
          </div>
          <h4 class="block-title">
            Company
          </h4>
          <address class="address">
            30 St Mary's Axe, London, EC3A 8BF
          </address>
          <div class="schedule">
            <a href="tel:+442039100856">+44 20 3910 0856</a><br>
            <a href="tel:+61871183146">+61 8711 83146</a><br>
            Lines open 07:00-15:00 UTC Monday-Friday
          </div>
        </div>
      </div>
      <div class="footer__lower">
        <div class="copy-row">
          <span class="copy">Virturo 2024©</span>
          <div class="copy-links">
            <nuxt-link
              class="copy-link"
              :to="`/legal/#${LEGAL_TABS_HASH.TERMS_AND_CONDITIONS}`"
            >
              Terms &amp; Conditions
            </nuxt-link>
            <nuxt-link
              class="copy-link"
              :to="`/legal/#${LEGAL_TABS_HASH.PRIVACY_POLICY}`"
            >
              Privacy Policy
            </nuxt-link>
          </div>
        </div>
        <p class="footer__description">
          Contracts for Difference (CFDs) are complex financial instruments that involve a high risk of losing money rapidly due to leverage. A significant percentage of retail investor accounts lose money when trading CFDs. It is crucial that you fully understand how CFDs work and carefully assess whether you can afford to take the high risk of losing your investment. Trading in financial markets involves substantial risk and is not suitable for all investors. Past performance is not indicative of future results.<br>
          The information and materials provided on this platform are for general informational purposes only and do not constitute financial, investment, tax, legal, or any other form of professional advice. Virturo does not take into account your specific financial situation, investment objectives, or risk tolerance. Before making any financial or investment decisions, we strongly recommend consulting with an independent financial advisor. Virturo is owned and operated by Finastra LTD. By accessing or using this website, you agree to our Terms and Conditions. While we strive to ensure the accuracy and reliability of the information presented, Virturo cannot guarantee its completeness or timeliness. Any reliance you place on the information is strictly at your own risk.<br>
          Virturo is committed to protecting your personal data in compliance with the General Data Protection Regulation (GDPR). By using this platform, you consent to the collection and processing of your data as outlined in our Privacy Policy, which includes your rights to access, rectify, or delete your information at any time
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { LEGAL_TABS_HASH } from '../Legal/LegalContent.vue';
import SubscribeForm from './SubscribeForm.vue';

export default {
  name: 'GlobalFooter',
  components: { SubscribeForm },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      LEGAL_TABS_HASH,
      isBlack: false,
      accountLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up`,
    };
  },
  computed: {
    setTheme() {
      return this.$route.path === '/pro' ? 'footer-black' : '';
    },
  },
};
</script>

<style scoped lang="scss">
footer {
  background-color: #352F44;
  padding: 60px 0 59px;
  position: relative;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0 85px;
  }
}

.wrapper {
  position: relative;
  max-width: 1340px;
  padding: 0 30px;
  margin: 0 auto;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    right: -155px;
    bottom: -34px;
    width: 525px;
    height: 525px;
    background: url('../../static/img/footer/snowflake.png') center/cover no-repeat;
    z-index: -1;

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 0 15px;
  }
}

.logo {
  max-width: 185px;
  max-height: 35px;

  a {
    display: block;
  }

  img {
    width: 100%;
    height: auto;
  }
}

.block-title {
  font: 500 16px/22px 'Poppins', sans-serif;
  color: #48C3A8;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
}

.footer__upper {
  display: grid;
  grid: 'logo menu downloads' auto
        'socials menu downloads' auto
        / 340px 1fr 1fr;
  gap: 40px 20px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(#D3F5EC, .2);

  @media (max-width: 1200px) {
    grid: 'logo downloads' auto
        'socials downloads' auto
        'menu menu' auto
        / 340px 1fr;
  }

  @media (max-width: 768px) {
    grid: 'logo' auto
        'menu' auto
        'downloads' auto
        'socials' auto
        / 1fr;
  }
}

.footer__lower {
  padding-top: 20px;

  @media (max-width: 768px) {
    padding-top: 25px;
  }
}

.copy-row {
  margin-bottom: 20px;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  font: 12px/18px "Poppins", sans-serif;
  color: #fff;

  @media (max-width: 580px) {
    align-items: flex-start;
    flex-flow: column;
    row-gap: 15px;
  }
}

.copy-links {
  display: flex;
  column-gap: 40px;
}

.copy-link {
  font: 12px/18px "Poppins", sans-serif;
  color: #fff;
  transition: color .25s ease-in;

  &:hover {
    color: #48C3A8;
  }
}

.copy {
  font: 12px/18px "Poppins", sans-serif;
  color: #fff;
}

.footer__column {
  grid-area: logo;
  display: flex;
  flex-flow: column;
  row-gap: 30px;
  max-width: 340px;

  @media (max-width: 768px) {
    row-gap: 40px;
  }
}

.footer__description {
  font: 12px/18px 'Poppins', sans-serif;
  color: rgba(#fff, .6);
}

.socials {
  grid-area: socials;
  display: flex;
  column-gap: 25px;
  margin-top: auto;

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;

    svg {
      fill: #fff;
      transition: fill .25s ease-out;
    }

    &:hover svg {
      fill: #48C3A8;
    }
  }
}

.footer__menu {
  grid-area: menu;
  display: flex;
  flex-flow: column;
  margin-left: auto;
  max-width: 415px;

  @media (max-width: 1200px) {
    margin-left: inherit;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
}

.footer__nav {
  display: flex;
  column-gap: 40px;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 768px) {
    column-gap: 20px;
  }

  @media (max-width: 580px) {
    column-gap: 40px;
  }
}

.footer__contact {
  grid-area: downloads;
  max-width: 415px;

  @media (max-width: 1200px) {
    justify-self: end;
    width: 100%;
    max-width: 550px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
}

.download-description {
  margin-bottom: 20px;
  color: #fff;
  font: 12px/18px 'Poppins', sans-serif;

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
}

.download-items {
  display: flex;
  column-gap: 15px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  a {
    display: inline-flex;
  }

  img {
    width: 149px;
    height: 48px;
  }
}

.schedule,
.address {
  color: #fff;
  font: 12px/18px 'Poppins', sans-serif;
}

.address {
  margin-bottom: 12px;

  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
}

.schedule a {
  color: #fff;

  &:hover {
    color: #48C3A8;
  }
}

.menu-col {
  display: flex;
  flex-flow: column;
  row-gap: 11px;
  min-width: 160px;

  @media (max-width: 1200px) {
    flex-flow: row;
    width: calc(50% - 20px);
    column-gap: 40px;
  }

  @media (max-width: 768px) {
    width: calc(50% - 10px);
    min-width: auto;
    column-gap: 20px;
  }

  @media (max-width: 580px) {
    flex-flow: column;
  }

  &--1 {
    //justify-content: space-between;

    @media (max-width: 1200px) {
      flex-flow: wrap;

      .menu-link {
        width: calc(50% - 20px);
      }
    }

    @media (max-width: 768px) {
      .menu-link {
        width: calc(50% - 10px);
      }
    }

    @media (max-width: 580px) {
      .menu-link {
        width: 100%;
      }
    }
  }

  &--2 {
    row-gap: 40px;

    @media (max-width: 580px) {
      row-gap: 30px;
    }

    div {
      display: flex;
      flex-flow: column;
      row-gap: 11px;

      @media (max-width: 1200px) {
        width: calc(50% - 20px);
      }

      @media (max-width: 768px) {
        width: calc(50% - 10px);
      }

      @media (max-width: 580px) {
        width: 100%;
      }
    }
  }
}

.menu-link {
  display: block;
  color: #fff;
  font: 12px/18px 'Poppins', sans-serif;
  transition: color .25s ease-in;

  svg {
    margin-left: 5px;
  }

  &:hover {
    color: #48C3A8;
  }

  @media (max-width: 768px) {
    line-height: 16px;
  }
}
</style>
