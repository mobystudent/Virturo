<template>
  <section class="section">
    <div class="wrapper">
      <div class="main-block">
        <h2 class="title-main">
          Our clients speak for us
        </h2>
        <div class="control">
          <span
            class="arrow arrow-prev"
            @click="clickButtonPrev"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector 9"
                d="M6 12L5.43432 12.5657L4.86863 12L5.43432 11.4343L6 12ZM18 11.2C18.4418 11.2 18.8 11.5582 18.8 12C18.8 12.4418 18.4418 12.8 18 12.8L18 11.2ZM11.4343 18.5657L5.43432 12.5657L6.56569 11.4343L12.5657 17.4343L11.4343 18.5657ZM5.43432 11.4343L11.4343 5.43432L12.5657 6.56569L6.56569 12.5657L5.43432 11.4343ZM6 11.2L18 11.2L18 12.8L6 12.8L6 11.2Z"
              />
            </svg>
          </span>
          <span
            class="arrow arrow-next"
            @click="clickButtonNext"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector 9"
                d="M6 12L5.43432 12.5657L4.86863 12L5.43432 11.4343L6 12ZM18 11.2C18.4418 11.2 18.8 11.5582 18.8 12C18.8 12.4418 18.4418 12.8 18 12.8L18 11.2ZM11.4343 18.5657L5.43432 12.5657L6.56569 11.4343L12.5657 17.4343L11.4343 18.5657ZM5.43432 11.4343L11.4343 5.43432L12.5657 6.56569L6.56569 12.5657L5.43432 11.4343ZM6 11.2L18 11.2L18 12.8L6 12.8L6 11.2Z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div class="reviews swiper">
        <div class="swiper-wrapper">
          <div
            v-for="(review, index) in reviews"
            :key="index"
            class="review swiper-slide"
          >
            <header class="review-header">
              <span class="name">{{ review.name }}</span>
              <div class="rating">
                <picture
                  v-for="i in review.rating"
                  :key="i"
                  class="rating-star"
                >
                  <img
                    src="@/static/img/home/reviews/star-rating.svg"
                    alt="star-rating"
                  >
                </picture>
              </div>
            </header>
            <mark class="verified">
              <img
                src="@/static/img/home/reviews/verified.svg"
                alt="verified"
              >
              Verified Customer
            </mark>
            <blockquote class="desc">
              {{ review.message }}
            </blockquote>
            <footer class="review-footer">
              <address class="address">
                {{ review.address }}
              </address>
              <span class="time">
                {{ review.time }}
              </span>
            </footer>
          </div>
        </div>
      </div>
      <div class="lower-block">
        <picture class="picture-reviews">
          <img
            class="image"
            src="@/static/img/home/reviews/reviews.png"
            alt="picture-reviews"
          >
        </picture>
        <a
          class="btn"
          href="https://www.reviews.io/company-reviews/store/virturo.com?order=highest_rated"
          target="_blank"
        >
          For more reviews
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 7L13.5657 7.56569L14.1314 7L13.5657 6.43431L13 7ZM0.999999 6.2C0.558171 6.2 0.199999 6.55817 0.199999 7C0.199999 7.44183 0.558171 7.8 0.999999 7.8L0.999999 6.2ZM7.56569 13.5657L13.5657 7.56569L12.4343 6.43431L6.43431 12.4343L7.56569 13.5657ZM13.5657 6.43431L7.56568 0.434316L6.43431 1.56569L12.4343 7.56569L13.5657 6.43431ZM13 6.2L0.999999 6.2L0.999999 7.8L13 7.8L13 6.2Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          rating: 5,
          message: 'Virturo is perfect for beginners like me. They focus on teaching the basics of investing and ensure I understand, without pushing sales. Their dedication makes them my top choice!',
          name: 'K. Albert',
          verified: true,
          address: 'Manchester, United Kingdom',
          time: '2 months ago',
        },
        {
          rating: 5,
          message: 'After a long search, I found Virturo for long-term stock investing. They\'re trustworthy, transparent, and offer a wide range of stocks. Highly recommended in Europe!',
          name: 'A. Vivian',
          verified: true,
          address: 'Rotterdam, Netherland',
          time: '30 days ago',
        },
        {
          rating: 5,
          message: 'Virturo has been a game-changer. Their stable, user-friendly tools and real-time trading features made starting out easy. Thanks to Virturo, trading is now accessible and enjoyable for beginners like me.',
          name: 'T. Johnathan',
          verified: true,
          address: 'Westminster, United Kingdom',
          time: '13 days ago',
        },
        {
          rating: 5,
          message: 'As a beginner, Virturo\'s educational resources and market insights have been invaluable—deserving 5 stars as an educational powerhouse.',
          name: 'R. Robert',
          verified: true,
          address: 'London, United Kingdom',
          time: '4 months ago',
        },
        {
          rating: 5,
          message: 'Virturo is user-friendly and efficient, though a few extra features would improve the experience. It’s a great choice for both beginners and experienced traders.',
          name: 'M. Lenora',
          verified: true,
          address: 'Amsterdam, Netherlands',
          time: '5 Months ago',
        },
        {
          rating: 5,
          message: 'Virturo feels like a personal mentor. As a beginner, their focus on teaching investing fundamentals, not sales, has been invaluable. It\'s now my go-to platform for learning and growing in investing.',
          name: 'J. Charlie',
          verified: true,
          address: 'Nottingham, United Kingdom',
          time: '28 days ago',
        },
      ],
      swiperInstance: null,
    };
  },
  mounted() {
    this.createdSlider();
  },
  methods: {
    createdSlider() {
      this.swiperInstance = new this.$Swiper('.reviews', {
        slidesPerView: 4,
        spaceBetween: 15,
        autoHeight: true,
        breakpoints: {
          360: {
            slidesPerView: 'auto',
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        },
      });
    },
    clickButtonPrev() {
      this.swiperInstance.slidePrev();
    },
    clickButtonNext() {
      this.swiperInstance.slideNext();
    },
    animateSlide(index) {
      this.swiperInstance.slideTo(index, 0);
    },
    slideTo(index) {
      const lastIndex = this.reviews.length - 1;

      this.animateSlide(index > lastIndex ? 0 : index);
    },
  },
};
</script>

