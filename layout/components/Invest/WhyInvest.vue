<template>
  <section class="why-invest">
    <div class="wrapper">
      <h2>Why Invest with Virturo?</h2>
      <div class="features">
        <div class="feature">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M31.1597 1.08C28.924 -1.16082 22.7621 1.21664 16.1549 6.48165C9.42956 1.05268 3.11319 -1.43409 0.841108 0.843168C-1.43097 3.12042 1.05014 9.4603 6.47586 16.1919C1.26826 22.7868 -1.08561 28.9263 1.14102 31.158C3.37675 33.3988 9.53862 31.0213 16.1458 25.7563C22.6349 30.8483 28.6423 33.1164 30.8416 30.912C33.041 28.7077 30.778 22.6866 25.7067 16.1828C31.0052 9.54228 33.4045 3.32993 31.1597 1.08Z"
                fill="#282929"
              />
            </svg>
          </div>
          <div class="content">
            <h3>01</h3>
            <h4>Diversified Portfolio</h4>
            <div class="divider" />
            <p>Gain exposure to a wide range of digital assets, reducing risk and enhancing returns.</p>
          </div>
        </div>
        <div class="feature">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M32 16V15.8907C31.9562 11.5119 28.3861 7.98546 24 8.00003C23.9635 8.00003 23.9271 8.00003 23.8907 8.00003H24V7.89074C23.9563 3.50459 20.3789 -0.0145268 16 4.50912e-05C11.6211 -0.0145268 8.04374 3.51188 8.00002 7.89074V8.00003C3.61388 7.98546 0.0437607 11.5119 4.49985e-05 15.8907V16C-0.0145269 20.3789 3.51187 23.9563 7.89073 24H8.00002C7.98545 28.3862 11.5119 31.9563 15.8907 32H16H16.1093C20.4881 31.9563 24.0145 28.3862 24 24H24.1093C28.4954 23.9563 32.0145 20.3789 32 16ZM8.00002 24H8.10931C8.07288 24 8.03645 24 8.00002 24ZM20.816 20.816H11.184V11.184H20.8233V20.816H20.816Z"
                fill="#282929"
              />
            </svg>
          </div>
          <div class="content">
            <h3>02</h3>
            <h4>Expert Management</h4>
            <div class="divider" />
            <p>Our team continuously analyzes market trends to optimize investment performance.</p>
          </div>
        </div>
        <div class="feature">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M32 0H22.6933C22.6933 3.70027 19.6916 6.69326 16 6.69326C12.2997 6.69326 9.30674 3.69164 9.30674 0H0C0 8.84097 7.16765 16 16 16C24.8323 16 32 8.84097 32 0Z"
                fill="#282929"
              />
              <path
                d="M16 16C7.16765 16 0 23.159 0 32H9.29811C9.29811 28.2997 12.2997 25.3067 15.9914 25.3067C19.6916 25.3067 22.6846 28.3084 22.6846 32H31.9827C32 23.159 24.8323 16 16 16Z"
                fill="#282929"
              />
            </svg>
          </div>
          <div class="content">
            <h3>03</h3>
            <h4>Security & Transparency</h4>
            <div class="divider" />
            <p>We prioritize asset security and provide clear, real-time portfolio insights.</p>
          </div>
        </div>
        <div class="feature">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M25.8191 9.823H22.1693V6.17314C22.1693 2.76248 19.4068 0 15.9961 0C12.5855 0 9.823 2.76248 9.823 6.17314V9.823H6.17314C2.76248 9.823 0 12.5855 0 15.9961C0 19.4068 2.76248 22.1693 6.17314 22.1693H9.823V25.8269C9.823 29.2375 12.5855 32 15.9961 32C19.4068 32 22.1693 29.2375 22.1693 25.8269V22.1693H25.8269C29.2375 22.1693 32 19.4068 32 15.9961C31.9923 12.5855 29.2298 9.823 25.8191 9.823Z"
                fill="#282929"
              />
            </svg>
          </div>
          <div class="content">
            <h3>04</h3>
            <h4>Flexible Investment Options</h4>
            <div class="divider" />
            <p>Choose from multiple fund types to align with your financial objectives.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-invest {
  padding: 128px 0;
  background-color: #ECECE4;
  @media (max-width: 992px) {
    padding: 64px 0;
  }

  .wrapper {
    max-width: 1260px;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    @media (max-width: 992px) {
      padding: 0 20px;
    }
  }

  h2 {
    margin-bottom: 88px;
    color: #282929;
    font-family: Unbounded;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 48px */
    @media (max-width: 992px) {
      margin-bottom: 48px;
      font-size: 24px;
    }
  }

  .features {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    .feature {
      display: flex;
      flex-direction: column;
      flex: 1 0 0;
      align-self: stretch;
      padding: 32px;
      border-radius: 24px;
      border: 1px solid #157275;
      min-height: 348px;
      background: #FFF;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
      transition: background 0.5s ease, color 0.5s ease;
      position: relative;
      @media (max-width: 1200px) {
        padding: 24px;
        max-width: 364px;
        flex: 0 1 32%;
        min-height: auto;
      }

      @media (max-width: 992px) {
        width: calc(50% - 8px);
        max-width: none;
        flex: none;
      }

      @media (max-width: 768px) {
        width: 100%;
      }

      .icon {
        font-size: 24px;
        margin-bottom: auto;

        svg path {
          transition: fill 0.3s ease;
        }

        @media (max-width: 1200px) {
          margin-bottom: 32px;

          svg path {
            fill: #48C3A8;
          }
        }
      }

      .content {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      h3 {
        margin-bottom: 8px;
        color: #282929;
        font-family: Unbounded;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
        transition: color 0.3s ease;
      }

      h4 {
        color: #282929;
        font-family: Unbounded;
        font-size: 20px;
        font-weight: 400;
        line-height: 120%; /* 24px */
        transition: color 0.3s ease;
      }

      p {
        color:  #FFF;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 19.2px */

        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transition: opacity 0.9s ease, max-height 0.5s ease;

        @media (max-width: 1200px) {
          opacity: 1;
          max-height: 100px;
          color:rgba(40, 41, 41, 0.75);
        }
      }

      .divider {
        width: 100%;
        height: 1px;
        background: transparent;
        margin-top: 20px;
        margin-bottom: 20px;
        transition: background 0.5s ease-in-out;
        display: none;
        @media (max-width: 1200px) {
          display: block;
          background: rgba(40, 41, 41, 0.15);
        }
      }

      @media (min-width: 1201px) {
        &:hover {
          background: #48C3A8;
          color: #FFF;

          .icon svg path {
            fill: #D3F5EC;
          }

          h3, h4, p {
            color: #FFF;
          }

          .divider {
            background: rgba(255, 255, 255, 0.25);
            display: block;
          }

          p {
            opacity: 1;
            max-height: 100px;
          }
        }
      }
    }
  }
}
</style>
