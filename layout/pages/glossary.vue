<template>
  <div
    v-if="showContent"
    class="page-wrapper"
  >
    <TopSection />
    <LearnSlider />
    <GlossaryContent />
    <PlatformGuidesLibrary />
  </div>
</template>
<script>
import TopSection from '@/components/Glossary/TopSection.vue';
import LearnSlider from '@/components/Glossary/LearnSlider.vue';
import GlossaryContent from '@/components/Glossary/GlossaryContent.vue';
import PlatformGuidesLibrary from '@/components/Glossary/PlatformGuidesLibrary.vue';

export default {
  name: 'Glossary',
  components: {
    TopSection,
    GlossaryContent,
    PlatformGuidesLibrary,
    LearnSlider,
  },
  layout: 'mainlayout',
  data() {
    return {
      showContent: true,
    };
  },
  head() {
    return {
      title: 'Trading Glossary - Trading Terms and Definitions',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Complete Glossary about trading terms and definitions. Expand your knowledge about the most important trading and financial terms.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Trading Glossary - Trading Terms and Definitions ',
        },
      ],
    };
  },
  // mounted() {
  //   return this.$route.replace('404');
  // },
};
</script>
