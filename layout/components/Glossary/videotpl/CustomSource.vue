<template>
  <iframe
    ref="videoPlayer"
    :src="videoSrc"
    width="1920px"
    height="1080px"
    preload="metadata"
    frameborder="0"
    allow="autoplay; fullscreen"
    allowfullscreen
  />
</template>

<script>
import videoSrc from '@/static/videos/storm-1.mp4';

export default {
  data() {
    return {
      toggler: false,
      videoSrc,
    };
  },
};
</script>
