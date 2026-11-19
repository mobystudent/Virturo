<template>
  <li class="accordion-item">
    <button
      class="accordion-trigger"
      :class="{ 'open': isOpen }"
      :aria-expanded="isOpen"
      @click="toggleAccordion()"
    >
      <slot name="title" />
      <!-- <font-awesome-icon
        v-if="!isOpen"
        icon="fa-solid fa-plus"
      />
      <font-awesome-icon
        v-else
        icon="fa-solid fa-minus"
      /> -->
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="plus"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 10V3H10.4L10.4 10H3V11.6H10.4L10.4 19H12V11.6H19V10H12Z"
          fill="#352F44"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        class="minus"
      >
        <path
          d="M3 10H19V11.6H3V10Z"
          fill="#352F44"
        />
      </svg>
    </button>
    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div
        v-show="isOpen"
        class="accordion-content"
      >
        <slot name="content" />
      </div>
    </transition>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
    start(el) {
      // eslint-disable-next-line no-param-reassign
      el.style.height = `${el.scrollHeight}px`;
    },
    end(el) {
      // eslint-disable-next-line no-param-reassign
      el.style.height = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion-item {
  border-bottom: 1px solid #DAD8C4;
  cursor: pointer;
}

.accordion-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
  font: 400 20px/28px 'Poppins', sans-serif;
  color: #352F44;
  padding: 25px 0;
  background-color: transparent;
  width: 100%;
  cursor: pointer;

  &.open {
    color: #282929;
  }

  h5 {
    text-align: left;
    font-weight: 400;
  }

  svg {
    width: 22px;
    height: 22px;
    display: flex;
    flex-shrink: 0;
    font-size: 14px;
    transition: transform .25s ease-in;
  }
}

.accordion-content {
  padding-bottom: 25px;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
