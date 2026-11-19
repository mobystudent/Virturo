<template>
  <section class="section">
    <div class="wrapper">
      <h1 class="title">
        Unlock superior investing: <br>Join <mark>Virturo PRO</mark> today!
      </h1>
      <div class="wrap-btn">
        <a
          class="btn"
          @click="openChat"
        >Open PRO Account</a>
      </div>
      <p class="small-title">
        Already have an account and you want to <span
          class="link"
          @click="scrollToProSection"
        >become PRO?</span>
      </p>
      <div class="grid">
        <div
          v-for="(block, index) in blocks"
          :key="index"
          class="background-block"
        >
          <div class="block">
            <h3 class="block-title">
              {{ block.title }}
            </h3>
            <picture
              :class="block.classImage"
              class="img"
            >
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
import first from '@/static/img/pro/first.png';
import second from '@/static/img/pro/second.png';
import third from '@/static/img/pro/third.png';

export default {
  data() {
    return {
      blocks: [
        {
          title: 'Trade with leverage up to 1:400',
          image: first,
          classImage: 'img-left',
        },
        {
          title: 'Dedicated investment specialist',
          image: second,
          classImage: 'img-center',
        },
        {
          title: 'Up to 30% close out level',
          image: third,
          classImage: 'img-right',
        },
      ],
    };
  },
  methods: {
    openChat() {
      if (window.Intercom) {
        window.Intercom('show');
      }
    },
    scrollToProSection() {
      const section = document.getElementById('professional-account');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.section {
  background: linear-gradient(to bottom, #352F44 0%, #25212E 38%);
  padding: 120px 0 40px;
}

.wrapper {
  max-width: 1340px;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
}

.title {
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 52px;
  font-weight: 500;
  line-height: 112%; /* 58.24px */
  letter-spacing: -0.52px;
  text-align: center;
  margin-bottom: 40px;

  mark {
    color: #48C3A8;
    background: transparent;
  }
}

.wrap-btn {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.btn {
  color: #352F44;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  background-color: #D3F5EC;
  border: 1px solid #D3F5EC;
  border-radius: 4px;
  padding: 15px 31px;
  cursor: pointer;
  transition: .25s box-shadow ease-in, .25s background-color ease-in, .25s color ease-in;

  &:hover {
    color: #D3F5EC;
    background-color: transparent;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
  }

  &:active {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12);
  }
}

.small-title {
  color: #FFFFFF;
  opacity: 0.5;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  text-align: center;
  margin-bottom: 60px;

  .link {
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.background-block {
  position: relative;
  width: 100%;
  max-width: 416px;
  min-height: 304px;
  border-radius: 32px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
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
  padding: 31px;
  overflow: hidden;
}

.block-title {
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: 400;
  line-height: 140%; /* 28px */
  margin-bottom: 10px;
}

.img {
  position: absolute;
  bottom: 0;
  height: 200px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.img-left {
  left: 0;
}

.img-center {
  width: 324px;
  height: 206px;
  left: 50%;
  transform: translateX(-50%);
}

.img-right {
  right: 0;
}

@media (max-width: 1100px) {
  .background-block {
    min-height: 277px;
  }

  .img {
    height: 150px;
  }

  .img-center {
    width: 245px;
    height: 156px;
  }
}

@media (max-width: 992px) {
  .title {
    font-size: 32px;
    line-height: 140%; /* 44.8px */
    letter-spacing: normal;
    margin-bottom: 60px;
  }

  .img {
    height: 135px;
  }

  .img-center {
    width: 225px;
    height: 141px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 167px 0 40px;

    .wrapper {
      padding: 0 16px;
    }
  }

  .grid {
    justify-items: center;
    grid-template-columns: 1fr;
  }

  .background-block {
    min-height: 304px;
  }

  .img {
    height: 200px;
  }

  .img-center {
    width: 324px;
    height: 206px;
  }
}
</style>
