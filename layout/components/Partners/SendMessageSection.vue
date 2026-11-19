<template>
  <section
    id="send_message_section"
    class="send-message"
  >
    <div class="wrapper">
      <div class="row">
        <div class="col">
          <h2 class="title">
            Join referral program today
          </h2>
        </div>
        <div class="col">
          <div class="form-block">
            <Form1 />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Form1 from './Form1.vue';

export default {
  name: 'SendMessage',
  components: { Form1 },
};
</script>

<style lang="scss" scoped>
.send-message {
  background-color: #ECECE4;
  position: relative;
}

.wrapper {
    margin: 0 auto;
    max-width: 1340px;
    padding: 60px 30px;
    // display: flex;
    // justify-content: flex-end;
}

.row {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  gap: 40px;
  width: 100%;

  @media (max-width: 992px) {
    flex-flow: column;
  }

  .col:nth-child(1) {
    width: 100%;
    max-width: 416px;
  }
  .col:nth-child(2) {
    width: 100%;
    max-width: 740px;

    @media (max-width: 992px) {
      max-width: none;
    }
  }
}

.title {
  padding-bottom: 40px;
  color: #352F44;
  font-family: 'Poppins';
  font-size: 52px;
  font-style: normal;
  font-weight: 500;
  line-height: 112%; /* 58.24px */
  letter-spacing: -0.52px;
}

p {
  color: #000000;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
}

.wrapper {
  display: flex;
}

.form-block {
  margin-right: 20px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.img {
  flex: 0 0 50%;
  text-align: center;
  margin-top: 50px;

  img {
    max-width: 100%;
  }
}

@media (max-width: 1370px) {
  // .send-message {
  //   .inner {
  //     padding-left: 109px;
  //   }
  // }
}

@media (max-width: 1024px) {
  // .send-message {
  //   .inner {
  //     padding-right: 109px;
  //   }
  // }

  .wrapper {
    flex-direction: column;
    padding-top: 40px;
  }

  .form-block {
    width: 100%;
  }
}

@media (max-width: 992px) {
  .title {
    padding-bottom: 0;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }

  .wrapper {
    padding: 40px 15px;
  }

  .title {
    padding-bottom: 0;
    font-size: 22px;
    line-height: 140%; /* 30.8px */
  }

  .form {
    padding-top: 0;
  }
}
</style>
