<template>
  <div>
    <div
      class="content-wrap"
      @click="toggler = !toggler"
    >
      <div class="box-poster">
        <div class="bg-poster" />
      </div>

      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>

    <FsLightbox
      :toggler="toggler"
      :sources="videoSources"
    />
  </div>
</template>

<script>
import FsLightbox from 'fslightbox-vue/v2';

export default {
  components: { FsLightbox },
  data() {
    return {
      toggler: false,
      videoSources: [],
      title: 'Introduction to Cryptocurrencies',
      text: 'Explore the basics of cryptocurrencies, including their development, key features, and their growing impact on global finance.',
    };
  },
  mounted() {
    const videoUrl = `${window.location.origin}/videos/What_are_Cryptocurrencies.mp4`;
    this.videoSources = [videoUrl];
  },
};
</script>

<style lang="scss" scoped>
.box-poster {
  display: block;
  width: 100%;
  height: 234px;
  overflow: hidden;

  .bg-poster {
    display: block;
    width: 100%;
    height: 100%;
    background: url("@/static/img/learn/video-preview-5.png") no-repeat center center;
    background-size: cover !important;
    position: relative;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.15) 50%/cover no-repeat;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:after {
    content: '';
    display: block;
    width: 48px;
    height: 48px;
    background: url("@/static/img/learn/play-circle.svg") no-repeat center center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  }

  img {
    display: block;
    width: 100%;
  }
}

.content-wrap {
  cursor: pointer;

  h2 {
    margin: 16px 0 16px;
    min-height: 56px;
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
</style>
