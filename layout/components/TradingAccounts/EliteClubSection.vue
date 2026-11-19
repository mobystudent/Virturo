<template>
  <section class="club">
    <img
      class="internal-bg right"
      src="@/static/img/trading-accounts/elit-club-bg-full.png"
      alt="Trading Assets"
    >
    <div class="wrapper">
      <div class="row">
        <div class="inner">
          <h2 class="title">
            Virturo Elite Club
          </h2>
          <div class="description">
            <p>
              Welcome to Virturo Elite Club, an unrivaled level of access for high-net-worth individuals with a starting investment of $500,000 or more and minimum monthly trade volumes. Become part of an exclusive community committed to exceptional financial performance, all while enjoying our suite of exceptional services.
            </p>
            <p>*Please note that this account is available to a select group of clients who meet our criteria.</p>
          </div>
          <div class="wrap-btn">
            <a
              class="btn btn-account"
              @click="openChat"
            >Consult with an expert
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="img-icon-mob">
      <img
        class="icon-mob"
        src="@/static/img/trading-accounts/club-icon.png"
        alt="Trading Assets"
      >
    </div>
    <img
      class="internal-bg-mob bottom"
      src="@/static/img/trading-accounts/bg-union-mob.png"
      alt="Trading Assets"
    >
  </section>
</template>

<script>
export default {
  name: 'EliteClubSection',

  data() {
    return {
      accountLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up`,
    };
  },
  methods: {
    openChat() {
      if (window.Intercom) {
        window.Intercom('show');
      }
    },
  },
};

</script>

<style lang="scss" scoped>
.club {
  background-color: #352F44;
  padding: 60px 0 80px;
  position: relative;
  overflow: hidden;

  @media (max-width: 992px) {
    padding-top: 40px;
    padding-bottom: 392px;
  }

  .wrapper {
    // max-width: 1155px;
    max-width: 1340px;
    box-sizing: border-box;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      padding: 0 15px;
    }

    .row {
      display: flex;
      justify-content: space-between;

      @media (max-width: 992px) {
        flex-flow: column;
      }
    }
  }

  .col-img {
    align-self: center;

    .img-icon-desk {
      display: block;

      @media (max-width: 992px) {
        display: none;
      }
    }

    .img-icon-mob {
      display: none;

      @media (max-width: 992px) {
        display: block;
        height: 420px;
        padding-top: 130px;
      }

    }

    .icon {
      position: relative;
      right: 28%;
      top: 26px;
    }
  }

  .internal-bg {
    position: absolute;
    top: 0;
    height: 100%;

    &.right {
      right: 0;
    }

    &.left {
      left: 0;
    }

    @media (max-width: 992px) {
      display: none;
    }
  }

  .internal-bg-mob {
    display: none;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;

    @media (max-width: 992px) {
      display: block;
      // max-height: 440px;
      width: 560px;
      height: 560px;
      background-position: center;
      left: 50%;
      transform: translateX(-50%);
      bottom: -104px;
    }
  }

  .icon-mob {
    display: none;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    bottom: 80px;

    @media (max-width: 992px) {
      display: block;
    }
  }

  .inner {
    padding: 25px 0;
    margin-top: auto;

    @media (max-width: 768px) {
      padding-top: 0;
    }
  }

  .description {
    margin-bottom: 40px;
    max-width: 632px;

    @media (max-width: 992px) {
      margin-bottom: 16px;
      max-width: none;
    }
  }

  p {
    padding-bottom: 24px;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    color: #D3F5EC;
    font-family: 'Poppins';
  }

  .title {
    padding-bottom: 40px;
    font-size: 52px;
    font-family: 'Poppins';
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    color: #D3F5EC;
    max-width: 440px;

    @media (max-width: 992px) {
      max-width: none;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }
}

.wrap-btn {
  display: flex;

  .btn {
    font: 500 16px 'Poppins';
    padding: 15px 30px;
    border: 1px solid #D3F5EC;
    border-radius: 4px;
    color: #352F44;
    background-color: #D3F5EC;
    line-height: 150%; /* 24px */
    transition: color .25s ease-in, background-color .25s ease-in;
  }

  .btn-account {
    display: inline-flex;
    align-items: center;
    column-gap: 5px;
    border: 1px solid #D3F5EC;
    color: #352F44;
    background-color: #D3F5EC;
    transition: .25s box-shadow ease-in, .25s background-color ease-in;
    cursor: pointer;

    &:hover {
      color: #D3F5EC;
      background-color: transparent;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
    }

    &:active {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
    }
  }
}

.icon-btn {
  width: 24px;
  height: 24px;
  overflow: hidden;
}

.icons {
  display: flex;
  transform: translateX(-100%);
  transition: .25s transform ease-in;
}
</style>
