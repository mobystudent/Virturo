<template>
  <div>
    <section class="single-blog">
      <div class="single-blog-top">
        <div
          class="top-bg"
          :style="{ backgroundImage: 'url(' + loadImage() + ')' }"
        >
          <div class="bg-dark" />
          <!-- <img
            :src="loadImage()"
            :alt="blog.name || 'Trading'"
          > -->
          <div class="container">
            <span
              v-if="blog.published_at"
              class="date"
            >
              {{ setFormattedDate(blog.published_at || "") }}</span>
            <h1 class="title">
              {{ blog.title }}
            </h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="inner">
          <div class="single-blog-content">
            <!-- <div class="img">
              <img
                :src="loadImage()"
                :alt="blog.name || 'Trading Assets'"
              >
            </div> -->
            <div class="content">
              <h1 class="title">
                {{ blog.title }}
              </h1>
              <span
                v-if="blog.published_at"
                class="date"
              >
                {{ setFormattedDate(blog.published_at || "") }}</span>
              <div
                class="single-blog-text"
                v-html="blog.content"
              />
              <div class="wrap-btn">
                <a
                  :href="link"
                  class="btn-trade"
                >Trade with Virturo</a>
              </div>
              <div class="block-social">
                <ul class="social-list">
                  <li>
                    <a
                      class="icon icon-twitter"
                      rel="nofollow"
                      @click="openInNewWindow(twitter)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18.3263 1.90393H21.6998L14.3297 10.3274L23 21.7899H16.2112L10.894 14.838L4.80995 21.7899H1.43443L9.31743 12.78L1 1.90393H7.96111L12.7674 8.25826L18.3263 1.90393ZM17.1423 19.7707H19.0116L6.94539 3.81706H4.93946L17.1423 19.7707Z"
                          fill="#282929"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      class="icon icon-facebook"
                      rel="nofollow"
                      @click="openInNewWindow(facebook)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_2060_7373)">
                          <path
                            d="M12 0C5.37264 0 0 5.37264 0 12C0 17.6275 3.87456 22.3498 9.10128 23.6467V15.6672H6.62688V12H9.10128V10.4198C9.10128 6.33552 10.9498 4.4424 14.9597 4.4424C15.72 4.4424 17.0318 4.59168 17.5685 4.74048V8.06448C17.2853 8.03472 16.7933 8.01984 16.1822 8.01984C14.2147 8.01984 13.4544 8.76528 13.4544 10.703V12H17.3741L16.7006 15.6672H13.4544V23.9122C19.3963 23.1946 24.0005 18.1354 24.0005 12C24 5.37264 18.6274 0 12 0Z"
                            fill="#282929"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2060_7373">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      class="icon icon-linkedin"
                      rel="nofollow"
                      @click="openInNewWindow(linkedin)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_2060_7394)">
                          <path
                            d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                            fill="#282929"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2060_7394">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      class="icon icon-viber"
                      rel="nofollow"
                      @click="openInNewWindow(whatsapp)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M0 24L1.687 17.837C0.645998 16.033 0.0989998 13.988 0.0999998 11.891C0.103 5.335 5.43799 0 11.993 0C15.174 0.001 18.16 1.24 20.406 3.488C22.6509 5.736 23.8869 8.724 23.8859 11.902C23.8829 18.459 18.548 23.794 11.993 23.794C10.003 23.793 8.04198 23.294 6.30499 22.346L0 24ZM6.59698 20.193C8.27298 21.188 9.87298 21.784 11.989 21.785C17.437 21.785 21.875 17.351 21.878 11.9C21.88 6.438 17.463 2.01 11.997 2.008C6.54498 2.008 2.11 6.442 2.108 11.892C2.107 14.117 2.75899 15.783 3.85399 17.526L2.85499 21.174L6.59698 20.193ZM17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382C17.117 14.233 15.656 13.514 15.383 13.415C15.111 13.316 14.913 13.266 14.714 13.564C14.516 13.861 13.946 14.531 13.773 14.729C13.6 14.927 13.426 14.952 13.129 14.803C12.832 14.654 11.874 14.341 10.739 13.328C9.85598 12.54 9.25898 11.567 9.08598 11.269C8.91298 10.972 9.06798 10.811 9.21598 10.663C9.34998 10.53 9.51298 10.316 9.66198 10.142C9.81298 9.97 9.86198 9.846 9.96198 9.647C10.061 9.449 10.012 9.275 9.93698 9.126C9.86198 8.978 9.26798 7.515 9.02098 6.92C8.77898 6.341 8.53398 6.419 8.35198 6.41L7.78198 6.4C7.58398 6.4 7.26198 6.474 6.98998 6.772C6.71798 7.07 5.94999 7.788 5.94999 9.251C5.94999 10.714 7.01498 12.127 7.16298 12.325C7.31198 12.523 9.25798 15.525 12.239 16.812C12.948 17.118 13.502 17.301 13.933 17.438C14.645 17.664 15.293 17.632 15.805 17.556C16.376 17.471 17.563 16.837 17.811 16.143C18.059 15.448 18.059 14.853 17.984 14.729Z"
                          fill="#282929"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      class="icon icon-telegram"
                      rel="nofollow"
                      @click="openInNewWindow(telegram)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_2060_6612)">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z"
                            fill="#282929"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2060_6612">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="single-blog-column">
            <div class="list recent-posts">
              <h3 class="list-title">
                Related articles
              </h3>
              <ul>
                <li
                  v-for="post in recentBlogs.slice(0, currentBlogsCount)"
                  :key="post.id"
                >
                  <div class="img">
                    <img
                      :src="loadImagePost(post.id)"
                      :alt="post.title || 'Trading Assets'"
                    >
                  </div>
                  <div class="wrap-content">
                    <div class="data">
                      {{ setFormattedDate(post.published_at || "") }}
                    </div>
                    <div class="title">
                      <nuxt-link :to="`/blog/${post.slug}/`">
                        <!-- {{ post.title }} -->
                        {{ truncatedTitle(post.title) }}
                      </nuxt-link>
                    </div>
                    <div class="content">
                      <!-- {{ post.content }} -->
                      {{ sanitizedTruncatedContent(post.content) }}
                    </div>
                  </div>
                </li>
              </ul>

              <div class="block-load-more">
                <button
                  v-if="canLoadMore"
                  class="link-load-more"
                  @click="loadMore"
                >
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment';

