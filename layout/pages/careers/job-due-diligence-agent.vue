<template>
  <JobItem>
    <template #title>
      Due Diligence Agent
    </template>
    <template #details>
      As part of its expansion, Virturo is looking to strengthen its teams with the hiring of a Due Diligence Agent.
    </template>
    <template #category>
      Compliance
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
          <p>As a Due Diligence Agent at Virturo, you will be responsible for ensuring that all potential clients, partners, and investments comply with the company’s legal, financial, and regulatory standards. You will conduct thorough background checks, analyze risk factors, and provide actionable insights to mitigate potential liabilities. Your role is critical in safeguarding Virturo’s reputation, minimizing financial risk, and ensuring business operations run smoothly and in full compliance with industry regulations.</p>
          <h4>Responsibilities:</h4>
          <ul>
            <li>Perform detailed investigations on potential clients, partners, and third-party vendors to identify any potential legal, financial, or reputational risks.</li>
            <li>Analyze gathered information from various sources, prepare detailed reports for senior management, and provide actionable recommendations on risk mitigation strategies.</li>
            <li>Stay up-to-date with local and international financial regulations and ensure that all due diligence activities are in compliance with these laws. Update internal protocols as necessary.</li>
          </ul>
          <h4>Qualifications:</h4>
          <ul>
            <li>A Bachelor’s degree in Finance, Law, Business, or a related field.</li>
            <li>Exceptional ability to analyze data and documents, spotting discrepancies, red flags, or irregularities that could pose a risk.</li>
            <li>In-depth understanding of the financial regulations, compliance standards, and due diligence processes relevant to the fintech industry.</li>
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
      title: 'Due Diligence Agent',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Due Diligence Agent - The aim of this role is to support our clients, which are at the heart of everything we do.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Due Diligence Agent - Careers ',
        },
      ],
    };
  },
};
</script>
