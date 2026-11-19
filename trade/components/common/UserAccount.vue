<template>
  <div class="user-account">
    <div class="user-account-wrapper">
      <div class="mobile-only">
        <img class="logo" :src="require(`~/static/${logoFullMob}`)" alt="logo" />
        <img class="top-icon" :src="require(`~/static/${union}`)" alt="logo icon" />
      </div>
      <div class="form-container">
        <div class="form-wrapper">
          <h1 class="container-title">
            <slot name="title" />
          </h1>
          <slot name="content" />
        </div>
        <slot name="bottom-text" />
      </div>
      <div class="bg-random-wrapper">
        <div class="bg-random-container">
          <div class="bg-random-inner">
            <QuoteBox />
          </div>
          <div class="bg-random-image">
            <img :src="require('~/static/img/signup/signup-bg.png')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteBox from '@/components/common/QuoteBox';
import config from '@/project-config';

export default {
  name: 'UserAccount',
  components: { QuoteBox },
  data() {
    return {
      logoFullMob: config.logoFullMob,
      union: config.union,
    };
  },
};
</script>

<style lang="scss" scoped>
.user-account-wrapper {
  display: flex;
  min-height: 100vh;
}

.form-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 50%;
  padding: 30px 80px;
  background-color: $main-primary-color;
}

.form-wrapper {
  width: 343px;
  display: flex;
  flex-direction: column;
  margin: auto;
}

.container-title {
  color: $dark-grey;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.45;
}

.mobile-only {
  display: none;
}

@media (min-width: 861px) {
  .bg-random-wrapper {
    flex: 1 1 auto;
    background-color: $main-primary-color;
    padding: 16px 16px 16px 0;
  }

  .bg-random-container {
    display: flex;
    width: 100%;
    height: 100%;
    background-color: $dark-grey;
    position: relative;
  }

  .bg-random-inner {
    display: flex;
    flex-direction: column;
    max-width: 456px;
    height: auto;
    padding: 15px;
    margin: auto auto 80px;
    z-index: 1;
  }

  .bg-random-image {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;

    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media (max-width: 860px) {
  .user-account-wrapper {
    flex-direction: column;
  }

  .bg-random-wrapper {
    display: none;
  }

  .form-container {
    flex: 0 0 100%;
    flex-grow: 1;
    padding: 20px 16px 25px;
  }

  .mobile-only {
    width: 343px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    .logo {
      max-width: 186px;
    }
  }
}

@media (max-width: 428px) {
  .mobile-only {
    width: 100%;
    padding-left: 16px;

    .top-icon {
      width: 100px;
      height: 100px;
      margin-top: -15px;
    }
  }

  .form-wrapper {
    width: 100%;
  }
}
</style>
