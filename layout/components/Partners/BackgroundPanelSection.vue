<template>
  <section class="background-panel">
    <div class="wrapper">
      <div class="intro">
        <h3 class="title">
          Virturo is not just a trading platform;
        </h3>
        <div class="description">
          it's a community of collaborators.<br> Join us in reshaping the future of online trading.<br> Together, we thrive.
        </div>
        <div class="wrap-btn">
          <a
            class="btn btn-account"
            href="/support/"
          >Apply now</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.background-panel {
  padding: 128px 0 129px;
  background: url('../../static/img/home/banner/Ligthhouse.png') center/cover no-repeat;
  background-position: center 60%;

  @media (max-width: 768px) {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
  }

  @media (max-width: 580px) {
    // min-height: 700px;
    min-height: 564px;
    background: url('../../static/img/partners/bg-banner-mob.png') center/cover no-repeat;
    background-position: top center;
  }
}

.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 1340px;
  padding: 0 30px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
}

.wrap-btn {
  display: flex;

  .btn {
    font: 500 16px 'Poppins';
    padding: 15px 30px;
    border-radius: 4px;
    color: #0E0523;
    background-color: #E8F2E4;
    transition: color .25s ease-in, background-color .25s ease-in;
  }

  .btn-account {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    color: #352F44;
    background: #D3F5EC;
    border: 1px solid #D3F5EC;
    font: 500 16px/22px 'Poppins';
    border-radius: 4px;
    cursor: pointer;
    transition: color .25s ease-in, background .25s ease-in;

    &:hover {
      background: transparent;
      border: 1px solid #D3F5EC;
      color: #D3F5EC;
    }
  }
}

.intro {
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 740px;
  @media (max-width: 768px) {
    max-width: none;
  }

  .title {
    margin-bottom: 16px;
    color: #D3F5EC;
    font-family: "Poppins";
    font-size: 20px;
    font-weight: 500;
    line-height: 140%; /* 28px */
  }

  .description {
    margin-bottom: 40px;
    color: #FFF;
    font-family: "Poppins";
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    /* 28px */

    @media (max-width: 768px) {
      font-size: 16px;

      br:last-child {
        display: none;
      }
    }
  }
}
</style>
