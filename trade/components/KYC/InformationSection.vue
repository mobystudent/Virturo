<template>
  <section class="info">
    <div class="info-inner">
      <p>{{ text }}</p>
      <img :src="isProfile ? require('~/static/img/approved.png') : require('~/static/img/checking.png')" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'InformationSection',
  props: {
    text: {
      type: String,
      default: '',
    },
    isProfile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-inner {
  padding-top: 80px;
  max-width: 652px;
  text-align: center;
}

p {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;
  text-align: center;
  padding-bottom: 88px;
}

img {
  width: 200px;
  height: 120px;
}

@media (max-width: 767px) {
  .info-inner {
    padding-top: 105px;
    padding-left: 16px;
    padding-right: 16px;
  }

  p {
    padding-bottom: 62px;
  }
}
</style>
