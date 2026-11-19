<template>
  <section class="platform-guides-library">
    <div class="container">
      <div class="intro">
        <h1 class="title">
          Platform guides library
        </h1>
        <p>
          By the end of this video, you'll have a foundational grasp of stock market essentials and be well-equipped to start your investing journey. So grab a notepad, sit back, and let's dive into the world of stocks!
        </p>
      </div>

      <div class="row">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="col"
        >
          <component :is="post.lightboxComponent" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Video1 from './videotpl/Video1.vue';
import Video2 from './videotpl/Video2.vue';
import Video3 from './videotpl/Video3.vue';
import Video4 from './videotpl/Video4.vue';
import Video5 from './videotpl/Video5.vue';
import Video6 from './videotpl/Video6.vue';

export default {
  components: {
    Video1,
    Video2,
    Video3,
    Video4,
    Video5,
    Video6,
  },
  data() {
    return {
      posts: [
        {
          lightboxComponent: 'Video1',
        },
        {
          lightboxComponent: 'Video2',
        },
        {
          lightboxComponent: 'Video3',
        },
        {
          lightboxComponent: 'Video4',
        },
        {
          lightboxComponent: 'Video5',
        },
        {
          lightboxComponent: 'Video6',
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
.platform-guides-library {
  position: relative;
  background-color: #ECECE4;

  .video-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 56.25%;
    /* 16:9 aspect ratio */
  }

  .video-container video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Fill the container without distorting the video */
  }

  .intro {
    margin: 0 auto;
    // max-width: 690px;
    display: flex;
    flex-flow: column;
    // justify-content: center;
    // text-align: center;
    font-family: 'Poppins';

    .title {
      margin-bottom: 40px;
      color: #352F44;
      font-size: 52px;
      font-style: normal;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;
    }

    p {
      // margin: 0 auto;
      margin-bottom: 40px;
      max-width: 632px;
      color: #352F44;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
    }
  }

  .container {
    box-sizing: content-box;
    margin: 0 auto;
    max-width: 1320px;
    padding: 60px 20px 60px;

    .row {
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      gap: 16px;
      margin-right: -16px;

      @media (max-width: 767px) {
        margin-right: 0;
      }
    }

    .col {
      // margin-top: 20px;
      // margin-bottom: 44px;
      padding-bottom: 40px;
      border-bottom: 1px solid #352F44;
      width: calc(100% / 3 - 16px);
    }

    .box-poster {
      display: block;
      width: 100%;
      height: 240px;
      overflow: hidden;
    }

    iframe {
      width: 100%;
      height: 240px;
    }

    h2 {
      margin: 16px 0 16px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 28px */
      z-index: 1;
    }

    p {
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
    }
  }

  .title {
    font-weight: 700;
    font-size: 56px;
    line-height: 1.2;
    color: #000000;
    // padding-bottom: 20px;
  }

}

@media (max-width: 1330px) {
  .platform-guides-library .container .col {
    margin-top: 0;
    margin-bottom: 40px;

    &:last-child() {
      margin-bottom: 0;
    }
  }
}

@media (max-width: 992px) {
  .platform-guides-library .container .col {
    margin-top: 0;
    margin-bottom: 40px;
    width: 48%;

    &:last-child() {
      margin-bottom: 0;
    }
  }
}

@media (max-width: 767px) {
  .platform-guides-library .container {
    padding: 40px 16px 20px;
  }

  .platform-guides-library .intro .title {
    margin-bottom: 24px;
    padding-bottom: 0;
    font-size: 32px;
    line-height: 140%; /* 44.8px */
  }

  .platform-guides-library .intro p {
    margin-bottom: 40px;
    line-height: 150%; /* 24px */
  }

  .platform-guides-library .container .col {
    margin-top: 0;
    margin-bottom: 25px;
    padding-bottom: 25px;
    width: 100%;

    &:last-child() {
      margin-bottom: 0;
    }
  }
}
</style>
