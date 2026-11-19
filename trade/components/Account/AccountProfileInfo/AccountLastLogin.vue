<template>
  <div class="table-last-login">
    <div class="section">
      <h2 class="title">Last log in</h2>
      <div class="table">
        <div class="table-header">
          <p>Date</p>
          <p>Device</p>
          <p>IP Address</p>
        </div>
        <div class="table-body">
          <div v-for="(item, index) in loginList" :key="item.id" class="table-row" :class="{ active: index === 0 }">
            <p class="row-cell">
              <span>{{ formatDate(item.created_at) }}</span>
            </p>
            <p class="row-cell">{{ item.device }}</p>
            <p class="row-cell">
              <img class="flag" :src="require(`~/static/img/flags/${item.country_code?.toLocaleLowerCase() || unitedNations}.svg`)" />
              {{ item.ip }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { unitedNations } from '@/constants';
import { formatDate } from '@/helpers';

export default {
  name: 'AccountLastLogin',
  data() {
    return { unitedNations, formatDate };
  },
  computed: {
    ...mapGetters({
      loginList: 'user/loginList',
    }),
  },
};
</script>

<style lang="scss" scoped>
.table-last-login {
  padding-top: 32px;
}

.section {
  padding-top: 32px;
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
  grid-template-columns: repeat(3, minmax(180px, 1fr));
  border-radius: 6px;
  color: $dark-grey;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;

  p {
    display: flex;
    align-items: center;
    background-color: $light-gray-2;
    padding: 4px;

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
  }
}

.table-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(180px, 1fr));
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

  &.active {
    .row-cell:first-child span {
      padding: 2px 24px;
      border-radius: 4px;
      background-color: $light-mint;
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
}

.flag {
  width: 22px;
  height: 16px;
  border-radius: 2px;
  margin-right: 12px;
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

@media (max-width: 767px) {
  .section {
    max-width: 100%;
    padding-top: 16px;
  }
}
</style>
