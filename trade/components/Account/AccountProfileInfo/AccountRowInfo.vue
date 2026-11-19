<template>
  <div class="row-info">
    <p class="row-info_title">{{ title }}:</p>
    <p class="row-info_data">
      <img v-if="img" class="current-flag" :src="require(`~/static/img/flags/${img}.svg`)" />
      {{ content }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AccountRowInfo',
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.row-info {
  width: calc(50% - 8px);
  padding-top: 16px;
}

.row-info_title {
  color: $dark-grey;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  padding-bottom: 8px;
}

.row-info_data {
  display: flex;
  align-items: center;
  height: 44px;
  border-radius: 6px;
  background-color: $main-primary-color;
  border: 1px solid $light-khaki;
  color: $black;
  font-size: 16px;
  font-weight: 400;
  padding: 10px 12px;
  word-break: break-all;
}

.current-flag {
  width: 24px;
  height: 18px;
  border-radius: 2px;
  margin-right: 8px;
  object-fit: cover;
}

@media (max-width: 480px) {
  .row-info:nth-child(1),
  .row-info:nth-child(2),
  .row-info:nth-child(5) {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .row-info {
    width: 100%;
  }
}
</style>
