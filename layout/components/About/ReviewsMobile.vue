<template>
  <div class="reviews-slider-mob">
    <div class="swiper mySwiper3">
      <div
        ref="swiperWrapper"
        class="swiper-wrapper"
      >
        <div
          v-for="item in sliderData"
          :key="item.id"
          class="swiper-slide review"
        >
          <div class="content blog-item">
            <!-- <div class="rating">
                <picture
                  v-for="i in item.rating"
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
              {{ item.message }}
            </blockquote>
            <div class="user">
              <picture class="avatar">
                <img
                  :src="item.user.avatar"
                  :alt="item.user.name"
                >
              </picture>
              <span class="name">{{ item.user.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import userImg1 from '../../static/img/users/user1.png';
import userImg2 from '../../static/img/users/user2.png';
import userImg3 from '../../static/img/users/user3.png';
import userImg4 from '../../static/img/users/user4.png';
// import userImgDefault from '../../static/img/users/user1.jpg';

const sliderData = [
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
];

export default {
  data() {
    return {
      sliderData,
      swiperInstance: null,
      intervalId: null,
    };
  },
  mounted() {
    this.swiperInstance = new this.$Swiper('.mySwiper3', {
      slidesPerView: 1,
    });
  },
};

</script>

<style lang="scss" scoped>
.custom-controls {
  position: absolute;
  right: 8%;
  bottom: 0px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  z-index: 10;
  padding-top: 10px;
}

.button-next {
  margin-left: 16px;
  cursor: pointer;
  color: #000;
  transform: rotate(180deg);
}

.button-prev {
  cursor: pointer;
  color: #000;
}

.button-prev,
.button-next {
  &::after {
    content: '';
    display: block;
    width: 52px;
    height: 52px;
    background: #F7F7F7 url("@/static/img/arrow-right-slider.svg") no-repeat center center/contain;
    border-radius: 50%;
  }
}

.post {
  max-width: 100%;
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
  font: 16px/140% 'Poppins';
  color: #352F44;
  margin-bottom: 24px;
}

.user {
  display: flex;
  align-items: center;
}

.avatar {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.name {
  font: 500 16px/140% 'Poppins';
  color: #282929;
}

.review {
  max-width: 100%;
  height: auto;
  min-height: 100%;
  padding: 32px;
  // padding-bottom: 24px;
  border-radius: 20px;
  background: #FFF;
  transition: box-shadow .25s ease-in;
  justify-content: flex-end;
}
</style>
