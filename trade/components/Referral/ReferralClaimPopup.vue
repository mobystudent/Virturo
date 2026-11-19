<template>
  <transition name="modal" appear>
    <div class="popup-wrapper">
      <div class="popup-container">
        <h2 class="title">
          Reward Unlocked!
        </h2>
        <p class="subtitle">Further details have been sent to your email.</p>
        <img v-if="img" :src="img" alt="" />
        <p class="name">{{ title }}</p>
        <p class="description">{{ description }}</p>
        <p class="subtitle-bottom">Refer more, earn more!</p>
        
        <button class="btn" type="button" @click="$emit('close')">Done</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ReferralClaimPopup',
  props: {
    img: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $charcoal-grey-transparent;
  z-index: 9998;
  transition: opacity 0.3s ease;
}

.popup-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 343px;
  padding: 24px;
  background-color: $common-white;
  border: 1px solid #F7F7F7;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.10);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.title {
  padding-bottom: 6px;
  color: #352F44;
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 130%; /* 26px */
}

.subtitle {
  padding-bottom: 24px;
  color: #352F44;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
}

.name {
  margin-bottom: 3px;
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
}

.description {
  padding-bottom: 24px;
  color: rgba(0, 0, 0, 0.60);
  text-align: center;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 130%; /* 13px */
}

.subtitle-bottom {
  color:#352F44;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
}

.btn {
  display: block;
  text-align: center;
  width: 100%;
  height: 44px;
  background-color: $common-green-transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 10px;
  margin-top: 24px;
  color: #282929;
  font-family: Roobert;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%; /* 24px */
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: $common-white;
    border-color: $common-green-transparent;
  }
}

img {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  width: 208px;
  height: 136px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

@media (max-width: 375px) {
  .popup-container {
    width: calc(100% - 32px);
  }
}
</style>
