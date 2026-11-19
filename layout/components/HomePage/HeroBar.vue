<template>
  <div v-if="linkText && linkUrl" class="link-container">
    <a :href="linkUrl" class="flickering-link" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        class="flickering-dot"
      >
        <circle cx="3" cy="3" r="3" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="3" y1="0" x2="3" y2="6" gradientUnits="userSpaceOnUse">
            <stop stop-color="#D3F5EC" />
            <stop offset="1" stop-color="#48C3A8" />
          </linearGradient>
        </defs>
      </svg>

      {{ linkText }}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        class="arrow-svg"
      >
        <path d="M8.33332 5L7.15833 6.175L10.975 10L7.15833 13.825L8.33332 15L13.3333 10L8.33332 5Z" fill="#F4FFFC" />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ClickableLink',
  data() {
    return {
      linkText: "Our latest article on Yahoo Finance",
      linkUrl: "#",
    };
  },
  async created() {
    await this.fetchHeroBarData();
  },
  methods: {
    async fetchHeroBarData() {
      try {
        const response = await fetch(`${process.env.NUXT_ENV_API_URL}/api/content-settings`);
        if (!response.ok) throw new Error(`Failed to fetch hero bar content: ${response.statusText}`);
        
        const data = await response.json();

        data.forEach((item) => {
          switch (item.key) {
            case "herobarlinkname":
              this.linkText = item.params;
              break;
            case "herobarlinkpath":
              this.linkUrl = item.params;
              break;
          }
        });

      } catch (error) {
        console.error("Error loading hero bar data:", error);
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.link-container {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
}

.flickering-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #F4FFFC;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
  border-radius: 33px;
  border: 1px solid #48C3A8;
  padding: 8px 8px 8px 12px;
  position: relative;
}

.flickering-dot {
  position: relative;
  top: 1px;
  animation: flicker 0.9s infinite alternate;
}

.arrow-svg {
  fill: #F4FFFC;
}

@keyframes flicker {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
</style>
