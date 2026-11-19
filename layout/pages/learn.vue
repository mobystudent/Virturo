<template>
  <div
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
    LearnSlider,
    PlatformGuidesLibrary,
  },
  layout: 'mainlayout',
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0]; 
    
    return {
      title: 'Learn Trading | Virturo - Trading Education for All Levels',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Unlock trading knowledge with Virturo’s educational resources. From beginner guides to expert strategies, expand your skills and confidence.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Learn Trading | Virturo - Trading Education for All Levels',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'learn trading, trading tutorials, beginner trading guide, advanced trading tips, trading strategies, Virturo education',
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
