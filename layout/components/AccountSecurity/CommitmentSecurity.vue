<template>
  <section class="welcome-section">
    <div class="wrapper">
      <div class="row-1">
        <div class="heading">
          <h2 class="block-title">
            Our Commitment to Your Security
          </h2>
          <!-- <div class="description">
            <p>
              At Virturo, we are committed to transparency and ensuring you have all the information you need to make informed decisions about your trading activities. Below, you will find a comprehensive breakdown of our fees and charges, designedto help you understand the costs associated with your investment journey.
            </p>
          </div> -->
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="welcome-wrap">
        <div class="row row-2">
          <div
            v-for="(post, index) in feesItems"
            :key="index"
            class="col post"
          >
            <div class="img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.9977 16.1756L20.0426 6.85785L14.4138 9.24714L18.2281 18.233L9.24077 14.4181L6.8515 20.0469L16.1692 24.002L6.85096 27.9574L9.24024 33.5861L18.2266 29.7716L14.4139 38.7539L20.0427 41.1431L23.9978 31.8255L27.9531 41.1436L33.5818 38.7543L29.7705 29.7754L38.7479 33.5861L41.1372 27.9573L31.819 24.002L41.1367 20.0469L38.7474 14.4181L29.769 18.2292L33.5818 9.24669L27.9531 6.85742L23.9977 16.1756Z"
                  fill="#157275"
                />
              </svg>
            </div>
            <h3 class="title">
              {{ post.title }}
            </h3>
            <p class="description">
              {{ post.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      feesItems: [
        {
          title: 'Robust Security Protocols',
          text: 'Utilizing advanced encryption and cybersecurity methods, we ensure the protection of your data and transactions.',
        },
        {
          title: 'Vigilant Monitoring',
          text: 'Our systems are monitored around the clock, aligning with the trend of increasing fraudulent activities reported globally.',
        },
        {
          title: 'Regulatory Compliance',
          text: 'We strictly adhere to international security standards and regulations, recognizing the global increase in financial crime risks.',
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
.welcome-section {
  background-color: #352F44;
  overflow: hidden;
  position: relative;

  .wrapper {
    max-width: 1340px;
    padding: 0 30px;
    margin: 0 auto;

    @media (max-width: 998px) {
      &:nth-child(2) {
        padding: 0;
      }
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 16px;
    margin-bottom: 60px;

    @media (max-width: 998px) {
      margin-bottom: 40px;
      gap: 16px;
      // margin-right: 16px;
      padding-left: 16px;
      flex-flow: row nowrap;
      justify-content: flex-start;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;

    }
  }

  .container {
    box-sizing: content-box;
    max-width: 1155px;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
  }

  .heading {
    margin: 60px auto;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    gap: 60px;
    font-family: 'Poppins';

    @media (max-width: 992px) {
      margin: 40px auto;
      flex-flow: column;
      gap: 40px;
    }

    h2 {
      // margin-bottom: 60px;
      max-width: 524px;
      width: 100%;
      color: #FFF;
      font: 500 52px/112% 'Poppins';
      letter-spacing: -0.52px;
    }

    .description {
      max-width: 524px;
      width: 100%;
    }

    p {
      // margin-bottom: 60px;
      max-width: 500px;
      color: #FFF;
      font: 400 16px/140% 'Poppins';
    }
  }

  .post {
    padding: 32px 32px 71px;
    padding-right: 26px;
    display: flex;
    flex-flow: column;
    max-width: 430px;
    border-radius: 22px;
    background-color: #fff;

    @media (max-width: 998px) {
      min-width: 327px;
    }

    @media (max-width: 768px) {
      padding: 24px 24px 38px;
    }

    @media (max-width: 390px) {
      // min-width: 300px;
      max-width: none;
    }

    @media (max-width: 356px) {
      min-width: 290px;
    }
  }

  .img {
    margin-bottom: 12px;
    display: block;
    width: 48px;
    height: 48px;
  }

  .title {
    margin-bottom: 16px;
    color: #352F44;
    font: 500 24px/132% 'Poppins';

    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 132%; /* 31.68px */
    }

  }

  .description {
    color: #282929;
    font: 400 16px/140% 'Poppins';
  }

}

.post {
  // width: 429px;
  width: 100%;
  align-self: stretch;
}

@media (max-width: 768px) {
  .welcome-section .heading {
    max-width: 100%;
  }

  .welcome-section .heading h2 {
    font-size: 32px;
    line-height: 140%; /* 44.8px */
  }

  .welcome-section .welcome-wrap {
    padding: 0;
    max-width: none;
    margin: 0;
  }

  .welcome-section .wrapper {
    padding: 0 16px;
  }
}
</style>
