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
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
              <path d="M19.5 22.1665H19.5217" stroke="#D3F5EC" stroke-width="4.33333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M32.5 22.1665H32.5217" stroke="#D3F5EC" stroke-width="4.33333" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.9993 4.8335C21.4023 4.8335 16.9935 6.65968 13.7428 9.91031C10.4922 13.1609 8.66602 17.5697 8.66602 22.1668V48.1668L15.166 41.6668L20.5827 47.0835L25.9993 41.6668L31.416 47.0835L36.8327 41.6668L43.3327 48.1668V22.1668C43.3327 17.5697 41.5065 13.1609 38.2559 9.91031C35.0052 6.65968 30.5964 4.8335 25.9993 4.8335Z" stroke="#D3F5EC" stroke-width="4.33333" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h2 class="title">
            Oops, the page you were looking for doesn’t exist!
          </h2>
          <nuxt-link
            class="error-btn"
            to="/"
          >
            Go to homepage
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/project-config';

export default {
  name: 'Error',
  data() {
    return {
      projectName: config.name,
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
    margin-bottom: 40px;
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
  .error-btn {
    display: block;
    font: 500 16px/1 'Poppins', sans-serif;
    padding: 18px 32px;
    border-radius: 4px;
    color: #352F44;
    background-color: #D3F5EC;
    border: 1px solid #D3F5EC;
    transition: color .25s ease-in, background .25s ease-in;

    &:hover {
      background-color: transparent;
      color: #D3F5EC;
    }

    &:active {
      background-color: transparent;
      color: #D3F5EC;
    }
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
