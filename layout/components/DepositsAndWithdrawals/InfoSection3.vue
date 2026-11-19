<template>
  <section class="informed">
    <div class="wrapper">
      <div class="intro">
        <h2 class="title">
          Your security is our top priority
        </h2>
        <div class="description">
          <p>
            Virturo is dedicated to ensuring that every financial transaction, whether a deposit or withdrawal, is conducted within the most secure environment possible. Should you have any questions or require further assistance, our support team is here to help, backed by the latest in security protocols to protect your information and investments.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.informed {
  position: relative;
  background-color: #D3F5EC;
  padding: 60px 0;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 108px;
    width: 416px;
    height: 416px;
    transform: translateY(-50%);
    margin-top: 7px;
    background: url('@/static/img/deposits-and-withdrawals/shield-checkmark.png') center/cover no-repeat;
  }

  .wrapper {
    max-width: 1340px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .intro {
    width: 50%;
    max-width: 632px;
  }

  .title {
    color: #352F44;
    font-family: 'Poppins';
    font-size: 40px;
    font-weight: 500;
    line-height: 112%; /* 44.8px */
    margin-bottom: 32px;
  }

  .description {
    color: #352F44;
    font-family: 'Poppins';
    font-size: 16px;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
  }
}

@media (max-width: 992px) {
  .informed {
    &:after {
      width: 320px;
      height: 320px;
      margin-top: 0;
    }

    .title {
      font-size: 32px;
      line-height: 140%; /* 44.8px */
      margin-bottom: 20px;
    }

    .intro {
      width: 100%;
      max-width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .informed {
    padding: 40px 0 60px;

    &:after {
      top: -96px;
      left: -63px;
      right: auto;
      transform: none;
    }

    .wrapper {
      padding: 0 16px;
    }
  }
}
</style>
