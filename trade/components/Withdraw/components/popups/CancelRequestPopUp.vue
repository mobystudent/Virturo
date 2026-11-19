<template>
  <transition name="modal" appear>
    <div class="popup-wrapper">
      <div class="popup-container">
        <h2 class="title">Are you sure you want to cancel the following withdrawal request?</h2>
        <div class="rows">
          <p class="row">
            <span class="row-title">Date:</span>
            <span class="row-value">{{ formatDate(date) }}</span>
          </p>
          <p class="row">
            <span class="row-title">Amount:</span>
            <span class="row-value">
              <img v-show="icon.length > 0" class="icon" :src="`${API_URL}${icon}`" />
              {{ amount }} {{ code }}
            </span>
          </p>
        </div>
        <div class="buttons-row">
          <button class="btn click-effect" type="button" @click="$emit('close')">No</button>
          <button class="btn click-effect" type="button" @click="ShowCancelPopUp">Yes, continue</button>
        </div>
        <CloseIcon class="close" @click="$emit('close')" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';
import CloseIcon from '@/static/img/icons/close-popup.svg?inline';
import { currencyMapper, API_URL } from '@/constants';
import { formatDate } from '@/helpers';
export default {
  name: 'CancelRequestPopUp',
  components: {
    CloseIcon,
  },
  props: {
    date: {
      type: String,
      default: '',
    },
    amount: {
      type: String,
      default: '0.00',
    },
    icon: {
      type: String,
      default: '',
    },
    code: {
      type: String,
      default: '',
    },
  },
  data() {
    return { API_URL, formatDate, currencyMapper };
  },
  computed: {
    ...mapGetters({
      currency: 'user/currency',
    }),
  },
  methods: {
    ShowCancelPopUp() {
      this.$emit('openCancelPopUp');
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $charcoal-grey-transparent;
  z-index: 9998;
  transition: opacity 0.3s ease;
}

.popup-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 343px;
  padding: 32px 32px 25px;
  background-color: $common-white;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 22px;
  height: 22px;
  cursor: pointer;
}

.title {
  color: $dark-grey;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding-bottom: 24px;
}

.rows {
  width: 100%;

  .row {
    width: 100%;
    color: $dark-grey;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;

    &:not(:first-child) {
      padding-top: 12px;
      margin-top: 12px;
      border-top: 1px dashed $lighter-grey;
    }

    .row-value {
      display: flex;
      align-items: center;
      padding-top: 4px;

      img {
        width: 22px;
        height: 22px;
        margin-right: 8px;
      }
    }
  }
}

.buttons-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;
}

.btn {
  display: block;
  width: calc(50% - 5px);
  height: 44px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  background-color: $common-green-transparent;
  border: 1px solid transparent;
  color: $dark-grey;
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: $common-white;
    border-color: $common-green-transparent;
  }
}

@media (max-width: 375px) {
  .popup-container {
    width: calc(100% - 32px);
  }
}

@media (max-width: 350px) {
  .buttons-row {
    flex-direction: column;
    gap: 10px;
  }

  .btn {
    width: 100%;
  }
}
</style>
