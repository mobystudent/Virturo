<template>
  <div>
    <LoginContent />
  </div>
</template>

<script>
import LoginContent from '@/components/Login/LoginContent.vue';

export default {
  name: 'Login',
  components: { LoginContent },
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8093'; 
    const path = this.$route.path.split('?')[0]; 
    
    return {
      title: 'Virturo - A World of Opportunities',
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
