<template>
  <div class="tabs-wrapper">
    <div class="tabs-container">
      <div class="tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.label"
          class="tab"
          :class="{ active: index === selected, hidden: !enabled.includes(index) }"
          @click="updateSelected(index)"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    enabled: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tabs: [],
      tabsActive: [],
      selected: null,
      isTurnOff: false,
    };
  },
  watch: {
    enabled: function (val) {
      this.setActiveTab(val);
    },
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    if (this.enabled.length) {
      this.setActiveTab(this.enabled);
    }
  },
  methods: {
    updateSelected(index) {
      this.selected = index;
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === this.selected;
      });
    },
    setActiveTab(enabledArr) {
      this.tabsActive = enabledArr;
      if (this.tabsActive.length) {
        this.selected = Math.min.apply(null, this.tabsActive);
      } else {
        this.selected = 0;
      }
      if (this.tabs.length) {
        this.tabs[this.selected].isActive = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-wrapper {
  display: flex;
  flex-direction: column;
}

.tabs-container {
  position: sticky;
  top: 94px;
  left: 0;
  right: 0;
  max-width: 653px;
  width: 100%;
  background-color: $common-white;
  padding-bottom: 32px;
  border-bottom: 1px solid $light-gray;
  z-index: 15;
}

.tabs {
  display: flex;
  align-items: center;
  max-width: 430px;
  border-radius: 6px;
  background-color: $light-gray;
  padding: 2px;
}

.tab {
  flex-grow: 1;
  flex-basis: min-content;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  color: $dark-grey;
  border-radius: 4px;
  background-color: transparent;
  padding: 3px 8px;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:not(:first-child) {
    margin-left: 1px;
  }

  &.active {
    background-color: $common-white;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.12);
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.hidden {
    display: none;
  }
}

@media (max-width: 767px) {
  .tabs-container {
    top: 88px;
    max-width: 100%;
    padding-bottom: 16px;
    padding-top: 40px;
  }
}
</style>
