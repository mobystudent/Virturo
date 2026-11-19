<template>
  <div class="select">
    <span class="title">{{ label }}</span>
    <div ref="selectWrapper" class="select-wrapper">
      <div class="select-inner" :class="{ 'is-open': isOpen }" @click="selectClick" @keydown="selectKeydown">
        <template v-if="selected.id">
          <div v-if="selected.icon" class="selected">
            <img class="current-icon" :src="`${API_URL}${selected.icon}`" />
            <span>{{ selected.name }} ({{ selected.short_code }})</span>
          </div>
          <div v-else class="selected">
            <span>{{ selected.name }}</span>
          </div>
        </template>
        <template v-if="items.length > 0">
          <ArrowIcon class="arrow-icon" />
        </template>
      </div>
      <div v-if="isOpen" class="items-box">
        <div class="dropdown">
          <div v-for="(item, index) in items" :key="index" class="option" @click="handleSelect(item)">
            <template v-if="item.icon">
              <img class="icon" :src="`${API_URL}${item.icon}`" />
              <span>{{ item.name }} ({{ item.short_code }})</span>
            </template>
            <template v-else>
              <span>{{ item.name }}</span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '@/static/img/icons/arrow-down.svg?inline';
import { API_URL } from '@/constants';

export default {
  name: 'SelectBox',
  components: { ArrowIcon },
  props: {
    items: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    selected: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isOpen: false,
      API_URL,
    };
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
      } else if (this.items.length) {
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
    handleSelect(item) {
      this.$emit('update', item);
      this.isOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: calc(50% - 8px);
  flex-shrink: 0;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: $dark-grey;

  .title {
    display: inline-block;
    padding-bottom: 8px;
  }
}

.select-wrapper {
  position: relative;
}

.select-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  border: 1px solid $light-khaki;
  outline: 2px solid transparent;
  padding: 9px 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.is-open {
    border-color: $common-green-transparent;
    outline-color: $light-mint;
  }
}

.selected {
  display: flex;
  align-items: center;
}

.current-icon,
.icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.arrow-icon {
  cursor: pointer;
}

.items-box {
  position: absolute;
  top: 52px;
  width: 100%;
  border-radius: 8px;
  z-index: 1;
}

.dropdown {
  border-radius: 6px;
  background-color: $common-white;
  border: 1px solid $common-green-transparent;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
}

.option {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  &:hover {
    background-color: $light-mint;
  }
}

@media (max-width: 480px) {
  .select {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
}
</style>
