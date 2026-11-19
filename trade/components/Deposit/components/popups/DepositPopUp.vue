<template>
  <transition name="modal" appear>
    <div class="popup-wrapper">
      <div class="popup-container">
        <h2 class="title">{{ title }}</h2>
        <p class="subtitle">{{ subtitle }}</p>
        <SuccessIcon />
        <nuxt-link class="btn-back" to="/" @click="$emit('close')">Done</nuxt-link>
        <CloseIcon class="close" @click="$emit('close')" />
      </div>
    </div>
  </transition>
</template>

<script>
import SuccessIcon from '@/static/img/icons/success.svg?inline';
import CloseIcon from '@/static/img/icons/close-popup.svg?inline';
export default {
  name: 'DepositPopUp',
  components: { SuccessIcon, CloseIcon },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
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
  background-color: $charcoal-grey-transparent;
  z-index: 9998;
  transition: opacity 0.3s ease;
}

.popup-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 343px;
  padding: 42px 40px 24px;
  background-color: $common-white;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.title {
  color: $dark-grey;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  padding-bottom: 12px;
}

.subtitle {
  color: $dark-grey;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  padding-bottom: 60px;
}

.btn-back {
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
  margin-top: 83px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: $common-white;
    border-color: $common-green-transparent;
  }
}

.close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 22px;
  height: 22px;
  cursor: pointer;
}

@media (max-width: 375px) {
  .popup-container {
    width: calc(100% - 32px);
  }
}
</style>
