<template>
  <section class="accordion">
    <div class="wrapper">
      <div class="row">
        <h2 class="block-title">
          FAQs
        </h2>
        <div class="col">
          <div class="block-accordion-support">
            <div class="body-accordion-support">
              <accordion>
                <accordion-item>
                  <template #title>
                    <span>Is my money safe on Virturo?</span>
                  </template>
                  <template #content>
                    <p>
                      Virturo prioritizes the security of clients' funds. We adhere to strict financial regulations and employ advanced security measures to ensure the safety of your investments. However, as with any trading platform, it’s important to be aware of market risks.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>Is Virturo a scam?</span>
                  </template>
                  <template #content>
                    <p>
                      No, Virturo is a legitimate trading platform. We operate under licensed environments and adhere to compliance standards, ensuring transparency and trustworthiness.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>Is Virturo safe?</span>
                  </template>
                  <template #content>
                    <p>
                      Yes, Virturo is safe. We utilize state-of-the-art encryption, rigorous security protocols, and trusted banking systems to protect client information and funds.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>Is Virturo a pyramid scheme?</span>
                  </template>
                  <template #content>
                    <p>
                      No, Virturo is not a pyramid scheme. It is a legitimate trading platform focused on providing investment opportunities through globally recognized financial instruments.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>How does Virturo ensure communication security with its clients?</span>
                  </template>
                  <template #content>
                    <p>
                      Virturo ensures communication security through SSL encryption, two-factor authentication (2FA), and secure messaging channels. These measures protect client data from unauthorized access.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>What steps can I take to protect my Virturo account?</span>
                  </template>
                  <template #content>
                    <p>
                      To protect your account, use strong passwords, enable two-factor authentication (2FA), and regularly monitor your account activity. Avoid sharing login credentials and be cautious of phishing attempts.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>How often should I update my password for Virturo?</span>
                  </template>
                  <template #content>
                    <p>
                      It is recommended to update your password every three to six months to enhance account security. Ensure your new password is unique and not reused from other accounts.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>Can Virturo help in diversifying my investment portfolio?</span>
                  </template>
                  <template #content>
                    <p>
                      Yes, Virturo offers a variety of trading instruments, including forex, commodities, indices, and cryptocurrencies, enabling users to diversify their portfolios based on their investment strategies.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>How can I differentiate between legitimate trading and gambling?</span>
                  </template>
                  <template #content>
                    <p>
                      Legitimate trading involves informed decision-making based on market analysis, risk management, and strategic planning. Gambling, in contrast, relies purely on chance. Virturo provides educational resources to help clients develop sound trading practices.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>What is phishing and how can I recognize it?</span>
                  </template>
                  <template #content>
                    <p>
                      Phishing is a fraudulent attempt to obtain sensitive information by impersonating a trusted entity. Recognize it by looking for suspicious email addresses, generic greetings, unexpected requests for information, and links to unfamiliar websites.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>What should I do if I suspect a phishing attempt or security breach on my account?</span>
                  </template>
                  <template #content>
                    <p>
                      Immediately report any suspicious activities or phishing attempts to Virturo's support team. Avoid clicking on any links or providing any personal information and ensure to change your account passwords.
                    </p>
                  </template>
                </accordion-item>
              </accordion>
            </div>
          </div>

          <div class="block-still-have-questions">
            <h3 class="block-title">
              Still Have Questions?
            </h3>
            <p>
              We're here to help! If you have any queries or need more information, please don't hesitate to get in touch with us.<br> You can reach us at <a href="mailto:support@virturo.com">support@virturo.com</a>, or for immediate assistance, use our live chat feature on our website.<br> Our dedicated support team is always ready to provide you with the guidance and answers you need.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Accordion from '../common/Accordion.vue';
import AccordionItem from '../common/AccordionItem.vue';
import { LEGAL_TABS_HASH } from '../Legal/LegalContent.vue';

