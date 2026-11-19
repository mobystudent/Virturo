<template>
  <section class="section">
    <div class="wrapper">
      <h2 class="title">
        Dedicated experts
      </h2>
      <p class="small-title">
        Our team of market professionals are here to educate you <br>and keep you up-to-date
      </p>
      <div class="grid">
        <div
          v-for="(block, index) in blocks"
          :key="index"
          class="background-block"
        >
          <div class="block">
            <div class="block-header">
              <h3 class="block-title">
                {{ block.title }}
              </h3>
              <p class="text">
                {{ block.description }}
              </p>
            </div>
            <picture class="image">
              <img
                :alt="block.title"
                :src="block.image"
              >
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import image1 from '@/static/img/pro/experts/image1.png';
import image2 from '@/static/img/pro/experts/image2.png';
import image3 from '@/static/img/pro/experts/image3.png';

export default {
  data() {
    return {
      blocks: [
        {
          title: 'Real-Time Guidance',
          image: image1,
          description: 'Enjoy priority access to dedicated customer support, ensuring swift assistance and a seamless trading experience.',
        },
        {
          title: 'In-depth analysis',
          image: image2,
          description: 'Access market insights, real-time news, expert analysis, and research reports to stay ahead in dynamic financial markets.',
        },
        {
          title: 'Personalised education',
          image: image3,
          description: 'Enhance your trading strategy with informative one-to-one trading sessions by industry specialists.',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.section {
  background-color: #25212F;
  padding: 60px 0;
}

.wrapper {
  position: relative;
  max-width: 1340px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;

  &::after {
    content: '';
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: calc(100% - 242px);
    height: 1px;
    background-color: #282929;
  }
}

.title {
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 52px;
  font-weight: 500;
  line-height: 112%; /* 58.24px */
  letter-spacing: -0.52px;
  margin-bottom: 32px;
}

.small-title {
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  margin-bottom: 60px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
}

.background-block {
  position: relative;
  width: 100%;
  min-height: 500px;
  border-radius: 32px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);

  &:nth-child(1) {
    display: flex;
    grid-area: 1 / span 2;

    .block-header {
      max-width: 484px;
    }

    .image {
      height: 100%;
    }
  }

  &:nth-child(3) {
    .text {
      max-width: 415px;
    }
  }
}

.block {
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  right: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background-color: #352F44;
  border-radius: 32px;
  padding: 40px;
  overflow: hidden;
}

.block-header {
  margin-bottom: 40px;
}

.block-title {
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 40px;
  font-weight: 500;
  line-height: 112%; /* 44.8px */
  margin-bottom: 24px;
}

.text {
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}

.image {
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 300px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 1200px) {
  .background-block {
    &:nth-child(1) {
      .image {
        width: 530px;
        height: auto;
      }
    }

    &:nth-child(2),
    &:nth-child(3) {
      .image {
        height: 240px;
      }
    }
  }
}

@media (max-width: 992px) {
  .title {
    font-size: 32px;
    line-height: 140%; /* 44.8px */
    letter-spacing: normal;
    margin-bottom: 24px;
  }

  .block-title {
    font-size: 22px;
    line-height: 140%; /* 30.8px */
  }

  .background-block {
    &:nth-child(1) {
      .image {
        width: 420px;
      }
    }

    &:nth-child(2),
    &:nth-child(3) {
      .image {
        height: 190px;
      }
    }
  }
}

@media (max-width: 768px) {
  .section {
    padding: 70px 0 60px;

    .wrapper {
      padding: 0 16px;

      &::after {
        max-width: calc(100% - 32px);
      }
    }
  }

  .background-block {
    min-height: 460px;

    &:nth-child(2),
    &:nth-child(3) {
      min-height: 385px;
    }
  }

  .block {
    padding: 32px;
  }

  .grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    justify-items: center;
  }

  .background-block {
    &:nth-child(1) {
      grid-area: span 1;

      .image {
        width: 343px;
        max-width: 100%;
        right: 50%;
        transform: translateX(50%);
      }
    }
  }
}

@media (max-width: 400px) {
  .background-block {
    &:nth-child(2),
    &:nth-child(3) {
      .image {
        height: 150px;
        max-width: calc(100% - 26px);
      }
    }
  }
}
</style>
