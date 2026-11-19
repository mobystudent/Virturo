<template>
  <transition name="modal" appear>
    <div class="popup-wrapper">
      <div class="popup-container">
        <template v-if="errorMessage">
          <h2 class="title">{{ errorMessage }}</h2>
        </template>
        <template v-else>
          <h2 class="title">Service Temporarily Unavailable</h2>
          <nuxt-link class="link" to="/support" @click="$emit('close')">Contact Support</nuxt-link>
        </template>
        <div class="icon-bg">
          <ErrorIcon />
        </div>
        <ButtonGreen button-name="Ok" button-type="button" @click.native="$emit('close')" />
      </div>
    </div>
  </transition>
</template>

<script>
import ButtonGreen from '@/components/common/ButtonGreen.vue';
import ErrorIcon from '@/static/img/icons/error.svg?inline';

export default {
  name: 'ErrorPopUp',
  components: { ButtonGreen, ErrorIcon },
  props: {
    errorMessage: {
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
  background-color: $charcoal-grey-transparent;
  z-index: 9998;
  transition: opacity 0.3s ease;
}

.popup-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  padding: 32px;
  background-color: $common-white;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.title {
  text-align: center;
  color: $dark-grey;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  padding-bottom: 12px;
}

.link {
  text-align: center;
  color: $dark-grey;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  padding-bottom: 27px;
}

.icon-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 195px;
  position: relative;
  margin-bottom: 15px;
}

.icon-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('@/static/img/icon-background.png') no-repeat center;
  background-size: cover;
  z-index: 2;
}

.icon-bg > svg {
  position: relative;
  z-index: 1;
}

@media (max-width: 375px) {
  .popup-container {
    width: calc(100% - 32px);
  }
}
</style>
