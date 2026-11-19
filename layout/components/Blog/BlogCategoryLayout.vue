<template>
  <div>
    <TopSection :title="title" />
    <section class="blog">
      <div class="container">
        <div
          v-if="categoryList.length > 0"
          class="block-blog-filter"
        >
          <div class="filter-item">
            <nuxt-link
              :to="{ name: 'blog' }"
              class="filter-link"
            >
              All categories
            </nuxt-link>
          </div>
          <div
            v-for="category in categoryList"
            :key="category.id"
            class="filter-item"
          >
            <nuxt-link
              :to="`/blog/category/${category.slug}/`"
              class="filter-link"
            >
              {{ category.name }}
            </nuxt-link>
          </div>
        </div>
        <div class="blog-inner">
          <div v-if="blogList.length > 0">
            <BlogList :blogs="blogList" />
          </div>
          <div v-else>
            <div class="blog-message">
              No posts in this category. Please check out posts in other categories.
            </div>
          </div>
          <div class="block-load-more">
            <button
              v-if="showLoadMore"
              class="link-load-more"
              @click="loadMore"
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TopSection from '@/components/Blog/TopSection.vue';
import BlogList from '@/components/Blog/BlogList.vue';

export default {
  components: { TopSection, BlogList },
  layout: 'main',
  scrollToTop: true,
  props: {
    title: {
      type: String,
      default: '',
    },
    categoryList: {
      type: Array,
      default: () => [],
    },
    blogList: {
      type: Array,
      default: () => [],
    },
    showLoadMore: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    loadMore() {
      this.$emit('loadMore');
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  background-color: #FFFFFF;

  .blog-inner {
    padding: 0 0 80px;
  }

  .container {
    max-width: 1340px;
    padding: 0 30px;
    box-sizing: border-box;
  }
}

@media (max-width: 1400px) {
  .blog .container {
    padding: 0 20px;
  }
}

@media (max-width: 768px) {
  .blog .container {
    padding: 0;
    padding-left: 16px;
  }
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  li {
    margin: 0 5px;
  }
}

.pagibation-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #0e0523;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:not(.current):hover {
    background-color: #9a9aab;
    color: #ffffff;
  }
}

.current {
  background-color: #000000;
  color: #FFFFFF;
}

.blog-message {
  color: #282929;
  font-size: 18px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
}

/* Filter */
.block-blog-filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;

  .filter-link {
    margin: 40px 0;
    display: flex;
    padding: 12px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: #ECECE4;
    border: 1px solid #ECECE4;
    color: #352F44;
    font-size: 16px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    transition: color 0.4s ease, background-color 0.4s ease;

    &:hover {
      background-color: #E8F2E4;
      border-color: #ECECE4;
    }

    &.nuxt-link-exact-active {
      color: #FFF;
      background-color: #352F44;
    }
  }
}

@media (max-width: 998px) {
  .block-blog-filter {
    margin: 40px 0;
    // margin-right: 16px;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;

    .filter-link {
      margin: 5px 0;
    }
  }

  .filter-item {
    flex: 0 0 auto;
  }
}

.block-load-more {
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-content: center;

  .link-load-more {
    display: flex;
    width: 160px;
    padding: 16px 32px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #157275;
    background-color: #157275;
    color: #FFF;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    transition: background-color 0.5s linear;

    &:hover {
      border: 1px solid #157275;
      background-color: transparent;
      color: #157275;
    }

    &:active {
      border: 1px solid #157275;
      background-color: transparent;
      color: #157275;
    }

    @media (max-width: 768px) {
      margin-top: 24px;
    }
  }

  @media (max-width: 768px) {
    margin: 20px 0 0;
  }
}
</style>
