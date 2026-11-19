<template>
  <section class="section">
    <div class="wrapper">
      <div class="main-block">
        <div class="heading">
          <h2 class="title-main">
            Learn the stock market
          </h2>
          <p class="description">
            By the end of this video, you'll have a foundational grasp of stock market essentials
            and be well-equipped to start your investing journey. So grab a notepad, sit back, and let's dive into the
            world of stocks!
          </p>
        </div>
        <!-- <div class="control">
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
        </div> -->

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

const TEMPLATE_IMAGE_PATH = '/img/temporary/blog-img-7.jpg';

export default {
  data() {
    return {
      posts: [],
      screenWidth: 0,
      education: null,
      monthsNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
      swiperInstance: null,
      emptyImage: TEMPLATE_IMAGE_PATH,
    };
  },
  mounted() {
    this.createdSlider(); // delete later
    // this.handleResize();
    if (process.client) {
      this.updateScreenWidth();
      window.addEventListener('resize', this.updateScreenWidth);
    }

    //  window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.updateScreenWidth);
    }
  },
  async created() {
    const params = new URLSearchParams({ limit: 18 });

    // await fetch(`${process.env.NUXT_ENV_API_URL}api/categories`)
    //   .then((res) => res.json())
    //   .then((categories) => categories.categories || [])
    //   .then((categories) => { this.education = categories.find((category) => category.name === 'Education').id; });

    await fetch(`${process.env.NUXT_ENV_API_URL}/api/categories`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error fetching categories: ${res.statusText}`);
        }
        return res.json();
      })
      .then((categories) => categories.categories || [])
      .then((categories) => {
        this.education = categories.find((category) => category.name === 'Education').id;
      })
      .catch((error) => {
        console.error('Error in categories fetch:', error);
      });

    // await fetch(`${process.env.NUXT_ENV_API_URL}api/blog?${params}`)
    //   .then((res) => res.json())
    //   .then((blogs) => blogs.blogs.data || [])
    //   .then((posts) => {
    //     const catPosts = posts.filter((item) => item.categories.length);
    //     this.posts = catPosts.filter((item) => item.categories.filter((category) => category.id === this.education).length);
    //   })
    //   .then(() => this.createdSlider());

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
      })
      .catch((error) => {
        console.error('Error in blog fetch:', error);
      });
  },
  methods: {
    createdSlider() {
      this.swiperInstance = new this.$Swiper('.posts', {
        slidesPerView: 3,
        // spaceBetween: 15,
        freeMode: true,
        breakpoints: {
          210: {
            slidesPerView: 1,
            // spaceBetween: 5,
          },
          360: {
            slidesPerView: 1,
            // spaceBetween: 5,
          },
          580: {
            slidesPerView: 1,
            // spaceBetween: 5,
          },
          768: {
            slidesPerView: 2,
            // spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            // spaceBetween: 15,
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
    // outputImage(index) {
    //   return !this.posts[index].featured_image ? `${this.emptyImage}` : `${process.env.NUXT_ENV_API_URL}${this.posts[index].featured_image}`;
    // },
    // cuttingTitle(title) {
    //   return title.length > 80 ? `${title.slice(0, 70)}...` : title;
    // },
    // cuttingDesc(text) {
    //   return text.length > 220 ? `${text.slice(0, 210)}...` : text;
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
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 60px 0 60px;
  overflow: hidden;
}

.wrapper {
  max-width: 1340px;
  padding: 0 30px 0;
  margin: 0 auto;
  position: relative;
  @media (max-width: 992px) {
    padding: 0 15px 0;
  }
}

// .heading {
//   max-width: 540px;
// }

.description {
  color: #000;
  font: 400 16px/140% 'Poppins';
  @media (max-width: 992px) {
    margin-bottom: 40px;
    line-height: 150%; /* 24px */
  }
}

.main-block {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  column-gap: 35px;
  margin-bottom: 40px;
}

.heading {
  max-width: 632px;
  @media (max-width: 992px) {
    max-width: none;
  }
}

.title-main {
  margin-bottom: 32px;
  font: 500 52px/112% 'Poppins', sans-serif;
  letter-spacing: -0.52px;
  color: #352F44;
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
    background: rgba(236, 236, 228, 0.60);

    // svg {
    //   fill: #fff;
    // }
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
  margin: 0 -5px;
  overflow: hidden;
  @media (max-width: 992px) {
    margin: 0;
  }
}

.swiper-wrapper {
  display: flex;
  column-gap: 15px;
  margin: 0 5px 10px;
  @media (max-width: 992px) {
    margin: 0 0 10px;
    column-gap: 0;
  }
}

.post {
  display: flex;
  flex-flow: column;
  row-gap: 16px;
  max-width: 415px;
  min-height: 535px;
  border-bottom: 1px solid #352F44;
  background: #FFF;

  @media (max-width: 992px) {
    max-width: none;
  }

  @media (max-width: 768px) {
    min-height: 458px;
  }

  &:hover {
    img {
      transform: scale(1.1);
      @media (max-width: 992px) {
        transform: scale(1);
      }
    }
  }
}

.image {
  display: inline-flex;
  width: 100%;
  height: 310px;
  overflow: hidden;

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
  row-gap: 8px;
}

.date {
  font: 12px/16px 'Poppins', sans-serif;
  color: #282929;
}

.post-title {
  font: 500 20px/28px 'Poppins', sans-serif;
  color: #282929;
  margin-bottom: 8px;
}

.desc {
  font: 16px/22px 'Poppins', sans-serif;
  color: #282929;
}

@media (max-width: 992px) {
 .section {
   padding: 40px 0 40px;
 }

 .main-block {
   flex-flow: column;
 }

 .title-main {
   font-size: 38px;
   line-height: 42px;
 }

 .image {
   height: 200px;
 }

 .info {
   row-gap: 8px;
   padding: 20px 15px 35px;
 }

 .desc {
   font-size: 14px;
 }

 .control {
   column-gap: 10px;
 }

 .arrow {
   width: 45px;
   height: 45px;
 }
}

@media (max-width: 768px) {
 .section {
   padding: 40px 0 20px;
 }

 .title-main {
   margin-bottom: 24px;
   font-size: 32px;
   line-height: 140%; /* 44.8px */
 }

 .image {
   height: 257px;
 }

 .info {
   padding: 1px 0 0;
 }

 .date {
   font-size: 12px;
   line-height: 140%; /* 16.8px */
 }

 .post-title {
  margin-bottom: 8px;
  font-size: 20px;
  line-height: 140%; /* 28px */
 }

 .desc {
  font-size: 16px;
  line-height: 140%; /* 22.4px */
 }

 .arrow {
   width: 40px;
   height: 40px;
 }
}
</style>
