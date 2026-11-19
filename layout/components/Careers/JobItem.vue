<template>
  <section class="job-item">
    <section class="top">
      <div class="top-inner">
        <div class="row">
          <div class="col">
            <h1 class="title">
              <slot name="title" />
            </h1>
          </div>
          <div class="col">
            <div class="details">
              <p><slot name="details" /></p>
              <!-- <div class="category">
                <span>
                  <slot name="category" />
                </span>
              </div> -->
              <!-- <span>|</span> -->
              <!-- <div class="place">
                <span>
                  <slot name="place" />
                </span>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="content">
        <div class="description">
          <slot name="description" />
        </div>
      </div>
    </div>
    <div class="apply-form">
      <div class="container">
        <div class="form-container">
          <ApplyForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ApplyForm from '@/components/Careers/ApplyForm.vue';

export default {
  name: 'JobItem',
  components: { ApplyForm },
};

</script>

<style lang="scss" scoped>
// Top
.top {
  background-color: #D3F5EC;
  position: relative;

  .top-inner {
    max-width: 1340px;
    padding: 100px 30px;
    // box-sizing: content-box;
    margin: 0 auto;

    .row {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
    }

    .col {
      max-width: 540px;
    }

    h1 {
      color: #352F44;
      font-family: 'Poppins';
      font-size: 52px;
      font-style: normal;
      font-weight: 500;
      line-height: 112%; /* 58.24px */
      letter-spacing: -0.52px;
      z-index: 1;
    }

    p {
      max-width: 524px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }
  }

  .title {
    font-weight: 500;
    font-size: 52px;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    color: #ffffff;
  }
}

@media (max-width: 1400px) {
  .top .top-inner {
    padding: 80px 20px;
  }
}

@media (max-width: 1024px) {
  .top {
    background-position: center;

    .top-inner h1,
    .title {
      font-size: 32px;
      line-height: 140%; /* 44.8px */
      margin-bottom: 40px;
    }
  }
}

@media (max-width: 998px) {
  .top .top-inner .row {
    flex-flow: column;
    // padding: 0 20px;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {

  .top {
    .top-inner {
      padding: 60px 16px 60px;

      h1 {
        margin-bottom: 40px;
        font-size: 32px;
        line-height: 140%; /* 44.8px */
      }
    }
  }

  .top .top-inner .row {
    padding: 0;
  }
}

// Job
.job-item {
  background-color: #FFFFFF;
}

.container {
  margin: 0 auto;
  padding: 60px 30px;
  display: flex;
  flex-flow: column;
  max-width: 1340px;
}

.content {
  // padding-bottom: 40px;

  .row {
    display: flex;
    flex-flow: row;
    justify-content: space-between;

    @media (max-width: 1200px) {
      flex-flow: column;
    }

    .col:nth-child(1) {
      width: 100%;
      max-width: 416px;
      @media (max-width: 768px) {
        max-width: none;
      }
    }
    .col:nth-child(2) {
      max-width: 735px;
      @media (max-width: 768px) {
        max-width: none;
      }
    }
  }

  h3 {
    margin-bottom: 24px;
    color: #352F44;
    font-family: 'Poppins';
    font-size: 52px;
    font-weight: 500;
    line-height: 112%; /* 58.24px */
    letter-spacing: -0.52px;
    @media (max-width: 992px) {
      font-size: 38px;
    }

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 140%; /* 44.8px */
    }
  }

  h4 {
    margin-bottom: 24px;
    color: #352F44;
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 500;
    line-height: 132%; /* 31.68px */
    @media (max-width: 768px) {
      margin-bottom: 20px;
      font-size: 22px;
      line-height: 140%; /* 30.8px */
    }
  }

  p {
    font-size: 16px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    color: #352F44;
    margin-bottom: 40px;
    @media (max-width: 768px) {
      font-size: 15px;
      line-height: 150%; /* 22.5px */
    }
  }

  ul {
    margin-bottom: 40px;
    padding-left: 30px;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      font-size: 16px;
      line-height: 1.4;
      color: #000000;
      display: block;
      font-weight: 700;
    }

    li {
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 16px;
      font-family: 'Poppins';
      font-weight: 400;
      line-height: 140%; /* 22.4px */
      color: #352F44;
      list-style: disc;
      list-style-position: outside;
      @media (max-width: 768px) {
        font-size: 15px;
        line-height: 150%; /* 22.5px */
      }
    }
  }

  .details {
    display: flex;
    margin-bottom: 42px;

    .place {
      display: flex;
      align-items: center;
      margin-right: 40px;
    }

    .time {
      display: flex;
      align-items: center;
    }

    .icon {
      margin-right: 4px;
    }

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.4;
      color: #000000;
    }
  }
}

ul.hide-dots-list li {
  list-style: none;
}

@media (max-width: 768px) {
  .job-item .container {
    padding: 40px 16px;
    flex-wrap: wrap;

    .content {
      width: 100%;
    }

    .form-container {
      width: 100%;
    }
  }

  .job-item .apply-form .container {
    padding: 40px 16px 80px;
  }
}

.apply-form {
  background-color: #ECECE4;
}
</style>
