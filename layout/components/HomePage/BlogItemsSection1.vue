<template>
  <section class="section">
    <div class="wrapper">
      <div class="main-block">
        <h2 class="title-main">
          Blog
        </h2>
        <div class="control">
          <span
            class="arrow arrow-prev"
            @click="clickButtonPrev"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector 9"
                d="M6 12L5.43432 12.5657L4.86863 12L5.43432 11.4343L6 12ZM18 11.2C18.4418 11.2 18.8 11.5582 18.8 12C18.8 12.4418 18.4418 12.8 18 12.8L18 11.2ZM11.4343 18.5657L5.43432 12.5657L6.56569 11.4343L12.5657 17.4343L11.4343 18.5657ZM5.43432 11.4343L11.4343 5.43432L12.5657 6.56569L6.56569 12.5657L5.43432 11.4343ZM6 11.2L18 11.2L18 12.8L6 12.8L6 11.2Z"
              />
            </svg>
          </span>
          <span
            class="arrow arrow-next"
            @click="clickButtonNext"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector 9"
                d="M6 12L5.43432 12.5657L4.86863 12L5.43432 11.4343L6 12ZM18 11.2C18.4418 11.2 18.8 11.5582 18.8 12C18.8 12.4418 18.4418 12.8 18 12.8L18 11.2ZM11.4343 18.5657L5.43432 12.5657L6.56569 11.4343L12.5657 17.4343L11.4343 18.5657ZM5.43432 11.4343L11.4343 5.43432L12.5657 6.56569L6.56569 12.5657L5.43432 11.4343ZM6 11.2L18 11.2L18 12.8L6 12.8L6 11.2Z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="posts swiper">
        <div class="swiper-wrapper">
          <!-- <nuxt-link
            v-for="post in posts"
            :key="post.id"
            class="post swiper-slide"
            :to="getLink(post.slug)"
          > -->
          <nuxt-link
            v-for="(post, index) in posts"
            :key="index"
            class="post swiper-slide"
            :to="getLink(post.slug)"
          >
            <picture class="image">
              <img
                :src="outputImage(index)"
                :alt="post.title"
              >
              <!-- <img
                :src="post.image"
                :alt="post.title"
              > -->
            </picture>
            <div class="info">
              <time class="date">{{ cuttingTime(post.published_at) }}</time>
              <h3 class="post-title">
                {{ cuttingTitle(post.title) }}
              </h3>
              <p class="desc">
                {{ cuttingDesc(post.content) }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment';
// import blog from '../../static/img/home/blog/blog.jpg';
// import blog1 from '../../static/img/home/blog/blog2.jpg';
// import blog2 from '../../static/img/home/blog/blog3.jpg';

const TEMPLATE_IMAGE_PATH = '/img/temporary/blog-img-7.jpg';

export default {
  props: {
    showLoadMore: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // posts: [
      //   {
      //     id: 1,
      //     slug: '#',
      //     image: blog,
      //     title: 'Cryptocurrency Exchanges: A Comprehensive Guide',
      //     content: 'Cryptocurrency exchanges serve as the cornerstone of the digital asset market, providing a platform for buying, selling, and trading cryptocurproviding a platform for buying, selling, and ',
      //   },
      //   {
      //     id: 2,
      //     slug: '#',
      //     image: blog1,
      //     title: 'Cryptocurrency Exchanges: A Comprehensive Guide',
      //     content: 'Cryptocurrency exchanges serve as the cornerstone of the digital asset market, providing a platform for buying, selling, and trading cryptocurproviding a platform for buying, selling, and ',
      //   },
      //   {
      //     id: 3,
      //     slug: '#',
      //     image: blog2,
      //     title: 'Cryptocurrency Exchanges: A Comprehensive Guide',
      //     content: 'Cryptocurrency exchanges serve as the cornerstone of the digital asset market, providing a platform for buying, selling, and trading cryptocurproviding a platform for buying, selling, and ',
      //   },
      //   {
      //     id: 4,
      //     slug: '#',
      //     image: blog2,
      //     title: 'Cryptocurrency Exchanges: A Comprehensive Guide',
      //     content: 'Cryptocurrency exchanges serve as the cornerstone of the digital asset market, providing a platform for buying, selling, and trading cryptocurproviding a platform for buying, selling, and ',
      //   },
      // ],
      posts: [],
      education: null,
      monthsNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      swiperInstance: null,
      // isSwiperActive: false,
      emptyImage: TEMPLATE_IMAGE_PATH,
      visiblePostsCount: 3,
    };
  },
  computed: {
    canLoadMore() {
      return this.visiblePostsCount < this.posts.length;
    },
  },
  mounted() {
    this.createdSlider(); // delete later
    // this.handleResize();

    window.addEventListener('resize', this.handleResize);
  },
  async created() {
    const params = new URLSearchParams({ limit: 18 });

    await fetch(`${process.env.NUXT_ENV_API_URL}/api/categories`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error fetching categories: ${res.statusText}`);
        }
        return res.json();
      })
      .then((categories) => categories.categories || [])
      .then((categories) => {
        this.education = categories.find((category) => category.name === 'Tutorials').id;
      })
      .catch((error) => {
        console.error('Error in categories fetch:', error);
      });

    await fetch(`${process.env.NUXT_ENV_API_URL}/api/blog?${params}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error fetching blogs: ${res.statusText}`);
        }
        return res.json();
      })
      .then((blogs) => blogs.blogs.data || [])
      .then((posts) => {
        const catPosts = posts.filter((item) => item.categories.length);
        this.posts = catPosts.filter((item) => item.categories.some((category) => category.id === this.education));
      })
      .then(() => {
        this.createdSlider();
        if (this.swiperInstance) {
          this.swiperInstance.update(); // Обновление слайдера
        }
      })
      .catch((error) => {
        console.error('Error in blog fetch:', error);
      });
  },
  // beforeDestroy() {
  //   window.removeEventListener('resize', this.handleResize);
  //   this.destroySlider();
  // },
  methods: {
    // createdSlider() {
    //   if (!this.isSwiperActive) {
    //     this.swiperInstance = new this.$Swiper('.posts', {
    //       slidesPerView: 3,
    //       spaceBetween: 15,
    //       autoHeight: true,
    //       breakpoints: {
    //         768: {
    //           slidesPerView: 2,
    //           spaceBetween: 15,
    //         },
    //         1024: {
    //           slidesPerView: 3,
    //           spaceBetween: 15,
    //         },
    //       },
    //     });
    //     this.isSwiperActive = true;
    //   }
    // },
    createdSlider() {
      this.swiperInstance = new this.$Swiper('.posts', {
        slidesPerView: 3,
        spaceBetween: 15,
        freeMode: true,
        autoHeight: true,
        breakpoints: {
          360: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
          580: {
            slidesPerView: 2.2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 2.6,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        },
      });
    },
    // destroySlider() {
    //   if (this.swiperInstance && this.isSwiperActive) {
    //     this.swiperInstance.destroy(true, true);
    //     this.swiperInstance = null;
    //     this.isSwiperActive = false;
    //   }
    // },
    // handleResize() {
    //   if (window.innerWidth < 768) {
    //     this.destroySlider();
    //   } else {
    //     this.createdSlider();
    //   }
    // },
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
    // outputImage(index) {
    //   return !this.posts[index].featured_image ? `${this.emptyImage}` : `${process.env.NUXT_ENV_API_URL}${this.posts[index].featured_image}`;
    // },
    outputImage(index) {
      return !this.posts[index].featured_image ? `${this.emptyImage}` : `${process.env.NUXT_ENV_API_URL}${this.posts[index].featured_image}`;
    },
    // cuttingTitle(title) {
    //   return title.length > 80 ? `${title.slice(0, 70)}...` : title;
    // },
    // cuttingDesc(text) {
    //   return text.length > 150 ? `${text.slice(0, 140)}...` : text;
    // },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
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
    // loadMore() {
    //   this.visiblePostsCount += 3; // Load 3 more blogs each time the button is clicked
    // },
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
  justify-content: space-between;
  align-items: flex-end;
  column-gap: 35px;
  margin-bottom: 40px;

  // @media (max-width: 768px) {
  //   max-width: 460px;
  //   margin: 0 auto 40px;
  // }
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

.control {
  display: flex;
  align-items: center;
  column-gap: 15px;

  // @media (max-width: 768px) {
  //   display: none;
  // }
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

.posts {
  width: 100%;
  max-width: 1320px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-bottom: 60px;

    // &.swiper {
    //   display: none;
    // }
  }
}

.swiper-wrapper {
  display: flex;
  align-items: stretch;

  // @media (max-width: 768px) {
  //   flex-flow: column;
  //   align-items: center;
  //   row-gap: 15px;
  // }
}

.post {
  display: flex;
  flex-flow: column;
  row-gap: 15px;
  min-height: 535px;
  padding-bottom: 40px;
  border-bottom: 1px solid #352F44;
  background: #FFF;

  @media (max-width: 768px) {
    padding-bottom: 20px;
    max-width: 460px;
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
  height: 310px;
  flex: 0 0 auto;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 260px;
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
}
</style>
