<template>
  <section class="informed">
    <div class="wrapper">
      <div class="intro">
        <div class="description">
          <p>
            Awareness and vigilance are key in combating phishing.<br> We at Virturo.com are dedicated to maintaining a secure trading environment<br> and encourage you to reach out with any security concerns.
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
  padding: 105px 0;
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
    .title {
      font-size: 32px;
      line-height: 140%; /* 44.8px */
      letter-spacing: normal;
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 768px) {
  .informed {
    padding: 40px 0;

    &:before {
      width: 320px;
      height: 320px;
      top: -116px;
      left: -60px;
      transform: none;
    }

    &:after {
      content: none;
    }

    .wrapper {
      padding: 0 16px;
    }

    .title {
      text-align: left;
    }

    .description {
      max-width: 100%;
      text-align: left;
      font-size: 20px;
      line-height: 150%; /* 30px */
    }
  }
}
</style>