export default {
  name: 'AccordionSection',
  components: {
    Accordion,
    AccordionItem,
  },
  data() {
    return {
      privacyPolicyLink: '/legal/',
    };
  },
  mounted() {
    this.privacyPolicyLink = `/legal/#${LEGAL_TABS_HASH.PRIVACY_POLICY}`;
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  position: relative;
  z-index: 2;

  .row {
    display: flex;
    flex-flow: row;
    justify-content: space-between;

    @media (max-width: 992px) {
      flex-flow: column;
    }
  }

  .wrapper {
    margin: 0 auto;
    max-width: 1340px;
    padding: 60px 30px;

    @media (max-width: 992px) {
      padding: 40px 30px;
    }

    @media (max-width: 768px) {
      padding: 40px 15px;
    }
  }

  .block-title {
    margin-bottom: 40px;
    color: #352F44;
    font-family: 'Poppins';
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;

    @media (max-width: 768px) {
      margin-bottom: 16px;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }
}

.accordion-content {

  a {
    color: #352F44;
    text-decoration: underline;
    font-weight: 400;
  }

  h3 {
    font-weight: 500;
    color: #352F44;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 500;
  }

  p {
    // padding-bottom: 20px;
    // color: #ffffff;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }

  strong,
  span {
    font-weight: 500;
  }

  ol {
    padding-left: 20px;
    list-style-type: decimal;
  }

  ul {
    padding-left: 20px;
    list-style-type: disc;

    ul {
      list-style-type: circle;

      ul {
        list-style-type: square;
      }
    }

    li {
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      /* 24px */
    }
  }
}

.accordion-trigger {
  padding: 16px 24px;

  span {
    color: #352F44;
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    /* 28px */
    text-transform: none;
    text-align: left;

    a {
      color: #352F44;
      text-decoration: underline;

      &:hover {
        color: #282929;
        text-decoration: none;
      }
    }

    strong {
      font-weight: 500;
    }
  }
}

.col {
  width: 100%;
  max-width: 740px;
  display: flex;
  flex-flow: column;

  @media (max-width: 992px)  {
    max-width: none;
  }
}

.block-accordion-support {
  width: 100%;
  // max-width: 740px;
  display: flex;
  flex-flow: column;
  padding-bottom: 40px;
}

.title-accordion-support {
  margin-right: 20px;
  margin-bottom: 10px;

  h2 {
    padding-top: 10px;
    font-size: 24px;
    font-family: 'Poppins';
    line-height: 1.2;
    font-weight: 500;
    // color: #ffffff;
  }
}

.body-accordion-support {
  flex: 1 1 auto;
}

@media (max-width: 1024px) {
  .block-accordion-support {
    display: block;
  }

  .title-accordion-support {
    margin-right: 0;
    text-align: center;
    padding: 20px 0;
  }
}

@media (max-width: 768px) {
  .accordion .container {
    padding: 0 16px;
  }

  .accordion .block-title {
    font-size: 32px;
    line-height: 120%;
    /* 38.4px */
    letter-spacing: -0.102px;
  }

  .accordion .inner {
    padding: 40px 0;
  }

  .accordion-trigger {
    padding: 12px;
    text-align: left;

    span {
      padding-right: 10px;
    }
  }

  .accordion-content {
    padding: 12px;
    padding-top: 4px;
  }

  .block-accordion-support {
    padding-bottom: 24px;
  }
}

.block-still-have-questions {
  // padding-bottom: 60px;
  display: flex;
  flex-flow: column;

  .block-title {
    margin-bottom: 16px;
    color: #352F44;
    font-family: 'Poppins';
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    /* 28px */
  }

  p {
    color: #352F44;
    font-family: 'Poppins';
    font-size: 12px;
    font-weight: 400;
    line-height: 146%; /* 17.52px */

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 140%; /* 22.4px */
    }

    a {
      color: #352F44;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
