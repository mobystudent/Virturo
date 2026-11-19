<template>
  <section class="contact-media-team">
    <div class="wrapper">
      <div class="intro">
        <h2 class="title">
          Contact the Media Team
        </h2>
        <p class="description">
          For media inquiries, interview requests, or additional information, please reach out to our media relations team at
          <a href="mailto:media@virturo.com">media@virturo.com</a>
        </p>
      </div>
    </div>
    <img
      class="internal-bg left desktop"
      src="@/static/img/mediacenter/media-bg-left.png"
      alt="Trading Assets"
    >
    <div class="internal-bg bottom mobile">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="260"
        height="204"
        viewBox="0 0 260 204"
        fill="none"
      >
        <path
          opacity="0.2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M99.9977 117.033L136.913 204L189.448 181.7L153.862 97.8639L237.7 133.451L260 80.9158L173.033 44.0003L260 7.08486L237.7 -45.4504L153.862 -9.86318L189.448 -93.7001L136.913 -116L99.9977 -29.0326L63.0823 -116L10.547 -93.7001L46.1327 -9.86552L-37.7001 -45.4504L-60 7.08486L26.9674 44.0003L-60 80.9158L-37.7001 133.451L46.1324 97.8663L10.547 181.7L63.0823 204L99.9977 117.033Z"
          fill="#48C3A8"
        />
      </svg>
    </div>
    <!-- <img
      class="internal-bg right"
      src="@/static/img/mediacenter/media-bg-right.png"
      alt="Trading Assets"
    > -->
  </section>
</template>

<style lang="scss" scoped>
.contact-media-team {
  padding: 80px 0;
  background-color: #157275;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 40px 0;
  }

  .internal-bg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;

    // &.right {
    //   right: 0;
    // }

    &.left {
      width: 493px;
      height: 493px;
      left: -50px;
      top: 45%;
    }

    &.desktop {
      display: block;
      @media (max-width: 768px) {
        display: none;
      }
    }

    &.mobile {
      display: none;
      @media (max-width: 768px) {
        display: block;
      }
    }

    @media (max-width: 992px) {
      display: none;
    }
  }

  .wrapper {
    max-width: 1340px;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (max-width: 1024px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }

  .intro {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    gap: 40px;
    @media (max-width: 768px) {
      flex-flow: column;
      gap: 24px;
    }
  }

  .title {
    margin-bottom: 40px;
    max-width: 424px;
    color: #FFF;
    font-family: "Poppins";
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    @media (max-width: 992px) {
      font-size: 38px;
    }

    @media (max-width: 768px) {
      margin-bottom: 0;
      max-width: none;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }

  .description {
    // margin: 0 auto;
    max-width: 524px;
    color: #FFF;
    font-family: "Poppins";
    font-size: 20px;
    font-weight: 400;
    line-height: 140%; /* 28px */
    @media (max-width: 992px) {
      font-size: 15px;
      line-height: 150%; /* 22.5px */
    }

    a {
      color: #FFF;
      text-decoration: underline;

      &:hover {
        color: #FFF;
        text-decoration: none;
      }
    }
  }

}

@media (max-width: 768px) {}
</style>
