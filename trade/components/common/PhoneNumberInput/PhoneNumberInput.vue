<template>
  <div ref="selectWrapper" class="phone-number-wrapper">
    <div class="phone-number-row" :class="[{ invalid: error, focus: isOpen }]">
      <div class="select" tabindex="0" @click="selectClick" @keydown="selectKeydown">
        <template v-if="loadingDefaultCountry">
          <MiniLoader />
        </template>
        <template v-else>
          <img class="current-flag" :src="require(`~/static/img/flags/${selectedCountry?.isoCode.toLocaleLowerCase() ?? 'il'}.svg`)" />
          <img class="arrow-down" src="~/static/img/icons/arrow-down.svg" />
        </template>
      </div>
      <input
        v-model="phoneNumber"
        class="number-input"
        type="tel"
        @focus="$emit('onFocus')"
        @input="filterNumber"
        @click="isOpen = false"
      />
    </div>
    <div v-if="isOpen" class="countries-box">
      <div class="search-input-wrapper">
        <input v-model="search" tabindex="0" class="search-input" type="text" placeholder="Country name or code number" />
        <img class="search-icon" src="~/static/img/icons/search.svg" />
      </div>
      <div class="dropdown">
        <div class="dropdown-inner">
          <div
            v-for="(country, index) in countriesFiltered"
            ref="countryRef"
            :key="country.isoCode"
            class="option"
            :tabindex="0"
            @click="handleCountrySelect(country)"
            @keydown="handleCountryKeydown($event, country, index)"
          >
            <span class="flag-wrapper">
              <img class="flag" :src="require(`~/static/img/flags/${country.isoCode.toLocaleLowerCase()}.svg`)" />
            </span>

            <span class="text"> {{ country.county }} +{{ country.code }} </span>
          </div>
          <div v-if="countriesFiltered.length === 0" class="option not-found">Not found</div>
        </div>
      </div>
    </div>
    <span v-if="error" class="error-label">{{ error }}</span>
  </div>
</template>

<script>
import MiniLoader from '../MiniLoader.vue';
import countries from './countriesData';
import { defaultCountryName } from '@/constants';
const defaultCountry = countries.find(item => item.county === defaultCountryName);

