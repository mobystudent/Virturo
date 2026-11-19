<template>
  <button
    ref="upButton"
    type="buton"
    class="up-button"
    @click="scrollToTop"
  >
    <span>
      <font-awesome-icon
        class="icon"
        icon="fas fa-arrow-up"
      />
    </span>
    <svg
      class="border"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        fill="none"
      />
    </svg>
  </button>
</template>

<script setup>
import { onMounted, ref, onBeforeMount } from 'vue';

const upButton = ref(null);

const userScroll = () => {
  if (window.scrollY > 0) {
    upButton.value.classList.add('showButton');

    const svg = document.querySelector('.border path');
    const length = svg.getTotalLength();
    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;

    const scrollTo = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    const draw = length * scrollTo;
    svg.style.strokeDashoffset = length - draw;
  } else {
    upButton.value.classList.remove('showButton');
  }
};

onMounted(() => {
  window.addEventListener('scroll', userScroll);
});
onBeforeMount(() => {
  window.removeEventListener('scroll', userScroll);
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<style lang="scss" scoped>
.up-button {
  border-radius: 50%;
  height: 46px;
  width: 46px;
  box-shadow: inset 0 0 0 1px #e7e7e7;
  color: #222222;
  background-color: #ffffff;
  position: fixed;
  bottom: 30px;
  right: 100px;
  cursor: pointer;
  transition: all 0.2s linear;
  z-index: 999;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    .icon {
      animation: animation-arrow 1s infinite;
    }
  }

  &:not(.showButton) {
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
  }

  svg.border {
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    margin: -1px;

    path {
      stroke: #222;
      stroke-width: 4;
      box-sizing: border-box;
      transition: stroke-dashoffset 10ms linear 0s;
    }
  }
}

@keyframes animation-arrow {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(3px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
