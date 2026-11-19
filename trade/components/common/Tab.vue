<template>
  <div class="tab-content" :data-active="isActive">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.tab-content {
  position: relative;
}

.tab-content:not([data-active='true']) {
  display: none;
}
</style>
