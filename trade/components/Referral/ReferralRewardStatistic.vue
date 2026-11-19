<template>
  <div class="rewards-stat">
    <div class="section">
      <h2 class="title">Recent Referrals</h2>
      <div class="table">
        <div class="table-header">
          <p><span>Referral</span></p>
          <p><span>Date</span></p>
          <p><span>Status</span></p>
          <p><span>Rewards received</span></p>
        </div>
        <div class="table-body">
          <div v-for="referrer in userReferrers" :key="referrer.id" class="table-row">
            <p class="row-cell">{{ referrer.referrer ? referrer.referrer.name : '' }}</p>
            <p class="row-cell">{{ formatDate(referrer.created_at) }}</p>
            <p class="row-cell">{{ referrer.completed ? 'Completed' : 'Not Completed' }}</p>
            <p class="row-cell">{{ currencyMapper[currency] || '' }}{{ referrer.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { formatDate } from '@/helpers';
import { currencyMapper } from '@/constants';

export default {
  data() {
    return { formatDate, currencyMapper };
  },
  computed: {
    ...mapGetters({
      userReferrers: 'referral/userReferrers',
      currency: 'user/currency',
    }),
  },
};
</script>

<style lang="scss" scoped>
.rewards-stat {
  // padding-top: 16px;
}

.section {
  padding-top: 32px;
  max-width: 664px;
  // border-top: 1px solid $light-gray;
}

.title {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;
}

.table {
  overflow-x: auto;
  padding-top: 16px;
}

.table-header {
  display: grid;
  grid-template-columns: repeat(4, minmax(135px, 4fr));
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;

  p {
    display: flex;
    align-items: center;
    background-color: $pale-gray;
    padding: 4px 0;

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
  grid-template-columns: repeat(4, minmax(135px, 4fr));
  color: $black;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;

  &:not(:last-child) {
    .row-cell {
      border-bottom: 1px solid $lighter-grey;
    }

    .row-cell:not(:first-child):not(:last-child) {
      padding: 12px 0;
    }
  }

  &:last-child {
    .row-cell:not(:first-child):not(:last-child) {
      padding: 12px 0 4px;
    }
  }
}

.row-cell {
  display: flex;
  align-items: center;

  &:first-child {
    padding-left: 8px;
  }

  &:last-child {
    padding-right: 8px;
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

@media (max-width: 767px) {
  .section {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .table {
    margin-right: -16px;
  }

  .table-header {
    grid-template-columns: repeat(3, minmax(135px, 4fr)) minmax(151px, 4fr);

    p:last-child {
      margin-right: 16px;
    }
  }

  .table-row {
    grid-template-columns: repeat(3, minmax(135px, 4fr)) minmax(151px, 4fr);

    &:not(:last-child) {
      .row-cell:last-child {
        margin-right: 16px;
      }
    }
  }

  .section {
    padding-top: 16px;
  }
}
</style>
