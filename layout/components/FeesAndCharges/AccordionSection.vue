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
                    <span>Are there any hidden fees?</span>
                  </template>
                  <template #content>
                    <p>
                      No, Virturo operates with full transparency. We disclose all fees upfront, including account fees, trading-related charges, and any additional services you might choose. There are no hidden fees in our pricing structure.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>Does Virturo cover my payment processing fees?</span>
                  </template>
                  <template #content>
                    <p>
                      Virturo may cover certain payment processing fees depending on the payment method. However, fees imposed by third-party payment processors (e.g., banks or credit card providers) may apply. Check our detailed terms or consult support for specific methods.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>Does Virturo charge any trading fees?</span>
                  </template>
                  <template #content>
                    <p>
                      Yes, Virturo charges a transparent trading fee structure. These include spreads, commissions, or other relevant costs specific to the type of trade or account. Refer to our Fees & Charges page for detailed rates.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>Does Virturo charge an overnight fee?</span>
                  </template>
                  <template #content>
                    <p>
                      Yes, Virturo applies overnight fees (also known as swap or rollover fees) for positions held open past the market close. These fees are based on the instrument traded and the position size.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>What are the margin requirements at Virturo?</span>
                  </template>
                  <template #content>
                    <p>
                      Margin requirements vary based on the asset being traded and the account type. Our platform provides a detailed breakdown of margin rates for each instrument, ensuring users know the funds required to maintain a position.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>Can I access my trading history and account statements?</span>
                  </template>
                  <template #content>
                    <p>
                      Yes, you can access your trading history and account statements directly through the Virturo platform. Simply log in to your account and navigate to the "Statements" or "History" section for detailed records.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>How does Virturo ensure the security of my funds?</span>
                  </template>
                  <template #content>
                    <p>
                      Virturo employs robust security measures, including segregated client accounts, SSL encryption, and adherence to regulatory standards. Additionally, funds are held with top-tier financial institutions to ensure maximum safety.
                    </p>
                  </template>
                </accordion-item>

                <accordion-item>
                  <template #title>
                    <span>What types of accounts does Virturo offer?</span>
                  </template>
                  <template #content>
                    <p>
                      Virturo offers a range of accounts to cater to various trading needs, including Standard, Premium, and Professional accounts. Each account type offers unique benefits, such as differing leverage levels, spreads, and additional tools.
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
              We're here to help! If you have any queries or need more information, please don't hesitate to get in touch with us. You can reach us at <a href="mailto:support@virturo.com">support@virturo.com</a>, or for immediate assistance, use our live chat feature on our website. Our dedicated support team is always ready to provide you with the guidance and answers you need.
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
