<template>
  <ul class="accordion-wrapp">
    <slot />
  </ul>
</template>

<script>
export default {
  provide() {
    return { Accordion: this.Accordion };
  },
  props: {},
  data() {
    return {
      Accordion: {
        count: 0,
        active: null,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.accordion-wrapp {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
