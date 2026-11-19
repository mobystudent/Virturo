<template>
  <div>
    <TopSection />
    <ContactSection />
    <CAQSection />
    <SubscribeSection />
    <QuestionFormSection />
  </div>
</template>

<script>
import TopSection from '@/components/Support/TopSection.vue';
import ContactSection from '@/components/Support/ContactSection.vue';
import CAQSection from '@/components/Support/CAQSection.vue';
import SubscribeSection from '@/components/common/SubscribeSection.vue';
import QuestionFormSection from '@/components/Support/QuestionFormSection.vue';

export default {
  name: 'SupportPage',
  components: {
    TopSection,
    ContactSection,
    CAQSection,
    SubscribeSection,
    QuestionFormSection,
  },
  layout: 'mainlayout',
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0];

    return {
      title: 'Support Center | Virturo - We’re Here to Help',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Virturo’s Support Center is available round the clock for all your queries. Get expert assistance for trading, accounts, and more.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Support Center | Virturo - We’re Here to Help',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Virturo support, customer service, trading help center, trading support, online trading assistance',
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
