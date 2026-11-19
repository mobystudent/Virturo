<template>
  <section class="section our-priority">
    <div class="wrapper main-wrapper">
      <div class="title-wrap">
        <h2 class="title-main">
          Beware of Phishing:<span>Your Security is Our Priority</span>
        </h2>
        <h3 class="description">
          Understanding Phishing
        </h3>
      </div>

      <div class="row">
        <div class="col">
          <div class="content">
            <!-- <h4>
              Understanding Phishing
            </h4> -->
            <p>
              Phishing is a deceptive practice used by cyber-criminals to acquire sensitive information. It often involves sending emails or messages that mimic those from reputable companies to trick individuals into revealing personal and financial details.
            </p>
          </div>
        </div>
        <div class="col">
          <div class="content">
            <p>
              Expanding on the importance of staying informed, responsible trading involves regularly educating oneself about market trends, global economic developments, and changes in financial regulations. Virturo encourages clients to diversify their investment portfolios, reducing the overall risk associated with market fluctuations. Utilizing risk management tools provided by Virturo is essential for effective decision-making and minimizing potential losses.
            </p>
          </div>
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
            <h3 class="title desk">
              {{ post.title }}
            </h3>
            <h3 class="title mob">
              {{ post.titleMobile }}
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
          title: 'Deceptive emails/messages',
          titleMobile: 'Deceptive emails/ messages',
          text: 'These may appear to be from trusted entities like banks or well-known companies, often containing urgent or threatening language.',
        },
        {
          title: 'Suspicious links/ attachments',
          titleMobile: 'Suspicious links/ attachments',
          text: 'Typically include links to fraudulent websites or attachments that can compromise your information.',
        },
        {
          title: 'Official business WhatsApp',
          titleMobile: 'Official business WhatsApp',
          text: 'Virturo may use its verified WhatsApp business account for client communication, but we will never request sensitive information through this channel. Always use authorized channels and avoid sharing personal details or security credentials.',
        },
      ],
    };
  },

};
</script>

<style scoped lang="scss">
.our-priority {
  padding: 60px 0;
  background-color: #352F44;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  .wrapper {
    max-width: 1340px;
    box-sizing: border-box;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      padding: 0 15px;
      padding-right: 0;
    }
  }

  .main-wrapper {
    padding-bottom: 60px;
    display: flex;
    flex-flow: wrap;

    @media (max-width: 768px) {
      padding: 0 15px 62px;
    }
  }
}

.title-wrap {
  display: flex;
  flex-flow: column;

  .title-main {
    margin-bottom: 40px;
    font: 500 52px/112% 'Poppins';
    letter-spacing: -0.52px;
    color: #fff;

    span {
      display: block;
      color: #48C3A8;
    }

    @media (max-width: 992px) {
      font-size: 38px;
    }

    @media (max-width: 768px) {
      max-width: none;
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }

  .description {
    margin-bottom: 16px;
    font: 500 24px/132% 'Poppins';
    color: #fff;

    @media (max-width: 768px) {
      margin-bottom: 16px;
      max-width: none;
      font-size: 20px;
      line-height: 140%; /* 28px */
    }
  }
}

.row {
  position: relative;
  display: flex;
  width: 100%;

  @media (max-width: 992px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-flow: column;
    gap: 0;
  }
}

.col {
  width: 50%;

  &:first-child .content {
    max-width: 524px;

    @media (max-width: 768px) {
      max-width: none;
    }
  }

  &:nth-child(2) {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    width: 100%;

    &:first-child {
      margin-bottom: 0;
    }

    &:nth-child(2) {
      justify-content: flex-start;
    }
  }

  .content {
    h4 {
      margin-bottom: 8px;
      color: #fff;
      font-family: 'Poppins';
      font-size: 20px;
      font-weight: 500;
      line-height: 140%;
      /* 28px */
    }

    p {
      margin-bottom: 24px;
      color: #fff;
      font-family: 'Poppins';
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;

      /* 24px */
      @media (max-width: 768px) {
        line-height: 140%; /* 22.4px */
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.welcome-wrap {
  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 16px;

    @media (max-width: 998px) {
      gap: 16px;
      margin-right: 16px;
      // padding-left: 16px;
      flex-flow: row nowrap;
      justify-content: flex-start;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;

    }
  }

  .post {
    width: 100%;
    align-self: stretch;
  }

  .post {
    padding: 32px 32px 71px;
    padding-right: 26px;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    max-width: 430px;
    border-radius: 22px;
    background-color: #fff;

    @media (max-width: 998px) {
      min-width: 327px;
    }

    @media (max-width: 768px) {
      padding: 24px 24px 38px;
      min-height: 380px;
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

    &.desk {
      display: block;
      @media (max-width: 768px) {
        display: none;
      }
    }

    &.mob {
      display: none;
      @media (max-width: 768px) {
        display: block;
      }
    }

  }

  .description {
    color: #282929;
    font: 400 16px/140% 'Poppins';
  }
}
</style>
