<template>
  <div class="faq-box_container">
    <div class="faq-box">
      <FAQPopUp v-if="isShowPopUp" :links="links" @close="isShowPopUp = false" />
      <h3 class="title">FAQ</h3>
      <ul>
        <li v-for="(link, index) in links" :key="index" @click="isShowPopUp = true">
          {{ link.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import FAQPopUp from './FAQPopUp.vue';

export default {
  name: 'FAQ',
  components: {
    FAQPopUp,
  },
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isShowPopUp: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.faq-box {
  position: absolute;
  top: 0;
  left: 706px;
  max-width: 280px;
  width: 280px;
  min-height: 306px;
  border-radius: 8px;
  background: $light-gray;
  padding: 32px;
}

.title {
  color: $dark-grey;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  padding-bottom: 32px;
}

ul {
  list-style: none;

  li {
    color: $dark-grey;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    text-decoration: underline;
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}

@media (max-width: 1440px) {
  .faq-box {
    left: 669px;
  }
}

@media (max-width: 1285px) {
  .faq-box_container {
    padding-top: 24px;
  }

  .faq-box {
    position: static;
    max-width: 653px;
    width: 100%;
  }
}

@media (max-width: 767px) {
  .faq-box {
    max-width: 100%;
  }
}
</style>
