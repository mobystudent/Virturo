<template>
  <section class="section">
    <div class="wrapper">
      <h2 class="title">
        State of the art trading infrastructure <br>for <mark>optimal trading conditions</mark>
      </h2>
      <p class="small-title">
        For optimal investing experience
      </p>
      <div class="grid">
        <div
          v-for="(block, index) in blocks"
          :key="index"
          class="block"
        >
          <div class="block-header">
            <div class="wrap">
              <span class="value">{{ block.percent }}</span>
              <span
                v-if="index != 2"
                class="percent"
              >%</span>
            </div>
            <h3 class="block-title">
              {{ block.title }}
            </h3>
          </div>
          <p class="text">
            {{ block.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        {
          title: 'Deals',
          percent: 99.56,
          description: 'Executed under 1 second',
        },
        {
          title: 'Orders',
          percent: 98.76,
          description: 'Executed at requested price',
        },
        {
          title: 'Milliseconds',
          percent: 18.09,
          description: 'State of the art trading infrastructure for optimal investing experience',
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
  margin-bottom: 32px;

  mark {
    color: #48C3A8;
    background: transparent;
  }
}

.small-title {
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  margin-bottom: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  justify-content: space-between;
  gap: 60px 15px;
}

.block-header {
  display: flex;
  flex-flow: column;
  margin-bottom: 8px;
}

.block-title {
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: 400;
  line-height: 140%; /* 28px */
}

.text {
  color: #FFFFFF;
  font-family: 'Poppins';
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  opacity: 0.6;
}

.value {
  color: #D3F5EC;
  font-family: 'Poppins';
  font-size: 100px;
  font-weight: 400;
  line-height: 100%; /* 100px */
  letter-spacing: -0.32px;
}

.percent {
  color: #D3F5EC;
  font-family: 'Poppins';
  font-size: 52px;
  font-weight: 500;
  line-height: 112%; /* 58.24px */
  letter-spacing: -0.52px;
}

@media (max-width: 992px) {
  .title {
    font-size: 32px;
    line-height: 140%; /* 44.8px */
    letter-spacing: normal;
    margin-bottom: 24px;
  }

  .value {
    font-size: 80px;
    line-height: 100%; /* 80px */
    letter-spacing: -0.256px;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 40px 0;

    .wrapper {
      padding: 0 16px;
    }
  }

  .small-title {
    opacity: 0.6;
    margin-bottom: 60px;
  }
}
</style>
