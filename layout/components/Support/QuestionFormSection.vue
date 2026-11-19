<template>
  <section class="section">
    <div class="wrapper">
      <div class="left-block">
        <h2 class="title">
          Still have questions?
        </h2>
        <p class="desc">
          For further information, please fill in the form below. We will contact you as soon as possible.
        </p>
      </div>
      <div class="form-block">
        <FormComponent />
      </div>
    </div>
  </section>
</template>

<script>
import FormComponent from './FormComponent.vue';

export default {
  name: 'SendMessage',
  components: { FormComponent },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 60px 0;
  background-color: #ECECE4;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
}

.wrapper {
  margin: 0 auto;
  max-width: 1340px;
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  gap: 40px 15px;

  @media (max-width: 1024px) {
    flex-flow: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 0 15px;
  }
}

.left-block {
  display: flex;
  flex-flow: column;
  flex: 1 1 415px;
  max-width: 415px;
  row-gap: 30px;

  @media (max-width: 1024px) {
    flex: 1 1 100%;
    max-width: 740px;
  }
}

.title {
  font: 500 52px/58px 'Poppins', sans-serif;
  letter-spacing: -1%;
  color: #352F44;

  @media (max-width: 1024px) {
    font-size: 38px;
    line-height: 46px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 30px;
  }
}

.desc {
  font: 16px/22px 'Poppins', sans-serif;
  color: #352F44;

  @media (max-width: 768px) {
    font-size: 15px;
  }
}

.form-block {
  flex: 1 1 740px;
  max-width: 740px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-basis: auto;
  }
}
</style>
