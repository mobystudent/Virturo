<template>
  <div v-if="showContent">
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'Careers',
  layout: 'mainlayout',
  data() {
    return {
      showContent: true,
    };
  },
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0]; 
    
    return {
      title: 'Careers | Virturo - Join Our Team',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Build your career with Virturo. Join our innovative team and make an impact in the world of online trading and finance.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Careers | Virturo - Join Our Team',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Virturo careers, job opportunities, online trading jobs, financial careers, Virturo employment',
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
