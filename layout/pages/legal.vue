<template>
  <LegalContent />
</template>

<script>
import LegalContent from '@/components/Legal/LegalContent.vue';

export default {
  name: 'Legal',
  components: {
    LegalContent,
  },
  layout: 'mainlayout',
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0]; 

    return {
      title: 'Legal Information | Virturo - Policies and Compliance',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Access Virturo’s legal information, including terms, conditions, and compliance policies. Trade with transparency and confidence.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Legal Information | Virturo - Policies and Compliance',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'legal information, trading compliance, Virturo policies, terms and conditions, legal trading',
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
