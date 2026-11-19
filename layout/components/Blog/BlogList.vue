<template>
  <ul class="blog-list">
    <BlogItem
      v-for="blog in blogs"
      :key="blog.id"
      :blog="blog"
    />
  </ul>
</template>

<script>
import BlogItem from './BlogItem.vue';

export default {
  name: 'BlogList',
  components: { BlogItem },
  props: ['blogs'],
};
</script>

<style lang="scss" scoped>
.blog-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    margin: 0;
    margin-right: 16px;
  }
}
</style>
