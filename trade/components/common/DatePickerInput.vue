<template>
  <DatePicker
    v-model="birthday"
    v-mask="'##/##/####'"
    :disabled-date="disabledRange"
    placeholder="DD/MM/YYYY"
    format="DD/MM/YYYY"
    :editable="true"
    :clearable="false"
    @change="handleChange"
    @open="handleCalendarOpen(true)"
    @close="handleCalendarOpen(false)"
  >
    <template #input>
      <input
        class="mx-input"
        :class="{ 'calendar-open': isCalendarOpen }"
        type="text"
        placeholder="DD/MM/YYYY"
        :value="formatDate(birthday)"
        @click.stop
        @blur="onBlur"
      />
    </template>

    <template #header="{}">
      <div class="select-wrapper">
        <select v-model="selectedMonth">
          <option v-for="(item, index) in monthNames" :key="index" :value="index">{{ item }}</option>
        </select>
      </div>

      <div class="select-wrapper">
        <select v-model="selectedYear">
          <option
            v-for="item in Array(100)
              .fill('')
              .map((_, index) => currentYear - 100 + index + 1)"
            :key="item"
            :value="Number(item)"
          >
            {{ item }}
          </option>
        </select>
      </div>
    </template>
  </DatePicker>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const ago18years = new Date(Date.now());
ago18years.setFullYear(ago18years.getFullYear() - 18);
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default {
  components: { DatePicker },
  props: {
    date: {
      type: Date,
      default: '',
    },
  },
  data() {
    return {
      currentYear,
      currentMonth,
      monthNames,
      selectedYear: currentYear - 18,
      selectedMonth: currentMonth,
      birthday: new Date(ago18years.getTime()),
      ago18years,
      isCalendarOpen: false,
    };
  },
  watch: {
    birthday: function (newValue) {
      this.$emit('onChange', newValue);
    },
    selectedYear: function (newYear) {
      this.birthday.setFullYear(newYear);
      this.birthday = new Date(this.birthday.getTime());
    },
    selectedMonth: function (newMonth) {
      this.birthday.setMonth(newMonth);
      this.birthday = new Date(this.birthday.getTime());
    },
  },
  methods: {
    onBlur(e) {
      const [day, month, year] = e.target.value.split('/').map(Number);

      if (day && month && year) {
        const defaultData = new Date(ago18years.getTime());
        const error = [day, month, year].some(item => isNaN(item));
        const overflowRange = year < defaultData.getFullYear() - 100 - 18 || year > defaultData.getFullYear();
        const dateObj = new Date(year, month - 1, day);
        const isRealDate = dateObj.getFullYear() === year &&
          dateObj.getMonth() === month - 1 &&
          dateObj.getDate() === day;

        const isValidDate = !error && !overflowRange && isRealDate;

        this.$emit('dateError', isValidDate ? null : 'invalid');

        const date = isValidDate ? dateObj : defaultData;

        this.birthday = date;
        this.selectedYear = date.getFullYear();
        this.selectedMonth = date.getMonth();
      } else {
        this.$emit('dateError', 'invalid');
      }
    },
    formatDate(date) {
      const parsedDate = new Date(date);

      const day = parsedDate.getDate().toString().padStart(2, '0');
      const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
      const year = parsedDate.getFullYear().toString();

      const formattedDate = `${day}/${month}/${year}`;

      return formattedDate;
    },
    disabledRange(date) {
      return date > ago18years;
    },
    handleChange(date) {
      this.selectedYear = date.getFullYear();
      this.selectedMonth = date.getMonth();
    },
    handleCalendarOpen(isOpen) {
      this.isCalendarOpen = isOpen;
    },
  },
};
</script>

<style lang="scss">
.mx-datepicker {
  width: 100%;

  .mx-icon-calendar {
    width: 42px;
    height: 42px;
    background-image: url('@/static/img/icons/сalendar.svg');
    background-repeat: no-repeat;
    background-position: center;
    right: 0;
    cursor: pointer;

    svg {
      display: none;
    }
  }

  &.invalid {
    input {
      border-color: $danger-light;
    }
  }
}

.mx-input {
  height: 44px;
  background-color: $common-white;
  border: 1px solid $light-khaki;
  outline: 2px solid transparent;
  box-shadow: none;
  border-radius: 6px;
  padding: 10px 45px 10px 12px;
  color: $black;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.4;
  transition: all 0.2s ease-in-out;

  &:focus,
  &.calendar-open {
    border-color: $common-green-transparent;
    outline: 2px solid $light-mint !important;
  }

  &:hover:not(:focus) {
    border-color: $common-green-transparent;
  }

  &::placeholder {
    color: $grey-52-color;
  }
}

.mx-datepicker-main {
  background-color: $common-white;
  border-color: $common-green-transparent;
  outline: 2px solid $light-mint;
  border-radius: 6px;
  box-shadow: none;
}

.mx-datepicker-header {
  display: flex;
  padding: 20px 28px 26px;
  border-bottom: none;

  .select-wrapper {
    position: relative;
    width: 140px;

    &:first-child {
      margin-right: 8px;
    }

    &::after {
      content: '';
      width: 14px;
      height: 12px;
      position: absolute;
      right: 12px;
      top: 13px;
      background-image: url("data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath id='Vector 9' d='M12.5 1L6.5 7L0.5 1' stroke='%23074429' stroke-width='1.2'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      z-index: 5;
    }

    option {
      color: $common-black;
    }
  }

  select {
    position: relative;
    width: 100%;
    height: 32px;
    padding: 4px 12px;
    border-radius: 6px;
    border: 1px solid $light-khaki;
    background-color: $main-primary-color;
    color: $dark-grey;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    appearance: none;
    z-index: 1;
  }
}

.mx-table-date {
  thead tr th {
    font-size: 15px;
    line-height: 140%;
    font-weight: 400;
    color: $dark-grey;
  }

  tbody tr td {
    font-size: 15px;
    line-height: 140%;
    font-weight: 400;
    color: $dark-grey;

    &.cell.not-current-month {
      color: $grey-52-color;
      background: none;
    }

    &.cell.active {
      color: $dark-grey;
      background-color: $common-green-transparent;
      border-radius: 4px;
    }

    &.cell:hover {
      color: $dark-grey;
      background-color: $common-green-transparent;
      border-radius: 4px;
    }

    &.today {
      color: $dark-grey;
      background-color: $common-green-transparent;
      border-radius: 4px;
    }
  }
}

.mx-datepicker-content {
  width: 100%;

  .mx-calendar-header {
    display: none;
  }

  .mx-calendar {
    width: 100%;
    padding: 0 35px 20px;
  }
}

.mx-calendar-content .cell.disabled {
  background-color: transparent;
  color: $dark-grey;
}

.mx-datepicker-main.mx-datepicker-popup {
  width: 343px;
}

@media (max-width: 380px) {
  .mx-datepicker-main.mx-datepicker-popup {
    width: calc(100% - 32px);
  }
}
</style>
