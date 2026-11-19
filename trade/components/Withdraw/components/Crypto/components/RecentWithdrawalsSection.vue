<template>
  <div class="table-withdrawals-content">
    <div class="section">
      <RecentWithdrawalsPopUp v-if="isShowPopUp" :item="selected" @close="handleClosePopup" @cancelWithdraw="getLastWithdraws" />
      <h2 class="title">Recent Withdrawals</h2>
      <div class="table" :class="{ 'update-width': shouldUpdateWidth }">
        <div class="table-header">
          <p v-for="column in columns" :key="column.name" class="sort" @click="sortColumn(column.name)">
            <span>{{ column.label }}</span>
            <ArrowSortIcon
              class="arrow-sort"
              :class="{
                'arrow-sort--asc': sortState.column === column.name && sortState.order === 'asc',
                'arrow-sort--desc': sortState.column === column.name && sortState.order === 'desc',
              }"
            />
          </p>
        </div>
        <div class="table-body">
          <div v-for="item in withdraws" :key="item.id" class="table-row">
            <p class="row-cell">{{ formatDate(item.created_at) }}</p>
            <p class="row-cell">
              <img v-if="item.coin && item.coin.icon" class="icon" :src="`${API_URL}${item.coin.icon}`" />
              <span v-else class="icon"></span>
              {{ item.cryptoAmount ? Number(item.cryptoAmount).toFixed(6) : Number(item.amount).toFixed(2) }}
              {{ item.coin && item.coin.short_code ? item.coin.short_code : currency }}
            </p>
            <template v-for="(el, index) in withdrawMethods">
              <p v-if="item.payment_type && item.payment_type.replace(/\\/g, '') === el.model" :key="index" class="row-cell">
                {{ el.label }}
              </p>
            </template>
            <p class="row-cell">
              <span class="marker" :class="getStatusStyles(item)">{{ statusMapper[item.status] || '' }}</span>
              <CloseIcon v-if="item.status === STATUS_CREATED" class="cancel" @click="handleShowPopup(item)" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RecentWithdrawalsPopUp from '../../popups/RecentWithdrawalsPopUp.vue';
import ArrowSortIcon from '@/static/img/icons/arrows-sort.svg?inline';
import CloseIcon from '@/static/img/icons/close-popup.svg?inline';

import {
  STATUS_CREATED,
  STATUS_REJECTED,
  STATUS_FAILED,
  STATUS_COMPLETED,
  STATUS_CONFIRMING,
  statusMapper,
  API_URL,
  WITHDRAW_METHODS,
} from '@/constants';
import { formatDate } from '@/helpers';

