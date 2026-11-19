<template>
  <section class="section">
    <div class="wrapper">
      <h2 class="title">
        Commonly asked questions
      </h2>
      <div class="content">
        <ul class="tabs">
          <li
            v-for="(tab, index) in tabs"
            :key="index"
            class="tab"
            :class="{ 'active': index === activeTab }"
            @click="setActiveTab(index)"
          >
            {{ tab.title }}
          </li>
        </ul>
        <div class="info">
          <div
            v-for="(tab, index) in tabs"
            v-show="tab.active"
            :key="index"
            class="info-wrap"
          >
            <accordion
              v-for="(content, i) in tab.content"
              :key="i"
              class="info-block"
            >
              <accordion-item>
                <template #title>
                  <h5>{{ content.title }}</h5>
                </template>
                <template #content>
                  <p>{{ content.text }}</p>
                </template>
              </accordion-item>
            </accordion>
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
      activeTab: 0,
      tabs: [
        {
          title: 'General Questions',
          content: [
            {
              title: 'What is Virturo.com?',
              text: 'Virturo.com is an innovative trading platform providing CFD trading across a variety of asset classes, including, stocks, ETFs, indices, commodities, and foreign exchange pairs. Virturo is committed to offering a secure and user-friendly trading environment tailored to empower users in making their own investment decisions.',
            },
            {
              title: 'What types of trading does Virturo support?',
              text: 'Virturo supports CFD trading across a broad range of asset classes, such as stocks, ETFs, indices, commodities, and forex, catering to diverse trading needs and strategies.',
            },
            {
              title: 'How does Virturo ensure the safety and security of its users?',
              text: 'Virturo prioritizes user safety by employing segregated accounts to protect client funds, SSL encryption for data security, GDPR compliance for privacy, and two-factor authentication (2FA) for enhanced account protection.',
            },
            {
              title: 'Is Virturo regulated?',
              text: 'Virturo adheres to ESMA’s MiFID II guidelines, ensuring the protection of clients trading on the platform. While Virturo itself may not hold direct regulation, it partners with regulated entities to ensure high standards of safety for users.',
            },
            {
              title: 'Is the money I deposit with Virturo safe?',
              text: 'Yes, client funds are held in segregated accounts separate from the company\'s operational funds, ensuring they are used solely for trading activities. This is part of Virturo\'s commitment to regulatory compliance and fund protection.',
            },
            {
              title: 'What happens if Virturo defaults?',
              text: 'In the unlikely event of Virturo facing financial difficulties, your funds are secured in segregated accounts, protecting them from being affected by the company’s obligations.',
            },
          ],
          active: true,
        },
        {
          title: 'Account & Trading',
          content: [
            {
              title: 'How do I create an account on Virturo?',
              text: 'You can create an account by visiting Virturo.com and clicking the \'Sign Up\' or ‘Open Account’ button. Follow the instructions to complete the registration process.',
            },
            {
              title: 'Are there any fees associated with using Virturo?',
              text: 'Virturo earns revenue through spreads, brokerage fees, and overnight financing charges. All fees are transparently detailed on the platform’s Fees page.',
            },
            {
              title: 'Can I lose more than what I’ve deposited?',
              text: 'No, Virturo offers negative balance protection, ensuring that you cannot lose more than your deposited funds.',
            },
            {
              title: 'Can I open a demo account?',
              text: 'Yes, Virturo provides a demo account option for users to practice trading without financial risk.',
            },
            {
              title: 'What account types do you offer?',
              text: 'Virturo offers retail accounts and may offer sophisticated investor accounts based on eligibility. Details about account types are available on Virturo’s platform.',
            },
            {
              title: 'How do I trade on the platform?',
              text: 'Trading on Virturo involves selecting a financial instrument, setting trade parameters like volume, stop loss, and take profit levels, and executing the trade.',
            },
            {
              title: 'What are your trading hours?',
              text: 'Trading hours vary by asset class and are displayed next to each asset on Virturo\'s platform.',
            },
            {
              title: 'What leverage and spreads do you offer?',
              text: 'Virturo provides competitive spreads and leverage options. Specific details can be found on the platform\'s Trading Accounts page.',
            },
            {
              title: 'Do you allow strategies like news trading, scalping, or hedging?',
              text: 'Virturo permits news trading, scalping, and hedging as long as these strategies comply with fair trading practices.',
            },
          ],
          active: false,
        },
        {
          title: 'Technical Support & Security',
          content: [
            {
              title: 'What should I do if I encounter technical issues on the platform?',
              text: 'If you experience any technical difficulties, contact Virturo’s support team immediately via email, live chat, or phone.',
            },
            {
              title: 'How do I change my password?',
              text: 'To change your password, navigate to the \'Security\' section under Account Settings. You can also use the ‘Forgot Password’ feature on the login page.',
            },
            {
              title: 'How does Virturo protect my account?',
              text: 'Virturo employs two-factor authentication (2FA) and advanced encryption technologies to secure user accounts.',
            },
            {
              title: 'What should I do if my account has been compromised?',
              text: 'Immediately contact Virturo’s support team and change your credentials. Virturo also offers guidance on account security through its support channels.',
            },
          ],
          active: false,
        },
        {
          title: 'Privacy & Compliance',
          content: [
            {
              title: 'How does Virturo comply with privacy laws?',
              text: 'Virturo complies with GDPR, ensuring the protection and privacy of user data. For more details, refer to Virturo\'s Privacy Policy.',
            },
            {
              title: 'Do you accept US clients?',
              text: 'Virturo does not accept US clients due to regulatory restrictions.',
            },
            {
              title: 'What documents are required to verify my account?',
              text: 'Documents required typically include proof of identity (passport, national ID, or driver’s license) and proof of address (utility bill or bank statement).',
            },
          ],
          active: false,
        },
        {
          title: 'Deposits & Withdrawals',
          content: [
            {
              title: 'What deposit methods does Virturo accept?',
              text: 'Virturo supports various payment methods, including bank transfers and credit cards. Details can be found in the Deposits and Withdrawals section of the platform.',
            },
            {
              title: 'How do I withdraw funds from my Virturo account?',
              text: 'To withdraw funds, navigate to the \'Withdrawal\' section on the platform, choose a method, and follow the instructions.',
            },
            {
              title: 'How long does it take to process a withdrawal?',
              text: 'Withdrawals are processed within 48 business hours. Bank withdrawals may take longer due to intermediary processing, while crypto-based withdrawals are typically quicker.',
            },
            {
              title: 'Are there any fees for deposits or withdrawals?',
              text: 'Virturo does not charge fees for deposits or withdrawals. However, external charges from banks or payment providers may apply.',
            },
            {
              title: 'Can I withdraw money if I have an open position?',
              text: 'Yes, as long as the remaining balance meets margin requirements, withdrawals can be processed.',
            },
            {
              title: 'Can I transfer funds between accounts?',
              text: 'Direct transfers between accounts are not permitted. Transfers require withdrawal from one account and deposit into the other.',
            },
            {
              title: 'What is the minimum amount I can deposit or withdraw?',
              text: 'Minimum deposit and withdrawal amounts vary based on the chosen method. Details are available on the Deposits and Withdrawals page.',
            },
          ],
          active: false,
        },
        {
          title: 'Feedback & Suggestions',
          content: [
            {
              title: 'How can I provide feedback or make suggestions?',
              text: 'Virturo values user feedback. You can provide suggestions by contacting the support team via email or the website’s contact form.',
            },
          ],
          active: false,
        },
      ],
    };
  },
  mounted() {
    this.privacyPolicyLink = `/legal#${LEGAL_TABS_HASH.PRIVACY_POLICY}`;
  },
  methods: {
    setActiveTab(index) {
      // eslint-disable-next-line guard-for-in,no-restricted-syntax, no-param-reassign
      this.activeTab = index; // update activeTab to keep track of the current active tab
      // Updating the active property of tabs
      // eslint-disable-next-line guard-for-in,no-restricted-syntax, no-param-reassign
      this.tabs.forEach((tab, i) => {
        tab.active = i === index; // eslint-disable-line no-param-reassign
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 60px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
}

.wrapper {
  margin: 0 auto;
  max-width: 1340px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  column-gap: 15px;

  @media (max-width: 768px) {
    padding: 0 15px;
    padding-right: 0;
    flex-flow: column;
    row-gap: 40px;
  }
}

.title {
  flex: 1 1 525px;
  font: 500 52px/58px 'Poppins', sans-serif;
  letter-spacing: -1%;
  color: #352F44;

  @media (max-width: 768px) {
    flex: 0 0 auto;
    font-size: 32px;
    line-height: 44px;
  }
}

.content {
  display: flex;
  flex: 1 1 740px;
  flex-flow: column;
  row-gap: 40px;
  max-width: 740px;

  @media (max-width: 768px) {
    flex: 0 0 auto;
  }
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  @media (max-width: 768px) {
    padding-right: 15px;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}

.tab {
  flex: 0 0 auto;
  list-style-type: none;
  padding: 12px 25px;
  font: 16px/22px 'Poppins', sans-serif;
  color: #352F44;
  background: #ECECE4;
  transition: color .25s ease-in, background .25s ease-in;
  cursor: pointer;

  &.active,
  &:hover {
    color: #fff;
    background: #352F44;
  }
}

.info {
  display: flex;
  flex-flow: column;
  @media (max-width: 768px) {
    padding-right: 15px;
  }
}
</style>
