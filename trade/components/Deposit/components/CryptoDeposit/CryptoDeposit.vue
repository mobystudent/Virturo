<template>
  <div class="crypto-deposit-content">
    <div class="section">
      <h2 class="title">{{ title }}</h2>
      <div class="section-content">
        <SelectBox :label="labelCoin" :selected="selectedCoin" :items="coinsWithNetwork" @update="handleChangeCoin" />
        <div class="form-group">
          <label>{{ labelNetwork }}</label>
          <input v-model="selectedNetwork.name" class="form-control" type="text" readonly />
        </div>
        <!--        <SelectBox :label="labelNetwork" :selected="selectedNetwork" :items="networks" @update="handleChangeNetwork" />-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SelectBox from '@/components/common/SelectBox.vue';

export default {
  name: 'CryptoDeposit',
  components: { SelectBox },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      labelCoin: 'Coin',
      labelNetwork: 'Network',
      coinsWithNetwork: [],
      networks: [],
    };
  },
  computed: {
    ...mapGetters({
      coins: 'coins',
      currency: 'user/currency',
      selectedCoin: 'user/selectedCoin',
      selectedNetwork: 'user/selectedNetwork',
    }),
  },
  watch: {
    coins(val) {
      this.coinsWithNetwork = val.filter(coin => coin.networks.length > 0);
      this.$store.dispatch('user/setSelectedCoin', this.coinsWithNetwork[0] || {});
    },
    selectedCoin(val) {
      this.networks = val.networks;
      this.convert();
    },
    currency() {
      this.convert();
    },
  },
  created() {
    this.coinsWithNetwork = this.coins.filter(coin => coin.networks.length > 0);
    this.$store.dispatch('user/setSelectedCoin', this.coinsWithNetwork[0] || {});
  },
  methods: {
    handleChangeCoin(item) {
      this.$store.dispatch('user/setSelectedCoin', item);
    },
    // handleChangeNetwork(item) {
    //   this.$store.dispatch('user/setSelectedNetwork', item);
    // },
    convert() {
      if (this.currency) {
        const cur = (this.selectedCoin.short_code || '').toLowerCase();
        this.$store.dispatch('exchange/convert', cur);
      } else {
        this.$store.dispatch('exchange/clearConverted');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.crypto-deposit-content {
  padding-top: 24px;
}

.section {
  max-width: 653px;
}

.title {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;
}

.section-content {
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-top: 16px;
}

.form-group {
  width: calc(50% - 8px);

  label {
    display: inline-block;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    color: $dark-grey;
    padding-bottom: 8px;
  }
}

.form-control {
  width: 100%;
  height: 44px;
  background-color: $common-white;
  border: 1px solid $light-khaki;
  outline: 2px solid transparent;
  border-radius: 6px;
  padding: 8px 12px;
  color: $dark-grey;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: $common-green-transparent;
    outline-color: $light-mint;
  }

  &:hover:not(:focus) {
    border-color: $common-green-transparent;
  }
}

@media (max-width: 767px) {
  .section {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .form-group {
    width: 100%;
  }

  .section-content {
    flex-direction: column;
  }
}
</style>
