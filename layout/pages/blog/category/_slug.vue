<template>
  <BlogCategoryLayout
    :blog-list="blogList"
    :category-list="categoryList"
    :show-load-more="showLoadMore"
    :title="title"
    @loadMore="loadMore"
  />
</template>

<script>

import BlogCategoryLayout from '~/components/Blog/BlogCategoryLayout.vue';

const BLOG_LIMIT = 6;

const CATEGORY_META = {
  education: {
    title: 'Trading Education Hub – Learn & Improve',
    description: 'Explore expert trading guides, strategies, and educational insights to enhance your trading skills.',
  },
  research: {
    title: 'In-Depth Trading Research & Market Insights',
    description: 'Stay ahead with expert trading research, market analysis, and financial trends shaping the industry.',
  },
  tutorials: {
    title: 'Trading Tutorials – Step-by-Step Guides',
    description: 'Master trading with detailed tutorials covering strategies, tools, and market techniques.',
  },
  analysis: {
    title: 'Market Analysis & Trading Insights',
    description: 'Get expert market analysis, trends, and forecasts to improve your trading decisions.',
  },
};

export default {
  components: {
    BlogCategoryLayout,
  },
  layout: 'main',
  scrollToTop: true,
  data() {
    return {
      blogList: [],
      currentPage: 1,
      title: 'Blog for Traders',
      showLoadMore: false,
    };
  },

  async fetch() {
    await this.fetchData();
  },
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0]; 
    const slug = this.$route.params.slug || '';

    const meta = CATEGORY_META[slug] || {
      title: 'Blog for Traders - Get the Best Tips to Invest like a PRO',
      description: 'In this blog you can find information about trading Crypto, Forex and Commodities. Everything you need to know about Trading.',
    };
    
    return {
      title: 'Blog for Traders - Get the Best Tips to Invest like a PRO ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: meta.description,
        },
        {
          hid: 'title',
          name: 'title',
          content: meta.title,
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
  computed: {
    categoryList() {
      return this.$store.state.categories.categoryList;
    },
  },
  watch: {
    '$route.query': '$fetch',
  },
  methods: {
    async fetchData() {
      await this.getCategoryList();
      const params = {
        limit: BLOG_LIMIT,
        site: true,
        category_slug: this.$route.params.slug,
      };

      await this.extendBlogList(params);
    },

    async getCategoryList() {
      const params = new URLSearchParams({ site: true });
      const response = await fetch(`${process.env.NUXT_ENV_API_URL}/api/categories?${params}`);
      const responseData = await response.json();
      this.$store.commit('categories/setCategoryList', responseData.categories);
    },

    async extendBlogList(params) {
      const response = await fetch(`${process.env.NUXT_ENV_API_URL}/api/blog?${new URLSearchParams(params)}`);
      const responseData = await response.json();
      this.blogList = [...this.blogList, ...responseData.blogs.data];
      this.currentPage = responseData.blogs.current_page || 1;

      this.showLoadMore = !!responseData.blogs.next_page_url;
    },

    async loadMore() {
      const params = {
        limit: BLOG_LIMIT,
        page: this.currentPage + 1,
        site: true,
        category_slug: this.$route.params.slug,
      };
      await this.extendBlogList(params);
    },
  },
};
</script>
