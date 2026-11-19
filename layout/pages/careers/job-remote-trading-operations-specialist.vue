<template>
  <JobItem>
    <template #title>
      Remote Trading Operations Specialist
    </template>
    <template #details>
      As part of its expansion, Virturo is looking to strengthen its teams with the hiring of a Remote Trading Operations Specialist.
    </template>
    <template #category>
      Trading
    </template>
    <template #place>
      London / Remote
    </template>
    <template #description>
      <div class="row">
        <div class="col">
          <h3>Role overview</h3>
        </div>
        <div class="col">
          <p>As a Remote Trading Operations Specialist at Virturo, you will be at the heart of ensuring the smooth and efficient execution of trades in a fast-paced, dynamic trading environment. Your expertise in trading operations, combined with your ability to work remotely, will allow you to monitor, troubleshoot, and optimize trading systems, ensuring that all transactions are completed flawlessly. This role is vital to our ability to scale, improve operational efficiency, and manage risk in global markets.</p>
          <h4>Responsibilities:</h4>
          <ul>
            <li>Monitor and support the live execution of trades, troubleshooting issues in real time and ensuring that all trades are processed correctly across multiple markets.</li>
            <li>Work closely with both the trading and technical teams to identify and resolve any operational disruptions. Be proactive in managing issues before they affect trading outcomes.</li>
            <li>Evaluate the performance of trading systems and workflows, offering insights and recommendations to improve the efficiency, accuracy, and scalability of operations.</li>
          </ul>
          <h4>Qualifications:</h4>
          <ul>
            <li>A Bachelor’s degree in Finance, Business, or a related discipline. A certification in financial markets or operations is a plus.</li>
            <li>Previous experience in trading operations, trade support, or financial technology, with a strong understanding of trading platforms and financial instruments.</li>
            <li>Proficiency with trading systems and financial software (e.g., Bloomberg, MetaTrader, etc.), and knowledge of market data feeds and operational workflows.</li>
          </ul>
        </div>
      </div>
    </template>
  </JobItem>
</template>

<script>
import JobItem from '@/components/Careers/JobItem.vue';

export default {
  components: { JobItem },
  scrollToTop: true,
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0]; 
    
    return {
      title: 'Remote Trading Operations Specialist - Careers ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Remote Trading Operations Specialist - The aim of this role is to support our clients, which are at the heart of everything we do.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Remote Trading Operations Specialist - Careers ',
        },
      ],
    };
  },
};
</script>
