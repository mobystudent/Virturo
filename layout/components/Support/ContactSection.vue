<template>
  <section class="section">
    <div class="wrapper">
      <div
        v-for="(block, index) in blocks"
        :key="index"
        class="block"
      >
        <header
          class="block-header"
        >
          <picture class="block-icon">
            <img
              :src="block.icon"
              :alt="block.title"
            >
          </picture>
          <h5 class="block-title">
            {{ block.title }}
          </h5>
        </header>
        <p
          class="block-text"
          v-html="block.text"
        />
        <div v-if="Array.isArray(block.link)" class="block-links">
          <a
            v-for="(link, i) in block.link"
            :key="i"
            class="block-link"
            :href="link.url"
            target="_blank"
          >
            {{ link.name }}
          </a>
        </div>
        <div v-else>
          <a
            v-if="block.link.url"
            class="block-link"
            :href="block.link.url"
          >
            {{ block.link.name }}
          </a>
          <button
            v-else
            class="block-link"
            type="button"
            @click="openChat"
          >
            {{ block.link.name }}
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import emailIcon from '@/static/img/support/email.svg';
import chatIcon from '@/static/img/support/chat.svg';
import phoneIcon from '@/static/img/support/phone.svg';

export default {
  data() {
    return {
      blocks: [
        {
          icon: emailIcon,
          title: 'Email',
          text: 'Have questions? <br/> Reach out via email for dedicated support.',
          link: {
            name: 'support@virturo.com',
            url: 'mailto:support@virturo.com',
          },
        },
        {
          icon: chatIcon,
          title: 'Live chat',
          text: 'Real-time assistance just a click away. <br/> Chat with us now for support!',
          link: {
            name: 'Start live chat',
            chat: true,
          },
        },
        {
          icon: phoneIcon,
          title: 'Phone',
          text: 'Need immediate assistance? <br/> We\'re standing by to assist you!',
          link:[
            {
              name: '+44 20 3910 0856',
              url: 'tel:+442039100856',
            },
            {
              name: '+61 8711 83146',
              url: 'tel:+61871183146',
            },
          ],
        },
      ],
    };
  },
  methods: {
    openChat() {
      if (window.Intercom) {
        window.Intercom('show');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 60px 0;
  background: #D3F5EC;
}

.wrapper {
  margin: 0 auto;
  max-width: 1340px;
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (max-width: 1024px) {
    flex-flow: wrap;
    padding: 0 15px;
  }
}

.block {
  display: flex;
  flex-flow: column;
  row-gap: 25px;
  height: 250px;
  width: calc(50% - 15px);
  max-width: 415px;
  padding: 30px;
  background: #fff;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 450px;
  }
}

.block-header {
  display: flex;
  align-items: center;
  column-gap: 15px;
}

.block-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
}

.block-title {
  font: 500 24px/32px 'Poppins', sans-serif;
  color: #352F44;
}

.block-text {
  font: 16px/22px 'Poppins', sans-serif;
  color: #352F44;
  margin-bottom: auto;
}

.block-links {
  display: flex;
  flex-flow: column;
}

.block-link {
  display: inline-flex;
  font: 20px/28px 'Poppins', sans-serif;
  color: #157275;
  background: none;
  text-decoration-line: underline;
  text-decoration-color: #157275;
  transition: text-decoration-color .25s ease-in, color .25s ease-in;
  cursor: pointer;

  &:hover {
    color: #D3F5EC;
    text-decoration-color: transparent;
  }
}
</style>
