<template>
    <div class="awards-block">
        <div class="wrapper">
            <div class="awards">
                <div
                    v-for="award in awards"
                    :key="award.id"
                    class="award_item"
                >
                    <img
                    src="@/static/img/home/hero/award.svg"
                    alt="award"
                    >
                    <div>
                    <h5 class="award-title">
                        {{ award.title }}
                    </h5>
                    <p class="award-desc">
                        {{ award.desc }}
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      loginLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/login/`, // /login
      accountLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up/`, // /sign-up
      awards: [
        {
          id: 1,
          title: 'Best Trading Platform',
          desc: 'FinTech Breakthrough 2024',
        },
        {
          id: 2,
          title: 'Best Derivatives trading',
          desc: 'HFM European Technology 2020',
        },
        {
          id: 3,
          title: 'Best Finance App',
          desc: 'Red Dot design 2022',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.awards-block {
    padding-top: 25px;
    padding-bottom: 40px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #352F44;

    @media (max-width: 768px) {
        display: none;
    }
}

.wrapper {
    position: relative;
    padding: 0 30px;
    margin: 0 auto;
    max-width: 1340px;
    z-index: 1;

    @media (max-width: 1200px) {
        padding: 0 20px;
    }

    @media (max-width: 768px) {
        padding: 0 16px;
    }
}

.awards {
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 30px;
  width: 100%;
  max-width: 1005px;
  z-index: 1;

  @media (max-width: 1440px) {
    justify-content: space-evenly;
  }

  @media (max-width: 1200px) {
    flex-flow: wrap;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    flex-flow: column;
  }
}

.award_item {
  display: flex;
  flex-flow: column;
  align-items: center;
  column-gap: 15px;
  max-width: 315px;
  width: 100%;

  @media (max-width: 1440px) {
    width: auto;
  }

  img {
    margin-bottom: 16px;
    width: 44px;
    height: 35px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-flow: column;
    height: 100%;
  }
}

.award-title {
  font: 600 16px/22px 'Poppins', sans-serif;
  color: #fff;
  text-transform: uppercase;
}

.award-desc {
  font: 400 14px/20px 'Poppins', sans-serif;
  color: #D4D4D4;
  text-align: center;
}
</style>
