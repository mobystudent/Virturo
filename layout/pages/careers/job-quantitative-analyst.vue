<template>
  <JobItem>
    <template #title>
      Quantitative Analyst
    </template>
    <template #details>
      details
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
          <h4>Responsibilities:</h4>
          <ul>
            <li>Oversee compliance with blockchain-related regulations and standards.</li>
            <li>Conduct audits to ensure adherence to blockchain compliance frameworks.</li>
            <li>Collaborate with legal and operational teams to implement blockchain compliance strategies.</li>
          </ul>
          <h4>Qualifications:</h4>
          <ul>
            <li>Bachelor's degree in law, finance, or related field.</li>
            <li>Proven experience in compliance within the blockchain or financial industry.</li>
            <li>Strong understanding of blockchain technology and its regulatory landscape.</li>
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
    return {
      title: 'Quantitative Analyst - Careers',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Quantitative Analyst - The aim of this role is to support our clients, which are at the heart of everything we do.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Quantitative Analyst - Careers',
        },
      ],
    };
  },
};
</script>
