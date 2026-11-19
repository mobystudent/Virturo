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
    
    return {
      title: 'Virturo Blog | Insights, Trends, and Trading Tips',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Stay informed with Virturo’s blog. Read the latest market trends, trading strategies, and expert insights to sharpen your skills.',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Virturo Blog | Insights, Trends, and Trading Tips',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Virturo blog, trading insights, market trends, trading tips, online trading strategies, financial news',
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
  methods: {
    async fetchData() {
      await this.getCategoryList();
      const params = {
        limit: BLOG_LIMIT,
        site: true,
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
      };
      await this.extendBlogList(params);
    },
  },
};
</script>