const TEMPLATE_IMAGE_PATH = '/img/temporary/blog-img-7.jpg';

export default {
  layout: 'main',
  scrollToTop: true,
  props: {
    showLoadMore: {
      type: Boolean,
      default: false,
    },
  },

  async asyncData({ params, error }) {
    try {
      const response = await fetch(`${process.env.NUXT_ENV_API_URL}/api/blog/${params.slug}`);
      if (!response.ok) throw new Error('Failed to fetch blog post');
      const blog = await response.json();

      console.log(blog.recent_blogs);

      return {
        blog,
        recentBlogs: blog.recent_blogs,
        next: blog.next,
        previous: blog.previous,
      };
    } catch (err) {
      error({ statusCode: 404, message: 'Blog post not found' });

      // Ensure to return an empty object or a placeholder here
      return {};
    }
  },

  data() {
    return {
      link: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up/`,
      blog: {
        author: { name: '' },
        author_id: 0,
        categories: [],
        content: '',
        created_at: '',
        featured_image: null,
        id: 0,
        meta_description: '',
        meta_title: '',
        next: null,
        previous: null,
        published_at: '',
        recent_blogs: [],
        slug: '',
        status: '',
        title: '',
        updated_at: '',
      },
      facebook: '',
      twitter: '',
      linkedin: '',
      telegram: '',
      viber: '',
      whatsapp: '',
      currentBlogsCount: 3, // Initial count of displayed blogs
    };
  },
  head() {
    const baseUrl = process.env.NUXT_ENV_API_URL || 'http://localhost:8001'; 
    const path = this.$route.path.split('?')[0]; 

    return {
      title: `${this.blog.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blog.meta_description,
        },
        {
          hid: 'title',
          name: 'title',
          content: `${this.blog.meta_title}`,
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
    slug() {
      return this.$route.params.slug;
    },
    canLoadMore() {
      return this.currentBlogsCount < this.recentBlogs.length;
    },
  },
  mounted() {
    if (process.browser) {
      const url = window.location.href;
      const title = encodeURIComponent(this.blog.title);
      const encodedUrl = encodeURIComponent(url);

      this.facebook = `https://www.facebook.com/sharer.php?u=${url}`;
      this.twitter = `https://twitter.com/intent/tweet?text=${url}`;
      this.linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${this.title}&summary=&source=${url}`;
      this.telegram = `https://t.me/share/url?url=${url}&text=${title}`;
      // this.viber = `viber://forward?url=${url}`;
      this.whatsapp = `whatsapp://send?text=${title}%20Here%20link:%20${encodedUrl}`;
    }
  },
  methods: {
    openInNewWindow(url) {
      window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    },

    truncatedTitle(title) {
      const limit = 70;
      if (title.length > limit) {
        return `${title.substring(0, limit)}...`;
      }
      return title;
    },

    sanitizedTruncatedContent(content) {
      const limit = 160;

      if (!content || typeof content !== 'string') {
        return '';
      }

      // Removed HTML
      let sanitizedContent = content.replace(/<[^>]*>/g, '');

      // Removed &nbsp;
      sanitizedContent = sanitizedContent.replace(/&nbsp;/g, ' ').trim();

      // Trimming the text
      if (sanitizedContent.length > limit) {
        return `${sanitizedContent.slice(0, limit)}...`;
      }

      return sanitizedContent;
    },

    loadImage() {
      if (this.blog.featured_image === 'null' || !this.blog.featured_image) {
        return TEMPLATE_IMAGE_PATH;
      }
      return `${process.env.NUXT_ENV_API_URL}${this.blog.featured_image}`;
    },
    loadImagePost(postId) {
      let result = null;
      this.recentBlogs.forEach((element) => {
        if (element.id === postId) {
          if (element.featured_image) {
            result = process.env.NUXT_ENV_API_URL + element.featured_image;
          }
        }
      });
      if (result === null) {
        return TEMPLATE_IMAGE_PATH;
      }
      return result;
    },
    setFormattedDate(date) {
      return moment(date).format('DD MMM YYYY');
    },
    loadMore() {
      this.currentBlogsCount += 3; // Load 3 more blogs each time the button is clicked
    },

  },
};
</script>

<style lang="scss" scoped>
.single-blog {

  .top-bg {
    .container {
      max-width: 910px;
    }
  }

  .container {
    max-width: 1340px;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;

    @media (max-width: 768px) {
      padding: 0;
    }
  }

  .inner {
    padding: 0 0 80px;
    display: flex;
    flex-flow: column;
    align-items: stretch;
  }

  @media (max-width: 768px) {
    .inner {
      padding: 140px 0 40px;
    }
  }

  .recent-posts {
    margin-top: 80px;
    padding-top: 40px;
    border-top: 1px solid #352F44;
    overflow: hidden;
    position: relative;

    @media (max-width: 768px) {
      border: none;
      margin-top: 40px;
      margin-left: 16px;
      margin-right: 16px;

      &:before {
        content: '';
        display: block;
        width: calc(100% - 16px);
        height: 1px;
        background-color: rgba(7, 68, 41, 0.20);
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .list-title {
      margin: 0 0 40px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 52px;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;

      @media (max-width: 768px) {
        margin-bottom: 24px;
        font-size: 24px;
        line-height: 140%;
        /* 33.6px */
      }
    }
  }

  .recent-posts.list ul {
    padding-left: 0;
    flex-flow: row wrap;
    display: flex;
    gap: 16px;

    @media (max-width: 620px) {
       flex-flow: column;
    }

    .img {
      height: 312px;
      @media (max-width: 768px) {
        height: 257px;
      }
    }

    .data {
      margin-top: 16px;
      margin-bottom: 8px;
      color: #282929;
      font: 12px/16px 'Poppins', sans-serif;
      font-weight: 400;

      @media (max-width: 768px) {
        margin-bottom: 8px;
      }
    }

    .title {
      margin-bottom: 16px;
      padding-top: 0;

      @media (max-width: 768px) {
        margin-bottom: 10px;
      }

      a {
        color: #282929;
        font: 500 20px/28px 'Poppins', sans-serif;
      }
    }

    .content {
      padding-bottom: 40px;
      color: #282929;
      font: 16px/22px 'Poppins', sans-serif;
      overflow: hidden;
    }
  }

  @media (max-width: 992px) {
    .recent-posts.list ul {
      justify-content: space-between;
    }
  }

  .recent-posts.list ul li {
    width: calc((100% - 32px) / 3);
    list-style: none;
    border-bottom: 1px solid #352F44;
  }

  @media (max-width: 1020px) {
    .recent-posts.list ul li {
      width: calc((100% - 16px) / 2);
    }
  }

  @media (max-width: 620px) {
    .recent-posts.list ul li {
      width: 100%;
      min-width: none;
    }
  }

  .recent-posts .img {
    margin: 0;
  }
}

.single-blog-content {
  flex: 1 1 auto;

  .content {
    margin: 0 auto;
    width: 100%;
    max-width: 850px;

    @media (max-width: 768px) {
      padding: 0 16px;
    }
  }

  .wrap-btn {
    margin: 40px auto;
    display: flex;
    justify-content: center;
  }

  .btn-trade {
    padding: 16px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #157275;
    color: #FFF;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    border: 1px solid #157275;
    border-radius: 4px;
    transition: ease 0.5s background-color;

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
  }

  .social-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {
      &:not(:last-child) {
        margin-right: 16px;
      }
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      background-color: #ECECE4;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

}

.btn-back {
  display: block;
  color: #9a9aab;
  font-weight: 600;
  font-size: 18px;
  padding-bottom: 20px;
}

.single-blog-content .title {
  display: none;
  color: #282929;
  font-size: 48px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: 56px;
  /* 116.667% */
  letter-spacing: -0.154px;
}

@media (max-width: 992px) {
  .single-blog-content .title {
    display: block;
    font-size: 38px;
  }
}

@media (max-width: 768px) {
  .single-blog-content .title {
    padding-top: 0;
    font-size: 24px;
    line-height: 120%;
  }
}

.single-blog-content .date {
  display: none;
  margin: 24px 0;
  color: #282929;
  font-size: 16px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  @media (max-width: 992px) {
    display: block;
  }
}

.img {
  display: block;
  position: relative;
  width: 100%;
  padding-top: 50%;
  overflow: hidden;
  margin-bottom: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
}

.top-bg {
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  width: 100%;
  min-height: 400px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 992px) {
    margin-bottom: 10px;
  }

  .bg-dark {
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(53, 47, 68, 0.50) 0%, rgba(53, 47, 68, 0.50) 100%);
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    top: 0;
  }

  .container {
    padding: 60px 30px;
    position: relative;
    z-index: 1;
  }

  .date {
    margin-bottom: 16px;
    color: #FFF;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    @media (max-width: 992px) {
      display: none;
    }
  }

  .title {
    color: #FFF;
    font-family: 'Poppins';
    font-size: 52px;
    font-style: normal;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    @media (max-width: 992px) {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .img {
    // margin-top: 100px;
    margin-bottom: 40px;
    border-radius: 0;
  }
}

.list {
  ul {
    padding-left: 20px;
    color: #000000;

    li {
      list-style-type: disc;
      line-height: 1.6;

      &:not(:last-child) {
        padding-bottom: 10px;
      }

      a {
        color: #000000;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
}

.list-title {
  color: #000000;
  font-size: 16px;
  line-height: 1.6;
  font-weight: 700;
  margin-bottom: 16px;
}

@media (max-width: 992px) {
  .single-blog {
    // margin-top: -140px;

    .inner {
      padding: 30px 0 80px;
    }
  }

  .title {
    padding-top: 20px;
    font-size: 30px;
    line-height: 1;
  }
}

.single-blog-text {
  color: #282929;
  font-family: 'Poppins';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 28px */

  figure {
    margin-top: 20px;
  }

  .attachment__caption {
    display: none;
  }

  img {
    width: 100% !important;
    height: auto !important;
    margin: 0 auto;
    display: block;
  }

  @media (max-width: 992px) {
    font-size: 20px;
  }

  .attachment__caption {
    display: none;
  }

  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    /* 28px */
    margin-bottom: 0;
    font-family: 'Poppins';
  }

  a {
    color: #000000;
    font-weight: 400;
    font-family: 'Poppins';
    text-decoration-line: underline;
  }

  strong {
    font-weight: 500;
  }

  h1,
  h2 {
    margin: 40px 0 24px;
    color: #282929;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    /* 48px */
    letter-spacing: -0.102px;
    font-family: 'Poppins';
  }

  h3,
  h4,
  h5,
  h6 {
    margin: 40px 0 24px;
    color: #282929;
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    /* 48px */
    letter-spacing: -0.102px;
    font-family: 'Poppins';
  }

  figure {
    max-width: 100%;

    img {
      margin: 0;
      max-width: 100%;
      border-radius: 16px;
    }

    figcaption {
      margin: 7px 0 15px;
      font-size: 14px;
      font-weight: 400;
      color: #9a9aab;
    }
  }

  ul,
  ol {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    /* 28px */
    color: #0e0523;
    font-family: 'Poppins';
    padding-left: 20px;

    li {
      list-style: inherit;
    }
  }
}

.block-load-more {
  margin: 40px 0 0;
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
  }
}
</style>