export default {
  components: { MiniLoader },
  props: {
    error: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isOpen: false,
      countriesFiltered: countries,
      loadingDefaultCountry: true,
      defaultCountry,
      selectedCountry: defaultCountry,
      phoneNumber: `+${defaultCountry.code}`,
      previousPhoneNumber: `+${defaultCountry.code}`,
      search: '',
    };
  },
  watch: {
    defaultCountry(value) {
      this.selectedCountry = value;
      this.phoneNumber = `+${value.code}`;
      this.previousPhoneNumber = `+${value.code}`;
    },
    search(rawValue) {
      const value = rawValue[0] === '+' ? rawValue.slice(1) : rawValue;

      this.countriesFiltered = countries.filter(
        item =>
          item.county.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()) ||
          item.code.toLocaleLowerCase().startsWith(value.toLocaleLowerCase()),
      );
    },
    phoneNumber(value) {
      this.previousPhoneNumber = this.phoneNumber;
      this.$emit('updatePhone', value);
    },
    selectedCountry(value) {
      this.$emit('updateCountry', value);
    },
  },
  mounted() {
    this.loadingDefaultCountry = true;
    this.$http
      .get('/api/get-ip')
      .then(async res => {
        const data = await res.json();
        if (data?.countryCode) {
          this.defaultCountry = countries.find(item => item.isoCode === data.countryCode) ?? defaultCountry;
        }
      })
      .catch(_err => {
        // console.log(err)
      })
      .finally(() => {
        this.loadingDefaultCountry = false;
      });
  },
  methods: {
    selectKeydown(e) {
      if (e.keyCode === 32) {
        e.preventDefault();
        this.selectClick();
      }
    },
    selectClick() {
      if (this.isOpen) {
        this.isOpen = false;
        document.body.removeEventListener('click', this.clickOutsideEvent);
      } else {
        this.isOpen = true;
        document.body.addEventListener('click', this.clickOutsideEvent);
      }
    },
    clickOutsideEvent(e) {
      const el = this.$refs.selectWrapper;
      if (!(el === e.target || el.contains(e.target))) {
        this.isOpen = false;
        document.body.removeEventListener('click', this.clickOutsideEvent);
      }
    },
    filterNumber(event) {
      let value = event.target.value;

      if (!value.startsWith(`+${this.selectedCountry.code}`)) {
        this.phoneNumber = this.previousPhoneNumber;
        event.target.value = this.previousPhoneNumber;
        return;
      }

      if (/^\+/.test(value)) {
        value = value.slice(1);
      }

      const phone = `+${this.selectedCountry.code}${value.slice(this.selectedCountry.code.length).replace(/[^0-9]/g, '')}`;
      // In the international telephone network, the format of telephone numbers is standardized by ITU-T recommendation E.164. This code specifies that the entire number should be 15 digits or shorter, and begin with an international calling prefix and a country prefix.
      const phoneValue = phone.length > 1 ? phone.slice(0, 16) : `+`;

      const countryCode = phoneValue.slice(1, 6);

      if (!countryCode.startsWith(this.selectedCountry.code) && phoneValue.length > 1) {
        this.searchCountryByCode(countryCode);
      }

      this.phoneNumber = phoneValue;
      event.target.value = phoneValue;
    },
    searchCountryByCode(countryCode) {
      let country = defaultCountry;
      let tmpCountryCode = countryCode;
      for (let i = 0; i < countryCode; i++) {
        const exists = this.searchCountryReq(tmpCountryCode);
        if (exists) {
          country = exists;
          break;
        } else {
          tmpCountryCode = tmpCountryCode.slice(0, tmpCountryCode.length - 1);
        }
      }
      this.selectedCountry = country;
    },
    searchCountryReq(countryCode) {
      return countries.find(item => item.code.startsWith(countryCode));
    },
    handleCountrySelect(country) {
      this.selectedCountry = country;
      this.isOpen = false;
      this.phoneNumber = `+${country.code}`;
    },
    handleCountryKeydown(e, country, index) {
      // down
      if (e.keyCode === 40) {
        if (this.$refs.countryRef[index + 1]) {
          e.preventDefault();
          this.$refs.countryRef[index + 1].focus();
        }
      }

      // up
      if (e.keyCode === 38) {
        if (this.$refs.countryRef[index - 1]) {
          e.preventDefault();
          this.$refs.countryRef[index - 1].focus();
        }
      }

      if (e.keyCode === 32 || e.keyCode === 13) {
        this.handleCountrySelect(country);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.phone-number-wrapper {
  position: relative;
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

.phone-number-row {
  width: 100%;
  display: flex;
  background-color: $common-white;
  border: 1px solid $light-khaki;
  outline: 2px solid transparent;
  border-radius: 6px;
  padding: 8px 12px;
  transition: all 0.2s ease-in-out;

  &.invalid {
    border-color: $bright-red;

    &:hover:not(:focus) {
      border-color: $bright-red;
    }
  }

  &:focus-within,
  &.focus {
    border-color: $common-green-transparent;
    outline-color: $light-mint;
  }

  &:hover:not(:focus) {
    border-color: $common-green-transparent;
  }
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

.select {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 59px;
  border-radius: 4px;
  background: $light-mint;
  padding: 4px 8px 4px 4px;
}

.current-flag {
  width: 24px;
  height: 18px;
}

.option {
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px 2px 2px 2px;
  transition: 0.2s;
  cursor: pointer;

  &:not(:first-child) {
    margin-top: 2px;
  }

  &:focus {
    outline: none;
    background-color: $light-mint;
  }

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
    overflow: hidden;
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

.number-input {
  width: calc(100% - 59px);
  background-color: $common-white;
  padding-left: 8px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: $black;
  transition: 0.2s;
  outline: none;

  &:focus {
    border-radius: 0 8px 8px 0;
    box-shadow: inset 0 0 0 2px $common-white;
  }
}

.error-label {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: $bright-red;
}
</style>
