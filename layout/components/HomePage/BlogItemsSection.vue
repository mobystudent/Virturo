<template>
  <section class="section">
    <div class="wrapper">
      <div class="main-block">
        <h2 class="title-main">Blog</h2>
        <div class="control">
          <span class="arrow arrow-prev" @click="clickButtonPrev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Vector 9"
                    d="M6 12L5.43432 12.5657L4.86863 12L5.43432 11.4343L6 12ZM18 11.2C18.4418 11.2 18.8 11.5582 18.8 12C18.8 12.4418 18.4418 12.8 18 12.8L18 11.2ZM11.4343 18.5657L5.43432 12.5657L6.56569 11.4343L12.5657 17.4343L11.4343 18.5657ZM5.43432 11.4343L11.4343 5.43432L12.5657 6.56569L6.56569 12.5657L5.43432 11.4343ZM6 11.2L18 11.2L18 12.8L6 12.8L6 11.2Z" />
            </svg>
          </span>
          <span class="arrow arrow-next" @click="clickButtonNext">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Vector 9"
                    d="M6 12L5.43432 12.5657L4.86863 12L5.43432 11.4343L6 12ZM18 11.2C18.4418 11.2 18.8 11.5582 18.8 12C18.8 12.4418 18.4418 12.8 18 12.8L18 11.2ZM11.4343 18.5657L5.43432 12.5657L6.56569 11.4343L12.5657 17.4343L11.4343 18.5657ZM5.43432 11.4343L11.4343 5.43432L12.5657 6.56569L6.56569 12.5657L5.43432 11.4343ZM6 11.2L18 11.2L18 12.8L6 12.8L6 11.2Z" />
            </svg>
          </span>
        </div>
      </div>
      <div class="posts swiper">
        <div class="swiper-wrapper">
          <nuxt-link class="post swiper-slide" v-for="(post, index) in posts" :key="index" :to="getLink(post.slug)">
            <picture class="image">
              <img :src="outputImage(index)" :alt="post.title">
            </picture>
            <div class="info">
              <time class="date">{{ cuttingTime(post.published_at) }}</time>
              <h3 class="post-title">{{ cuttingTitle(post.title) }}</h3>
              <p class="desc">{{ cuttingDesc(post.content) }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment';

const TEMPLATE_IMAGE_PATH = '/img/temporary/blog-img-7.jpg';

export default {
  data() {
    return {
      posts: [],
      education: null,
      monthsNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      swiperInstance: null,
      emptyImage: TEMPLATE_IMAGE_PATH,
    };
  },
  async created() {
    const params = new URLSearchParams({ limit: 18 });

    await fetch(`${process.env.NUXT_ENV_API_URL}/api/categories`)
      .then((res) => res.json())
      .then((categories) => categories.categories || [])
      .then((categories) => {
        const education = categories.find((category) => category.name === 'Education');
        this.education = education ? education.id : null;
      });

    await fetch(`${process.env.NUXT_ENV_API_URL}/api/blog?${params}`)
      .then((res) => res.json())
      .then((blogs) => (blogs && blogs.blogs && blogs.blogs.data ? blogs.blogs.data : []))
      .then((posts) => {
        const catPosts = posts.filter((item) => item.categories.length);
        const postWithoutEdu = catPosts.filter((item) => item.categories.filter((category) => category.id !== this.education).length);
        this.posts = postWithoutEdu.filter((item, i) => i < 6);
      })
      .then(() => this.posts.length && this.createdSlider());
  },
  methods: {
    createdSlider() {
      this.swiperInstance = new this.$Swiper('.posts', {
        slidesPerView: 3,
        spaceBetween: 15,
        autoHeight: true,
        breakpoints: {
          240: {
            slidesPerView: 'auto',
            spaceBetween: 15,
          },
          360: {
            slidesPerView: 'auto',
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 'auto',
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        },
      });
    },
    clickButtonPrev() {
      this.swiperInstance.slidePrev();
    },
    clickButtonNext() {
      this.swiperInstance.slideNext();
    },
    animateSlide(index) {
      this.swiperInstance.slideTo(index, 0);
    },
    slideTo(index) {
      const lastIndex = this.posts.length - 1;

      this.animateSlide(index > lastIndex ? 0 : index);
    },
    cuttingTime(fullTime) {
      return moment(fullTime).format('DD MMM YYYY');
    },
    outputImage(index) {
      return !this.posts[index].featured_image ? `${this.emptyImage}` : `${process.env.NUXT_ENV_API_URL}${this.posts[index].featured_image}`;
    },
    cuttingTitle(title) {
      if (this.screenWidth < 768) {
        return title.length > 60 ? `${title.slice(0, 50)}...` : title;
      }
      return title.length > 70 ? `${title.slice(0, 60)}...` : title;
    },

    cuttingDesc(text) {
      if (this.screenWidth < 768) {
        return text.length > 90 ? `${text.slice(0, 100)}...` : text;
      }
      return text.length > 150 ? `${text.slice(0, 140)}...` : text;
    },
    getLink(link) {
      return `/blog/${link}/`;
    },
  },
};
</script>

<style scoped lang="scss">
.section {
  padding: 60px 0;

  @media (max-width: 1200px) {
    padding: 50px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }
}

.main-block {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 25px 35px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    max-width: 460px;
    margin: 0 auto 40px;
  }
}

.title-main {
  font: 500 52px/58px 'Poppins', sans-serif;
  letter-spacing: -.1px;
  color: #352F44;

  @media (max-width: 1024px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    font-size: 32px;
    line-height: 44px;
  }
}

.posts {
  width: 100%;
  overflow: hidden;
 
  @media (max-width: 1024px) {
    max-width: 1320px;
    overflow: visible;
  }
}

.swiper-wrapper {
  display: flex;
  align-items: stretch;

  @media (max-width: 768px) {
    // flex-flow: column;
    // align-items: center;
    row-gap: 15px;
  }
}

.post {
  display: flex;
  flex-flow: column;
  max-width: 430px;
  height: auto;
  row-gap: 15px;
  min-height: 535px;
  padding-bottom: 40px;
  border-bottom: 1px solid #352F44;
  background: #FFF;
  overflow: hidden;
  transition: box-shadow .25s ease-in;

  @media (max-width: 1024px) {
    width: 340px;
  }

  @media (max-width: 768px) {
    width: 322px;
    height: auto;
    min-height: 497px;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
}

.image {
  display: inline-flex;
  width: 100%;
  height: 312px;
  flex: 0 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 257px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .25s ease-in;
  }
}

.info {
  display: flex;
  flex-flow: column;
  row-gap: 10px;
}

.date {
  font: 12px/16px 'Poppins', sans-serif;
  color: #282929;
}

.post-title {
  font: 500 20px/28px 'Poppins', sans-serif;
  color: #282929;
  margin-bottom: 5px;
}

.desc {
  font: 16px/22px 'Poppins', sans-serif;
  color: #282929;
  @media (max-width: 768px) {
    min-height: 88px;
  }
}

.control {
  display: flex;
  align-items: center;
  column-gap: 15px;
}

.arrow {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ECECE4;
  cursor: pointer;
  transition: background .25s ease-in;

  &:hover {
    background: #D3F5EC;

    svg {
      fill: #352F44;
    }
  }

  &-next {
    transform: rotate(180deg);
  }

  path {
    fill: #352F44;
    transition: fill .25s ease-in;
  }
}

@media (max-width: 992px) {
  .control {
    column-gap: 10px;
  }

  .arrow {
    width: 45px;
    height: 45px;
  }
}
</style>
