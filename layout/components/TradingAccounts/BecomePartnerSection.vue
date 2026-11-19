<template>
  <section
    id="partner_section"
    class="partner"
  >
    <div class="container">
      <div class="inner">
        <div class="become-partner">
          <h2 class="title">
            Become a partner
          </h2>
          <p>
            Join  Partner Program for mutual growth and global network access. Benefit from marketing,
            referrals, and trading opportunities. Create value through CPA, CPL, or Revenue Sharing deals. Earn rewards
            through client referrals and provide a full-scale service without starting from scratch.
          </p>
          <nuxt-link
            to="/partners/"
            class="partner-btn"
          >
            Explore Partner Program
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.partner {
  background-color: #ffffff;
  padding: 120px 0 80px;
}

.become-partner {
  flex: 0 0 50%;
  margin-right: 20px;

  .title {
    color: #000000;
    font-size: 48px;
    font-weight: 700;
    padding-bottom: 40px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    line-height: 1.6;
    padding-bottom: 40px;
    max-width: 470px;
  }
}

.partner-btn {
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 44px;
  padding: 11px 36px;
  background-color: #34FEC8;
  color: #000000;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
}

@media (max-width: 768px) {
  .partner {
    .inner {
      flex-direction: column;
    }
  }

  .become-partner {
    margin-right: 0;
    margin-top: 20px;
    order: 2;

    .title {
      text-align: center;
      font-size: 31px;
    }
  }

  .partner-btn {
    margin: 0 auto;
  }
}
</style>
