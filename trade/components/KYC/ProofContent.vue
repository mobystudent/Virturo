<template>
  <div class="proof">
    <div class="proof-top">
      <span class="circle" :class="{ partial: kyc === KYC_PARTIAL }">
        <CircleIcon />
      </span>
      <div class="stripe" :class="{ partial: kyc === KYC_PARTIAL }"></div>
      <span class="circle" :class="{ 'not-active': kyc === KYC_NO }">
        <CircleIcon />
      </span>
    </div>
    <div class="proof-bottom">
      <p class="label">Proof of ID</p>
      <p class="label">Proof of Residence</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { KYC_NO, KYC_PARTIAL } from '@/constants';
import CircleIcon from '@/static/img/icons/circle.svg?inline';

export default {
  name: 'ProofContent',
  components: { CircleIcon },
  data() {
    return {
      KYC_NO,
      KYC_PARTIAL,
    };
  },
  computed: {
    ...mapGetters({
      kyc: 'user/kyc',
    }),
  },
};
</script>

<style lang="scss" scoped>
.proof {
  margin: 40px 0 34px;

  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 62px 0 20px;
  }

  &-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 13px;
  }
}

.circle {
  display: inline-block;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 100%;
  background-color: transparent;
  border: 4px solid $common-green-transparent;
  position: relative;

  svg {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.not-active {
    border: 4px solid $light-gray;
  }

  &.partial {
    background-color: $common-green-transparent;
    border-color: $common-green-transparent;

    svg {
      display: inline-block;
    }
  }
}

.label {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  color: $dark-grey;
}

.stripe {
  border-top: 2px dashed $light-gray;
  width: 100%;

  &.partial {
    border-color: $common-green-transparent;
  }
}

@media (max-width: 767px) {
  .proof {
    margin: 30px 0 25px;

    &-top {
      padding: 0 24px;
    }
  }

  .label {
    font-size: 15px;
    max-width: 80px;
    text-align: center;
  }
}
</style>
