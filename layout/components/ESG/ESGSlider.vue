<template>
  <section class="esg-slider-section">
    <div class="wrapper">
      <div class="row">
        <div class="heading">
          <h2
            class="block-title"
            :style="{ color: blockTitle.color }"
          >
            {{ blockTitle.title }}
          </h2>
          <p class="description">
            {{ descriptionText }}
          </p>
        </div>
        <div class="control">
          <span
            class="arrow arrow-prev"
            @click="slideTo(swiperInstance.activeIndex - 3)"
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
          <div class="block-chars">
            <div
              v-for="(item, index) in chars"
              :key="index"
              class="item-char"
              @click="showSlidesForChar(item.title)"
            >
              <span :class="{ active: item.isActive }">{{ item.title }}</span>
            </div>
          </div>
          <span
            class="arrow arrow-next"
            @click="slideTo(swiperInstance.activeIndex + 3)"
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
    </div>
    <div class="esg-slider-wrap">
      <div class="swiper mySwiper3">
        <div
          ref="swiperWrapper"
          class="swiper-wrapper"
        >
          <div
            v-for="item in sliderData"
            :key="item.id"
            class="swiper-slide post"
            :class="{ hide: hideSlides }"
          >
            <div class="content blog-item">
              <div class="blog-item-img">
                <img
                  :src="item.img"
                  alt=""
                >
              </div>
              <h3
                class="blog-item-title"
                v-html="item.title"
              />
              <p
                class="blog-item-description"
                v-html="item.description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import sliderImg1 from '../../static/img/esg/icons/Environmental_icon_01.svg';
import sliderImg2 from '../../static/img/esg/icons/Environmental_icon_02.svg';
import sliderImg3 from '../../static/img/esg/icons/Environmental_icon_03.svg';
import sliderImg4 from '../../static/img/esg/icons/Social_icon_01.svg';
import sliderImg5 from '../../static/img/esg/icons/Social_icon_02.svg';
import sliderImg6 from '../../static/img/esg/icons/Social_icon_03.svg';
import sliderImg7 from '../../static/img/esg/icons/Governance_icon_01.svg';
import sliderImg8 from '../../static/img/esg/icons/Governance_icon_02.svg';
import sliderImg9 from '../../static/img/esg/icons/Governance_icon_03.svg';

