<template>
  <div class="error">
    <img
      class="internal-bg top mobile"
      src="@/static/img/page-404/snowflake-bg-top.png"
      alt="snowflake background"
    >
    <img
      class="internal-bg bottom mobile"
      src="@/static/img/page-404/snowflake-bg-bottom.png"
      alt="snowflake background"
    >
    <div class="inner">
      <img
        class="internal-bg left desktop"
        src="@/static/img/page-404/snowflake-bg-left.png"
        alt="snowflake background"
      >
      <img
        class="internal-bg right desktop"
        src="@/static/img/page-404/snowflake-bg-right.png"
        alt="snowflake background"
      >
      <div class="wrapper">
        <div class="block-content">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
            >
              <path
                d="M11.7585 11.7627C9.74648 14.6732 8.666 18.1261 8.66016 21.6644C8.66016 34.6644 25.9935 47.6644 25.9935 47.6644C30.0198 44.4938 33.6563 40.8574 36.8268 36.831"
                stroke="#D3F5EC"
                stroke-width="4.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M41.5505 29.2921C42.6726 26.9031 43.278 24.3043 43.3272 21.6654C43.3272 17.0683 41.501 12.6595 38.2504 9.4089C34.9997 6.15827 30.5909 4.33209 25.9939 4.33209C23.3483 4.32543 20.7374 4.93364 18.3672 6.10875"
                stroke="#D3F5EC"
                stroke-width="4.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.7781 19.7803C19.5848 20.3897 19.4897 21.026 19.4964 21.6653C19.4964 23.3892 20.1812 25.0425 21.4002 26.2615C22.6192 27.4805 24.2725 28.1653 25.9964 28.1653C26.6357 28.172 27.272 28.0769 27.8814 27.8836"
                stroke="#D3F5EC"
                stroke-width="4.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M32.2794 20.0404C31.9918 18.9153 31.408 17.8878 30.5888 17.0648C29.7696 16.2417 28.7448 15.6532 27.6211 15.3604"
                stroke="#D3F5EC"
                stroke-width="4.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.32812 4.33203L47.6615 47.6654"
                stroke="#D3F5EC"
                stroke-width="4.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h2 class="title">
            This page is restricted
          </h2>
          <div class="message">
            Virturo  is unavailable in your location
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/project-config';

export default {
  name: 'Restricted',
  data() {
    return {
      upHere: false,
      projectName: config.name,
    };
  },
  head() {
    return {
      title: `Restricted - ${this.projectName}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          hid: 'title',
          name: 'title',
          content: 'Restricted',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .error {
    background-color: #352F44;
    height: 100vh;
    min-height: 350px;
    position: relative;
  }
  .inner {
    padding: 0 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto 0;
  }
  .wrapper {
    display: flex;
    margin: auto 0;
  }

  .internal-bg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    max-width: 600px;
    max-height: 800px;

    &.right {
      right: 0;
    }

    &.left {
      left: 0;
    }

    &.top {
      top: 0;
    }

    &.bottom {
      top: auto;
      bottom: 0;
    }

    &.desktop {
      display: block;
    }

    &.mobile {
      display: none;
      max-height: 235px;
      max-width: none;
      transform: translate(-50%, 0);
      left: 50%;
    }

    @media (max-width: 1280px) {
      max-height: 600px;
    }

    @media (max-width: 1250px) {
      max-width: 170px;
    }

    @media (max-width: 1200px) {
      max-height: 400px;
    }

    @media (max-width: 992px) {
      &.desktop {
        display: none;
      }

      &.mobile {
        display: block;
        max-height: 172px;
      }
    }

  }

  .block-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon {
    margin-bottom: 40px;
    width: 52px;
    height: 52px;
  }

  .title {
    margin-bottom: 16px;
    max-width: 632px;
    color: #ECECE4;
    font-family: "Poppins";
    font-size: 40px;
    font-weight: 500;
    line-height: 112%; /* 44.8px */
    text-align: center;
    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }
  .message {
    color: #ECECE4;
    font-family: "Poppins";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    text-align: center;
  }

  @media (max-width: 767px) {
    .inner {
      padding: 0 16px;
    }
    .wrapper {
      width: 100%;
    }
  }
  </style>