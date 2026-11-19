<template>
  <section class="why-section">
    <div class="wrapper">
      <div class="row-main">
        <h2 class="title">
          Why Virturo?
        </h2>
        <div class="row">
          <div class="col">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.52256L9.23138 7.01316e-06L5.29123 1.6725L7.96019 7.96017L1.6725 5.2912L2.52358e-06 9.23135L6.52256 12L4.91502e-06 14.7687L1.6725 18.7088L7.9602 16.0398L5.29125 22.3275L9.23139 24L12 17.4775L14.7687 24L18.7088 22.3275L16.0399 16.0399L22.3275 18.7088L24 14.7687L17.4775 12L24 9.23135L22.3275 5.2912L16.0399 7.96013L18.7089 1.67249L14.7687 -6.82237e-06L12 6.52256Z"
                  fill="#157275"
                />
              </svg>
              <span>Cutting-Edge Technology</span>
            </h3>
            <p>
              Join a team that embraces technological advancements in online trading. At Virturo, we leverage state-of-the-art tools and platforms to provide our clients with a seamless and cutting-edge trading experience.
            </p>
          </div>
          <div class="col">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.52256L9.23138 7.01316e-06L5.29123 1.6725L7.96019 7.96017L1.6725 5.2912L2.52358e-06 9.23135L6.52256 12L4.91502e-06 14.7687L1.6725 18.7088L7.9602 16.0398L5.29125 22.3275L9.23139 24L12 17.4775L14.7687 24L18.7088 22.3275L16.0399 16.0399L22.3275 18.7088L24 14.7687L17.4775 12L24 9.23135L22.3275 5.2912L16.0399 7.96013L18.7089 1.67249L14.7687 -6.82237e-06L12 6.52256Z"
                  fill="#157275"
                />
              </svg>
              <span>Innovation at Every Step</span>
            </h3>
            <p>
              Be part of a company that values creativity and forward-thinking. Your ideas and innovations matter at Virturo, as we continuously seek new ways to enhance our services and stay ahead in the dynamic world of online trading.
            </p>
          </div>
          <div class="col">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.52256L9.23138 7.01316e-06L5.29123 1.6725L7.96019 7.96017L1.6725 5.2912L2.52358e-06 9.23135L6.52256 12L4.91502e-06 14.7687L1.6725 18.7088L7.9602 16.0398L5.29125 22.3275L9.23139 24L12 17.4775L14.7687 24L18.7088 22.3275L16.0399 16.0399L22.3275 18.7088L24 14.7687L17.4775 12L24 9.23135L22.3275 5.2912L16.0399 7.96013L18.7089 1.67249L14.7687 -6.82237e-06L12 6.52256Z"
                  fill="#157275"
                />
              </svg>
              <span>Collaborative Culture</span>
            </h3>
            <p>
              Our office in London is a hub of collaboration and camaraderie.<br> We believe that a supportive and inclusive work environment is key to unlocking the full potential of our team. Join us and become a valued member of a community that encourages teamwork and mutual success.
            </p>
          </div>
          <div class="col">
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6.52256L9.23138 7.01316e-06L5.29123 1.6725L7.96019 7.96017L1.6725 5.2912L2.52358e-06 9.23135L6.52256 12L4.91502e-06 14.7687L1.6725 18.7088L7.9602 16.0398L5.29125 22.3275L9.23139 24L12 17.4775L14.7687 24L18.7088 22.3275L16.0399 16.0399L22.3275 18.7088L24 14.7687L17.4775 12L24 9.23135L22.3275 5.2912L16.0399 7.96013L18.7089 1.67249L14.7687 -6.82237e-06L12 6.52256Z"
                  fill="#157275"
                />
              </svg>
              <span>Professional Growth</span>
            </h3>
            <p>
              Virturo is committed to the professional development of its employees. We provide ongoing training, mentorship programs, and opportunities for career advancement. Your growth is our priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why-section {
  position: relative;

  .wrapper {
    max-width: 1340px;
    padding: 20px 30px 60px;
    margin: 0 auto;

    @media (max-width: 1400px) {
      padding: 20px 20px 40px;
    }

    @media (max-width: 768px) {
      padding: 0 16px 40px;
    }

    .row-main {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      gap: 0 54px;

      @media (max-width: 1200px) {
        flex-flow: column;
      }

      @media (max-width: 768px) {
        flex-flow: column;
        gap: 0;
      }
    }

    .row {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      gap: 60px;
      max-width: 740px;

      @media (max-width: 992px) {
        flex-flow: row wrap;
        max-width: none;
        // gap: 40px 54px;
      }

      @media (max-width: 768px) {
        flex-flow: column;
        gap: 40px 0;
      }
    }

    .col {
      width: calc(50% - 30px);

      @media (max-width: 992px) {
        width: 40%;
      }

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    .title {
      margin-bottom: 40px;
      // min-width: 418px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 52px;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;
      z-index: 1;

      @media (max-width: 768px) {
        margin-bottom: 24px;
        font-size: 32px;
        line-height: 140%; /* 44.8px */
      }
    }

    h3 {
      margin-bottom: 24px;
      display: flex;
      flex-flow: row;
      align-items: center;
      gap: 16px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 20px;
      font-weight: 500;
      line-height: 140%; /* 28px */
      z-index: 1;
      @media (max-width: 768px) {
        margin-bottom: 20px;
        font-size: 22px;
        line-height: 140%; /* 30.8px */

        svg {
          display: none;
        }
      }
    }

    p {
      max-width: 338px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 22.4px */
      @media (max-width: 768px) {
        max-width: none;
        font-size: 15px;
        line-height: 150%; /* 22.5px */
      }
    }
  }
}
</style>
