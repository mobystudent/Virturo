<template>
  <section class="top">
    <div class="top-inner">
      <h1 class="title">
        <span>{{ title }}</span>
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TopSection',
  props: ['title'],
};
</script>

<style lang="scss" scoped>
.top {
  background-color: #0e0523;
  background-image: url("@/static/img/blog-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;

  .top-inner {
    padding: 310px 10px 35px 260px;
  }

  .title {
    font-weight: 200;
    font-size: 64px;
    line-height: 1;
    color: #ffffff;

    span {
      font-weight: 800;
      display: block;
      padding-top: 20px;
    }
  }
}

@media (max-width: 1024px) {
  .top {
    background-position: center;

    .title {
      font-size: 36px;
    }
  }
}

@media (max-width: 768px) {
  .top {
    .top-inner {
      padding: 100px 0px 0px 30px;
    }
  }
}

@media (max-width: 680px) {
  .top {
    .top-inner {
      padding: 100px 0px 0px 15px;
    }
  }
}
</style>
