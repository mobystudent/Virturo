<template>
  <div class="tradingview-widget-container">
    <div
      ref="tradingviewWidget"
      class="tradingview-widget-container__widget"
    />
  </div>
</template>

<script>
export default {
  name: 'TradingViewWidget',
  props: {
    widgetType: {
      type: String,
      required: true,
    },
    widgetSettings: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.loadWidget();
  },
  methods: {
    loadWidget() {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `https://s3.tradingview.com/external-embedding/embed-widget-${this.widgetType}.js`;

      script.text = JSON.stringify(this.widgetSettings);
      this.$refs.tradingviewWidget.appendChild(script);
    },
  },
};
</script>

<style lang="scss" scoped>
.tradingview-widget-container {
  max-width: 343px;
  width: 100%;
  height: 502px !important;
  margin: 0px auto;

  &__widget {
    height: 100%;
  }
}

.tradingview-widget-copyright {
  display: none;
}

@media (max-width: 768px) {
  .tradingview-widget-container {
    margin: 0px auto;
  }
}
</style>
