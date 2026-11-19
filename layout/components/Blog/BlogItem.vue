<template>
  <li class="blog-item">
    <nuxt-link :to="link">
      <div class="blog-item-img">
        <img
          :src="loadImage()"
          :alt="blog.title"
        >
      </div>
      <div class="blog-item-info">
        <span class="blog-item-date">{{ setFormattedDate(blog.published_at || "") }}</span>
        <h3 class="blog-item-title">
          {{ truncatedTitle }}
        </h3>
        <p class="blog-item-description">
          {{ sanitizedTruncatedContent }}
        </p>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
import moment from 'moment';

const TEMPLATE_IMAGE_PATH = '/img/temporary/blog-img-7.jpg';

export default {
  name: 'BlogItem',
  props: ['blog'],
  data() {
    return {
      link: `/blog/${this.blog.slug.replace(/\/?$/, '/')}`,
      imagePath: `${this.blog.featured_image}`,
    };
  },
  computed: {
    truncatedTitle() {
      const limit = 70;
      if (this.blog.title.length > limit) {
        return `${this.blog.title.substring(0, limit)}...`;
      }
      return this.blog.title;
    },
    sanitizedTruncatedContent() {
      const limit = 140;
      let truncatedContent = this.blog.content.substring(0, limit);
      // Remove &nbsp; if present
      truncatedContent = truncatedContent.replace(/&nbsp;/g, '');
      if (this.blog.content.length > limit) {
        truncatedContent += '...';
      }
      return truncatedContent;
    },
  },
  methods: {
    loadImage() {
      if (this.imagePath === 'null' || !this.imagePath) {
        return TEMPLATE_IMAGE_PATH;
      }
      return `${process.env.NUXT_ENV_API_URL}${this.imagePath}`;
    },
    setFormattedDate(date) {
      return moment(date).format('DD MMM YYYY');
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-item {
  display: flex;
  flex-flow: column;
  row-gap: 16px;
  width: calc((100% - 32px) / 3);
  border-bottom: 1px solid #352F44;
  background: #FFF;

  &:hover {
    img {
      transform: scale(1.1);
      @media (max-width: 992px) {
        transform: scale(1);
      }
    }
  }
}

.blog-item-img {
  display: block;
  position: relative;
  height: 312px;
  width: 100%;
  padding-top: 44%;
  overflow: hidden;
  @media (max-width: 992px) {
    height: 257px;
  }

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
}

.blog-item-date {
  margin-top: 16px;
  margin-bottom: 8px;
  color: #282929;
  font: 12px/16px 'Poppins', sans-serif;
  font-weight: 400;
}

.blog-item-title {
  margin-bottom: 16px;
  color: #282929;
  font: 500 20px/28px 'Poppins', sans-serif;
}

.blog-item-description {
  padding-bottom: 40px;
  color: #282929;
  font: 16px/22px 'Poppins', sans-serif;

  /* 24px */
  @media (max-width: 992px) {
    padding-bottom: 20px;
  }
}

.blog-item-btn {
  display: block;
  width: fit-content;
  min-width: 128px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  margin-top: auto;
  padding: 8px 20px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 20px;
  line-height: 1.8;
  border: 1px solid #000000;
  transition: all 0.3s ease;

  &:hover {
    background-color: #34FEC8;
    color: #000000;
    border-color: #34FEC8;
  }
}

@media (max-width: 1100px) {
  .blog-item {
    width: calc((100% - 16px) / 2);
  }
}

@media (max-width: 680px) {
  .blog-item {
    width: 100%;
  }
}
</style>
