<template>
  <section class="section-trading-view-widgets">
    <div class="wrapper">
      <h2 class="title">
        Economic Calendar
      </h2>
      <div class="widgets-wrapper">
        <div class="tradingview-widget-container">
          <div
            ref="tradingviewWidget"
            class="tradingview-widget-container__widget"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AssetsContent',
  mounted() {
    this.loadTradingViewWidget();
  },
  methods: {
    loadTradingViewWidget() {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';

      const widgetSettings = {
        width: '100%',
        height: '100%',
        colorTheme: 'light',
        isTransparent: false,
        locale: 'en',
        importanceFilter: '-1,0,1',
        countryFilter: 'us,ca,nl,eu,fr,de,es,ch,gb,au,tr',
      };

      script.text = JSON.stringify(widgetSettings);

      this.$refs.tradingviewWidget.appendChild(script);
    },
  },
};
</script>

<style lang="scss" scoped>
.section-trading-view-widgets {
  position: relative;
  background-color: #ECECE4;
  padding: 60px 0 200px;
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    background: url('@/static/img/assets/snowflake.png') center/cover no-repeat;
  }

  &:before {
    left: -287px;
    bottom: -200px;
  }

  &:after {
    top: 50%;
    transform: translateY(-50%);
    right: -300px;
  }

  .wrapper {
    padding: 0 30px;
    margin: 0 auto;
  }

  .title {
    color: #352F44;
    font-family: 'Poppins';
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    margin-bottom: 88px;
    text-align: center;
  }

  .widgets-wrapper {
    width: 100%;
    height: 392px;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
}

/*widget*/
.tradingview-widget-container {
  width: 100% !important;
  max-width: 873px;
  z-index: 1;

  &__widget {
    height: 100%;
  }
}

@media (max-width: 992px) {
  .section-trading-view-widgets {
    &:before,
    &:after {
      content: none;
    }

    .title {
      font-size: 32px;
      line-height: 140%; /* 44.8px */
      letter-spacing: normal;
      margin-bottom: 77px;
    }
  }
}

@media (max-width: 768px) {
  .section-trading-view-widgets {
    padding: 40px 0 78px;

    .wrapper {
      padding: 0 16px;
    }
  }
}
</style>
