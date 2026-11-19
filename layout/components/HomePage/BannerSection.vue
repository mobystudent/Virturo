<template>
  <section class="section">
    <div class="wrapper">
      <div class="main-block">
        <h2 class="title-main">
          The Lighthouse guide to financial trading
        </h2>
        <p class="desc">
          In the vast and often unpredictable world of financial trading, finding direction can be challenging. Our "Lighthouse Guide" is here to illuminate the path, helping you navigate the complexities of markets with confidence and clarity. Whether you're new to trading or a seasoned investor, this guide is your beacon, showing you the way toward informed and secure investment decisions.
        </p>
        <nuxt-link
          class="btn"
          to="/learn/"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M17 11L17.5657 11.5657L18.1314 11L17.5657 10.4343L17 11ZM5 10.2C4.55817 10.2 4.2 10.5582 4.2 11C4.2 11.4418 4.55817 11.8 5 11.8L5 10.2ZM11.5657 17.5657L17.5657 11.5657L16.4343 10.4343L10.4343 16.4343L11.5657 17.5657ZM17.5657 10.4343L11.5657 4.43432L10.4343 5.56569L16.4343 11.5657L17.5657 10.4343ZM17 10.2L5 10.2L5 11.8L17 11.8L17 10.2Z"
              fill="black"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
<style scoped lang="scss">
.section {
  padding: 20% 0;
  position: relative;
  background: url('../../static/img/home/banner/Lighthouse_guide_bg.png') center/cover no-repeat;
  background-position: center 48%;

  @media (max-width: 3200px) {
    padding: 13% 0;
  }

  @media (max-width: 1570px) {
    padding: 9% 0;
  }

  @media (max-width: 1450px) {
    padding: 90px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  @media (max-width: 580px) {
    min-height: 700px;
    background: url('../../static/img/home/banner/Lighthouse-guide-mob.png') center/cover no-repeat;
    background-position-x: left;
  }

  @media (max-width: 480px) {
    padding-top: 24px;
    padding-bottom: 66px;
  }
}

.wrapper {
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
}

.main-block {
  display: flex;
  flex-flow: column;
  row-gap: 32px;
  padding: 42px 48px;
  max-width: 630px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    max-width: 100%;
    row-gap: 24px;
  }

  @media (max-width: 580px) {
    padding: 24px;
  }
}

.title-main {
  font: 500 48px/112% 'Poppins', sans-serif;
  letter-spacing: -0.48px;
  color: #352F44;

  @media (max-width: 1024px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height:  40px;
    letter-spacing: -0.64px;
  }
}

.desc {
  font: 16px/22px 'Poppins', Sans-serif;
  color: #282929;
}

.btn {
  display: inline-flex;
  align-items: center;
  column-gap: 10px;
  font: 500 16px/22px 'Poppins', sans-serif;
  color: #000;
  transition: color .25s ease;

  @media (max-width: 768px) {
    justify-content: flex-end;
    font-weight: 400;
  }

  &:hover {
    color: #000;

    svg {
      fill: #000;
    }
  }

  svg{
    width: 12px;
    height: 12px;
    fill: #000;
    transition: fill .25s ease;
  }
}
</style>
