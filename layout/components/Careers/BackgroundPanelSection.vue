<template>
  <section class="background-panel">
    <div class="bg-lg bg-panel" />
    <div class="bg-md bg-panel" />
    <div class="bg-sm bg-panel" />
  </section>
</template>

<style lang="scss" scoped>
.bg-panel {
  width: 100%;
  height: 480px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff no-repeat center center;
  background-size: cover;
}

.bg-lg {
  display: none;
  background-image: url("@/static/img/careers/bg-panel-md.png");
  background-position: center 55%;

  @media (min-width: 1400px) {
    display: block;
  }
}

.bg-md {
  display: block;
  background-image: url("@/static/img/careers/bg-panel-md.png");

  @media (min-width: 1400px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
}

.bg-sm {
  display: none;
  background-image: url("@/static/img/careers/bg-mob.png");

  @media (max-width: 480px) {
    display: block;
  }
}
</style>
