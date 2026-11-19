<template>
  <section class="informed">
    <div class="wrapper">
      <div class="intro">
        <h2 class="title">
          Staying ahead in a digital world
        </h2>
        <div class="description">
          <p>
            The digital world brings both opportunities and challenges. Virturoom is dedicated to harnessing the power of technology to enhance security while remaining vigilant against potential threats. We believe in empowering our users with the tools and knowledge to protect their investments and trade with confidence. At virturo.com, your security is our top priority.
          </p>
          <p>
            Together, we create a secure, trustworthy, and prosperous trading environment.
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
    width: 490px;
    height: 490px;
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
    max-width: 1340px;
    z-index: 1;
  }

  .title {
    color: #FFFFFF;
    font-family: 'Poppins';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    margin-bottom: 32px;
    text-align: center;
  }

  .description {
    // max-width: 632px;
    color: #FFFFFF;
    font-family: 'Poppins';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    text-align: center;
    margin: 0 auto;

    p {
      margin: 0 auto;
      padding-bottom: 32px;
      max-width: 632px;

      &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        max-width: none;
      }
    }
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
    padding: 40px 0 62px;

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

      p {
        padding-bottom: 20px;
      }
    }
  }
}
</style>
