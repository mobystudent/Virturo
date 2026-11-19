<template>
  <section class="section">
    <div class="wrapper">
      <h1 class="title">
        Support
      </h1>
      <p class="desc">
        We aim to transform your financial future through our cutting-edge trading platform.
        Experience the best CFD trading platform designed for achieving financial freedom while ensuring safety in
        every trade.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
<style lang="scss" scoped>
.section {
  padding: 100px 0;
  background: #D3F5EC;

  @media (max-width: 1024px) {
    padding: 80px 0;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
}

.wrapper {
  max-width: 1340px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  column-gap: 60px;

  @media (max-width: 768px) {
    padding: 0 15px;
    flex-flow: column;
    row-gap: 40px;
  }
}

.title {
  font: 500 52px/58px 'Poppins', sans-serif;
  letter-spacing: -1%;
  color: #352F44;

  @media (max-width: 1024px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 44px;
  }
}

.desc {
  font: 16px/22px 'Poppins', sans-serif;
  color: #352F44;
  max-width: 525px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
}
</style>
