<template>
  <div class="main-wrapper glossary-wrapper">
    <div class="wrapper">
      <div class="heading">
        <h2>Get to know the Financial dictionary</h2>
        <p>
          Improve your trading knowledge! Serving as an educational tool, our dictionary is constantly updated with definitions of the most popular and commonly used terms in the financial industry
        </p>
      </div>
      <div class="main">
        <div class="switcher">
          <div
            v-for="letter in letters"
            :key="letter"
            class="letter"
            :class="{ selected: letter === activeLetter }"
            @click="handleClick(letter)"
          >
            {{ letter }}
          </div>
        </div>
        <div class="content">
          <div class="content-list">
            <ContentBox
              v-for="(item, idx) in activeList"
              :key="idx"
              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { glossary } from './glossary';
import ContentBox from './ContentBox.vue';

export default {
  components: { ContentBox },
  data() {
    return {
      letters: [],
      activeLetter: '',
      activeList: [],
    };
  },
  created() {
    // Choose the default letter here (e.g., the first letter in the glossary)
    const defaultLetter = Object.keys(glossary)[0];

    this.activeLetter = defaultLetter;

    this.activeList = glossary[defaultLetter] || [];

    this.letters = Object.keys(glossary).filter(
      (letter) => Array.isArray(glossary[letter]) && glossary[letter].length > 0,
    );
  },
  methods: {
    handleClick(letter) {
      this.activeLetter = letter;
      this.activeList = glossary[letter] || [];
    },
  },
};
</script>
<style lang="scss" scoped>
.main-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.glossary-wrapper .wrapper {
  position: relative;
  padding: 0 30px;
  margin: 0 auto;
}

.wrapper {
  max-width: 1340px;
  width: 100%;
}

.heading {
  margin: 60px 0;
  // max-width: 540px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: 'Poppins';

  h2 {
    width: 50%;
    max-width: 524px;
    color: #352F44;
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    // margin-bottom: 24px;
  }

  p {
    padding-top: 4px;
    width: 50%;
    max-width: 524px;
    color: #352F44;
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
}

.main {
  .switcher {
    margin-bottom: 38px;
    display: flex;
    width: 100%;
    gap: 5px;

    .letter {
      color: #352F44;
      padding: 11px 9px;
      // 23 is number of active letters
      width: calc(100% / 23);
      font-family: 'Poppins';
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      cursor: pointer;
      background-color: #ECECE4;
      border: 1px solid #ECECE4;
    }

    .selected {
      border-color: #352F44;
      background-color: #352F44;
      color: #FFFFFF;
    }
  }

  .content {
    padding-bottom: 60px;

    .letter-header {
      padding: 22px 0px;
      font-size: 30px;
      font-weight: 400;
      color: #000000;
      border-bottom: 1px solid #000000;

    }

    .content-list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-between;
      gap: 44px 86px;
    }
  }
}

@media (max-width: 992px) {
  .glossary-wrapper .wrapper {
    padding-right: 0;
    padding-left: 16px;

    &:before {
      width: calc(100% - 32px);
      left: 16px;
    }
  }

  .glossary-wrapper {
    margin: 0;
  }

  .wrapper {

    .heading {
      margin: 0;
      padding-top: 0;
      padding-right: 16px;
      max-width: 100%;
      flex-flow: column;

      h2 {
        margin-bottom: 24px;
        width: 100%;
        font-size: 32px;
        line-height: 140%; /* 44.8px */
      }

      p {
        margin-bottom: 40px;
        padding-top: 0;
        width: 100%;
        font-size: 15px;
        line-height: 150%; /* 22.5px */
      }
    }

    .learn-slider-section .heading {
      padding-right: 30px;
      max-width: auto;
    }

    .main {
      .switcher {
        margin-bottom: 40px;
        padding-right: 16px;
        flex-wrap: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;

        .letter {
          flex: 0 0 auto;
          padding: 8px 9px;
          min-width: 48px;
        }
      }

      .content {
        padding-right: 16px;
        padding-bottom: 40px;
      }
    }
  }

  .content-box {
    flex: 1 1 50%;
    max-width: calc(50% - 60px);
    padding: 0;
  }

  .main .content .content-list {
    gap: 40px 60px;
  }
}

@media (max-width: 768px) {
  .learn-slider-section .heading {
    padding-right: 0;
  }

  .wrapper .heading h2 {
    line-height: 120%;
    /* 38.4px */
  }

  .content-box {
    flex: 1 1 100%;
    max-width: 100%;
  }

  .main .content .content-list {
    gap: 40px 0;
  }
}
</style>
