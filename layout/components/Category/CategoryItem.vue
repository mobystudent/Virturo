<template>
  <li class="blog-item">
    <nuxt-link
      class="blog-item-img"
      :to="link"
    >
      <img
        :src="loadImage()"
        :alt="blog.title"
      >
    </nuxt-link>
    <div class="blog-item-info">
      <span class="blog-item-date">{{ blog.published_at || "" }}</span>
      <h3 class="blog-item-title">
        <nuxt-link :to="link">
          {{ blog.title }}
        </nuxt-link>
      </h3>
      <p class="blog-item-description">
        {{ blog.content }}
      </p>
      <nuxt-link
        class="blog-item-btn"
        :to="link"
      >
        Read More
      </nuxt-link>
    </div>
  </li>
</template>

<script>
const TEMPLATE_IMAGE_PATH = '/img/temporary/blog-img-7.jpg';

export default {
  name: 'BlogItem',
  props: ['blog'],
  data() {
    return {
      link: `/blog/${this.blog.slug}`,
      imagePath: `${this.blog.featured_image}`,
    };
  },
  methods: {
    loadImage() {
      if (this.imagePath === 'null' || !this.imagePath) {
        return TEMPLATE_IMAGE_PATH;
      }
      return `${process.env.NUXT_ENV_API_URL}${this.imagePath}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-item {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.22);
  margin: 0 15px 30px;
  width: calc((100% - 90px) / 3);
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}

.blog-item-img {
  display: block;
  position: relative;
  height: 170px;
  width: 100%;
  padding-top: 44%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transition: 0.5s;
  }
}

.blog-item-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px 15px 25px;
}

.blog-item-date {
  color: #9a9aab;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.blog-item-title {
  color: #0e0523;
  font-size: 20px;
  font-weight: 700;
  line-height: 23px;
  padding: 15px 0;

  a {
    color: inherit;
  }
}

.blog-item-description {
  color: #9a9aab;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding-bottom: 10px;
}

.blog-item-btn {
  display: block;
  width: fit-content;
  min-width: 117px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  margin-top: auto;
  padding: 8px 20px;
  background-color: #242c48;
  color: #ffffff;
  border-radius: 50px;
  line-height: 1.8;
  border: 1px solid #242c48;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    color: #f4503e;
    border-color: #f4503e;
  }
}

@media (max-width: 1100px) {
  .blog-item {
    width: calc((100% - 60px) / 2);
  }

  .blog-item-img {
    height: 147px;
  }
}

@media (max-width: 680px) {
  .blog-item {
    width: 100%;
    margin: 0 0 30px;
  }
}
</style>
