<template>
  <section class="section open-account-section">
    <div class="wrapper">
      <div class="content">
        <h2>Open An Account Now</h2>
        <p>Enjoy Trustworthy Guidance, Dedicated Support And Ease Of Use</p>
        <div>
          <a
            :href="signUpLink"
            class="button button--signup"
          >
            Sign up
          </a>
          <a
            :href="loginLink"
            class="button button--login"
          >
            Log In
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      signUpLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/sign-up/`,
      loginLink: `${process.env.NUXT_ENV_TRADE_URL || '#'}/login/`,
    };
  },
};
</script>

<style scoped lang="scss">
.button {
  font-family: "Poppins", Sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  fill: #0E0523;
  color: #0E0523;
  background-color: #FFFFFF;
  border-radius: 31px 31px 31px 31px;
  padding: 12px 34px 12px 34px;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;

  &--login {
    background-color: #61CE7000;
    color: #FFFFFF;
    margin-left: 10px;

    &:hover {
      color: #F4503E;
      background-color: #0E0523;
      border: 1px solid #F4503E;
    }
  }

  &--signup {
    margin-right: 10px;

    &:hover {
      background-color: #F4503E;
    }
  }
}

.open-account-section {
  padding: 100px 0px 100px 0px;

  .content {
    width: 53%;
    margin: 0 auto;
    text-align: center;
  }

  h2 {
    color: #FFFFFF;
    font-size: 36px;
    font-weight: 800;
    text-transform: capitalize;
  }

  p {
    color: #FFFFFF;
    font-size: 28px;
    font-weight: 300;
    text-transform: capitalize;
    line-height: 36px;
    letter-spacing: 1.5px;
    padding: 10px;
    margin-bottom: 45px;
  }
}

@media (max-width: 768px) {
  .open-account-section {
    padding: 30px 0px 30px 0px;

    .content {
      width: 100%;

      h2 {
        font-size: 30px;
      }

      p {
        font-size: 20px;
      }
    }
  }
}
</style>
