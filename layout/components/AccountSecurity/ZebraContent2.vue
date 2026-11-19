<template>
  <section class="section zebra-content">
    <div class="dark-block block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <h2 class="title-main">
              Protect your password
            </h2>
          </div>
          <div class="col">
            <div class="content">
              <p>
                Never enter your password after following a link in an email from an untrusted site. Always go directly to https://www.virturo.com
              </p>
              <p>
                Do not save your password in the browser. If anyone else ever accesses your computer, saved passwords are easily revealed.
              </p>
              <p>Never use the same password on another website and change your password periodically.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="light-block block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <h2 class="title-main">
              Check for viruses and<br> malware
            </h2>
          </div>
          <div class="col">
            <div class="content">
              <p>Install trusted antivirus software on your computer and mobile devices and set them to scan regularly. If a scan detects any suspicious programs or applications, immediately follow instructions to safely remove them.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dark-block block">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <h2 class="title-main">
              Perform regular<br> operating system and<br> browser updates
            </h2>
          </div>
          <div class="col">
            <div class="content">
              <p>
                Updates also may include important security fixes. Make sure you’ve set your computer to update automatically, and if you get a manual notice to update, take care of it right away. If you access your Verturo account on a public computer, take these extra steps:
              </p>
              <ul>
                <li>Always sign out of your account.</li>
                <li>Clear forms, passwords, cache, and cookies from the browser ona regular basis.</li>
              </ul>
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
    padding: 60px 0;

    @media (max-width: 768px) {
        padding: 40px 0;
    }
  }

  .dark-block {
    background-color: #ECECE4;
  }

  .light-block {
    background-color: #fff;
  }

  .wrapper {
    max-width: 1340px;
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
}

.row {
  position: relative;
  display: flex;
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

  &:nth-child(2) {
    display: flex;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    width: 100%;

    &:first-child {
      margin-bottom: 40px;
    }

    &:nth-child(2) {
      justify-content: flex-start;
    }
  }

  .title-main {
    margin-bottom: 24px;
    // max-width: 438px;
    font: 500 40px/112% 'Poppins';
    color: #352F44;

    @media (max-width: 992px) {
        font-size: 28px;
    }

    @media (max-width: 768px) {
      margin-bottom: 0;
      max-width: none;
      font-size: 22px;
      line-height: 140%; /* 30.8px */
    }
  }

  .description {
    font: 16px/150% 'Poppins';
    color: #282929;
    max-width: 440px;

    @media (max-width: 768px) {
      max-width: none;
    }
  }

  .content {
    @media (max-width: 768px) {
      padding-left: 5px;
    }

    h4 {
        margin-bottom: 12px;
        color: #352F44;
        font-family: 'Poppins';
        font-size: 20px;
        font-weight: 500;
        line-height: 140%;
        /* 28px */

        @media (max-width: 768px) {
          margin-bottom: 8px;
        }
    }

    p {
      margin-bottom: 32px;
      color: #352F44;
      font-family: 'Poppins';
      font-size: 16px;
      font-weight: 400;
      line-height: 140%; /* 22.4px */

      @media (max-width: 768px) {
        margin-bottom: 24px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  ul {
    padding-left: 20px;
    display: flex;
    flex-flow: column;
    gap: 16px;
    list-style: none;

    li {
      color: #000;
      font-size: 16px;
      font-family: 'Poppins';
      font-weight: 400;
      line-height: 150%;
      /* 24px */
      position: relative;
      list-style: none;

      @media (max-width: 768px) {
        line-height: 140%; /* 22.4px */
      }

      &::before {
        content: '•';
        display: block;
        width: 4px;
        color: #000;
        font-family: 'Poppins';
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        /* 24px */
        position: absolute;
        left: -15px;
        top: 0;
      }

      a {
        color: #000;
        text-decoration: underline;

        &:hover {
          color: #000;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
