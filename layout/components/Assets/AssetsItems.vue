<template>
  <section class="section-trading-assets">
    <div class="wrapper">
      <div class="row">
        <div class="col">
          <div class="wrap-content">
            <h3 class="title">
              Invest in stocks with ultra-low commissions
            </h3>
            <div class="content">
              From technology to healthcare, New York to Hong Kong — with fractional shares, it’s easy to fill your portfolio with a variety of leading stocks from the world’s top exchanges. Invest in stocks without paying commission and without limits on trading volume
            </div>
          </div>
        </div>
        <div class="col col-widget">
          <TradingViewWidget
            :widget-settings="{
              colorTheme: 'light',
              dateRange: '12M',
              exchange: 'NASDAQ',
              showChart: true,
              locale: 'en',
              width: '100%',
              height: '100%',
              largeChartUrl: '',
              isTransparent: false,
              showSymbolLogo: true,
              showFloatingTooltip: true,
              plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
              plotLineColorFalling: 'rgba(41, 98, 255, 1)',
              gridLineColor: 'rgba(42, 46, 57, 0)',
              scaleFontColor: 'rgba(19, 23, 34, 1)',
              belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
              belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
              belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
              belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
              symbolActiveColor: 'rgba(41, 98, 255, 0.12)'
            }"
            widget-type="hotlists"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="wrap-content">
            <h3 class="title">
              Discover Opportunities with commodities
            </h3>
            <div class="content">
              Take advantage of exciting opportunities in the world’s top resource markets. With one-click trading, flexible leverage, and deep liquidity, trading commodity CFDs allows you to choose an investment amount without being limited to units, such as a whole barrel of oil or an ounce of gold.
            </div>
          </div>
        </div>
        <div class="col col-widget">
          <TradingViewWidget
            :widget-settings="{
              colorTheme: 'light',
              dateRange: '12M',
              showChart: true,
              locale: 'en',
              width: '100%',
              height: '100%',
              largeChartUrl: '',
              isTransparent: false,
              showSymbolLogo: true,
              showFloatingTooltip: true,
              plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
              plotLineColorFalling: 'rgba(41, 98, 255, 1)',
              gridLineColor: 'rgba(240, 243, 250, 0)',
              scaleFontColor: 'rgba(19, 23, 34, 1)',
              belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
              belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
              belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
              belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
              symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
              tabs: [
                {
                  title: 'Futures',
                  symbols: [
                    {
                      s: 'COMEX:GC1!',
                      d: 'Gold'
                    },
                    {
                      s: 'NYMEX:CL1!',
                      d: 'WTI Crude Oil'
                    },
                    {
                      s:'NYMEX:NG1!',
                      d:'Gas'
                    },
                    {
                      s:'CBOT:ZC1!',
                      d:'Corn'
                    },
                    {
                      s:'COMEX:SI1!',
                      d:'Silver'
                    },
                    {
                      s:'NYMEX:PL1!',
                      d:'Platinum'
                    },
                    {
                      s:'COMEX:LTH1!',
                      d:'Lithium'
                    },
                    {
                      s:'CBOT:ZW1!',
                      d:'Wheat'
                    },
                    {
                      s:'ICEUS:KC1!',
                      d:'Coffee'
                    },
                    {
                      s:'ICEUS:CC1!',
                      d:'Cocoa'
                    }
                  ],
                  originalTitle:'Futures'
                }
              ]
            }"
            widget-type="market-overview"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="wrap-content">
            <h3 class="title">
              Go long or short on currencies
            </h3>
            <div class="content">
              Trade on the largest, most active financial market in the world — the foreign currency exchange, also known as FX. Buy and sell a wide variety of major USD pairs and other currency crosses, with up to 1:30 leverage (or up to 1:200 as a Professional Client for Centurion account) to gain greater exposure with less capital.
            </div>
          </div>
        </div>
        <div class="col col-widget">
          <TradingViewWidget
            :widget-settings="{
              width: '100%',
              height: '100%',
              currencies: [
                'EUR',
                'USD',
                'JPY',
                'GBP',
                'CHF',
                'AUD',
                'TRY'
              ],
              isTransparent: false,
              colorTheme: 'light',
              locale: 'en',
              backgroundColor: '#ffffff'
            }"
            widget-type="forex-cross-rates"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="wrap-content">
            <h3 class="title">
              Expand exposure with indices
            </h3>
            <div class="content">
              Benefit from market trends of major stock exchanges around the world — whether they go up or down. Indices are a perfect way to invest in the overall movement of the stock market, with the flexibility to manage your exposure as you see fit.
            </div>
          </div>
        </div>
        <div class="col col-widget">
          <TradingViewWidget
            :widget-settings="{
              colorTheme: 'light',
              dateRange: '12M',
              showChart: true,
              locale: 'en',
              width: '100%',
              height: '100%',
              largeChartUrl: '',
              isTransparent: false,
              showSymbolLogo: true,
              showFloatingTooltip: true,
              plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
              plotLineColorFalling: 'rgba(41, 98, 255, 1)',
              gridLineColor: 'rgba(240, 243, 250, 0)',
              scaleFontColor: 'rgba(19, 23, 34, 1)',
              belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
              belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
              belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
              belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
              symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
              tabs: [
                {
                  title: 'Indices',
                  symbols: [
                    {
                      s: 'FOREXCOM:SPXUSD',
                      d: 'S&P 500 Index'
                    },
                    {
                      s: 'FOREXCOM:NSXUSD',
                      d: 'US 100 Cash CFD'
                    },
                    {
                      s: 'FOREXCOM:DJI',
                      d: 'Dow Jones Industrial Average Index'
                    },
                    {
                      s: 'INDEX:NKY',
                      d: 'Japan 225'
                    },
                    {
                      s: 'INDEX:DEU40',
                      d: 'DAX Index'
                    },
                    {
                      s: 'FOREXCOM:UKXGBP',
                      d: 'FTSE 100 Index'
                    },
                    {
                      s: 'ASX:XJO',
                      d: 'S&P/ASX 200 Index'
                    }
                  ],
                  originalTitle: 'Indices'
                }
              ]
            }"
            widget-type="market-overview"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="wrap-content">
            <h3 class="title">
              Diversify with ETFs
            </h3>
            <div class="content">
              Exchange-traded funds (ETFs) allow investors a flexible yet comprehensive way of investing in the financial markets at a low-cost entry point and without management fees — making them ideal for portfolio diversification. Virturo offers both investing in ETFs as the underlying asset, as well as trading them as CFDs.
            </div>
          </div>
        </div>
        <div class="col col-widget">
          <TradingViewWidget
            :widget-settings="{
              colorTheme: 'light',
              dateRange: '12M',
              showChart: true,
              locale: 'en',
              width: '100%',
              height: '100%',
              largeChartUrl: '',
              isTransparent: false,
              showSymbolLogo: true,
              showFloatingTooltip: true,
              plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
              plotLineColorFalling: 'rgba(41, 98, 255, 1)',
              gridLineColor: 'rgba(240, 243, 250, 0)',
              scaleFontColor: 'rgba(19, 23, 34, 1)',
              belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
              belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
              belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
              belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
              symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
              tabs: [
                {
                  title: 'ETFs',
                  symbols: [
                    {
                      s: 'AMEX:SPY',
                      d: 'SPDR S&P 500 ETF TRUST'
                    },
                    {
                      s: 'NASDAQ:QQQ',
                      d: 'Invesco QQQ Trust'
                    },
                    {
                      s: 'AMEX:IWM',
                      d: 'iShares Russell 2000'
                    },
                    {
                      s: 'NASDAQ:IBIT',
                      d: 'iShares Bitcoin Trust'
                    },
                    {
                      s: 'AMEX:GLD',
                      d: ' SPDR Gold Trust'
                    },
                    {
                      s: 'CBOE:VXX',
                      d: ' iPath Series B S&P 500 VIX Short-Term Futures ETN'
                    },
                    {
                      s: 'NASDAQ:SOXX',
                      d: ' iShares Semiconductor ETF'
                    },
                    {
                      s: 'AMEX:VT',
                      d: ' Vanguard Total World Stock Index ETF'
                    }
                  ]
                }
              ]
            }"
            widget-type="market-overview"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TradingViewWidget from '@/components/Assets/TradingViewWidget.vue';

