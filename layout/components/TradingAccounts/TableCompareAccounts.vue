<template>
  <div
    class="table-compare-accounts"
    role="Compare accounts"
    tabindex="0"
  >
    <div class="table">
      <div class="thead">
        <div class="tr">
          <div class="th">
            Features:
          </div>
          <div class="th">
            Basic
          </div>
          <div class="th">
            Prime
          </div>
          <div class="th">
            Apex
          </div>
          <div class="th">
            Alpha
          </div>
          <div class="th">
            Zenith
          </div>
        </div>
      </div>
      <div class="tbody">
        <div class="tr">
          <div class="td">
            Spreads
          </div>
          <div class="td">
            Basic
          </div>
          <div class="td">
            Improved
          </div>
          <div class="td">
            Market-Grade
          </div>
          <div class="td">
            +
          </div>
          <div class="td">
            +
          </div>
        </div>
        <div class="tr">
          <div class="td">
            Leverage
          </div>
          <div class="td">
            Entry-Level
          </div>
          <div class="td">
            Upgraded
          </div>
          <div class="td">
            Maximum
          </div>
          <div class="td">
            Maximum
          </div>
          <div class="td">
            +
          </div>
        </div>
        <div class="tr">
          <div class="td">
            Commissions
          </div>
          <div class="td">
            Entry-Level
          </div>
          <div class="td">
            Improved
          </div>
          <div class="td">
            Tailored
          </div>
          <div class="td">
            Zero
          </div>
          <div class="td">
            +
          </div>
        </div>
        <div class="tr">
          <div class="td">
            Market Analysis Tools
          </div>
          <div class="td">
            Basic
          </div>
          <div class="td">
            Advanced
          </div>
          <div class="td">
            Advanced
          </div>
          <div class="td">
            On Demand
          </div>
          <div class="td">
            +
          </div>
        </div>
        <div class="tr">
          <div class="td">
            Educational Resources
          </div>
          <div class="td">
            Basic
          </div>
          <div class="td">
            Unlimited Access&nbsp;
          </div>
          <div class="td">
            +
          </div>
          <div class="td">
            +
          </div>
          <div class="td">
            +
          </div>
        </div>
        <div class="tr">
          <div class="td">
            Economic Calendar and Crypto News
          </div>
          <div class="td">
            +
          </div>
          <div class="td">
            +
          </div>
          <div class="td">
            +
          </div>
          <div class="td">
            +
          </div>
          <div class="td">
            +
          </div>
        </div>
        <div class="tr">
          <div class="td">
            Weekly Market Newsletter
          </div>
          <div class="td">
            +
          </div>
          <div class="td">
            +
          </div>
          <div class="td">
            +
          </div>
          <div class="td">
            +
          </div>
          <div class="td">
            +
          </div>
        </div>
      </div>

      <div class="tfoot">
        <div class="tr">
          <div class="td">
            <div class="footer-td">
              Additional Features:
            </div>
          </div>
          <div class="td" />
          <div class="td">
            <div class="footer-td">
              <span>Dedicated Specialist</span>
            </div>
          </div>
          <div class="td">
            <div class="footer-td">
              All Prime features
            </div>
          </div>
          <div class="td">
            <div class="footer-td">
              All Apex features
            </div>
          </div>
          <div class="td">
            <div class="footer-td">
              All Aplha features
            </div>
          </div>
        </div>
        <div class="tr">
          <div class="td" />
          <div class="td" />
          <div class="td" />
          <div class="td">
            <span>Priority Support</span>
          </div>
          <div class="td">
            <span>Zero Commissions</span>
          </div>
          <div class="td">
            <span>Dedicated Team</span>
          </div>
        </div>
        <div class="tr">
          <div class="td" />
          <div class="td" />
          <div class="td" />
          <div class="td">
            <span>Premier Events Access</span>
          </div>
          <div class="td">
            <span>Guaranteed Stop Loss</span>
          </div>
          <div class="td">
            <span>IPO and ICO Access</span>
          </div>
        </div>
        <div class="tr">
          <div class="td" />
          <div class="td" />
          <div class="td" />
          <div class="td" />
          <div class="td">
            <span>TradingView Pro</span>
          </div>
          <div class="td">
            <span>Priority Transactions</span>
          </div>
        </div>
        <div class="tr">
          <div class="td" />
          <div class="td" />
          <div class="td" />
          <div class="td" />
          <div class="td" />
          <div class="td">
            <span>Loyalty Package</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-compare-accounts {
  padding-bottom: 42px;
  border-bottom: 1px solid #352F44;
  overflow: auto;
  width: 100%;

  .table {
    display: flex;
    flex-flow: column nowrap;
    height: 100%;
    width: 100%;
    text-align: left;
  }

  .tfoot,
  .tbody,
  .thead {
    display: flex;
    flex-flow: column nowrap;
  }

  .tr {
    display: flex;
    flex-flow: row nowrap;
    margin: 5px 0;
  }

  .th {
    border-bottom: 1px solid #E8F2E4;
    padding: 6px 12px 14px;
    color: #352F44;
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 500;
    line-height: 132%; /* 31.68px */
    width: 14%;

    &:first-child {
      padding-left: 0;
      min-width: 210px;
      width: 30%;
      font-size: 20px;
      font-family: 'Poppins';
      font-weight: 400;
    }

  }

  .td {
    width: 14%;

    &:first-child {
      min-width: 210px;
      width: 30%;
    }
  }

  .tbody {
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid #E8F2E4;
    cursor: pointer;

    .tr {
      &:hover {
        .td {
          background-color: #D3F5EC;

          &:first-child {
            border-radius: 30px 0px 0px 30px;
          }

          &:last-child {
            border-radius: 0px 30px 30px 0px;
          }
        }
      }
    }

    .td {
      padding: 6px 12px 8px;
      color: #282929;
      font-size: 14px;
      font-family: 'Poppins';
      font-weight: 400;
      line-height: 130%;

      /* 18.2px */
      &:first-child {
        padding-left: 12px;
      }
    }
  }

  .tfoot {
    .tr {
      margin: 7px 0;

      &:first-child {
        .td {
          &:first-child {
            padding-left: 0;
          }
        }
      }
    }

    .td {
      color: #282929;
      font-size: 14px;
      font-family: 'Poppins';
      font-weight: 400;
      line-height: 130%;
      /* 18.2px */

      &:first-child {
        padding-left: 12px;
        color: #282929;
        font-size: 20px;
        font-family: 'Poppins';
        font-weight: 400;
        line-height: 140%;
        /* 28px */
      }

      span {
        border-radius: 30px;
        background: #157275;
        display: inline-flex;
        padding: 2px 8px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        color: #FFF;
        font-size: 14px;
        font-family: 'Poppins';
        font-weight: 400;
        line-height: 140%; /* 22.4px */
      }

    }
  }
}
</style>
