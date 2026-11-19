<template>
  <section class="security">
    <div class="wrapper">
      <h2>Security & Trust at Virturo</h2>
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
                d="M27.8791 14.8267C27.8791 21.3467 23.1458 27.4534 16.6792 29.2401C16.2392 29.3601 15.7591 29.3601 15.3191 29.2401C8.85247 27.4534 4.11914 21.3467 4.11914 14.8267V8.97338C4.11914 7.88005 4.94583 6.64005 5.97249 6.22672L13.3991 3.18676C15.0658 2.50676 16.9458 2.50676 18.6125 3.18676L26.0391 6.22672C27.0525 6.64005 27.8925 7.88005 27.8925 8.97338L27.8791 14.8267Z"
                stroke="#282929"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.0007 16.6668C17.4734 16.6668 18.6673 15.4729 18.6673 14.0002C18.6673 12.5274 17.4734 11.3335 16.0007 11.3335C14.5279 11.3335 13.334 12.5274 13.334 14.0002C13.334 15.4729 14.5279 16.6668 16.0007 16.6668Z"
                stroke="#282929"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 16.667V20.667"
                stroke="#282929"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3>Compliant</h3>
          <p>We follow industry-leading standards to provide a secure and trustworthy investing environment</p>
        </div>
        <div class="feature">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M19 2.6665H12.3333C5.66667 2.6665 3 5.33317 3 11.9998V19.9998C3 26.6665 5.66667 29.3332 12.3333 29.3332"
                stroke="#282929"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.666 13.333V17.333"
                stroke="#282929"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.6667 13.3332H24.3333C20.3333 13.3332 19 11.9998 19 7.99984V2.6665L29.6667 13.3332Z"
                stroke="#282929"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.6801 24.3466C15.5467 24.5733 15.5467 29.1066 18.6801 29.3333H26.0934C26.9867 29.3333 27.8667 28.9999 28.5201 28.3999C30.7201 26.4799 29.5467 22.6399 26.6534 22.2799C25.6134 16.0266 16.5734 18.3999 18.7067 24.3599"
                stroke="#282929"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3>Data-Driven Strategies</h3>
          <p>Our investment models leverage AI and market analytics for smarter decision-making.</p>
        </div>
        <div class="feature">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
            >
              <path
                d="M12.6263 29.3332H20.6263C27.293 29.3332 29.9596 26.6665 29.9596 19.9998V11.9998C29.9596 5.33317 27.293 2.6665 20.6263 2.6665H12.6263C5.95964 2.6665 3.29297 5.33317 3.29297 11.9998V19.9998C3.29297 26.6665 5.95964 29.3332 12.6263 29.3332Z"
                stroke="#282929"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.29297 16.9332L11.293 16.9065C12.293 16.9065 13.413 17.6665 13.7863 18.5998L15.3063 22.4398C15.653 23.3065 16.1996 23.3065 16.5463 22.4398L19.5996 14.6932C19.893 13.9465 20.4396 13.9198 20.813 14.6265L22.1996 17.2532C22.613 18.0398 23.6796 18.6798 24.5596 18.6798H29.973"
                stroke="#282929"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h3>Transparent Operations</h3>
          <p>Real-time reporting and full visibility into fund performance.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.security {
  padding: 128px 0;
  background-color: #FFF;
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
    font-weight: 400;
    line-height: 120%; /* 48px */
    text-align: center;
    @media (max-width: 992px) {
      margin-bottom: 48px;
      font-size: 24px;
    }
  }

  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    @media (max-width: 992px) {
      display: flex;
      flex-flow: row wrap;
    }

    .feature {
      display: flex;
      height: 248px;
      padding: 32px;
      flex-direction: column;
      align-items: flex-start;
      flex: 1 0 0;
      border-radius: 24px;
      border: 1px solid #9BE9D4;
      background: #EEFFFA;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
      @media (max-width: 992px) {
        padding: 24px;
        width: calc(50% - 8px);
        height: auto;
        flex: none;
      }

      @media (max-width: 768px) {
        width: 100%;
      }

      .icon {
        margin-bottom: 51px;
        width: 32px;
        height: 32px;
        @media (max-width: 992px) {
          margin-bottom: 41px;
        }
      }

      h3 {
        margin-bottom: 20px;
        color: #282929;
        font-family: Unbounded;
        font-size: 20px;
        font-weight: 400;
        line-height: 120%; /* 24px */
        @media (max-width: 992px) {
          font-size: 18px;
        }
      }

      p {
        color: rgba(40, 41, 41, 0.75);
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
      }
    }
  }
}
</style>