export default {
  name: 'RecentWithdrawalsSection',
  components: {
    RecentWithdrawalsPopUp,
    ArrowSortIcon,
    CloseIcon,
  },
  data() {
    return {
      isShowPopUp: false,
      selected: {},
      STATUS_CREATED,
      STATUS_FAILED,
      STATUS_REJECTED,
      STATUS_COMPLETED,
      STATUS_CONFIRMING,
      API_URL,
      withdrawMethods: WITHDRAW_METHODS,
      statusMapper,
      columns: [
        { name: 'created_at', label: 'Date' },
        { name: 'cryptoAmount', label: 'Amount' },
        { name: 'payment_type', label: 'Method' },
        { name: 'status', label: 'Status' },
      ],
      sortState: {
        column: '',
        order: 'asc',
      },
      formatDate,
    };
  },
  computed: {
    ...mapGetters({
      withdraws: 'user/lastWithdraws',
      currency: 'user/currency',
    }),
    shouldUpdateWidth() {
      return this.withdraws.some(item => item.status === STATUS_CREATED);
    },
  },
  methods: {
    getLastWithdraws() {
      this.$store.dispatch('user/getLastWithdraws');
    },
    handleShowPopup(row) {
      this.selected = row;
      this.isShowPopUp = true;
    },
    handleClosePopup() {
      this.isShowPopUp = false;
      this.selected = {};
    },
    sortColumn(columnName) {
      this.sortState.column = columnName;
      this.sortState.order = this.sortState.order === 'asc' ? 'desc' : 'asc';
      this.$store.dispatch('user/getLastWithdraws', { sortBy: this.sortState.column, sortOrder: this.sortState.order });
    },
    getStatusStyles(item) {
      switch (true) {
        case item.status === STATUS_CREATED:
          return 'pending';
        case item.status === STATUS_COMPLETED:
          return 'completed';
        case item.status === STATUS_CONFIRMING:
          return 'confirming';
        case [STATUS_FAILED, STATUS_REJECTED].includes(item.status):
          return 'cancelled';
        default:
          return '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.table-withdrawals-content {
  padding-top: 32px;
}

.section {
  padding-top: 20px;
  max-width: 653px;
  border-top: 1px solid $lighter-grey;
}

.title {
  color: $dark-grey;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
}

.table {
  overflow-x: auto;
  padding-top: 16px;

  &.update-width {
    .table-header,
    .table-row {
      grid-template-columns: minmax(140px, 1fr) minmax(180px, 1fr) minmax(100px, 1fr) 129px;
    }
  }
}

.table-header {
  display: grid;
  grid-template-columns: minmax(140px, 1fr) minmax(180px, 1fr) minmax(100px, 1fr) 110px;
  border-radius: 6px;
  color: $dark-grey;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;

  svg {
    margin-left: 4px;
  }

  p {
    display: flex;
    align-items: center;
    background-color: $light-gray-2;
    padding: 4px 0px 2px;

    &:first-child {
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
      padding-left: 8px;
    }

    &:last-child {
      border-bottom-right-radius: 6px;
      border-top-right-radius: 6px;
      padding-right: 8px;
    }

    &.sort {
      cursor: pointer;
    }
  }
}

.table-row {
  display: grid;
  grid-template-columns: minmax(140px, 1fr) minmax(180px, 1fr) minmax(100px, 1fr) 110px;
  color: $dark-grey;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;

  &:not(:last-child) {
    .row-cell {
      border-bottom: 1px solid $light-silver;
      padding: 14px 0 12px;
    }
  }

  &:last-child {
    .row-cell {
      padding: 14px 0 4px;
    }
  }
}

.row-cell {
  display: flex;
  align-items: center;
  padding: 0 4px;

  &:first-child {
    padding-left: 0px;
  }

  &:last-child {
    padding-right: 8px;
  }

  &:not(:first-child) {
    //margin-left: 8px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    margin-right: 8px;
  }
}

.marker {
  border-radius: 4px;
  padding: 2px 8px;

  &.pending,
  &.confirming {
    background-color: $goldenrod-transparent;
    color: $orange-2;
  }

  &.completed {
    background-color: $light-mint;
    color: $common-green;
  }
  &.cancelled {
    background-color: $dark-red-transparent;
    color: $red;
  }
}

.cancel {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  margin-left: 5px;
  cursor: pointer;
}

.table::-webkit-scrollbar {
  height: 2px;
  left: 0;
}

.table::-webkit-scrollbar-track {
  background-color: $common-white;
}

.table::-webkit-scrollbar-thumb {
  background-color: $light-grey;
  border-radius: 10px;
}

.arrow-sort {
  transition: transform 0.3s ease-in-out;
  &--asc {
    transform: scaleY(1);
  }
  &--desc {
    transform: scaleY(-1);
  }
}

@media (max-width: 767px) {
  .section {
    max-width: 100%;
    padding-top: 16px;
  }

  .table-withdrawals-content {
    padding-top: 25px;
  }
}

@media (max-width: 480px) {
  .table {
    margin-right: -16px;
  }

  .table-header {
    grid-template-columns: 175px minmax(175px, 1fr) minmax(110px, 1fr) 116px;

    p:last-child {
      margin-right: 16px;
    }
  }

  .table-row {
    grid-template-columns: 175px minmax(175px, 1fr) minmax(110px, 1fr) 116px;

    &:not(:last-child) {
      .row-cell:last-child {
        margin-right: 16px;
      }
    }

    &:last-child {
      .row-cell:last-child {
        padding-right: 16px;
      }
    }
  }
}
</style>
