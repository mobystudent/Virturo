<template>
  <section class="desktop-reviews-section">
    <div class="section-slider">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            v-for="(review, index) in reviews"
            :key="index"
            class="review swiper-slide"
          >
            <!-- <div class="rating">
                <picture
                  v-for="i in review.rating"
                  :key="i"
                  class="rating-star"
                >
                  <img
                    src="@/static/img/star-rating.png"
                    alt="star-rating"
                  >
                </picture>
              </div> -->
            <blockquote class="desc">
              {{ review.message }}
            </blockquote>
            <div class="user">
              <picture class="avatar">
                <img
                  :src="review.user.avatar"
                  :alt="review.user.name"
                >
              </picture>
              <span class="name">{{ review.user.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import userImg1 from '../../static/img/users/user1.png';
import userImg2 from '../../static/img/users/user2.png';
import userImg3 from '../../static/img/users/user3.png';
import userImg4 from '../../static/img/users/user4.png';
// import userImgDefault from '../../static/img/users/user1.jpg';

export default {
  data() {
    return {
      reviews: [
        {
          rating: 5,
          message: '"Virturo has completely transformed my trading experience—super easy to use and reliable! The support team is always ready to help, making me feel like I’m in good hands every time."',
          user: {
            avatar: userImg3,
            name: 'Rachel M.',
          },
        },
        {
          rating: 5,
          message: '"The real-time data and advanced tools have given me the confidence to make smarter decisions. Plus, the intuitive interface makes navigating the market a breeze. Highly recommend for both beginners and seasoned traders!"',
          user: {
            avatar: userImg4,
            name: 'Jacob A.',
          },
        },
        {
          rating: 5,
          message: '"I’ve tried several platforms, but Virturo stands out for its smooth interface and excellent customer service. Any time I need help, their team responds quickly and with real expertise."',
          user: {
            avatar: userImg1,
            name: 'Ethan C.',
          },
        },
        {
          rating: 5,
          message: '"Trading on Virturo is a breeze thanks to its intuitive design and exceptional support! Alex guided me through every question I had, making complex trading strategies easy to understand."',
          user: {
            avatar: userImg2,
            name: 'James T.',
          },
        },
      ],
      swiperInstance: null,
    };
  },

  mounted() {
    this.swiperInstance = new this.$Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 16,
      mousewheel: true,
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 1700,
        disableOnInteraction: false,
      },
    });
  },

};
</script>

<style lang="scss" scoped>
.desktop-reviews-section {
  overflow: hidden;
  position: relative;

  .img {
    margin-bottom: 32px;
    display: block;
    width: 52px;
    height: 52px;
  }

  .title {
    margin-bottom: 24px;
    color: #352F44;
    font: 500 16px/140% 'Poppins';

    @media (max-width: 359px) {
      font-size: 16px;
    }

  }

  .description {
    color: #352F44;
    font: 400 16px/150% 'Poppins';
  }

}

.swiper-container {
  width: 100%;
  // height: 100%;
  height: 906px;
  overflow: hidden;
}

.swiper-slide {
  // height: 216px;
  // height: 229px;
  height: 238px;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-flow: column;
  // padding: 29px 32px;
  padding: 28px 32px;
  padding-right: 40px;
  border-radius: 20px;
  // border: 1px solid rgba(7, 68, 41, 0.20);
  background: #FFF;
  transition: box-shadow .25s ease-in;
  justify-content: flex-end;

  @media (max-width: 992px) {
    padding: 20px;
  }

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
  }
}

.section-slider {
  max-width: 429px;
  height: 680px;
  overflow: hidden;
}

.rating {
  display: flex;
  column-gap: 4px;
  margin-bottom: 25px;
}

.rating-star {
  display: inline-flex;
  width: 18px;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .25s ease-in;
  }
}

.desc {
  // height: 94px;
  height: 120px;
  overflow: hidden;
  color: #352F44;
  font: 400 16px/150% 'Poppins';
  margin-bottom: 24px;
}

.user {
  display: flex;
  align-items: center;
  // margin-top: auto; //button on bottom
}

.avatar {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 17px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.name {
  font: 500 16px/140% 'Poppins';
  color: #352F44;
}
</style>
