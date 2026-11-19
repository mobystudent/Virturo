<template>
  <transition name="modal" appear>
    <div class="popup-wrapper">
      <div class="popup-container">
        <h2 class="title">{{ title }}</h2>
        <div class="content-block">
          <template v-for="(link, index) in links">
            <div v-if="link.title.length > 0 || link.description.length > 0" :key="index">
              <strong v-if="link.title.length > 0">{{ link.title }}</strong>
              <ul v-if="link.description.length > 0">
                <li v-html="link.description" />
              </ul>
            </div>
          </template>
        </div>
        <CloseIcon class="close" @click="$emit('close')" />
      </div>
    </div>
  </transition>
</template>

<script>
import CloseIcon from '@/static/img/icons/close-popup.svg?inline';

export default {
  name: 'FAQPopUp',
  components: {
    CloseIcon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    links: {
      type: Array,
      default: () => [],
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
  width: 480px;
  min-height: 540px;
  padding: 32px;
  background-color: $common-white;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.content-block {
  height: 476px;
  overflow-y: auto;
  padding-right: 5px;
  color: $black;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;

  & > div:not(:last-child) {
    padding-bottom: 16px;
  }

  strong {
    display: inline-block;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    padding-bottom: 16px;
  }
  ul {
    padding-left: 15px;

    li {
      font-size: 12px;

      &:not(:last-child) {
        padding-bottom: 16px;
      }
    }
  }
}

.title {
  color: $black;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
}

.close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 22px;
  height: 22px;
  cursor: pointer;
}

.content-block::-webkit-scrollbar {
  width: 2px;
  left: 0;
}

.content-block::-webkit-scrollbar-track {
  background-color: $common-white;
}

.content-block::-webkit-scrollbar-thumb {
  background-color: $light-grey;
  border-radius: 10px;
}

@media (max-width: 572px) {
  .popup-container {
    width: calc(100% - 32px);
  }
}
</style>
