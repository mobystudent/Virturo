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
      title: 'Fundamental Analysis and Its Role in Trading',
      text: 'Understand how fundamental analysis influences trading decisions and learn how to apply it effectively in your investment strategy.',

    };
  },
  mounted() {
    const videoUrl = `${window.location.origin}/videos/Fundamental_Analysis_and_how_to_use_it_for_trading.mp4`;
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
    background: url("@/static/img/learn/video-preview-1.png") no-repeat center center;
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
