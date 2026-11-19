<template>
  <p class="network">
    <span class="title">Network</span>
    <span class="value">{{ networkName }}</span>
  </p>
</template>

<script>
export default {
  name: 'NetworkInfo',
  props: {
    networkName: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.network {
  display: flex;
  flex-direction: column;
  padding-left: 32px;
}

.title {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: $dark-grey;
}

.value {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: $black;
  padding-top: 4px;
}
</style>
