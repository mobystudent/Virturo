<template>
  <div ref="selectWrapper" class="select-wrapper">
    <div class="select" :class="{ open: isOpen }" @click="selectClick">
      <div class="flag-text">
        <img class="current-flag" :src="require(`~/static/img/flags/${selectedCountry?.isoCode.toLocaleLowerCase() ?? 'il'}.svg`)" />
        <ArrowIcon class="arrow-down" />
      </div>
      <span>{{ selectedCountry?.county ?? defaultCountryName }}</span>
    </div>

    <div v-if="isOpen" class="countries-box">
      <div class="search-input-wrapper">
        <input v-model="search" class="search-input" type="text" placeholder="Country name" />
        <img class="search-icon" src="~/static/img/icons/search.svg" />
      </div>
      <div class="dropdown">
        <div class="dropdown-inner">
          <div
            v-for="country in countriesFiltered"
            :key="country.isoCode"
            class="option"
            @click="
              selectedCountry = country;
              isOpen = false;
            "
          >
            <span class="flag-wrapper">
              <img class="flag" :src="require(`~/static/img/flags/${country.isoCode.toLocaleLowerCase()}.svg`)" />
            </span>
            <span class="text"> {{ country.county }} </span>
          </div>
          <div v-if="countriesFiltered.length === 0" class="option not-found">Not found</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countries from '@/components/common/PhoneNumberInput/countriesData';
import ArrowIcon from '@/static/img/icons/arrow-down.svg?inline';
import { defaultCountryName } from '@/constants';

export default {
  components: { ArrowIcon },
  props: {
    defaultCountry: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      selectedCountry: this.defaultCountry,
      isOpen: false,
      search: undefined,
      countriesFiltered: countries,
      defaultCountryName,
    };
  },
  watch: {
    defaultCountry(value) {
      this.selectedCountry = value;
    },
    search(value) {
      this.countriesFiltered = countries.filter(item => item.county.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()));
    },
    selectedCountry(value) {
      this.$emit('updateCountry', value);
    },
  },
  methods: {
    selectClick() {
      this.isOpen = true;

      document.body.addEventListener('click', this.clickOutsideEvent);
    },
    clickOutsideEvent(e) {
      const el = this.$refs.selectWrapper;

      if (!(el === e.target || el.contains(e.target))) {
        this.isOpen = false;
        document.body.removeEventListener('click', this.clickOutsideEvent);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
}

.select {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  background-color: $common-white;
  border: 1px solid $light-khaki;
  outline: 2px solid transparent;
  border-radius: 6px;
  padding: 8px 12px;

  &.open {
    border-color: $common-green-transparent;
    outline-color: $light-mint;
  }

  &:hover:not(:focus) {
    border-color: $common-green-transparent;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: $black;
    padding-left: 8px;
  }
}

.flag-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 59px;
  border-radius: 4px;
  background: $light-mint;
  padding: 4px 8px 4px 4px;
}

.flag-text span {
  color: $common-white;
  font-size: 16px;
  line-height: 22px;
  margin-left: 12px;
}

.current-flag {
  width: 24px;
  height: 18px;
  border-radius: 2px;
  object-fit: cover;
}

.countries-box {
  position: absolute;
  top: 48px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid $common-green-transparent;
  outline: 2px solid $light-mint;
  background-color: $common-white;
  z-index: 1;
}

.search-input-wrapper {
  position: relative;
}

.search-input {
  width: 100%;
  background-color: $common-white;
  padding: 10px 10px 10px 40px;
  font-size: 15px;
  line-height: 1.4;
  font-weight: 400;
  color: $black;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  outline: none;

  &::placeholder {
    color: $grey-52-color;
  }
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 12px;
}

.dropdown {
  position: relative;
  max-height: 195px;
  padding: 4px 2px 2px 5px;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-top: 1px solid $common-green-transparent;
  }
}

.dropdown-inner {
  overflow-y: scroll;
  max-height: 189px;
  padding-right: 2px;
}

.dropdown-inner::-webkit-scrollbar {
  width: 2px;
  right: 0;
}

.dropdown-inner::-webkit-scrollbar-track {
  background-color: $common-white;
}

.dropdown-inner::-webkit-scrollbar-thumb {
  background-color: $light-grey;
  border-radius: 10px;
}

.option {
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px 2px 2px 2px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: $light-mint;
  }

  .flag-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    background-color: $light-mint;
    border-radius: 2px;
    padding: 4px;
  }

  .flag {
    width: 24px;
    height: 18px;
    border-radius: 2px;
    object-fit: cover;
  }

  .text {
    color: $dark-grey;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    padding-left: 8px;
  }

  &.not-found {
    color: $common-white;
  }
}
</style>
