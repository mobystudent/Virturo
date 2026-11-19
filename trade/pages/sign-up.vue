<template>
  <div>
    <CreateAccountContent />
  </div>
</template>

<script>
import CreateAccountContent from '@/components/CreateAccount/CreateAccountContent.vue';

export default {
  name: 'CreateAccount',
  components: { CreateAccountContent },
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
