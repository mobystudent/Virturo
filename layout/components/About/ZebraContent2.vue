<template>
  <section class="section zebra-content">
    <div class="wrapper">
      <h2 class="title-main">
        Ensuring asset protection is our top priority
      </h2>
    </div>
    <div class="light-block block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <div class="content">
              <h4>Setting the standard for excellence in investment management.</h4>
              <p>
                At Virturo, we are committed to creating lasting value by blending traditional investment wisdom with cutting-edge strategies. Our goal is to deliver exceptional performance while fostering growth for our clients.<br>
                With a strong foundation in domestic wealth management, Virturo is now taking its expertise to a global stage, providing clients worldwide with premier access to international markets. As a hedge fund from the very beginning, we specialize in offering professional, adaptive, and carefully managed investment strategies.<br>
                Headquartered in London’s financial hub, Virturo serves as a reliable guide for investors, delivering timely insights across a wide range of financial sectors. Managing over £1.7 billion in assets, we provide in-depth analysis and strategic advice, empowering clients whether they prefer self-directed or fully managed portfolios.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="box-img">
              <img
                class="img"
                src="@/static/img/company/top-priority-img-1.png"
                alt="Trading Assets"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="light-block block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <div class="box-img">
              <img
                class="img"
                src="@/static/img/company/top-priority-img-2.png"
                alt="Trading Assets"
              >
            </div>
          </div>
          <div class="col">
            <div class="content">
              <h4>You are at the heart of everything we do.</h4>
              <p>
                At Virturo, we blend traditional investment expertise with innovative strategies to deliver exceptional performance and foster growth for our clients.<br>
                With a strong foundation in wealth management, we’ve expanded globally, providing exclusive access to international markets. As a hedge fund from the start, our approach is dynamic, professional, and carefully managed.<br>
                Headquartered in London’s financial district, Virturo offers real-time insights across multiple sectors. Managing over £1.7 billion in assets, we provide tailored advice for both self-directed and fully managed portfolios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.zebra-content {

    .block {
        padding: 0 0 75px;
    }

    .light-block {
        @media (max-width: 768px) {
            padding-bottom: 58px;
        }

        .row {
            @media (max-width: 768px) {
                flex-flow: column-reverse;

                .box-img {
                    margin-top: 40px;
                }

                .col:nth-child(1) {
                    justify-content: center;
                }
            }
        }

        &:nth-child(2) {
          @media (max-width: 768px) {
            padding-bottom: 54px;
          }
            .row {
                @media (max-width: 768px) {
                    flex-flow: column;

                    .box-img {
                        margin-top: 40px;
                    }

                    .col:nth-child(2) {
                        justify-content: center;
                    }
                }
            }
        }

        &:nth-child(3) {
          @media (max-width: 768px) {
            padding-bottom: 158px;

            .content {
              margin-top: 0;

              h4 {
                margin-top: 0;
              }
            }
          }
        }

    }

    .box-img {
        display: flex;
        height: 480px;

        @media (max-width: 992px) {
            align-items: flex-start;
        }

        @media (max-width: 768px) {
            height: auto;
        }

        img {
            width: 100%;
            max-width: 632px;
            border-radius: 20px;
        }
    }

    .wrapper {
        max-width: 1280px;
        box-sizing: border-box;
        padding: 0 30px;
        margin: 0 auto;
        position: relative;
        z-index: 1;

        @media (max-width: 768px) {
            padding: 0 15px;
        }
    }
}

.wrapper {
    display: flex;
    flex-flow: wrap;

    .title-main {
        margin-top: 60px;
        margin-bottom: 58px;
        width: 100%;
        // max-width: 740px;
        font: 500 52px/58px 'Poppins';
        line-height: 112%; /* 58.24px */
        letter-spacing: -0.52px;
        color: #352F44;

        @media (max-width: 992px) {
            margin-top: 40px;
            font-size: 38px;
        }

        @media (max-width: 768px) {
            margin-bottom: 24px;
            max-width: none;
            font-size: 32px;
            line-height: 140%; /* 44.8px */
        }
    }

    .img {
        @media (max-width: 768px) {
            max-width: 320px;
            width: 100%;
        }
    }
}

.row {
    position: relative;
    display: flex;
    align-content: flex-end;
    width: 100%;

    @media (max-width: 992px) {
        gap: 15px;
    }

    @media (max-width: 768px) {
        flex-flow: column;
        gap: 0;
    }
}

.col {
    width: 50%;
    display: flex;

    &:nth-child(2) {
        justify-content: flex-end;

        .content {
          margin-top: 40px;
        }
    }

    @media (max-width: 768px) {
        width: 100%;

    }

    .content {
        // max-width: 524px;
        max-width: 509px;

        @media (max-width: 768px) {
            // padding-left: 5px;
            max-width: none;
        }

        h4 {
          margin-top: 16px;
            margin-bottom: 32px;
            color: #352F44;
            font-family: 'Poppins';
            font-size: 24px;
            font-weight: 500;
            line-height: 132%; /* 31.68px */

            @media (max-width: 768px) {
                margin-bottom: 14px;
                font-size: 22px;
                line-height: 140%; /* 30.8px */
                // padding-left: 50px;
                position: relative;
            }
        }

        p {
            margin-bottom: 24px;
            color: #352F44;
            font-family: 'Poppins';
            font-size: 16px;
            font-weight: 400;
            line-height: 140%; /* 22.4px */

            /* 24px */
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}

@media (max-width: 1200px) {}

@media (max-width: 992px) {}

@media (max-width: 768px) {}
</style>
