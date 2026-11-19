<template>
  <section
    id="financial-assessment-banner"
    class="assessment"
  >
    <div class="wrapper">
      <div class="content">
        <div class="text">
          <h2>Take Our Financial Assessment</h2>
          <p>Answer a few quick questions to receive a personalized investment recommendation based on your goals</p>
          <button
            class="start-btn"
            @click="openTypeform"
          >
            Start the Assessment Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.0254 4.94165L17.0837 9.99998L12.0254 15.0583"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.91602 10H16.941"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div
            class="hide-form"
            style="display: none"
          >
            <div data-tf-live="01JM9JWK75PJ7FGC4N0ZRZZW36" />
          </div>
        </div>
        <div class="image">
          <img
            src="@/static/img/invest/sphere.png"
            alt="Assessment illustration"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      typeformPopup: null,
    };
  },
  mounted() {
    this.loadTypeformScript();
  },
  methods: {
    loadTypeformScript() {
      if (window.tf) {
        this.initTypeform();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://embed.typeform.com/next/embed.js';
      script.async = true;
      script.onload = this.initTypeform;
      document.body.appendChild(script);
    },

    initTypeform() {
      if (window.tf) {
        this.typeformPopup = window.tf.createPopup('https://form.typeform.com/to/NbbbjaQz', {
          mode: 'popup',
          autoClose: false,
          hideHeaders: true,
          hideFooter: true,
        });
        console.log('Typeform popup initialized');
      } else {
        console.error('Typeform failed to initialize');
      }
    },

    openTypeform() {
      if (this.typeformPopup) {
        this.typeformPopup.open();
      } else {
        console.warn('Typeform is not ready yet. Retrying in 500ms...');
        setTimeout(() => this.openTypeform(), 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.assessment {
  padding: 128px 0;
  background: #EDF4F2;
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

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;

    padding: 48px;
    border-radius: 14px 48px 14px 14px;
    border: 1px solid #48C3A8;
    background: linear-gradient(96deg, #FCFCFC 44.86%, #ECECEC 107.64%);
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
    @media (max-width: 992px) {
      padding: 24px;
      display: flex;
      flex-flow: column;
      gap: 64px;
    }

    .text {
      h2 {
        margin-bottom: 16px;
        color: #282929;
        font-family: Unbounded;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 48px */
        @media (max-width: 992px) {
          font-size: 24px;
        }
      }

      p {
        margin-bottom: 106px;
        color: rgba(40, 41, 41, 0.75);
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%; /* 19.2px */
        @media (max-width: 992px) {
          margin-bottom: 20px;
        }
      }

      .start-btn {
        display: flex;
        height: 48px;
        padding: 10px 24px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid #282929;
        background: #157275;
        color: #FFF;
        font-family: Unbounded;
        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
        text-align: center;
        cursor: pointer;
        @media (max-width: 992px) {
          width: 100%;
        }

        @media (max-width: 400px) {
          padding: 10px 12px;
        }

        svg {
          width: 0;
          height: 20px;
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 1s linear, width 0.5s ease, transform 0.5s ease;
          margin-left: 0;
        }

        &:hover svg {
          width: 20px;
          opacity: 1;
          transform: translateX(0);
          margin-left: 10px;
        }
      }
    }

    .image {
      display: flex;
      justify-content: center;
    }

    .image img {
      width: 100%;
      max-width: 246px;
      max-height: 240px;
    }
  }
}
</style>
