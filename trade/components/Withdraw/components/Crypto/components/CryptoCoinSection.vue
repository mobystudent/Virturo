<template>
  <div class="section">
    <h2 class="title">{{ title }}</h2>
    <div class="section-content">
      <div class="container">
        <SelectBox :label="labelCoin" :selected="selectedCoin" :items="coinsWithNetwork" @update="handleChangeCoin" />
        <div class="info">
          <p class="balance">
            Available funds
            <span>
              {{ converted }} {{ (selectedCoin && selectedCoin.short_code) || '' }} &#126; {{ currencyMapper[currency] || ''
              }}{{ availableBalance }}
            </span>
          </p>
          <div class="mobile">
            <NetworkInfo :network-name="networkName ? networkName : selectedNetwork.short_code" />
          </div>
          
        </div>
      </div>
      <button class="btn" type="button" :disabled="!converted" @click="goToNextStep">Continue</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NetworkInfo from './NetworkInfo.vue';
import SelectBox from '@/components/common/SelectBox.vue';
import { currencyMapper } from '@/constants';

export default {
  name: 'CryptoCoinSection',
  components: {
    SelectBox,
    NetworkInfo,
  },
  props: {
    currentStep: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      labelCoin: 'Select coin',
      coinsWithNetwork: [],
      networkName: '',
      networks: [],
      currencyMapper,
    };
  },
  computed: {
    ...mapGetters({
      coins: 'coins',
      balance: 'user/balance',
      availableBalance: 'user/availableBalance',
      currency: 'user/currency',
      converted: 'exchange/converted',
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
    selectedNetwork(val) {
      this.networkName = val && val.short_code ? val.short_code : '';
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
    goToNextStep() {
      const step = this.currentStep + 1;
      this.$emit('setStep', step);
    },
    handleChangeCoin(item) {
      this.$store.dispatch('user/setSelectedCoin', item);
    },
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
.section {
  max-width: 653px;
}

.title {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  color: $dark-grey;
}

.section-content {
  padding-top: 16px;
}

.info {
  display: flex;

  .mobile {
    display: none;
  }
}

.container {
  display: flex;
  align-items: flex-end;
}

.balance {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: $dark-grey;
  padding-left: 16px;

  span {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: $black;
    padding-top: 4px;
  }
}

.btn {
  display: block;
  width: calc(50% - 8px);
  height: 44px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  background-color: $common-green-transparent;
  border: 1px solid transparent;
  color: $dark-grey;
  border-radius: 6px;
  padding: 10px;
  margin-top: 32px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: $common-white;
    border-color: $common-green-transparent;
  }
}

@media (max-width: 860px) {
  .container {
    flex-direction: column;
    align-items: flex-start;

    .select {
      margin-bottom: 10px;
    }
  }

  .select {
    width: 100%;
  }

  .balance {
    padding-left: 0;
  }

  .network {
    padding-left: 32px;
  }

  .btn {
    margin-top: 24px;
  }
}

@media (max-width: 767px) {
  .select {
    width: calc(50% - 8px);
  }

  .section {
    max-width: 100%;
  }

  .info {

    .mobile {
      display: flex;
    }
  }
}

@media (max-width: 560px) {
  .select,
  .btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .network {
    padding-left: 43px;
  }
}
</style>
