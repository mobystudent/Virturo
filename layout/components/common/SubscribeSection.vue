<template>
  <section class="section">
    <div class="wrapper">
      <SubscribeForm block="section" />
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import SubscribeForm from './SubscribeForm.vue';

export default defineComponent({
  components: { SubscribeForm },
});
</script>

<style scoped lang="scss">
.section {
  position: relative;
  padding: 80px 0;
  background: #157275;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 60px 0;
  }

  @media (max-width: 580px) {
    padding: 40px 0 120px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -60px;
    width: 490px;
    height: 490px;
    transform: translateY(-50%);
    background: url('../../static/img/home/snowflake.png') center/cover no-repeat;

    @media (max-width: 768px) {
      top: -115px;
      width: 320px;
      height: 320px;
      transform: translateY(0);
    }
  }
}

</style>
