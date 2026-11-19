<template>
  <button class="btn" :disabled="disabled" :type="buttonType">{{ buttonName }}</button>
</template>

<script>
export default {
  name: 'ButtonGreen',
  props: {
    buttonName: {
      type: String,
      default: '',
    },
    buttonType: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  text-align: center;
  width: 100%;
  height: 44px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  background-color: $common-green-transparent;
  border: 1px solid transparent;
  color: $dark-grey;
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: $common-white;
    border-color: $common-green-transparent;
  }
}
</style>
