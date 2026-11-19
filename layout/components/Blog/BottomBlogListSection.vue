<template>
  <section class="blog-navigation">
    <div class="container">
      <div class="inner">
        <ul class="social-list">
          <li>
            <a
              class="icon icon-facebook"
              rel="nofollow"
              @click="openInNewWindow(facebook)"
            >
              <font-awesome-icon icon="fab fa-facebook" />Facebook</a>
          </li>
          <li>
            <a
              class="icon icon-twitter"
              rel="nofollow"
              @click="openInNewWindow(twitter)"
            >
              <font-awesome-icon icon="fab fa-twitter" />Twitter</a>
          </li>
          <li>
            <a
              class="icon icon-linkedin"
              rel="nofollow"
              @click="openInNewWindow(linkedin)"
            >
              <font-awesome-icon icon="fab fa-linkedin" />LinkedIn</a>
          </li>
        </ul>
        <div class="navigation-control-wrapper">
          <div class="navigation-control">
            <div
              v-if="previous !== null"
              class="previous"
            >
              <nuxt-link
                class="link"
                :to="`${previous.slug}`"
              >
                <font-awesome-icon icon="fas fa-angle-left" />
                <div>
                  <span class="label">Previous</span>
                  <p class="title">
                    {{ previous.title }}
                  </p>
                </div>
              </nuxt-link>
            </div>
            <div
              v-if="next !== null"
              class="next"
            >
              <nuxt-link
                class="link"
                :to="`${next.slug}`"
              >
                <div>
                  <span class="label">Next</span>
                  <p class="title">
                    {{ next.title }}
                  </p>
                </div>
                <font-awesome-icon icon="fas fa-angle-right" />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="blog-list-bottom">
          <ul class="blog-list">
            <BlogItem
              v-for="blog in recentBlogs"
              :key="blog.id"
              :blog="blog"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import BlogItem from './BlogItem.vue';

export default {
  name: 'BottomBlogListSection',
  components: { BlogItem },
  props: ['recentBlogs', 'next', 'previous', 'title'],
  data() {
    return {
      facebook: '',
      twitter: '',
      linkedin: '',
    };
  },

  mounted() {
    if (process.browser) {
      const url = window.location.href;
      this.facebook = `https://www.facebook.com/sharer.php?u=${url}`;
      this.twitter = `https://twitter.com/intent/tweet?text=${url}`;
      this.linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${this.title}&summary=&source=${url}`;
    }
  },
  methods: {
    openInNewWindow(url) {
      window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    },
  },
};
</script>

<style lang="scss" scoped>
$paddingPrevNext: 5px;

.blog-navigation {
  background-color: #0e0523;

  .inner {
    padding: 60px 0px 80px;
  }
}

.social-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;

  li {
    margin-bottom: 10px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  .icon {
    display: inline-block;
    padding: 10px 13px;
    background-color: #f33c29e6;
    color: #ffffff;
    border-radius: 30px;
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;

    svg {
      padding-right: 8px;
    }
  }
}

.navigation-control {
  border-top: 1px solid #9a9aab;
  border-bottom: 1px solid #9a9aab;
  padding: 10px 0;
  display: flex;

  &>div {
    flex: 0 0 50%;
    font-weight: 400;

    svg {
      font-size: 30px;
    }

    .link {
      color: #9a9aab;
      display: flex;
      align-items: center;
    }

    .label {
      color: #9a9aab;
      font-size: 19px;
      text-transform: uppercase;
    }

    .title {
      font-size: 13px;
      line-height: 1.4;
      color: #e7e6e9;
    }
  }
}

.previous {
  border-right: 1px solid #9a9aab;
  padding-right: $paddingPrevNext;

  svg {
    padding-right: 15px;
  }
}

.next {
  border-left: 1px solid #9a9aab;
  text-align: right;
  padding-left: $paddingPrevNext;
  margin-left: auto;

  div {
    margin-left: auto;
  }

  svg {
    padding-left: 15px;
  }
}

.blog-list-bottom {
  padding-top: 70px;
}

.blog-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
