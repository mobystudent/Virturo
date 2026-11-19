<template>
  <section class="informed">
    <div class="wrapper">
      <div class="intro">
        <h2 class="title">
          How to deposit funds
        </h2>
        <div class="description">
          <p>
            Virturo offers multiple deposit methods, each designed to meet your preferences while ensuring the highest levels of security<br> and safety for your transactions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.informed {
  position: relative;
  background-color: #157275;
  padding: 60px 0;
  overflow: hidden;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 440px;
    height: 440px;
    transform: translateY(-50%);
    background: url('@/static/img/home/snowflake.png') center/cover no-repeat;
  }

  &:before {
    left: -160px;
  }

  &:after {
    right: -160px;
  }

  .wrapper {
    position: relative;
    padding: 0 30px;
    margin: 0 auto;
    z-index: 1;
  }

  .title {
    color: #FFFFFF;
    font-family: 'Poppins';
    font-size: 52px;
    font-style: normal;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    margin-bottom: 32px;
    text-align: center;
  }

  .description {
    max-width: 632px;
    color: #FFFFFF;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    text-align: center;
    margin: 0 auto;
  }
}

@media (max-width: 992px) {
  .informed {
    display: none;
  }
}
</style>
