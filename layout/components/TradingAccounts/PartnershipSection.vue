<template>
  <section
    id="partnership_section"
    class="partnership"
  >
    <div class="container">
      <div class="inner">
        <div class="partnership-wrapper">
          <div class="column">
            <div class="title">
              Referral Program
            </div>
            <p>
              If you are an existing investor, we encourage you to
              introduce your personal network to our innovative services.
              Existing investors will receive a certain percentage from the
              referral’s initial deposit that will be sent directly to your
              account. Start referring and earn unique rewards.
            </p>
          </div>
          <div class="column">
            <div class="title">
              Trading Partnership
            </div>
            <p>
              Our Introducing Broker (IB) program appoints an account manager to
              help IBs develop their business, with the added benefit of
              applying spread and commission mark-ups to earn additional revenue
              from their client’s trading activity. We take care of the
              administration side so that you can focus on your clients.
            </p>
          </div>
          <div class="column">
            <div class="title">
              Marketing Partnership
            </div>
            <p>
              Our remunerates you for referring clients or leads to join
              our investment services! With each qualified referral, you are
              inclined to receive top commission cuts or revenue shares. We
              offer high-class guidance to referrals and the best commission
              structure to help you achieve revenue expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.partnership {
  background-color: #ffffff;

  .inner {
    padding-bottom: 120px;
  }
}

.partnership-wrapper {
  display: flex;
  margin-left: -20px;

  .column {
    width: calc((100% - 60px) / 3);
    padding: 10px 10px 30px;
    margin-left: 20px;
  }

  .title {
    padding-bottom: 32px;
    color: #000000;
    font-size: 24px;
    font-weight: 600;
  }

  p {
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
  }
}

@media (max-width: 768px) {
  .partnership-wrapper {
    display: block;
    margin-left: 0;

    .column {
      width: 100%;
      margin-left: 0;
    }

    .title {
      padding-bottom: 20px;
    }
  }
}
</style>
