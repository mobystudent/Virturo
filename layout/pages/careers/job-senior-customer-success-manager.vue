<template>
  <JobItem>
    <template #title>
      Senior Customer Success Manager
    </template>
    <template #details>
      As part of its expansion, Virturo is looking to strengthen its teams with the hiring of a Senior Customer Success Manager.
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
          <p>
            As a Senior Customer Success Manager at Virturo, you will play a key role in driving customer satisfaction and ensuring the success of our clients within the fintech ecosystem. You will work closely with our customers to understand their needs, provide strategic guidance, and ensure they derive maximum value from Virturo's solutions. The Senior Customer Success Manager will be a trusted advisor, helping customers optimize their experience while contributing to the growth and retention of Virturo’s client base.
          </p>
          <h4>Responsibilities:</h4>
          <ul>
            <li>Build and maintain strong, long-lasting customer relationships, serving as the main point of contact for key accounts.</li>
            <li>Lead the onboarding process for new customers, ensuring smooth transitions and effective product adoption.</li>
            <li>Drive customer retention by identifying opportunities for upselling and cross-selling additional features and services.</li>
          </ul>
          <h4>Qualifications:</h4>
          <ul>
            <li>Minimum of 5 years of experience in customer success or account management.</li>
            <li>Strong communication, problem-solving, and analytical skills, with the ability to translate customer feedback into actionable insights</li>
            <li>A Bachelor’s degree in Business, Finance, or a related field (or equivalent work experience) is preferred.</li>
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
      title: 'Senior Customer Success Manager',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Senior Customer Success Manager - The aim of this role is to support our clients, which are at the heart of everything we do.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Senior Customer Success Manager - Careers ',
        },
      ],
    };
  },
};
</script>
