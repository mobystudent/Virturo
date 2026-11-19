<template>
  <JobItem>
    <template #title>
      Trading Analyst
    </template>
    <template #details>
      As part of its expansion, Virturo is looking to strengthen its teams with the hiring of a Trading Analyst.
    </template>
    <template #category>
      Analysis
    </template>
    <template #place>
      London
    </template>
    <template #description>
      <div class="row">
        <div class="col">
          <h3>Role overview</h3>
        </div>
        <div class="col">
          <p>As a Trading Analyst at Virturo, you will play a crucial role in supporting our trading team by analyzing market trends, executing trades, and providing insights to enhance trading strategies. You will work closely with both technical and financial teams to ensure that our trading systems run efficiently and in alignment with market conditions.</p>
          <h4>Responsibilities:</h4>
          <ul>
            <li>Continuously monitor financial markets, identifying trends and opportunities for trading.</li>
            <li>Support the execution of trades across multiple asset classes while ensuring alignment with company strategies.</li>
            <li>Provide regular reports and actionable insights based on data analysis, aiding in decision-making for trading strategies.</li>
          </ul>
          <h4>Qualifications:</h4>
          <ul>
            <li>A Bachelor’s degree in Finance, Economics, or a related field.</li>
            <li>Strong analytical and quantitative skills with experience in market research and data analysis.</li>
            <li>Familiarity with trading platforms, financial modeling, and proficiency in Excel or relevant data analysis tools.</li>
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
      title: 'Trading Analyst - Careers',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Trading Analyst - The aim of this role is to support our clients, which are at the heart of everything we do.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Trading Analyst - Careers',
        },
      ],
    };
  },
};
</script>
