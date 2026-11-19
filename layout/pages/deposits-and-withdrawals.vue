<template>
  <div>
    <TopSection />
    <InfoSection />
    <ZebraContent2 />
    <InfoSection1 />
    <ZebraContent1 />
    <InfoSection2 />
    <ZebraContent3 />
    <InfoSection3 />
  </div>
</template>

<script>

import TopSection from '@/components/DepositsAndWithdrawals/TopSection.vue';
import InfoSection from '@/components/DepositsAndWithdrawals/InfoSection.vue';
import InfoSection1 from '@/components/DepositsAndWithdrawals/InfoSection1.vue';
import InfoSection2 from '@/components/DepositsAndWithdrawals/InfoSection2.vue';
import InfoSection3 from '@/components/DepositsAndWithdrawals/InfoSection3.vue';
import ZebraContent1 from '@/components/DepositsAndWithdrawals/ZebraContent1.vue';
import ZebraContent2 from '@/components/DepositsAndWithdrawals/ZebraContent2.vue';
import ZebraContent3 from '@/components/DepositsAndWithdrawals/ZebraContent3.vue';

export default {
  name: 'DepositsAndWithdrawals',
  components: {
    TopSection,
    InfoSection,
    ZebraContent1,
    ZebraContent2,
    InfoSection1,
    InfoSection2,
    InfoSection3,
    ZebraContent3,
  },
  layout: 'mainlayout',
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0]; 

    return {
      title: 'Deposits & Withdrawals | Virturo - Secure and Fast Transactions',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Experience smooth deposits and withdrawals at Virturo. Choose from multiple payment options with trusted security measures for peace of mind.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Deposits & Withdrawals | Virturo - Secure and Fast Transactions',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Virturo deposits, fast withdrawals, secure payments, online trading transactions, trading fund transfers',
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
