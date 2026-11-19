<template>
  <section class="section">
    <!-- <Awards /> -->
    <div class="wrapper">
      <div class="main-block">
        <h2 class="title-main">
          Leading with purpose
        </h2>
        <p class="desc">
          Always ahead of the market, we lead with dynamic, multi-asset solutions tailored for both corporate and individual investors. We've got all your investment needs covered.
        </p>
      </div>
      <div class="blocks-wrap">
        <div
          v-for="block in blocks"
          :key="block.id"
          class="block"
          :class="[block.active ? 'active' : 'inactive', `block--${block.id}` ]"
          @click="activeTabFunc(block.id)"
        >
          <div class="content">
            <div class="small-wrap">
              <h3 class="block-title">
                {{ block.title }}
              </h3>
              <p class="block-text">
                {{ block.text }}
              </p>
            </div>
            <ul class="details">
              <li
                v-for="(detail, index) in block.details"
                :key="index"
                class="details__item"
              >
                <img
                  src="@/static/img/home/purpose/dot-item.svg"
                  alt="dot-item"
                >
                {{ detail }}
              </li>
            </ul>
            <nuxt-link
              class="btn btn-login"
              :to="block.link.url"
            >
              {{ block.link.name }}
            </nuxt-link>
          </div>
          <picture
            class="block-image"
          >
            <img
              :src="block.image"
              alt="trade"
            >
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import trade from '@/static/img/home/purpose/trade.png';
import invest from '@/static/img/home/purpose/invest.png';
import Awards from '@/components/HomePage/Awards.vue';

export default {
  components: {
    Awards,
  },
  data() {
    return {
      blocks: [
        {
          id: 1,
          title: 'Trade',
          text: 'Get instant access to a wide range of popular markets, all from a single account. Trade your preferred instruments across Equities, Forex, Indices, and Commodities.',
          active: true,
          details: ['Equities', 'Commodities', 'Forex', 'Indices'],
          link: {
            name: 'Learn more',
            url: '/trading-accounts/',
          },
          image: trade,
        },
        {
          id: 2,
          title: 'Invest',
          text: 'Unlock the potential of stable, long-term growth through expertly managed digital asset portfolios. With Virturo, gain access to a diversified selection of high-potential assets, blockchain innovations, and emerging technologies.',
          active: false,
          details: ['Growth Funds', 'Income Funds', 'Balanced Funds', 'Thematic Funds'],
          link: {
            name: 'Contact us',
            url: '/support/',
          },
          image: invest,
        },
      ],
    };
  },
  methods: {
    activeTabFunc(blockId) {
      if (window.innerWidth < 1024) return;

      this.blocks = this.blocks.map((block) => ({
        ...block,
        active: block.id === blockId,
      }));
    },
    // openChat() {
    //   if (window.HubSpotConversations) {
    //     window.HubSpotConversations.widget.open();
    //   }
    // },
  },
};
</script>

<style scoped lang="scss">
.section {
  padding: 80px 0 40px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #352F44;

  @media (max-width: 1024px) {
    padding: 60px 0 40px;
  }

  @media (max-width: 768px) {
    padding: 80px 0 40px;
  }

  .wrapper {
    max-width: 1340px;
    width: 100%;
    padding: 0 30px;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 0 15px;
    }
  }
}

.main-block {
  max-width: 850px;
  margin: 0 auto 60px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
}

.title-main {
  font: 500 52px/58px 'Poppins', sans-serif;
  letter-spacing: -.1px;
  text-align: center;
  margin-bottom: 25px;
  color: #FFFFFF;

  @media (max-width: 1024px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    text-align: left;
    margin-bottom: 15px;
  }
}

.desc {
  font: 16px/22px 'Poppins', sans-serif;
  color: #FFFFFF;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
}

.blocks-wrap {
  display: flex;
  flex-flow: row nowrap;
  column-gap: 16px;

  @media (max-width: 768px) {
    flex-flow: column;
    align-items: center;
    row-gap: 25px;
  }
}

.block {
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  transition: width .25s ease-out, max-width .25s ease-out;
  min-height: 575px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    min-height: 540px;
  }

  &.active {
    width: 67%;
    max-width: 850px;

    @media (max-width: 1024px) {
      width: calc(50% - 8px);
      max-width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
      max-width: 420px;
    }

    .content {
      @media (max-width: 1440px) {
        max-width: 390px;
      }

      @media (max-width: 1024px) {
        max-width: 100%;
      }
    }
  }

  &.inactive {
    width: 33%;
    max-width: 415px;

    @media (max-width: 1024px) {
      width: calc(50% - 8px);
      max-width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
      max-width: 420px;
    }

    .content {
      @media (max-width: 1440px) {
        flex-basis: 100%;
      }
    }

    .btn {
      opacity: 0;
      visibility: hidden;

      @media (max-width: 1024px) {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &--1 {
    background: #D3F5EC;

    .btn {
      color: #352F44;
      background-color: #48C3A8;

      &:hover {
        color: #48C3A8;
        background-color: #352F44;
      }
    }
  }

  &--2 {
    background: #ECECE4;

    .btn {
      color: #fff;
      background-color: #352F44;

      &:hover {
        color: #352F44;
        background-color: #48C3A8;
      }
    }
  }
}

.content {
  display: flex;
  flex-flow: column;
  flex: 1 0 415px;
  max-width: 415px;
  padding: 50px;
  row-gap: 40px;
  transition: max-width .25s ease-out;

  @media (max-width: 1440px) {
    flex-basis: 390px;
    padding: 40px;
  }

  @media (max-width: 1200px) {
    flex-basis: 330px;
    padding: 30px;
  }

  @media (max-width: 1024px) {
    max-width: 100%;
  }
}

.block-title {
  font: 500 52px/58px 'Poppins', sans-serif;
  letter-spacing: -.1px;
  color: #352F44;
  margin-bottom: 25px;

  @media (max-width: 1024px) {
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 44px;
  }
}

.block-text {
  font: 14px/20px 'Poppins', sans-serif;
  color: #352F44;
}

.details {
  display: flex;
  flex-flow: column;
  row-gap: 15px;
}

.details__item {
  display: inline-flex;
  align-items: center;
  column-gap: 15px;
  list-style-type: none;
  font: 500 14px/20px 'Poppins', sans-serif;
  color: #352F44;
}

.btn {
  width: 100%;
  text-align: center;
  font: 500 14px/20px 'Poppins', sans-serif;
  padding: 15px 30px;
  border-radius: 4px;
  transition: color .25s ease-out, background-color .25s ease-out, opacity .25s ease-out, visibility .25s ease-out;
}

.block-image {
  display: inline-flex;
  justify-content: flex-end;
  flex: 1 0 435px;
  width: auto;
  max-width: 435px;
  overflow: hidden;
  transition: max-width .25s ease-out;

  @media (max-width: 1440px) {
    justify-content: flex-start;
    max-width: 370px;
  }

  @media (max-width: 1200px) {
    width: 50%;
    flex-basis: 50%;
  }

  @media (max-width: 1024px) {
    display: none;
  }

  img {
    width: 415px;
    height: 100%;
    object-fit: contain;

    @media (max-width: 1440px) {
      width: 370px;
    }

    @media (max-width: 1200px) {
      width: 100%;
    }
  }
}

.small-wrap {
  margin-bottom: auto;
}
</style>
