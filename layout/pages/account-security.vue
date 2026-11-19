<template>
  <div v-if="showContent">
    <TopSection />
    <UnderstandingRisks />
    <CommitmentSecurity />
    <GlobalPerspective />
    <Priority />
    <ZebraContent1 />
    <AwarenessAndVigilance />
    <Assurance />
    <ProtectPersonalData />
    <InfoSection />
    <EnhancingSecurity />
    <ZebraContent2 />
    <GridImages />
    <DigitalWorld />
    <AccordionSection />
  </div>
</template>

<script>
import TopSection from '@/components/AccountSecurity/TopSection.vue';
import AccordionSection from '@/components/AccountSecurity/AccordionSection.vue';
import CommitmentSecurity from '@/components/AccountSecurity/CommitmentSecurity.vue';
import EnhancingSecurity from '@/components/AccountSecurity/EnhancingSecurity.vue';

import GlobalPerspective from '@/components/AccountSecurity/GlobalPerspective.vue';
import InfoSection from '@/components/AccountSecurity/InfoSection.vue';
import AwarenessAndVigilance from '@/components/AccountSecurity/AwarenessAndVigilance.vue';
import Assurance from '@/components/AccountSecurity/Assurance.vue';
import DigitalWorld from '@/components/AccountSecurity/DigitalWorld.vue';
import GridImages from '@/components/AccountSecurity/GridImages.vue';
import ZebraContent1 from '@/components/AccountSecurity/ZebraContent1.vue';
import ZebraContent2 from '@/components/AccountSecurity/ZebraContent2.vue';
import Priority from '@/components/AccountSecurity/Priority.vue';
import ProtectPersonalData from '@/components/AccountSecurity/ProtectPersonalData.vue';
import UnderstandingRisks from '@/components/AccountSecurity/UnderstandingRisks.vue';

export default {
  name: 'TradingAccounts',
  components: {
    TopSection,
    AccordionSection,
    CommitmentSecurity,
    GlobalPerspective,
    EnhancingSecurity,
    InfoSection,
    AwarenessAndVigilance,
    Assurance,
    DigitalWorld,
    GridImages,
    ZebraContent1,
    ZebraContent2,
    Priority,
    ProtectPersonalData,
    UnderstandingRisks,
  },
  layout: 'mainlayout',
  data() {
    return {
      showContent: true,
    };
  },
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0]; 
    
    return {
      title: 'Account Security | Virturo - Your Safety, Our Priority',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Protect your trading account with Virturo’s cutting-edge security measures, including encryption, two-factor authentication, and real-time monitoring.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Account Security | Virturo - Your Safety, Our Priority',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'account security, secure trading, Virturo safety features, two-factor authentication, online trading protection',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `${baseUrl}${path}`
        }
      ]
    };
  },
};
</script>

<style lang="scss">
  .container {
    max-width: 1080px;
    padding: 0 24px;
    margin: 0 auto;
    box-sizing: content-box;
  }
</style>
