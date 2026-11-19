<template>
  <section class="background-panel">
    <div class="bg-lg bg-panel">
      <div class="intro">
        <div class="description">
          At Virturo, ESG is not just a set of principles;<br>it's a core part of our identity. We believe that by integrating environmental, social, and governance considerations into our business strategy, we can create value not only for our shareholders but for society as a whole.
        </div>
        <div class="slogan">
          Together, we can build a sustainable and inclusive future.
        </div>
      </div>
    </div>
    <div class="bg-md bg-panel">
      <div class="intro">
        <div class="description">
          At Virturo, ESG is not just a set of principles; <br> it's a core part of our identity. We believe that by integrating environmental, social, and governance considerations into our business strategy, we can create value not only for our shareholders but for society as a whole.
        </div>
        <div class="slogan">
          Together, we can build a sustainable and inclusive future.
        </div>
      </div>
    </div>
    <div class="bg-sm bg-panel">
      <div class="intro">
        <div class="description">
          At Virturo, ESG is not just a set of principles; it's a core part of our identity. We believe that by integrating environmental, social, and governance considerations into our business strategy, we can create value not only for our shareholders but for society as a whole.
        </div>
        <div class="slogan">
          Together, we can build a sustainable and inclusive future.
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bg-panel {
  width: 100%;
  height: 480px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff no-repeat center center;
  background-size: cover;
}

.intro {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  max-width: 652px;

  @media (max-width: 992px) {
    padding: 0 15px;
  }

  .description {
    margin-bottom: 24px;
    color: #FFF;
    font-family: "Poppins";
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    /* 28px */

    @media (max-width: 768px) {
      br {
        display: none;
      }
    }
  }

  .slogan {
    color: #48C3A8;
    font-family: "Poppins";
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    /* 28px */
    text-align: center;
  }
}

.bg-lg {
  display: none;
  background-image: url("@/static/img/esg/esg-bg.png");
  background-position: center 55%;

  @media (min-width: 1400px) {
    display: flex;
  }
}

.bg-md {
  display: flex;
  background-image: url("@/static/img/esg/esg-bg.png");

  @media (min-width: 1400px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
}

.bg-sm {
  display: none;
  background-image: url("@/static/img/esg/esg-bg.png");
  background-position: left bottom;
  height: 592px;

  @media (max-width: 480px) {
    display: flex;
  }
}
</style>