<style scoped lang="scss">
.section {
  padding: 60px 0;
  background: #D3F5EC;

  @media (max-width: 1200px) {
    padding: 50px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }
}

.main-block {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 25px 35px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
}

.title-main {
  font: 500 52px/58px 'Poppins', sans-serif;
  letter-spacing: -.1px;
  color: #352F44;

  @media (max-width: 1024px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    font-size: 32px;
    line-height: 44px;
  }
}

.control {
  display: flex;
  align-items: center;
  column-gap: 15px;

  @media (max-width: 768px) {
    margin-left: auto;
  }
}

.arrow {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  transition: background .25s ease-in;

  &:hover {
    background: #48C3A8;

    svg {
      fill: #fff;
    }
  }

  &-next {
    transform: rotate(180deg);
  }

  path {
    fill: #352F44;
    transition: fill .25s ease-in;
  }
}

.reviews {
  overflow: hidden;

  @media (max-width: 1024px) {
    overflow: visible;
  }
}

.swiper-wrapper {
  display: flex;
  padding-bottom: 40px;

  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
}

.review {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  row-gap: 15px;
  height: auto;
  min-height: 360px;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, .1);
  background: #FFF;
  transition: box-shadow .25s ease-in;

  @media (max-width: 1024px) {
    width: 340px;
  }

  @media (max-width: 768px) {
    width: 310px;
  }

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
  }
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
}

.name {
  font: 600 20px/24px 'Poppins', sans-serif;
  letter-spacing: -.1px;
  color: #352F44;
}

.rating {
  display: flex;
  justify-content: flex-end;
  column-gap: 5px;
}

.rating-star {
  display: inline-flex;
  width: 15px;
  height: auto;

  &:first-child {
    margin-left: auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.verified {
  display: flex;
  column-gap: 5px;
  font: 500 14px/18px 'Poppins', sans-serif;
  letter-spacing: -.1px;
  color: #48C3A8;
  background: none;

  img {
    width: 16px;
    height: auto;
  }
}

.desc {
  font: 16px/20px 'Poppins', sans-serif;
  letter-spacing: -.1px;
  color: #352F44;
  margin-bottom: auto;
}

.review-footer {
  display: flex;
  flex-flow: column;
  align-items: flex-end;
}

.address,
.time {
  font: 12px/14px 'Poppins', sans-serif;
  letter-spacing: -.1px;
  color: #352F44;
}

.lower-block {
  display: flex;
  column-gap: 40px;
}

.picture-reviews {
  width: 150px;
  height: auto;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.btn {
  display: inline-flex;
  align-items: center;
  column-gap: 10px;
  font: 500 16px/22px 'Poppins', sans-serif;
  color: #352F44;
  transition: color .25s ease;

  &:hover {
    color: #48C3A8;

    svg {
      fill: #48C3A8;
    }
  }

  svg{
    width: 12px;
    height: 12px;
    fill: #352F44;
    transition: fill .25s ease;
  }
}

//@media (max-width: 992px) {
//  .section {
//    padding: 50px 0;
//  }
//
//  .wrapper {
//      position: relative;
//
//    &::before {
//      bottom: -50px;
//    }
//  }
//
//  .review {
//    padding: 20px;
//  }
//
//  .rating {
//    margin-bottom: 15px;
//  }
//
//  .rating-star {
//    width: 15px;
//  }
//
//  .title-main {
//    font-size: 38px;
//    line-height: 42px;
//  }
//
//  .desc {
//    font-size: 14px;
//    margin-bottom: 20px;
//  }
//
//    .control {
//        column-gap: 10px;
//    }
//
//  .arrow {
//    width: 45px;
//    height: 45px;
//  }
//}

//@media (max-width: 768px) {
//  .section {
//    padding: 40px 0;
//  }
//
//    .wrapper {
//      position: relative;
//
//    &::before {
//      bottom: -40px;
//    }
//  }
//
//    .main-block {
//        margin-bottom: 20px;
//    }
//
//    .title-main {
//        font-size: 30px;
//        line-height: 34px;
//    }
//
//    .rating {
//        column-gap: 2px;
//    }
//
//    .review {
//        padding: 15px;
//    }
//
//    .arrow {
//        width: 40px;
//        height: 40px;
//    }
//
//    .avatar {
//        width: 34px;
//        height: 34px;
//        margin-right: 10px;
//    }
//
//    .name {
//        font-size: 14px;
//    }
//}
</style>
