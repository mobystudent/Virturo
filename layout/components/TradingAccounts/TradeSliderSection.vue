<template>
  <section class="trade-slider">
    <div class="container">
      <div class="line-block">
        <div class="points">
          <div
            v-for="(item, index) in points"
            :key="index.image"
            class="point-item"
          >
            <p
              v-if="index === 3"
              :class="{ 'active': index <= activeSlider }"
            >
              +3 Power features
            </p>
            <p
              v-if="index === 4"
              :class="{ 'active': index <= activeSlider }"
            >
              +5 Power features
            </p>
            <img
              v-if="index <= activeSlider"
              :src="item.image"
              :alt="'point ' + index + 1"
            >
            <img
              v-if="index > activeSlider"
              :src="item.imageNotActive"
              :alt="'not active point ' + index + 1"
            >
            <p :class="{ 'active': index <= activeSlider }">
              {{ item.title }}
            </p>
          </div>
        </div>

        <div class="line-wrapper">
          <div
            ref="line"
            class="line"
          >
            <div
              ref="progress"
              class="active-line"
            />
            <div
              ref="pointer"
              progress="500"
              class="pointer"
              @touchstart="handlePointerDrag($event)"
              @mousedown="handlePointerDrag($event)"
            >
              <div class="pointer_before" />
            </div>
          </div>
        </div>
      </div>

      <div class="slider">
        <div
          ref="slides"
          class="slides"
          :style="{ transform: 'translateX(' + slidePosition + '%)' }"
        >
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="slide"
          >
            <div class="slide-content">
              <div class="account-name">
                <div class="account-name_top">
                  <div class="account-name_left">
                    <img :src="points[index].image">
                    <p>{{ slide.title }}</p>
                  </div>
                  <div class="account-name_right">
                    <p>{{ slide.number }}</p>
                  </div>
                </div>
                <div class="account-name_bottom">
                  <a :href="link">Open your account</a>
                </div>
              </div>
              <div class="account-features">
                <div class="features">
                  <p>Features</p>
                  <ul>
                    <li
                      v-for="item in slide.features"
                      :key="item.title"
                      class="active"
                    >
                      <svg
                        v-if="item.class === 'active'"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="16"
                          height="16"
                          rx="8"
                          fill="#1EA66D"
                        />
                        <path
                          d="M6.83294 9.76529L11.8882 4.66699L12.6663 5.45118L6.83294 11.3337L3.33301 7.80428L4.11065 7.0201L6.83294 9.76529Z"
                          fill="white"
                        />
                      </svg>
                      <span>{{ item.title }}</span>
                    </li>
                  </ul>
                </div>
                <div
                  v-if="slide.powerFeatures"
                  class="power-features"
                >
                  <p>Power Features</p>
                  <ul>
                    <li
                      v-for="item in slide.powerFeatures"
                      :key="item.title"
                      class="active"
                    >
                      <svg
                        v-if="item.class === 'active'"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="16"
                          height="16"
                          rx="8"
                          fill="#1EA66D"
                        />
                        <path
                          d="M6.83294 9.76529L11.8882 4.66699L12.6663 5.45118L6.83294 11.3337L3.33301 7.80428L4.11065 7.0201L6.83294 9.76529Z"
                          fill="white"
                        />
                      </svg>
                      <span>{{ item.title }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="prev-btn"
          @click="slideLeft"
        >
          <svg
            width="13"
            height="34"
            viewBox="0 0 13 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1L2 18.2L12 33"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <button
          class="next-btn"
          @click="slideRight"
        >
          <svg
            width="13"
            height="34"
            viewBox="0 0 13 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 33L11 15.8L1 0.999999"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import tyroGreen from '@/static/img/trading-accounts/icons/tyro-green.png';
import tyroGrey from '@/static/img/trading-accounts/icons/tyro-grey.png';
import primusGreen from '@/static/img/trading-accounts/icons/primus-green.png';
import primusGrey from '@/static/img/trading-accounts/icons/primus-grey.png';
import optioGreen from '@/static/img/trading-accounts/icons/optio-green.png';
import optioGrey from '@/static/img/trading-accounts/icons/optio-grey.png';
import legatusGreen from '@/static/img/trading-accounts/icons/legatus-green.png';
import legatusGrey from '@/static/img/trading-accounts/icons/legatus-grey.png';
import centurionGreen from '@/static/img/trading-accounts/icons/centrium-green.png';
import centurionGrey from '@/static/img/trading-accounts/icons/centurion-grey.png';

// 500, 2500
function generateRange(startValue, endValue, progressStart, progressEnd, step) {
  const count = (endValue - startValue) / step;
  const progressStep = (progressEnd - progressStart) / count;

  return Array(count).fill({}).map((item, index) => ({
    progress: progressStart + (progressStep * index),
    value: startValue + (step * index),
  }));
}

const digits = [
  ...generateRange(500, 2500, 0, 25, 500),
  ...generateRange(2500, 25000, 25, 50, 1500),
  ...generateRange(25000, 100000, 50, 75, 5000),
  ...generateRange(100000, 250000, 75, 100, 10000),
  {
    progress: 100,
    value: 250000,
  },
];

const slides = [
  {
    title: 'Initiate',
    number: '500+',
    link: '#',
    features: [
      {
        class: 'active',
        title: 'Variable Spreads',
      },
      {
        class: 'active',
        title: 'No Leverage',
      },
      {
        class: 'active',
        title: 'Entry-Level Assets List',
      },
      {
        class: 'active',
        title: 'Entry-Level Commissions',
      },
      {
        class: 'active',
        title: 'SM Web platform, IOS and Android App',
      },
      {
        class: 'active',
        title: 'SM Market Newsletter',
      },
    ],
  },
  {
    title: 'Advancer',
    number: '2500+',
    link: '#',
    features: [
      {
        class: 'active',
        title: 'Improved Spreads',
      },
      {
        class: 'active',
        title: 'Entry-Level Leverage',
      },
      {
        class: 'active',
        title: 'Dedicated Investment Specialist',
      },
      {
        class: 'active',
        title: 'Limited Assets List',
      },
      {
        class: 'active',
        title: 'Market Analysis',
      },
      {
        class: 'active',
        title: 'Improved Commissions',
      },
      {
        class: 'active',
        title: 'Unlimited Access to Academy & Webinars',
      },
      {
        class: 'active',
        title: 'SM Web platform, IOS and Android App',
      },
      {
        class: 'active',
        title: 'SM Market Newsletter',
      },
      {
        class: 'active',
        title: 'Trading Signals Platform and live news',
      },
    ],
  },
  {
    title: 'Master',
    number: '25,000+',
    link: '#',
    features: [
      {
        class: 'active',
        title: 'Market-Grade Spreads',
      },
      {
        class: 'active',
        title: 'Trade with increased leverage',
      },
      {
        class: 'active',
        title: 'Dedicated Investment Specialist',
      },
      {
        class: 'active',
        title: 'Full asset access',
      },
      {
        class: 'active',
        title: 'Market Analysis',
      },
      {
        class: 'active',
        title: 'Customized Commissions',
      },
      {
        class: 'active',
        title: 'Premier Events',
      },
      {
        class: 'active',
        title: 'Unlimited Access to Academy & Webinars',
      },
      {
        class: 'active',
        title: 'SM Web platform, IOS and Android App',
      },
      {
        class: 'active',
        title: 'SM Market Newsletter',
      },
      {
        class: 'active',
        title: 'Trading Signals Platform and live news',
      },
    ],
  },
  {
    title: 'Elite',
    number: '100,000+',
    link: '#',
    features: [
      {
        class: 'active',
        title: 'Dedicated Investment Specialist',
      },
      {
        class: 'active',
        title: 'Full asset access',
      },
      {
        class: 'active',
        title: 'Market Analysis',
      },
      {
        class: 'active',
        title: 'Premier Events',
      },
      {
        class: 'active',
        title: 'Unlimited Access to Academy & Webinars',
      },
      {
        class: 'active',
        title: 'SM Web platform, IOS and Android App',
      },
      {
        class: 'active',
        title: 'SM Market Newsletter',
      },
      {
        class: 'active',
        title: 'Trading Signals Platform and live news',
      },
    ],
    powerFeatures: [
      {
        class: 'active',
        title: 'Zero Commissions',
      },
      {
        class: 'active',
        title: 'Institutional Grade Spreads',
      },
      {
        class: 'active',
        title: 'Trade with increased leverage',
      },
    ],
  },
  {
    title: 'Supreme',
    number: '250,000+',
    link: '#',
    features: [
      {
        class: 'active',
        title: 'Dedicated Investment Specialist',
      },
      {
        class: 'active',
        title: 'Full asset access',
      },
      {
        class: 'active',
        title: 'Market Analysis',
      },
      {
        class: 'active',
        title: 'Premier Events',
      },
      {
        class: 'active',
        title: 'Unlimited Access to Academy & Webinars',
      },
      {
        class: 'active',
        title: 'SM Web platform, IOS and Android App',
      },
      {
        class: 'active',
        title: 'SM Market Newsletter',
      },
      {
        class: 'active',
        title: 'Trading Signals Platform and live news',
      },
    ],
    powerFeatures: [
      {
        class: 'active',
        title: 'Institutional Grade Spreads',
      },
      {
        class: 'active',
        title: 'Trade with Max leverage according to asset class',
      },
      {
        class: 'active',
        title: 'Zero Commissions',
      },
      {
        class: 'active',
        title: 'Priority Access & Transactions',
      },
      {
        class: 'active',
        title: 'Loyalty Package',
      },
    ],
  },
];

export default {
  name: 'AccordionSection',
  data() {
    return {
      digits,
      points: [
        {
          id: 1,
          image: tyroGreen,
          imageNotActive: tyroGrey,
          point: 0,
          title: 'Initiate',
          alt: 'Cfd Trading',

        },
        {
          id: 2,
          image: primusGreen,
          imageNotActive: primusGrey,
          point: 25,
          title: 'Advancer',
          alt: 'Cfd Trading',

        },
        {
          id: 3,
          image: optioGreen,
          imageNotActive: optioGrey,
          point: 50,
          title: 'Master',
          alt: 'Cfd Trading',

        },
        {
          id: 4,
          image: legatusGreen,
          imageNotActive: legatusGrey,
          point: 75,
          title: 'Elite',
          alt: 'Cfd Trading',
        },
        {
          id: 5,
          image: centurionGreen,
          imageNotActive: centurionGrey,
          point: 100,
          title: 'Supreme',
          alt: 'Trading Assets',
        },
      ],
      mouseStartX: null,
      mouseCurrentX: null,
      pointerLeftPosition: 0,
      isMouseDown: false,
      slidePosition: 0,
      slides,
      slideWidth: 100,
      activeSlider: 2,
      touchStartX: 0,
      touchEndX: undefined,
      link: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up`,
      touchStart: false,
    };
  },
  mounted() {
    window.addEventListener('mouseup', this.handleMouseUp);
    window.addEventListener('touchend', this.handleMouseUp);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('touchmove', this.handleMouseMove);
    window.addEventListener('touchstart', this.handleTouchStart);

    // Set second item by default
    this.moveToSlider(2);
    this.$refs.pointer.style.setProperty('left', '50%');
    this.$refs.progress.style.setProperty('width', '50%');
    this.setProgressAttr(50);
    this.pointerLeftPosition = (this.$refs.line.offsetWidth * 50) / 100;
  },
  unmounted() {
    window.removeEventListener('mouseup', this.handleMouseUp);
    window.removeEventListener('touchend', this.handleMouseUp);
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('touchmove', this.handleMouseMove);
    window.removeEventListener('touchstart', this.handleTouchStart);
  },
  methods: {
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX;
      this.touchStart = true;
    },
    handleMouseUp(event) {
      if (this.isMouseDown) {
        this.isMouseDown = false;
        this.pointerLeftPosition = Math.max(this.pointerLeftPosition + this.mouseCurrentX - this.mouseStartX, 0);
        this.mouseCurrentX = null;
        this.mouseStartX = null;
      }

      const touchEventOnSlider = this.$refs.slides?.contains(event.target) || this.$refs.slides === event.target;
      if (touchEventOnSlider && this.touchStart === true && this.touchEndX !== undefined && !this.isMouseDown) {
        this.touchStart = false;

        const touchDistance = this.touchStartX - this.touchEndX;

        if (Math.abs(touchDistance) > 50) {
          if (touchDistance > 0) {
            this.slideRight();
          } else {
            this.slideLeft();
          }
        }

        this.touchStartX = 0;
        this.touchEndX = undefined;
      }
    },
    getClientXFromEvent(e) {
      let x;
      if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
        const evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
        const touch = evt.touches[0] || evt.changedTouches[0];
        x = touch.pageX;
      } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
        x = e.clientX;
      }

      return x;
    },
    handleMouseMove(e) {
      if (this.isMouseDown) {
        this.mouseCurrentX = this.getClientXFromEvent(e);

        const dx = this.mouseCurrentX - this.mouseStartX;
        const leftPosition = Math.max(this.pointerLeftPosition + dx, 0);

        this.$refs.pointer.style.setProperty('left', `min(${leftPosition}px, 100%)`);

        const progress = parseInt((this.$refs.pointer.offsetLeft * 100) / this.$refs.line.offsetWidth, 10);
        this.$refs.progress.style.setProperty('width', `${progress}%`);

        // Set active slider
        const reverseIndex = this.points.slice().reverse().findIndex((item) => progress >= item.point);
        const nextIndex = this.points.length - reverseIndex - 1;

        if (this.activeSlider !== nextIndex) {
          this.moveToSlider(nextIndex);
        }

        // Set tooltip number
        this.setProgressAttr(progress);
      }

      // eslint-disable-next-line no-restricted-globals
      if (event?.touches?.[0]?.clientX) {
        // eslint-disable-next-line no-restricted-globals
        this.touchEndX = event.touches[0].clientX;
      }
    },
    setProgressAttr(progress) {
      const reverseDigitIndex = this.digits.slice().reverse().findIndex((item) => progress >= item.progress);
      const digitIndex = this.digits.length - reverseDigitIndex - 1;
      this.$refs.pointer.setAttribute('progress', this.digits[digitIndex].value);
    },
    handlePointerDrag(e) {
      this.isMouseDown = true;
      this.mouseStartX = this.getClientXFromEvent(e);
    },
    slideLeft() {
      if (this.slidePosition === 0) {
        this.slidePosition = (this.slides.length - 1) * this.slideWidth * -1;
        this.activeSlider = this.points.length - 1;
      } else {
        this.slidePosition += this.slideWidth;
        this.activeSlider -= 1;
      }

      const progress = this.points[this.activeSlider].point;

      this.$refs.pointer.style.setProperty('left', `${progress}%`);
      this.$refs.progress.style.setProperty('width', `${progress}%`);
      this.setProgressAttr(progress);

      this.pointerLeftPosition = parseInt((this.$refs.line.offsetWidth * progress) / 100, 10);
    },
    slideRight() {
      if (this.slidePosition === (this.slides.length - 1) * this.slideWidth * -1) {
        this.slidePosition = 0;
        this.activeSlider = 0;
      } else {
        this.slidePosition -= this.slideWidth;
        this.activeSlider += 1;
      }

      const progress = this.points[this.activeSlider].point;

      this.$refs.pointer.style.setProperty('left', `${progress}%`);
      this.$refs.progress.style.setProperty('width', `${progress}%`);
      this.setProgressAttr(progress);

      this.pointerLeftPosition = parseInt((this.$refs.line.offsetWidth * progress) / 100, 10);
    },
    moveToSlider(sliderIndex) {
      this.slidePosition = this.slideWidth * sliderIndex * -1;
      this.activeSlider = sliderIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
.trade-slider {
  background: #000000;
  padding: 0 0 96px;
}

.container {
  max-width: 1150px;
  padding: 0 15px;
  margin: 0 auto;
}

// line
.line-wrapper {
  margin: 0 8px;
}

.line {
  background-color: #4D475D;
  border-radius: 10px;
  height: 10px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
}

.active-line {
  background-color: #34FEC8;
  border-radius: 10px;
  height: 10px;
  width: 0;
  padding: 0 8px;
}

.pointer {
  cursor: pointer;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #D9D9D9;
  transform: translateX(-50%);

  &:before {
    content: '';
    width: 24px;
    height: 24px;
    background-color: #34FEC8;
    border-radius: 50%;
    pointer-events: none;
  }

  &:after {
    content: attr(progress);
    top: 62px;
    background: white;
    border-radius: 8px;
    padding: 8px 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #000000;
    font-size: 20px;
  }
}

.pointer_before {
  position: absolute;
  top: 55px;
  width: 14px;
  height: 14px;
  background: #ffffff;
  border-radius: 2px;
  transform: rotate(45deg);
}

.points {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
}

.point-item {
  //width: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 40px;

  & p.active {
    color: #34FEC8;
  }

  & p:first-child {
    top: -30px;
    position: absolute;
    font-size: 14px;
    width: 140px;
    text-align: center;
  }

  & p:last-child {
    top: 40px;
    position: absolute;
  }

  & img {
    width: 24px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  p {
    color: #4d465f;
    font-size: 16px;
  }
}

// slider
.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 144px;
}

.slides {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex: 1 0 100%;
}

.slide-content {
  padding: 0 30px;
  display: flex;
  flex-wrap: wrap;
}

.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 32px;
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  color: #34FEC8;
}

.prev-btn {
  left: 5px;
}

.next-btn {
  right: 5px;
}

.account-name {
  background-color: #211934;
  width: 520px;
  height: 283px;
  border-radius: 16px;
  padding: 24px 40px 40px;
  color: #ffffff;
}

.account-name_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 24px;
}

.account-name_left {
  display: flex;
  align-items: center;

  p {
    margin-left: 27px;
    font-size: 24px;
    font-weight: 600;
  }

  img {
    width: 40px;
  }
}

.account-name_right p {
  font-size: 32px;
  font-weight: 600;
}

.account-name_bottom {
  padding: 24px 0 0;

  p {
    font-size: 12px;
    line-height: 1.4;
  }

  a {
    font-size: 14px;
    line-height: 1.4;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #34FEC8;
    height: 48px;
    width: 100%;
    border-radius: 8px;
    margin-top: 60px;
  }
}

.account-features {
  width: 520px;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  padding: 0 40px;

  p {
    font-size: 14px;
    margin-bottom: 16px;
  }

  ul li {
    font-size: 12px;
    line-height: 1.4;
    font-weight: 400;
    margin-bottom: 16px;
    list-style: none;
    display: flex;
    align-items: center;
  }
}

.account-features ul li span {
  margin-left: 8px;
}

@media (max-width: 1340px) {
  .container {
    max-width: 80%;
  }
}

@media (max-width: 1150px) {
  .container {
    overflow: hidden;
    padding: 0 30px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 100%;
    padding: 0;
  }

  .trade-slider {
    padding: 32px 0 0;
  }

  .line-block {
    padding: 0 30px;
  }

  .title-wrapper {
    padding: 0 30px;

    img {
      width: 60px;
    }

    h1 {
      font-size: 20px;
    }
  }

  .point-item p {
    font-size: 12px;
  }

  .point-item img {
    width: 20px;
  }

  .point-item p:first-child {
    font-size: 10px;
    width: 50px;
  }

  .pointer {
    width: 30px;
    height: 30px;

    &::before {
      width: 20px;
      height: 20px;
    }

    &::after {
      font-size: 12px;
      top: 45px;
    }
  }

  .pointer_before {
    top: 39px;
  }

  .account-name {
    width: 100%;
    padding: 24px;
    height: auto;
  }

  .account-features {
    width: 100%;
    margin-top: 20px;
    padding: 0;
  }

  .slider {
    margin-top: 80px;
  }

  .slide-content {
    padding: 0 30px;
  }

  .prev-btn,
  .next-btn {
    top: 120px;
  }

  .prev-btn {
    left: 8px;
  }

  .next-btn {
    right: 10px;
  }

  .account-name_left p {
    margin-left: 16px;
    font-size: 16px;
  }

  .account-name_left img {
    width: 40px;
  }

  .account-name_right p {
    font-size: 20px;
  }

  .account-features ul li svg {
    flex-shrink: 0;
  }
}
</style>
