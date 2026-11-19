<template>
  <JobItem>
    <template #title>
      Analytics Manager - Marketing Acquisition
    </template>
    <template #details>
      As part of its expansion, Virturo is looking to strengthen its teams with the hiring of an Analytics Manager - Marketing Acquisition.
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
          <p>At Virturo, we are seeking an experienced Analytics Manager - Marketing Acquisition to drive data-driven strategies that fuel our growth. As part of our dynamic marketing team, you will be responsible for analyzing the performance of customer acquisition campaigns, refining strategies, and ensuring our marketing efforts are optimized for maximum efficiency. Your work will directly impact Virturo’s ability to scale and acquire customers cost-effectively across various channels.</p>
          <h4>Responsibilities:</h4>
          <ul>
            <li>Analyze marketing campaign performance across digital channels (PPC, SEO, email, social media, etc.), providing actionable insights and recommendations to optimize conversion rates and customer acquisition cost.</li>
            <li>Collaborate with the marketing and product teams to design and implement data-driven acquisition strategies, using A/B testing, segmentation, and predictive modeling to enhance campaign performance.</li>
            <li>Create reports and forecasts based on historical performance and market trends.</li>
          </ul>
          <h4>Qualifications:</h4>
          <ul>
            <li>A Bachelor’s degree in Marketing, Data Science, Statistics, Economics, or a related field.</li>
            <li>At least 3 years of experience in digital marketing analytics, preferably in customer acquisition or performance marketing roles.</li>
            <li>Ability to transform complex data sets into clear, actionable insights that inform business strategies.</li>
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
      title: 'Analytics Manager - Marketing Acquisition',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Analytics Manager - Marketing Acquisition - The aim of this role is to support our clients, which are at the heart of everything we do.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Analytics Manager - Marketing Acquisition - Careers ',
        },
      ],
    };
  },
};
</script>
