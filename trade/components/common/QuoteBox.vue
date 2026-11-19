<template>
  <div class="box">
    <img class="logo" :src="require(`~/static/${logoFull}`)" alt="logo" />
    <div class="text">
      <p>
        Redefine<br />
        the standard<br />
        of excellence
      </p>
    </div>
    <div class="tip">
      <LampIcon />
      <span>Quick Tip</span>
    </div>
    <p ref="title" class="content">
      {{ items[activeIndex].text }}
    </p>
  </div>
</template>

<script>
import LampIcon from '@/static/img/icons/lamp-icon.svg?inline';
import config from '@/project-config';

export default {
  name: 'QuoteBox',
  components: { LampIcon },
  data() {
    return {
      interval: null,
      activeIndex: 0,
      logoFull: config.logoFull,
      items: config.quoteBoxItems,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.moveSlide(this.activeIndex + 1);
    }, 10_000);
  },
  destroyed() {
    clearInterval && clearInterval(this.interval);
  },
  methods: {
    moveSlide(index) {
      let newIndex = index;
      if (index > this.items.length - 1) {
        newIndex = 0;
      }

      if (index < 0) {
        newIndex = this.items.length - 1;
      }

      this.$refs.title?.classList.add('fade');

      setTimeout(() => {
        this.activeIndex = newIndex;
        this.$refs.title?.classList.remove('fade');
      }, 300);
    },
  },
};
</script>
<style lang="scss" scoped>
.fade {
  opacity: 0;
}

.box {
  width: 308px;
  color: $common-white;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
}

.logo {
  max-width: 242px;
  max-height: 44px;
}

.text {
  margin-top: 40px;

  p {
    color: $light-mint;
    font-size: 40px;
    font-weight: 500;
    line-height: 1.15;
  }
}

.tip {
  display: flex;
  align-items: center;
  margin-top: 40px;

  span {
    margin-left: 8px;
  }
}

.content {
  line-height: 1.6;
  margin-top: 12px;
  transition: opacity 300ms ease-in-out;
}

@media (max-width: 860px) {
  .box {
    display: none;
  }
}
</style>
