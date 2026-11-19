<template>
  <section class="talk">
    <div class="container">
      <div class="inner">
        <div class="talk-wrapper">
          <a
            class="talk-btn"
            @click="openChat"
          >Talk to an Expert</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TalkSection',
  methods: {
    openChat() {
      if (window.HubSpotConversations) {
        window.HubSpotConversations.widget.open();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.talk {
  background-color: #000000;

  .inner {
    padding-bottom: 10px;
  }
}

.talk-wrapper {
  margin: 0 auto;
}

.talk-btn {
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 44px;
  padding: 10px 16px;
  background-color: transparent;
  color: #34FEC8;
  border: 1px solid #34FEC8;
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    color: #000000;
    background-color: #34FEC8;
  }
}

@media (max-width: 768px) {
  .talk {
    .inner {
      padding-top: 30px;
      padding-bottom: 10px;
    }
  }

  .talk-wrapper {
    p {
      text-align: center;
    }
  }
}
</style>
