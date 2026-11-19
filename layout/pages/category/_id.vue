<template>
  <div>
    <TopSection :title="category.name" />
    <ul class="category-list">
      <CategoryItem
        v-for="blog in blogs"
        :key="blog.id"
        :blog="blog"
      />
      <Pagination
        :total-pages="totalPages"
        @callback="curentPage"
      />
    </ul>
  </div>
</template>

<script>
import TopSection from '@/components/Category/TopSection.vue';
import CategoryItem from '@/components/Category/CategoryItem.vue';
import Pagination from '@/components/Category/Pagination.vue';

const BLOG_LIMIT = 6;

export default {
  name: 'Category',
  components: { TopSection, CategoryItem, Pagination },
  layout: 'mainlayout',
  data() {
    return {
      category: {
        id: null,
        name: '',
      },
      blogs: [],
      currentPage: 1,
      itemsPerPage: BLOG_LIMIT,
      resultCount: 0,
      pageNumber: 0,
      totalPages: 0,
      isLoading: false,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  created() {
    this.getCategory();
    this.getList();
  },
  methods: {
    getCategory() {
      fetch(`${process.env.NUXT_ENV_API_URL}/api/categories/${this.id}`).then((res) => res.json()).then((category) => {
        this.category = category;
      });
    },
    getList(pageNumber = 1) {
      this.isLoading = true;
      const params = new URLSearchParams({ page: pageNumber, category_id: this.id });
      fetch(`${process.env.NUXT_ENV_API_URL}/api/blog?${params}`).then((res) => res.json()).then((blogs) => {
        this.blogs = blogs.blogs.data || [];
        this.currentPage = blogs.blogs.current_page || 1;
        this.totalPages = Math.ceil(blogs.blogs.total / BLOG_LIMIT);
        this.isLoading = false;
      });
    },
    curentPage(pageNumber) {
      this.getList(pageNumber);
    },
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
  .category-list {
    display: flex;
    flex-wrap: wrap;
  }
</style>
