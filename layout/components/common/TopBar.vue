<template>
  <div v-if="!isClosed && topBarText && topBarLinkName && topBarLinkPath" class="top-bar" :style="{ background: backgroundColor }">
    <div class="content">
      <a
        class="link"
        :href="topBarLinkPath"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="text">{{ topBarText }}</span>
        <span class="link-text">{{ topBarLinkName }}</span>
      </a>
      <button class="close-btn" @click="closeTopBar">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 10.59L5.62836 14.9617C5.55058 15.0394 5.45503 15.0811 5.3417 15.0867C5.22836 15.0922 5.12725 15.0506 5.03836 14.9617C4.94947 14.8728 4.90503 14.7744 4.90503 14.6667C4.90503 14.5589 4.94947 14.4606 5.03836 14.3717L9.41003 10L5.03836 5.62833C4.96058 5.55056 4.91892 5.455 4.91336 5.34167C4.90781 5.22833 4.94947 5.12722 5.03836 5.03833C5.12725 4.94944 5.22558 4.905 5.33336 4.905C5.44114 4.905 5.53947 4.94944 5.62836 5.03833L10 9.41L14.3717 5.03833C14.4495 4.96056 14.5453 4.91889 14.6592 4.91333C14.772 4.90778 14.8728 4.94944 14.9617 5.03833C15.0506 5.12722 15.095 5.22556 15.095 5.33333C15.095 5.44111 15.0506 5.53944 14.9617 5.62833L10.59 10L14.9617 14.3717C15.0395 14.4494 15.0811 14.5453 15.0867 14.6592C15.0923 14.7719 15.0506 14.8728 14.9617 14.9617C14.8728 15.0506 14.7745 15.095 14.6667 15.095C14.5589 15.095 14.4606 15.0506 14.3717 14.9617L10 10.59Z" fill="black"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClosed: false,
      // text: "Check out what they wrote about us on Brokers Trade",
      // linkText: "Press here >>",
      // linkUrl: "https://example.com", // Replace with actual URL
      backgroundColor: "#D3F5EC",
      topBarText: "",
      topBarLinkName: "",
      topBarLinkPath: "",
    };
  },
  methods: {
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    },
    closeTopBar() {
      this.isClosed = true;
      if (process.client) {
        document.cookie = "topBarClosed=true; path=/; SameSite=Lax";
      }
    },

    async fetchTopBarData() {
      try {
        const response = await fetch(`${process.env.NUXT_ENV_API_URL}/api/content-settings`);
        if (!response.ok) throw new Error(`Failed to fetch top bar content: ${response.statusText}`);
        
        const data = await response.json();

        data.forEach((item) => {
          switch (item.key) {
            case "topbartext":
              this.topBarText = item.params;
              break;
            case "topbarlinkname":
              this.topBarLinkName = item.params;
              break;
            case "topbarlinkpath":
              this.topBarLinkPath = item.params;
              break;
          }
        });

      } catch (error) {
        console.error("Error loading top bar data:", error);
      }
    },
  },
  async created() {
    if (process.client && this.getCookie("topBarClosed") === "true") {
      this.isClosed = true;
      return;
    }

    await this.fetchTopBarData();
  },
};
</script>

<style scoped lang="scss">
.top-bar {
  display: flex;
  padding: 8px 50px;
  justify-content: center;
  align-items: center;
  background: #D3F5EC;
  position: relative;
  z-index: 120;

  @media (max-width: 992px) {
    padding: 8px 16px;
    padding-right: 44px;
    justify-content: flex-start;
  }
}

.content  {
  display: flex;
  justify-content: center;
}

.text {
  margin-right: 16px;
  color: #352F44;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  @media (max-width: 992px) {
    margin-right: 6px;
    font-size: 12px;
    line-height: 18px; /* 150% */
  }
}

.link-text {
  color: #352F44;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: underline;
  @media (max-width: 992px) {
    font-size: 12px;
    line-height: 18px; /* 150% */
  }
}

.close-btn {
  background: none;
  border: none;
  color: #352F44;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