const sliderData = [
  {
    char: 'E',
    category: 'Environmental',
    color: '#48C3A8',
    title: 'Carbon footprint reduction',
    description: ['We are dedicated to minimizing our environmental impact by actively reducing our carbon footprint. This includes implementing energy-efficient practices, investing in renewable energy sources, and continually assessing and improving our operations to align with global environmental standards.'].join('<br>'),
    img: sliderImg1,
  },
  {
    char: 'E',
    category: 'Environmental',
    color: '#48C3A8',
    title: 'Resource conservation',
    description: ['Efficient use of resources is a cornerstone of our environmental commitment. We prioritize responsible sourcing, waste reduction, and recycling initiatives to contribute to the conservation of natural resources and biodiversity.'].join('<br>'),
    img: sliderImg2,
  },
  {
    char: 'E',
    category: 'Environmental',
    color: '#48C3A8',
    title: 'Climate resilience',
    description: ['Acknowledging the challenges posed by climate change, we are committed to building resilience in our operations and supply chain. This involves comprehensive risk assessments, adaptation strategies, and continuous monitoring of climate-related impacts.'].join('<br>'),
    img: sliderImg3,
  },
  {
    char: 'S',
    category: 'Social',
    color: '#44BFFA',
    title: 'Diversity, Equity, and <br/> Inclusion',
    description: ['We believe in fostering a diverse and inclusive workplace that values and respects individuals irrespective of their background. Our commitment to diversity extends beyond our internal operations to our supply chain and the communities where we operate.'].join('<br>'),
    img: sliderImg4,
  },
  {
    char: 'S',
    category: 'Social',
    color: '#44BFFA',
    title: 'Employee Well-being',
    description: ['The well-being of our employees is of utmost importance. We provide a safe, healthy, and supportive work environment, investing in employee development, mental health initiatives, and work-life balance to ensure our team thrives both personally and professionally.'].join('<br>'),
    img: sliderImg5,
  },
  {
    char: 'S',
    category: 'Social',
    color: '#44BFFA',
    title: 'Community Engagement',
    description: ['As responsible corporate citizens, we actively engage with the communities where we operate. Our community initiatives focus on education, healthcare, and empowerment, aiming to make a positive and lasting impact on the lives of those around us.'].join('<br>'),
    img: sliderImg6,
  },
  {
    char: 'G',
    category: 'Governance',
    color: '#FFA25C',
    title: 'Ethical business practices',
    description: ['We adhere to the highest ethical standards in all aspects of our business. Our governance framework is designed to promote integrity, transparency, and accountability at every level, ensuring that we operate with the utmost respect for the law and ethical principles.'].join('<br>'),
    img: sliderImg7,
  },
  {
    char: 'G',
    category: 'Governance',
    color: '#FFA25C',
    title: 'Board diversity <br/> and independence',
    description: ['Our commitment to governance is reflected in the composition of our board, which is diverse and independent. This diversity ensures a broad range of perspectives and experiences, contributing to better decision-making and oversight.'].join('<br>'),
    img: sliderImg8,
  },
  {
    char: 'G',
    category: 'Governance',
    color: '#FFA25C',
    title: 'Transparent reporting',
    description: ['We are committed to transparently communicating our ESG performance. Our regular reporting includes key metrics, goals, and achievements, enabling stakeholders to assess our progress and hold us accountable for our commitments.'].join('<br>'),
    img: sliderImg9,
  },

];

export default {
  data() {
    return {
      hideSlides: false,
      sliderData,
      swiperInstance: null,
      intervalId: null,
      activeChar: 'E',
    };
  },
  computed: {
    chars() {
      return [
        {
          title: 'E',
          isActive: this.activeChar === 'E',
        },
        {
          title: 'S',
          isActive: this.activeChar === 'S',
        },
        {
          title: 'G',
          isActive: this.activeChar === 'G',
        },
      ];
    },

    blockTitle() {
      let title = '';
      let color = '';
      switch (this.activeChar) {
      case 'E':
        title = 'Environmental';
        color = '#48C3A8';
        break;
      case 'S':
        title = 'Social';
        color = '#44BFFA';
        break;
      case 'G':
        title = 'Governance';
        color = '#FFA25C';
        break;
      default:
        title = '';
        color = '';
      }
      return { title, color };
    },

    descriptionText() {
      switch (this.activeChar) {
      case 'E':
        return 'Stewardship for a Sustainable Future';
      case 'S':
        return 'Empowering Communities and People';
      case 'G':
        return 'Ethical Leadership and Transparency';
      default:
        return '';
      }
    },

  },
  mounted() {
    this.swiperInstance = new this.$Swiper('.mySwiper3', {
      slidesPerView: 1.1,
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        360: {
          slidesPerView: 1.1,
          spaceBetween: 15,
        },
        580: {
          slidesPerView: 1.6,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        1020: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      },

    });

    this.swiperInstance.on('slideChange', (s) => {
      const index = s.activeIndex;
      this.activeChar = sliderData[index]?.char;
    });
  },

  methods: {

    showSlidesForChar(char) {
      // Find the index of the first slide for a given letter
      const index = this.sliderData.findIndex((item) => item.char === char);
      // Move to the slide with the found index
      this.slideTo(index);
    },
    animateSlide(index) {
      this.hideSlides = true;
      this.swiperInstance.slideTo(index, 0);
      // eslint-disable-next-line no-return-assign
      setTimeout(() => this.hideSlides = false, 100);
    },

    slideTo(index) {
      const lastIndex = this.sliderData.length - 1;
      if (index > lastIndex) {
        this.animateSlide(0);
      } else if (index < 0) {
        this.animateSlide(lastIndex);
      } else {
        this.animateSlide(index);
      }
    },

  },
};

