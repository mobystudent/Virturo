<template>
  <notifications group="custom-style" position="top center" classes="notice-style" :speed="500" animation-name="v-fade-top" :width="93" />
</template>

<script>
export default {
  name: 'Notification',
};
</script>

<style lang="scss">
.vue-notification-group {
  margin-top: 30px;
}
.vue-notification-wrapper {
  .vue-notification-template.notice-style {
    background-color: $common-green;
    border-radius: 4px;
    padding: 4px 10px !important;
    margin-top: 10px;
  }
  .notification-content {
    position: relative;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: $common-white;
    padding-left: 22px;
    &::before {
      content: '';
      width: 12px;
      height: 8px;
      background-image: url('@/static/img/icons/notification.svg');
      position: absolute;
      top: 6px;
      left: 0;
    }
  }
}
.v-fade-top-enter-active,
.v-fade-top-leave-active,
.v-fade-top-move {
  transition: all 0.5s;
}
.v-fade-top-enter,
.v-fade-top-leave-to {
  opacity: 0;
}
</style>
