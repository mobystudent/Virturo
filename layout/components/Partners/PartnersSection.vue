<template>
  <div>
    <div class="block-desktop">
      <PartnersSlider />
    </div>

    <div class="block-mob">
      <PartnersTabs />
    </div>
  </div>
</template>

<script>
import PartnersSlider from './PartnersSlider.vue';
import PartnersTabs from './PartnersTabs.vue';

export default {
  components: {
    PartnersSlider,
    PartnersTabs,
  },
};
</script>

<style lang="scss" scoped>
.block-desktop {
  display: block;

  @media (max-width: 998px) {
    display: none;
  }
}

.block-mob {
  display: none;

  @media (max-width: 998px) {
    display: block;
  }
}
</style>
