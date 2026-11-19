<template>
  <transition name="modal" appear>
    <div class="popup-wrapper">
      <div class="popup-container">
        <span>
          <CloseIcon />
        </span>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <ButtonGreen button-name="Ok" button-type="button" @click.native="$emit('close')" />
      </div>
    </div>
  </transition>
</template>

<script>
import CloseIcon from '@/static/img/icons/close-large.svg?inline';
import ButtonGreen from '@/components/common/ButtonGreen.vue';

export default {
  name: 'KYCPopUp',
  components: { CloseIcon, ButtonGreen },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.5);
  backdrop-filter: blur(12px);
  z-index: 9998;
  transition: opacity 0.3s ease;
}

.popup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 460px;
  padding: 60px 90px 40px;
  background-color: $main-primary-color;
  border-radius: 20px;
  transition: all 0.3s ease;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 72px;
    height: 72px;
    background-color: $common-error;
    box-shadow: 0px 4px rgba(0, 0, 0, 0.25);
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4;
    color: $common-white;
    margin-top: 40px;
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    color: $grey-52-color;
    margin-top: 8px;
    text-align: center;
  }
}
</style>
