<template>
  <section class="top">
    <div class="top-inner">
      <div class="row">
        <div class="col">
          <h1 class="title">
            Stay Informed,<br> Stay Connected
          </h1>
        </div>
        <div class="col">
          <p>
            Welcome to the Virturo Media Center, your go-to resource for the latest news, press releases, and media assets. Here, you'll find everything you need to stay informed about Virturo's developments, industry insights, and more.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.top {
  position: relative;
  background-color: #D3F5EC;

  .top-inner {
    // box-sizing: content-box;
    margin: 0 auto;
    max-width: 1340px;
    padding: 100px 30px;

    .row {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .col {
      max-width: 524px;
    }

    h1 {
      color: #352F44;
      font-family: 'Poppins';
      font-size: 52px;
      font-style: normal;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;
      z-index: 1;
    }

    p {
      padding-top: 4px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */

      a {
        color: #352F44;
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  .title {
    font-weight: 700;
    font-size: 56px;
    line-height: 1.2;
    color: #000000;
    padding-bottom: 20px;
  }

}

@media (max-width: 1400px) {
  .top .top-inner {
    padding: 100px 20px;
  }
}

@media (max-width: 1024px) {
  .top {
    background-position: center;

    .top-inner h1,
    .title {
      font-size: 36px;
      text-transform: capitalize;
      line-height: 150%;
    }
  }
}

@media (max-width: 998px) {
  .top .top-inner .row {
    flex-flow: column;
    padding: 0 20px;
    align-items: flex-start;
  }

  .top .top-inner .col {
    max-width: 100%;
  }

  .top .top-inner h1 {
    padding-bottom: 40px;
  }

  .top .top-inner p {
    padding-top: 0;
  }
}

@media (max-width: 768px) {

  .top {

    .internal-bg {
      width: 100%;
    }

    .top-inner {
      padding: 60px 16px;

      h1 {
        font-size: 32px;
        line-height: 140%; /* 44.8px */
      }

      p {
        line-height: 150%; /* 24px */
      }
    }
  }

  .top .top-inner .row {
    padding: 0;
  }
}
</style>
