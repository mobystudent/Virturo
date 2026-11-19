<template>
  <transition name="modal" appear>
    <div class="popup-wrapper">
      <div class="popup-container">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path d="M10.3667 8.42687L21.6867 4.65354C26.7667 2.96021 29.5267 5.73354 27.8467 10.8135L24.0734 22.1335C21.5401 29.7469 17.3801 29.7469 14.8467 22.1335L13.7267 18.7735L10.3667 17.6535C2.75341 15.1202 2.75341 10.9735 10.3667 8.42687Z" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.98 18.1998L18.7533 13.4131" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h2 class="title">
          Refer & Earn
        </h2>
        <p class="subtitle">Continue referring friends to unlock this reward!</p>
        
        <button class="btn" type="button" @click="handleCopy">Copy referral link
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10.6666 8.59967V11.3997C10.6666 13.733 9.73325 14.6663 7.39992 14.6663H4.59992C2.26659 14.6663 1.33325 13.733 1.33325 11.3997V8.59967C1.33325 6.26634 2.26659 5.33301 4.59992 5.33301H7.39992C9.73325 5.33301 10.6666 6.26634 10.6666 8.59967Z" stroke="#352F44" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.6666 4.59967V7.39967C14.6666 9.73301 13.7333 10.6663 11.3999 10.6663H10.6666V8.59967C10.6666 6.26634 9.73325 5.33301 7.39992 5.33301H5.33325V4.59967C5.33325 2.26634 6.26659 1.33301 8.59992 1.33301H11.3999C13.7333 1.33301 14.6666 2.26634 14.6666 4.59967Z" stroke="#352F44" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ReferrEarnPopup',
  props: {
    // title: {
    //   type: String,
    //   default: '',
    // },
    referralLink: {
      type: String,
      required: true
    }
  },
  methods: {
    handleCopy() {
      navigator.clipboard.writeText(this.referralLink)
        .then(() => {
          this.$emit('close'); // Закрываем модалку
          this.$notify({
            group: 'custom-style',
            text: 'Referral link copied',
          });
        })
        .catch(err => {
          console.error('Failed to copy referral link:', err);
        });
    }
  }

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
  padding: 32px 20px 24px;
  background-color: $common-white;
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
  padding-bottom: 32px;
  color: #352F44;
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
  // color: $black;
  border-radius: 6px;
  padding: 10px;
  margin-top: 47px;
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

@media (max-width: 375px) {
  .popup-container {
    width: calc(100% - 32px);
  }
}
</style>
