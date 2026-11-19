<template>
  <div v-if="isShowCancelPopUp">
    <CancelPopUp @close="$emit('close')" />
  </div>
  <div v-else>
    <CancelRequestPopUp
      :date="item.created_at"
      :amount="item.cryptoAmount ? item.cryptoAmount : item.amount"
      :icon="item.coin && item.coin.icon ? item.coin.icon : ''"
      :code="item.coin && item.coin.short_code ? item.coin.short_code : currency"
      @close="$emit('close')"
      @openCancelPopUp="handleCancelWithdraw(item.id)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CancelPopUp from './CancelPopUp.vue';
import CancelRequestPopUp from './CancelRequestPopUp.vue';
import { STATUS_REJECTED } from '@/constants';

export default {
  name: 'RecentWithdrawalsPopUp',
  components: {
    CancelPopUp,
    CancelRequestPopUp,
  },
  props: {
    item: {
      type: Object,
      default: () => ({
        created_at: '',
        id: 0,
        amount: 0,
        cryptoAmount: 0,
        coin: {
          icon: '',
          short_code: '',
        },
      }),
    },
  },
  data() {
    return {
      isShowCancelPopUp: false,
    };
  },
  computed: {
    ...mapGetters({
      currency: 'user/currency',
    }),
  },
  methods: {
    handleCancelWithdraw(id) {
      this.$store.dispatch('user/cancelWithdraw', { id, status: STATUS_REJECTED }).finally(() => {
        this.isShowCancelPopUp = true;
        this.$emit('cancelWithdraw');
      });
    },
  },
};
</script>
