<template>
  <section class="contact-media-team">
    <div class="wrapper">
      <div class="row">
        <div class="col col-1">
          <div class="desktop-slider">
            <ReviewsDesktop />
          </div>
          <div class="mob-slider">
            <ReviewsMobile />
          </div>
        </div>
        <div class="col">
          <div class="content">
            <h2 class="block-title">
              Over 50,000 people<br>
              trust us worldwide
            </h2>
            <div class="rating-row">
              <div class="rating-img">
                <img
                  class="img"
                  src="@/static/img/company/stars.png"
                  alt="Rating"
                >
              </div>
              <div class="rating-title">
                Excellent
              </div>
            </div>
            <p class="description">
              View additional client reviews at <a
                href="https://www.reviews.io/company-reviews/store/virturo.com?order=highest_rated"
                target="_blank"
              >reviews.io</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ReviewsMobile from './ReviewsMobile.vue';
import ReviewsDesktop from './ReviewsDesktop.vue';

export default {
  components: {
    ReviewsMobile,
    ReviewsDesktop,
  },
};

</script>

<style lang="scss" scoped>
.contact-media-team {
  background-color: #157275;
  position: relative;

  @media (max-width: 768px) {
    padding: 60px 0;
  }

  .wrapper {
    max-width: 1155px;
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

  .row {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 992px) {
      gap: 15px;
    }

    @media (max-width: 768px) {
      flex-flow: column-reverse;
      gap: 0;
    }
  }

  .col {
    width: 50%;
    display: flex;

    @media (max-width: 768px) {
      width: 100%;
    }

    &.col-1 {
      display: block;
    }
  }

  .rating-row {
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 1070px) {
      align-items: flex-end;
    }

    @media (max-width: 992px) {
      margin-bottom: 15px;
      flex-flow: column;
      align-items: flex-start;
    }
  }

  .desktop-slider {
    display: block;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .mob-slider {
    display: none;
    max-width: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .block-title {
    margin-bottom: 40px;
    color: #FFF;
    text-align: center;
    font-family: "Poppins";
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    text-align: left;

    @media (max-width: 1070px) {
      margin-bottom: 40px;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }

  .rating-title {
    margin-left: 24px;
    color: #FFF;
    text-align: center;
    font-family: "Poppins";
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    text-align: left;

    @media (max-width: 1070px) {
      margin-bottom: 15px;
      margin-left: 0;
      font-size: 40px;
      line-height: 112%; /* 44.8px */
    }

    @media (max-width: 992px) {
      margin-bottom: 0;
    }
  }

  .description {
    margin: 0 auto;
    color: #FFF;
    font-family: "Poppins";
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    /* 28px */
    text-align: left;

    @media (max-width: 768px) {
      margin-bottom: 40px;
      font-size: 16px;
      line-height: 140%; /* 22.4px */
    }

    a {
      color: #FFF;
      text-decoration-line: underline;

      &:hover {
        color: #FFF;
        text-decoration: none;
      }
    }
  }

}
</style>
