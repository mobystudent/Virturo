<template>
  <div class="page-content">
    <Notification />
    <div class="section">
      <div class="section-container">
        <h2 class="title">Let us know how we can help.</h2>
        <div class="contact">
          <ul class="contact-list">
            <li class="contact-item chat" @click="openChat">
              <div class="icon">
                <ChatIcon />
              </div>
              <h4 class="item-title">Chat</h4>
              <p>Start a live chat session</p>
            </li>
            <li class="contact-item phone">
              <div class="icon">
                <PhoneIcon />
              </div>
              <h4 class="item-title">Call</h4>
              <a v-clipboard:copy="telephone" :href="`tel:${telephone}`" @click="showNotification">{{ telephoneformat }}</a>
              <a v-clipboard:copy="telephone2" :href="`tel:${telephone2}`" @click="showNotification">{{ telephone2format }}</a>
            </li>
            <li class="contact-item email">
              <div class="icon">
                <EmailIcon />
              </div>
              <h4 class="item-title">Email</h4>
              <a :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
            </li>
          </ul>
        </div>
      </div>
      <FAQ :links="faqSupportLinks" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ChatIcon from '@/static/img/icons/chat.svg?inline';
import PhoneIcon from '@/static/img/icons/call.svg?inline';
import EmailIcon from '@/static/img/icons/email.svg?inline';
import FAQ from '@/components/common/FAQ/FAQ.vue';
import Notification from '@/components/common/Notification.vue';
import config from '@/project-config';

export default {
  name: 'SupportContent',
  components: { ChatIcon, PhoneIcon, EmailIcon, FAQ, Notification },
  data() {
    return {
      telephone: config.contacts.telephone,
      telephone2: config.contacts.telephone2,
      telephoneformat: config.contacts.telephoneformat,
      telephone2format: config.contacts.telephone2format,
      supportEmail: config.contacts.supportEmail,
      faqSupportLinks: [],
    };
  },
  computed: {
    ...mapGetters({
      links: 'settings/faqsupport',
    }),
  },
  watch: {
    links(val) {
      this.faqSupportLinks = this.links[0] || [];
    },
  },
  created() {
    this.faqSupportLinks = this.links[0] || [];
  },
  beforeDestroy() {
    const hub = document.querySelector('#intercom-container');
    if (hub) {
      hub.style.setProperty('transform', 'translateY(200%)');
      hub.style.setProperty('opacity', '0');
    }
    if (window.Intercom) {
      window.Intercom('hide');
    }
  },
  methods: {
    openChat() {
      const hub = document.querySelector('#intercom-container');
      if (hub) {
        hub.style.setProperty('transform', 'none');
        hub.style.setProperty('opacity', '1');
      }

      setTimeout(() => {
        if (window.Intercom) {
          window.Intercom('show');
        }
      }, 300);
    },
    showNotification() {
      this.$notify({
        group: 'custom-style',
        text: 'Copied',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  position: relative;
  padding-bottom: 16px;
}

.section {
  padding-top: 79px;
}

.section-container {
  max-width: 653px;
}

.title {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  color: $dark-grey;
}

.contact {
  padding-top: 16px;
}

.contact-list {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% / 3);
  border-radius: 8px;
  background-color: $light-gray;
  padding: 20px;
  list-style: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: $light-mint;
  }

  &.chat {
    cursor: pointer;
  }

  p,
  a {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
    color: $dark-grey;
  }
}

.icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid $common-green-transparent;
  background-color: $common-white;
  padding: 8px;
}

.item-title {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
  padding-top: 35px;
  padding-bottom: 8px;
  color: $dark-grey;
}

@media (max-width: 986px) {
  .contact-list {
    flex-direction: column;
  }

  .contact-item {
    width: 100%;
  }
}

@media (max-width: 767px) {
  .page-content {
    max-width: 100%;
  }

  .contact {
    padding-top: 24px;
  }

  .section {
    max-width: 653px;
    padding-top: 24px;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
