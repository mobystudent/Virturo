<template>
  <div class="table-deposits-content">
    <div class="section">
      <Notification />
      <h2 class="title">Recent Deposits</h2>
      <div class="table">
        <div class="table-header">
          <p v-for="column in columns" :key="column.name" class="sort" @click="column.name !== 'tx_id' ? sortColumn(column.name) : null">
            <span>{{ column.label }}</span>
            <ArrowSortIcon
              v-if="column.name !== 'tx_id'"
              class="arrow-sort"
              :class="{
                'arrow-sort--asc': sortState.column === column.name && sortState.order === 'asc',
                'arrow-sort--desc': sortState.column === column.name && sortState.order === 'desc',
              }"
            />
          </p>
        </div>
        <div class="table-body">
          <div v-for="item in deposits" :key="item.id" class="table-row">
            <p class="row-cell">{{ formatDateWithoutTime(item.created_at) }}</p>
            <p class="row-cell">
              {{ item.cryptoAmount ? Number(item.cryptoAmount).toFixed(6) : Number(item.amount).toFixed(2) }}
              {{ item.coin && item.coin.short_code ? item.coin.short_code : currency }}
            </p>
            <p class="row-cell">{{ item.coin && item.coin.short_code ? item.coin.short_code : '' }}</p>
            <template v-for="(el, index) in depositMethods">
              <p v-if="item.payment_type && item.payment_type.replace(/\\/g, '') === el.model" :key="index" class="row-cell">
                {{ el.label }}
              </p>
            </template>
            <p class="row-cell">
              <Tooltip v-if="item.hash" class="icon" text="Copy" @click.native="copyHash(item.hash)">
                <CopyIcon />
              </Tooltip>
              <Tooltip v-if="item.hash" class="icon" text="Link" @click.native="openLink(item.hashLink)">
                <LinkIcon />
              </Tooltip>
            </p>
            <p class="row-cell">
              <span :class="getStatusStyles(item)">{{ statusMapper[item.status] || '' }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Tooltip from '@/components/common/Tooltip.vue';
import Notification from '@/components/common/Notification.vue';
import CopyIcon from '@/static/img/icons/copy-2.svg?inline';
import LinkIcon from '@/static/img/icons/link.svg?inline';
import ArrowSortIcon from '@/static/img/icons/arrows-sort.svg?inline';
import {
  statusMapper,
  STATUS_CREATED,
  STATUS_REJECTED,
  STATUS_COMPLETED,
  STATUS_CONFIRMING,
  STATUS_FAILED,
  DEPOSIT_METHODS,
} from '@/constants';
import { formatDateWithoutTime } from '@/helpers';

export default {
  name: 'TableDeposits',
  components: {
    Tooltip,
    Notification,
    CopyIcon,
    LinkIcon,
    ArrowSortIcon,
  },
  data() {
    return {
      statusMapper,
      STATUS_CREATED,
      STATUS_REJECTED,
      STATUS_COMPLETED,
      STATUS_CONFIRMING,
      STATUS_FAILED,
      depositMethods: DEPOSIT_METHODS,
      columns: [
        { name: 'created_at', label: 'Date' },
        { name: 'cryptoAmount', label: 'Amount' },
        { name: 'network', label: 'Network' },
        { name: 'payment_type', label: 'Method' },
        { name: 'tx_id', label: 'TxID' },
        { name: 'status', label: 'Status' },
      ],
      sortState: {
        column: '',
        order: 'asc',
      },
      formatDateWithoutTime,
    };
  },
  computed: {
    ...mapGetters({
      deposits: 'user/lastDeposits',
      currency: 'user/currency',
    }),
  },
  methods: {
    copyHash(value) {
      navigator.clipboard.writeText(value);
      this.$notify({
        group: 'custom-style',
        text: 'Copied',
      });
    },
    openLink(link) {
      if (link) {
        window.open(link, '_blank');
      }
    },
    sortColumn(columnName) {
      this.sortState.column = columnName;
      this.sortState.order = this.sortState.order === 'asc' ? 'desc' : 'asc';
      this.$store.dispatch('user/getLastDeposits', { sortBy: this.sortState.column, sortOrder: this.sortState.order });
    },
    getStatusStyles(item) {
      switch (true) {
        case item.status === STATUS_CREATED:
          return 'created';
        case [STATUS_FAILED, STATUS_REJECTED].includes(item.status):
          return 'cancelled';
        case item.status === STATUS_COMPLETED:
          return 'completed';
        case item.status === STATUS_CONFIRMING:
          return 'confirming';
        default:
          return '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.table-deposits-content {
  // padding-top: 24px;
  padding-top: 32px;
}

.section {
  padding-top: 20px;
  max-width: 653px;
  border-top: 1px solid $light-gray;
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
}

.table-header {
  display: grid;
  grid-template-columns: minmax(130px, 1fr) minmax(120px, 1fr) minmax(100px, 1fr) minmax(120px, 1fr) minmax(60px, 1fr) 102px;
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
  grid-template-columns: minmax(130px, 1fr) minmax(120px, 1fr) minmax(100px, 1fr) minmax(120px, 1fr) minmax(60px, 1fr) 102px;
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

  .icon {
    width: 22px;
    height: 22px;
    cursor: pointer;

    &:not(:first-child) {
      margin-left: 8px;
    }
  }

  span {
    border-radius: 4px;
    padding: 2px 8px;
    margin-left: auto;

    &.confirming,
    &.created {
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

  .table-deposits-content {
    padding-top: 20px;
  }
}

@media (max-width: 480px) {
  .table {
    margin-right: -16px;
  }

  .table-header {
    grid-template-columns: minmax(130px, 1fr) minmax(120px, 1fr) minmax(100px, 1fr) minmax(120px, 1fr) minmax(60px, 1fr) 116px;

    p:last-child {
      margin-right: 16px;
    }
  }

  .table-row {
    grid-template-columns: minmax(130px, 1fr) minmax(120px, 1fr) minmax(100px, 1fr) minmax(120px, 1fr) minmax(60px, 1fr) 116px;

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

<style lang="scss">
.row-cell {
  .tooltip {
    min-width: 57px;
  }
}
</style>