export default {
  name: 'AssetsItems',
  components: { TradingViewWidget },
};
</script>

<style lang="scss" scoped>
.section-trading-assets {
  .wrapper {
    max-width: 1340px;
    width: 100%;
    padding: 0 30px;
    margin: 0 auto;
  }

  .row {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    border-bottom: 1px solid #352F44;
    padding: 60px 0 80px;
  }

  .col {
    width: 50%;
  }

  .col-widget {
    display: flex;
    justify-content: flex-end;
  }

  .wrap-content {
    max-width: 525px;
  }

  .title {
    color: #352F44;
    font-family: 'Poppins';
    font-size: 40px;
    font-weight: 500;
    line-height: 112%; /* 44.8px */
    margin-bottom: 32px;
  }

  .content {
    color: #352F44;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
}

@media (max-width: 992px) {
  .section-trading-assets {
    .title {
      font-size: 32px;
      line-height: 140%; /* 44.8px */
      margin-bottom: 24px;
    }

    .content {
      color: #000000;
    }
  }
}

@media (max-width: 768px) {
  .section-trading-assets {
    .wrapper {
      padding: 0 16px;
    }
    .row {
      flex-flow: column;
      padding: 50px 0 40px;

      &:first-child {
        padding: 40px 0;
      }

      &:last-child {
        margin-bottom: 40px;
      }
    }

    .col {
      width: 100%;
    }

    .col-widget {
      justify-content: center;
    }
  }
}
</style>
