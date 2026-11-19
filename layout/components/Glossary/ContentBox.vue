<template>
  <div class="content-box">
    <div class="content-title">
      {{ item.title }}
    </div>
    <div class="content-body">
      {{ item.content }}
    </div>
  </div>
</template>
<script>
export default {
  props: ['item'],
};
</script>
<style lang="scss" scoped>
.content-box {
  flex: 1 1 33%;
  max-width: calc(100% / 3 - 86px);
  font-family: 'Poppins';

  .content-title {
    margin-bottom: 16px;
    color: #352F44;
    font-size: 20px;
    font-weight: 500;
    line-height: 140%; /* 28px */

    @media (max-width: 768px) {
      margin-bottom: 20px;
      font-size: 22px;
      line-height: 140%; /* 30.8px */
    }
  }

  .content-body {
    color: #352F44;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    @media (max-width: 768px) {
      font-size: 15px;
      line-height: 150%;
    }
  }
}

@media (max-width: 768px) {
  .content-box {
    flex: 1 1 100%;
    max-width: initial;
    padding: 25px 10px;
  }
}
</style>
