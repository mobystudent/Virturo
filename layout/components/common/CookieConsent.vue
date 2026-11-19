<template>
  <div
    v-if="showBanner"
    class="cookie-consent-banner"
  >
    <div class="container">
      <p>
        Please read and accept our Privacy Policy and Cookie Policy to continue using the website. This Policy governs the provision of your personal data necessary to access our site and/or certain services.
        <nuxt-link
          class="copy-link"
          :to="privacyPolicyLink"
        >
          Learn more
        </nuxt-link>.
      </p>
      <button
        class="btn btn-accept"
        @click="acceptCookies"
      >
        Accept
      </button>
      <button
        class="btn btn-decline"
        @click="declineCookies"
      >
        Decline
      </button>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import { LEGAL_TABS_HASH } from '../Legal/LegalContent.vue';

export default {
  data() {
    return {
      showBanner: false,
      privacyPolicyLink: '/legal',
      LEGAL_TABS_HASH,
    };
  },
  mounted() {
    this.privacyPolicyLink = `/legal#${LEGAL_TABS_HASH.PRIVACY_POLICY}`;
    this.checkCookieConsent();
  },
  methods: {
    checkCookieConsent() {
      const consent = Cookies.get('cookieConsent');
      if (!consent) {
        this.showBanner = true;
      } else if (consent === 'accepted') {
        // this.loadAnalytics();
      }
    },
    acceptCookies() {
      Cookies.set('cookieConsent', 'accepted', { expires: 30 });
      this.showBanner = false;
    //   this.loadAnalytics();
    },
    declineCookies() {
      Cookies.set('cookieConsent', 'declined', { expires: 30 });
      this.showBanner = false;
    },
    loadAnalytics() {
      // Load Google Analytics script dynamically
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-1QBJFVBKZ4';
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        // Adding the gtag.js script before the closing body tag
        const inlineScript = document.createElement('script');
        inlineScript.src = '/gtag.js'; // путь к вашему gtag.js файлу
        inlineScript.async = true;
        document.body.appendChild(inlineScript);
      };
    },
  },
};
</script>

<style scoped lang="scss">
.container {
    margin: 0 auto;
    max-width: 1340px;
    padding: 20px 30px;
    @media (max-width: 768px) {
        padding: 10px 25px;
    }
}
.cookie-consent-banner {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #ECECE4;
    color: #352F44;
    padding: 10px;
    text-align: center;
    z-index: 1000;

    a {
        color: #48C3A8;
        &:hover {
            color: #352F44;
        }
    }
}
.cookie-consent-banner p {
  margin: 0;
  margin-bottom: 15px;
  padding: 0 10px;
  color: #352F44;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 132%; /* 31.68px */
  @media (max-width: 768px) {
    font-size: 13px;
  }
}

.cookie-settings {
  margin-top: 10px;
}
.cookie-settings h3 {
  margin: 0 0 10px 0;
}
.cookie-settings label {
  display: block;
  margin: 5px 0;
}

.cookie-consent-banner .btn {
    margin: 0 5px;
    font: 500 16px 'Poppins';
    padding: 8px 20px;
    border-radius: 4px;
    color: #0E0523;
    background-color: #E8F2E4;
    transition: color .25s ease-in, background-color .25s ease-in;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 5px 10px;
        font-size: 14px;
    }

    &.btn-accept {
        display: inline-flex;
        align-items: center;
        column-gap: 5px;
        color: #FFF;
        background-color: #157275;
        border: 1px solid #157275;
        transition: .25s box-shadow ease-in;

        &:hover {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
        }

        &:active {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
        }
    }

    &.btn-decline {
        color: #0E0523;
        border: 1px solid #0E0523;
        transition: color 0.25s ease-in, background 0.25s ease-in;
    }
}

</style>
