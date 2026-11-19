<template>
  <div class="relative">
    <div @mouseenter="toggle" @mouseleave="toggle">
      <slot />
    </div>
    <div v-show="isShown" class="tooltip">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isShown: false,
    };
  },
  methods: {
    toggle() {
      this.isShown = !this.isShown;
    },
  },
};
</script>

<style lang="scss" scoped>
.relative {
  position: relative;
}
.tooltip {
  position: absolute;
  bottom: calc(100% + 20px);
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: $common-white;
  text-align: center;
  background-color: rgba(51, 51, 51, 0.5);
  backdrop-filter: blur(12px);
  border-radius: 8px;
  padding: 12px;
  z-index: 11;
  &::after {
    content: '';
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    height: 0;
    width: 0;
    border-top: 14px solid rgba(51, 51, 51, 0.5);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
}
</style>
