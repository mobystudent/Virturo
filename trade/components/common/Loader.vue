<template>
  <div class="loader">
    <div class="logo" :style="{ backgroundImage: `url(${image})` }"></div>
  </div>
</template>

<script lang="js">
import config from "@/project-config";

export default {
  data() {
    return {
      image: config.loader,
    };
  },
};
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: $common-white;
  padding: 20px;

  .logo {
    background-size: cover;
    background-position: center;
    width: 150px;
    height: 150px;
  }
}
</style>
