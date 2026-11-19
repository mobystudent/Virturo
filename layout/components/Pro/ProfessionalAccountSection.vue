<template>
  <section
    id="professional-account"
    class="section"
  >
    <div class="wrapper">
      <h2 class="title">
        Are you eligible for a <br><mark>Professional Account?</mark>
      </h2>
      <p class="small-title">
        Professional Accounts are suitable for experienced investors with in-depth knowledge of the risks involved in trading CFDs.
      </p>
      <div class="grid">
        <div
          v-for="(block, index) in blocks"
          :key="index"
          class="block"
        >
          <div class="background-block">
            <picture class="image">
              <img
                :alt="block.title"
                :src="block.image"
              >
            </picture>
          </div>

          <h3 class="text">
            {{ block.title }}
          </h3>
        </div>
      </div>
      <div class="wrap-btn">
        <a
          class="btn"
          @click="openChat"
        >Open PRO Account
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import cube1 from '@/static/img/pro/cubes/cube1.svg';
import cube2 from '@/static/img/pro/cubes/cube2.svg';
import cube3 from '@/static/img/pro/cubes/cube3.svg';

export default {
  data() {
    return {
      blocks: [
        {
          title: 'Have you placed 10 relevant trades of a significant size per quarter in the last year?',
          image: cube1,
        },
        {
          title: 'Do you, or have you, worked in the financial sector for at least one year?',
          image: cube2,
        },
        {
          title: 'Your investment portfolio exceeds €500,000?',
          image: cube3,
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
  },
};
</script>

<style scoped lang="scss">
.section {
  background-color: #25212F;
  padding: 60px 0 234px;
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
  max-width: 630px;
  margin: 0 auto 24px;

  mark {
    color: #48C3A8;
    background: transparent;
  }
}

.small-title {
  color: #FFFFFF;
  opacity: 0.6;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  text-align: center;
  max-width: 540px;
  margin: 0 auto 60px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px 104px;
  margin-bottom: 60px;
}

.block {
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;

  &:not(:last-child)::before {
    content: '';
    position: absolute;
    right: -52px;
    top: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(to bottom, rgba(211, 245, 236, 0) 0%, #D3F5EC 51.56%, rgba(211, 245, 236, 0) 100%);
  }
}

.background-block {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
  margin-bottom: 20px;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1px;
  left: 1px;
  bottom: 1px;
  right: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background-color: #352F44;
  border-radius: 10px;

  img {
    width: 42px;
    height: 42px;
  }
}

.text {
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  text-align: center;
}

.wrap-btn {
  display: flex;
  justify-content: center;
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

@media (max-width: 992px) {
  .title {
    font-size: 32px;
    line-height: 140%; /* 44.8px */
    letter-spacing: normal;
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 60px 0;

    .wrapper {
      padding: 0 16px;
    }
  }

  .small-title {
    margin: 0 auto 40px;
  }

  .background-block {
    margin-bottom: 16px;
  }

  .grid {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .block {
    max-width: 450px;

    &:not(:last-child)::before {
      right: 0;
      top: auto;
      bottom: -40px;
      left: 50%;
      width: calc(100% - 153px);
      height: 1px;
      transform: translateX(-50%);
      background: linear-gradient(to left, rgba(211, 245, 236, 0) 0%, #D3F5EC 49.5%, rgba(211, 245, 236, 0) 100%);
    }
  }
}

@media (max-width: 400px) {
  .block {
    max-width: 320px;
  }
}
</style>