</script>

<style lang="scss" scoped>
.esg-slider-section {
  padding-bottom: 60px;
  background-color: #352F44;
  overflow: hidden;

  .swiper {
    padding-left: 15px;
    padding-right: 15px;

    .category {
      display: none;
      color: #2BD770;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      /* 28px */
      font-family: 'Poppins';

      @media (max-width: 1028px) {
        display: block;
      }
    }
  }

  .esg-slider-wrap,
  .wrapper {
    max-width: 1340px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .esg-slider-wrap {
    padding: 0 15px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 60px;
  }

  .container {
    max-width: 1340px;
    padding: 0 30px;
    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
  }

  .heading {
    margin: 60px 0 0;
    max-width: 540px;
    font-family: 'Poppins';

    h2 {
      margin-bottom: 8px;
      color: #48C3A8;
      font: 500 52px/112% 'Poppins';
      letter-spacing: -0.52px;
    }

    p {
      color: #FFF;
      font: 400 20px/140% 'Poppins';
    }
  }

  .control {
    display: flex;
    align-items: center;
    column-gap: 15px;
  }

  .arrow {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #ECECE4;
    cursor: pointer;
    transition: background .25s ease-in;

    &:hover {
      background: rgba(236, 236, 228, 0.60);
    }

    &-next {
      transform: rotate(180deg);
    }

    path {
      fill: #352F44;
      transition: fill .25s ease-in;
    }
  }

  .blog-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;

    @media (max-width: 678px) {
      margin: 0;
    }
  }

  .blog-item {
    padding: 32px 32px;
    display: flex;
    flex-flow: column;
    max-width: 430px;
    height: 382px;
    border-radius: 22px;
    background-color: #fff;

    @media (max-width: 1251px) {
      height: 460px;
    }

    @media (max-width: 998px) {
      padding-bottom: 45px;
    }

    @media (max-width: 768px) {
      padding: 24px;
      height: 424px;
    }

    @media (max-width: 400px) {
      height: 530px;
    }
  }

  .blog-item-img {
    margin-bottom: 20px;
    display: block;
    width: 52px;
    height: 52px;

    @media (max-width: 768px) {
      margin-bottom: 10px;
    }

    img {
      width: 52px;
      height: 52px;
    }
  }

  .blog-item-title {
    margin-bottom: 16px;
    color: #282929;
    font: 500 24px/132% 'Poppins';

    @media (max-width: 359px) {
      font-size: 24px;
    }

  }

  .blog-item-description {
    color: #282929;
    font: 400 16px/140% 'Poppins';
  }

}

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
  width: 429px;
  align-self: stretch;
}

.block-chars {
  display: flex;
  flex-flow: row;
}

.item-char {
  width: 40px;

  span {
    color: #FFF;
    font-family: 'Poppins';
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    text-align: center;
  }

  &:nth-child(1) .active {
    color: #48C3A8;
  }

  &:nth-child(2) .active {
    color: #44BFFA;
  }

  &:nth-child(3) .active {
    color: #FFA25C;
  }
}

@media (max-width: 767px) {
  .esg-slider-section {
    padding-bottom: 40px;
  }

  .esg-slider-section .heading {
    margin-top: 40px;
    max-width: 100%;
  }

  .esg-slider-section .heading h2 {
    margin-bottom: 16px;
    font-size: 32px;
    line-height: 140%; /* 44.8px */
  }

  .esg-slider-section .row {
    flex-flow: column;
    align-items: flex-start;
    margin-bottom: 40px;
  }

  .esg-slider-section .heading p {
    margin-bottom: 40px;
  }

  .esg-slider-section .esg-slider-wrap {
    padding: 0;
    max-width: none;
    margin: 0;
  }

  .esg-slider-section .wrapper {
    padding: 0 16px;
  }
}
</style>
