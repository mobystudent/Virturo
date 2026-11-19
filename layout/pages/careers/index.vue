<template>
  <div>
    <TopSection />
    <BackgroundPanelSection />
    <AboutSection />
    <WhySection />
    <JobsGridSection />
  </div>
</template>

<script>
import TopSection from '@/components/Careers/TopSection.vue';
import AboutSection from '@/components/Careers/AboutSection.vue';
import BackgroundPanelSection from '@/components/Careers/BackgroundPanelSection.vue';
import WhySection from '@/components/Careers/WhySection.vue';
import JobsGridSection from '@/components/Careers/JobsGridSection.vue';

export default {
  components: {
    TopSection, JobsGridSection, AboutSection, BackgroundPanelSection, WhySection,
  },
  scrollToTop: true,
  head() {
    return {
      title: 'Careers',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The team is growing with a variety of opportunities available!',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Careers',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.container {
  max-width: 1150px;
  padding: 0 15px;
  margin: 0 auto;
}
li {
  list-style: none;
}
</style>
