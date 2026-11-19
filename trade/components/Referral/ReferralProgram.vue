<template>
  <div class="referral-program-content">
    <ReferralClaimPopup v-if="isShowClaimPopup" :img="popupImg" :title="popupTitle" :description="popupDescription" @close="isShowClaimPopup = false" />
    <Notification />
    <div class="section">
      <div class="header-program-step">
        <div class="col">
          <h2 class="title">Refer & Earn</h2>
          <p class="text">Increase your earnings by referring more friends</p>
        </div>
        <div class="col">
          <svg @click="toggleReferSteps" :class="isReferStepsVisible ? 'open' : 'close'" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1.46997 4.36035L4.99997 0.840352L8.52997 4.36035" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <transition name="fade-slide">
        <ReferSteps v-if="isReferStepsVisible" />
      </transition>

      <div class="program-wrapper">
        <p class="referrers-count">Referrals count ({{ referrersCount }})</p>
        <div class="program-steps">
          <div
            v-for="(reward, i) in rewards"
            :key="reward.id"
            class="step"
            :class="[`step-${i + 1}`, { lock: isLockClass(i) }, { active: isActiveClass(reward) }]"
          >
            <div class="img-border">
              <div class="img"></div>
              <div class="label">Pick One</div>
            </div>
            <p class="step-name">{{ reward.title }}</p>
            <p class="step-description">{{ reward.description }}</p>
          </div>
        </div>
        <div class="line-wrapper">
          <div class="line-container">
            <div
              v-for="(reward, i) in rewards"
              :key="reward.id"
              :class="['progress', `progress-${i + 1}`, { 'progress-special': canClaimReward(reward, i) }]"
            >
              <div class="progress-line">
                <div
                  class="progress-line_filled"
                  :style="{
                    width: !isVertical ? `${calcProgress(rewards[i - 1]?.count ?? 0, reward.count)}%` : undefined,
                    height: isVertical ? `${calcProgress(rewards[i - 1]?.count ?? 0, reward.count)}%` : undefined,
                  }"
                ></div>
              </div>
              <div class="state">
                <div
                    v-show="shouldShowDot(reward, i)"
                    :class="[
                      'dot',
                      {
                        active: referrersCount >= reward.count,
                        done: userRewards.some(el => el.reward_id === reward.id),
                      }
                    ]"
                  >
                  <template v-if="userRewards.some(el => el.reward_id === reward.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="16" fill="url(#paint0_linear_3171_1920)"/>
                      <path d="M10 15.7733L13.7733 19.5467L21.3333 12" fill="url(#paint1_linear_3171_1920)"/>
                      <path d="M10 15.7733L13.7733 19.5467L21.3333 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <defs>
                        <linearGradient id="paint0_linear_3171_1920" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#48C3A8"/>
                          <stop offset="1" stop-color="#539788"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_3171_1920" x1="15.6667" y1="12" x2="15.6667" y2="19.5467" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#48C3A8"/>
                          <stop offset="1" stop-color="#539788"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </template>
                  <template v-else>
                    {{ reward.count }}
                  </template>

                </div>
                <button v-if="canClaimReward(reward, i)" class="claim-btn" :disabled="isLoading" @click="claimReward(reward, i)">
                  <img v-if="isLoading" class="spinner rotating" src="~/static/img/btn-spinner.png" alt="" />
                  {{ isLoading ? '' : reward.count }}
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div class="row row-referral">
        <div class="col">
          <h3 class="row-title">Your referral link</h3>
          <div class="copy-link">
            <input id="link" ref="inputLink" type="text" :value="referral_link" readonly />
            <button @click="copyLink">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10.6666 8.59967V11.3997C10.6666 13.733 9.73325 14.6663 7.39992 14.6663H4.59992C2.26659 14.6663 1.33325 13.733 1.33325 11.3997V8.59967C1.33325 6.26634 2.26659 5.33301 4.59992 5.33301H7.39992C9.73325 5.33301 10.6666 6.26634 10.6666 8.59967Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.6666 4.59967V7.39967C14.6666 9.73301 13.7333 10.6663 11.3999 10.6663H10.6666V8.59967C10.6666 6.26634 9.73325 5.33301 7.39992 5.33301H5.33325V4.59967C5.33325 2.26634 6.26659 1.33301 8.59992 1.33301H11.3999C13.7333 1.33301 14.6666 2.26634 14.6666 4.59967Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        <div class="col">
          <h3 class="row-title">Share via</h3>
          <div class="socials">
            <a rel="nofollow" @click="openInNewWindow(whatsapp)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5.75008 17.167C7.00008 17.917 8.50008 18.3337 10.0001 18.3337C14.5834 18.3337 18.3334 14.5837 18.3334 10.0003C18.3334 5.41699 14.5834 1.66699 10.0001 1.66699C5.41675 1.66699 1.66675 5.41699 1.66675 10.0003C1.66675 11.5003 2.08341 12.917 2.75008 14.167L2.10719 16.6396C1.91247 17.3886 2.60567 18.0654 3.34973 17.8528L5.75008 17.167Z" stroke="#352F44" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13.75 12.3737C13.75 12.5087 13.72 12.6475 13.6561 12.7825C13.5923 12.9175 13.5096 13.045 13.4007 13.165C13.2167 13.3675 13.0139 13.5138 12.7848 13.6075C12.5595 13.7013 12.3153 13.75 12.0525 13.75C11.6694 13.75 11.26 13.66 10.8281 13.4763C10.3962 13.2925 9.96432 13.045 9.53618 12.7338C9.10428 12.4188 8.69492 12.07 8.30433 11.6837C7.9175 11.2937 7.56823 10.885 7.25651 10.4575C6.94855 10.03 6.70068 9.6025 6.52041 9.17875C6.34014 8.75125 6.25 8.3425 6.25 7.9525C6.25 7.6975 6.29507 7.45375 6.3852 7.22875C6.47534 7 6.61805 6.79 6.8171 6.6025C7.05746 6.36625 7.32036 6.25 7.59827 6.25C7.70343 6.25 7.80859 6.2725 7.90248 6.3175C8.00013 6.3625 8.0865 6.43 8.15411 6.5275L9.02541 7.75375C9.09301 7.8475 9.14184 7.93375 9.17564 8.01625C9.20944 8.095 9.22822 8.17375 9.22822 8.245C9.22822 8.335 9.20193 8.425 9.14935 8.51125C9.10053 8.5975 9.02917 8.6875 8.93903 8.7775L8.65361 9.07375C8.61229 9.115 8.59352 9.16375 8.59352 9.22375C8.59352 9.25375 8.59727 9.28 8.60478 9.31C8.61605 9.34 8.62732 9.3625 8.63483 9.385C8.70243 9.50875 8.81885 9.67 8.9841 9.865C9.1531 10.06 9.33337 10.2588 9.52867 10.4575C9.73147 10.6563 9.92677 10.84 10.1258 11.0087C10.3211 11.1737 10.4826 11.2862 10.6103 11.3537C10.6291 11.3612 10.6516 11.3725 10.6779 11.3837C10.7079 11.395 10.738 11.3987 10.7718 11.3987C10.8356 11.3987 10.8845 11.3763 10.9258 11.335L11.2112 11.0538C11.3051 10.96 11.3952 10.8887 11.4816 10.8438C11.568 10.7912 11.6544 10.765 11.7482 10.765C11.8196 10.765 11.8947 10.78 11.9773 10.8138C12.06 10.8475 12.1463 10.8963 12.2402 10.96L13.4834 11.8412C13.581 11.9087 13.6486 11.9875 13.6899 12.0812C13.7275 12.175 13.75 12.2687 13.75 12.3737Z" stroke="#352F44" stroke-miterlimit="10"/>
              </svg>
              WhatsApp</a>
            <a rel="nofollow" @click="openInNewWindow(email)">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14.1667 17.0837H5.83341C3.33341 17.0837 1.66675 15.8337 1.66675 12.917V7.08366C1.66675 4.16699 3.33341 2.91699 5.83341 2.91699H14.1667C16.6667 2.91699 18.3334 4.16699 18.3334 7.08366V12.917C18.3334 15.8337 16.6667 17.0837 14.1667 17.0837Z" stroke="#352F44" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.1666 7.5L11.5582 9.58333C10.6999 10.2667 9.29158 10.2667 8.43325 9.58333L5.83325 7.5" stroke="#352F44" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Email</a>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { referralKey, API_URL } from '@/constants';
import FacebookIcon from '@/static/img/socials/facebook.svg?inline';
import LinkedInIcon from '@/static/img/socials/linkedin.svg?inline';
import TwitterIcon from '@/static/img/socials/twitter.svg?inline';
import Notification from '@/components/common/Notification.vue';
import ReferralClaimPopup from '@/components/Referral/ReferralClaimPopup';
// import ReferrEarnPopup from '@/components/Referral/ReferrEarnPopup';
import ReferSteps from '@/components/Referral/ReferSteps.vue';

export default {
  name: 'ReferralProgram',
  components: { FacebookIcon, LinkedInIcon, TwitterIcon, Notification, ReferralClaimPopup, ReferSteps },
  data() {
    return {
      isLoading: false,
      isShowClaimPopup: false,
      windowWidth: window.innerWidth,
      index: 0,
      referral_link: '',
      whatsapp: '',
      email: '',
      isReferStepsVisible: true,
      // isShowEarnPopup: false,
    };
  },
  computed: {
    ...mapGetters({
      login: 'user/login',
      emailUser: 'user/email',
      rewards: 'referral/rewards',
      userRewards: 'referral/userRewards',
      referrersCount: 'user/referrersCount',
    }),
    popupImg: function () {
      const index = this.index;
      return index === undefined ? undefined : require(`~/static/img/ref-program-1-new-${index + 1}.png`);
    },
    popupDescription: function () {
      const index = this.index;
      return this.rewards[index]?.description ?? '';
    },
    popupTitle: function () {
      const index = this.index;
      return this.rewards[index]?.title ?? '';
    },
    isVertical: function () {
      return window.innerWidth <= 940;
    },
  },
  watch: {
    login(val) {
      this.referral_link = `${API_URL}/sign-up/?${this.encodeReferrer(val)}`;
      this.whatsapp = `https://wa.me/?text=${encodeURIComponent(this.referral_link)}`;
      this.email = this.buildEmailLink();
    },
  },
  mounted() {
    /* eslint-disable */
    if (process.browser) {
      this.whatsapp = `https://wa.me/?text=${encodeURIComponent(this.referral_link)}`;
      this.email = this.buildEmailLink();
    }
    /* eslint-enable */
    window.addEventListener('resize', this.updateWindowWidth);
  },
  created() {
    this.referral_link = `${API_URL}/sign-up/?${this.encodeReferrer()}`;
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth);
  },
  methods: {
    copyLink() {
      navigator.clipboard.writeText(this.$refs.inputLink.value);
      this.$notify({
        group: 'custom-style',
        text: 'Copied',
      });
    },
    encodeReferrer(val = '') {
      return encodeURIComponent(btoa(`${referralKey}=${val.length ? val : this.login}`));
    },
    openInNewWindow(url) {
      window.open(url, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    },
    calcProgress: function (startPoint, endPoint) {
      const maxPoint = endPoint - startPoint;
      const currentPoint = this.referrersCount - startPoint;
      const point = Math.max(0, Math.min(currentPoint, maxPoint));

      if (this.isVertical) {
        const height = (point * 100) / maxPoint;
        return height;
      } else {
        const width = (point * 100) / maxPoint;
        return width;
      }
    },
    canClaimReward(reward, index) {
      if (index !== 0) {
        return (
          reward.count <= this.referrersCount &&
          !this.userRewards.find(el => el.reward_id === reward.id) &&
          this.userRewards.find(el => el.reward_id === this.rewards[index - 1]?.id)
        );
      } else {
        return reward.count <= this.referrersCount && !this.userRewards.find(el => el.reward_id === reward.id);
      }
    },
    claimReward(reward, i) {
      this.isLoading = true;
      this.$store.dispatch('referral/claimReward', reward.id).finally(() => {
        this.isLoading = false;
        this.index = i;
        this.isShowClaimPopup = true;
      });
    },
    isLockClass(index) {

       if (index === 0) {
        return this.referrersCount < this.rewards[index].count;
      }

      const previousRewardClaimed = this.userRewards.find(
        el => el.reward_id === this.rewards[index - 1]?.id
      );

      const currentStepReached = this.referrersCount >= this.rewards[index].count;

      return !(previousRewardClaimed && currentStepReached);
    },
    isActiveClass(reward) {
      return this.userRewards.find(el => el.reward_id === reward.id);
    },
    shouldShowDot(reward, i) {
      if (this.windowWidth > 940) {
        return !this.canClaimReward(reward, i);
      }
      return true;
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },

    buildEmailLink() {
      const subject = 'Check out this referral program!';
      const body = `Hey,\n\nI thought you might be interested in this platform. Here's my referral link:\n\n${this.referral_link}`;
      const email = this.emailUser || ''; 
      return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
    toggleReferSteps() {
      this.isReferStepsVisible = !this.isReferStepsVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');

.referral-program-content {
  padding-top: 28px;
}

.program-wrapper {
  margin-top: 32px;
}

.title {
  font-size: 20px;
  font-weight: 400;
  line-height: 150%; /* 30px */
  color: $dark-grey;
  font-family: Poppins;
}

.text {
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  color: $dark-grey;
  padding-top: 6px;
}

.header-program-step {
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.referrers-count {
  margin-bottom: 16px;
  color: #352F44;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
}

.program-steps {
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  gap: 16px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-border {
    width: 208px;
    height: 136px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.07);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      z-index: 2;
    }
  }

  .img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
  }

  .label {
    display: none;
    width: 71px;
    height: 26px;
    padding: 6px 8px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 0.5px solid rgba(0, 0, 0, 0.25);
    background: #FFF;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.07);
    position: absolute;
    left: 0;
    top: 0;
    color: #352F44;
    text-align: center;
    font-family: Poppins;
    font-size: 10px;
    font-weight: 500;
    line-height: 130%; /* 13px */
  }

  &:nth-child(2) .label {
    display: flex;
  }

  &.step-1 {
    .img {
      background-image: url('@/static/img/ref-program-1-new-1.png');
    }
  }

  &.step-2 {
    .img {
      background-image: url('@/static/img/ref-program-1-new-2.png');
      background-position: center center;
    }
  }

  &.step-3 {
    .img {
      background-image: url('@/static/img/ref-program-1-new-3.png');
      background-position: center center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &.lock {

    .img {
      width: 100%;
      height: 100%;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }
  }
  &.active {
    opacity: 1;
  }
}

.step-name {
  padding-top: 16px;
  margin-bottom: 3px;
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
  text-align: center;
}

.step-description {
  color: rgba(0, 0, 0, 0.60);
  text-align: center;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 130%; /* 13px */
}

.line-wrapper {
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  color: $dark-grey;
}

.line-container {
  display: flex;
  width: 100%;

  .state {
    margin: 0 6px;
  }
}

.progress {
  display: flex;
  align-items: center;
}

.progress-1 {
  .progress-line_filled {
    border-radius: 10px;
  }

  .progress-line {
    width: 82px;
    border-radius: 10px;
  }

  &.progress-special {
    .progress-line {
      width: 184px;
    }

    & + .progress-2 {
      .progress-line {
        width: 184px;
        border-radius: 10px;
      }
    }
  }

  //&.claimable {
  //  .progress-line {
  //    width: 127px;
  //  }
  //
  //  & + .progress-2 {
  //    .progress-line {
  //      width: 149px;
  //    }
  //  }
  //}

  .dot.active {
    transition: border-color 0s ease-in-out 1s;
  }
  
  .dot.active.done {
    border-radius: 32px;
    background: linear-gradient(180deg, #48C3A8 0%, #539788 100%);
  }
}

.progress-2 {
  .progress-line {
    width: 184px;
    border-radius: 10px;
  }

  &.progress-special {
    .progress-line {
      width: 184px;
      border-radius: 10px;
    }

    & + .progress-3 {
      .progress-line {
        width: 184px;
        border-radius: 10px;
      }
    }
  }

  //&.claimable {
  //  .progress-line {
  //    width: 149px;
  //  }
  //
  //  & + .progress-3 {
  //    .progress-line {
  //      width: 149px;
  //    }
  //  }
  //}

  .progress-line_filled {
    transition-delay: 1s;
  }

  .dot.active {
    transition: border-color 0s ease-in-out 2s;
  }
}

.progress-3 {
  .progress-line {
    width: 184px;
    border-radius: 10px;
  }

  //&.claimable {
  //  .progress-line {
  //    width: 149px;
  //  }
  //}

  .progress-line_filled {
    transition-delay: 2s;
  }

  .dot.active {
    transition: border-color 0s ease-in-out 3s;
  }
}

.progress-line {
  position: relative;
  height: 4px;
  border-radius: 10px;
  background: linear-gradient(180deg, #D9D9D9 0%, #ACACAC 100%);
}

.progress-line_filled {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: $common-green-transparent;
  transition: width 1s ease-in-out;
}

.dot {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: $common-white;
  border: 2px solid #AAA;
  margin-left: -1px;
  margin-right: -1px;
  color: var(--Dark, #352F44);
  font-family: "Poor Story";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; 
  z-index: 1;

  &.active {
    border-color: $common-green-transparent;
  }
}

.claim-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  font-weight: 400;
  color: #352F44;
  font-family: "Poor Story";
  font-size: 14px;
  width: 32px;
  height: 32px;
  border-radius: 34px;
  border: 3px solid #48C3A8;
  background: transparent;
  cursor: pointer;
}

.row {
  padding-top: 32px;

  &.row-2 {
    padding-top: 24px;

    .row-title {
      padding-bottom: 16px;
    }
  }
}

.row-title {
  padding-bottom: 8px;
  color:  #000;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
}

.row-referral {
  padding-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 992px) {
    flex-flow: column;
    gap: 12px;
    padding-bottom: 40px;
    border-bottom: 1px solid #E0E0E0;
  }

  .col {
    &:nth-child(1) {
      width: calc(56% - 6px);
      max-width: 360px;
      @media (max-width: 992px) {
        width: 100%;
        max-width: none;
      }
    }
    &:nth-child(2) {
      width: calc(45% - 6px);
      @media (max-width: 992px) {
        width: 100%;
      }
    }
  }
}

.copy-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  input {
    width: 100%;
    height: 44px;
    border: 1px solid $light-khaki;
    outline: 2px solid transparent;
    background-color: $common-white;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: $dark-grey;
    padding: 10px 12px;

    &:focus {
      border-color: $common-green-transparent;
      outline-color: $light-mint;
    }
  }

  button {
    display: block;
    text-align: center;
    height: 41px;
    background: #fff;
    border: 1px solid transparent;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: $dark-grey;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    position: absolute;
    right: 2px;
    top: 2px;
    z-index: 1;
  }
}

.socials {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 140px;
    width: calc((100% - 12px) / 2);
    height: 44px;
    border-radius: 6px;
    background-color: $light-mint;
    color: $dark-grey;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 10px;
    cursor: pointer;

    &:last-child {
      svg {
        margin-right: 8px;
      }
    }

    svg {
      margin-right: 8px;
    }
  }
}

.list {
  padding-top: 24px;

  li {
    list-style-position: inside;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
    color: $black;
    padding-bottom: 8px;
    padding-left: 9px;
  }
}

.spinner {
  width: 24px;
  height: 24px;
}

.rotating {
  -webkit-animation: rotating 1s linear infinite;
  -moz-animation: rotating 1s linear infinite;
  -ms-animation: rotating 1s linear infinite;
  -o-animation: rotating 1s linear infinite;
  animation: rotating 1s linear infinite;
}

@-webkit-keyframes rotating

  /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  to {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes rotating {
  from {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  to {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@media (max-width: 940px) {
  .program-steps {
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 14px;
    padding-top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .referrers-count {
    margin-bottom: 20px;
  }

  .step-description {
    margin-top: 4px;
  }

  .progress-line_filled {
    width: 100% !important;
  }

  .program-wrapper {
    position: relative;
    margin: 40px auto 0;
  }

  .line-wrapper {
    display: flex;
    flex-direction: row-reverse;
    width: fit-content;
    margin-left: 5%;

    p {
      flex-shrink: 0;

      &:first-child {
        padding-left: 20px;
      }

      &:last-child {
        padding-right: 20px;
      }
    }
  }

  .line-container {
    flex-direction: column;

    .state {
      margin: 6px 0;
    }
  }

  .progress {
    margin: 0;
    flex-direction: column;
    justify-content: flex-start;
  }

  .progress-1 {
    .progress-line_filled {
      border-radius: 10px;
      width: 100%;
    }

    .progress-line {
      width: 6px;
      height: 156px;
      border-radius: 10px;
    }

    &.progress-special {
      .progress-line {
        width: 6px;
      }

      & + .progress-2 {
        .progress-line {
          width: 6px;
        }
      }
    }

    //&.claimable {
    //  .progress-line {
    //    width: 6px;
    //  }
    //
    //  & + .progress-2 {
    //    .progress-line {
    //      width: 6px;
    //    }
    //  }
    //}
  }

  .progress-2 {
    .progress-line {
      width: 6px;
      height: 176px;
    }

    &.progress-special {
      .progress-line {
        width: 6px;
      }

      & + .progress-3 {
        .progress-line {
          width: 6px;
        }
      }
    }

    //&.claimable {
    //  .progress-line {
    //    width: 6px;
    //  }
    //
    //  & + .progress-3 {
    //    .progress-line {
    //      width: 6px;
    //    }
    //  }
    //}
  }

  .progress-3 {
    .progress-line {
      width: 6px;
      height: 174px;
    }

    //&.claimable {
    //  .progress-line {
    //    width: 6px;
    //  }
    //}
  }

  .step {
    padding-top: 18px;
    &:not(:first-child) {
      margin-left: 0;
    }
  }

  .dot {
    margin: 0;
  }

  .state {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .claim-btn {
    position: absolute;
    top: 0;
  }
}

@media (max-width: 480px) {
  .copy-link {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    input {
      width: 100%;
      margin-bottom: 16px;
    }
  }

  .socials {
    a {
      width: calc((100% - 16px) / 2);

      svg {
        margin-right: 8px;
      }
    }
  }

  .list {
    padding-top: 16px;
  }
}

@media (max-width: 364px) {
  .program-wrapper {
    margin: 40px 0 0;
  }
}

@media (max-width: 320px) {
  .socials {
    a {
      width: 100%;

      &:not(:last-child) {
        margin-bottom: 16px;
      }

      svg {
        margin-right: 8px;
      }
    }
  }
}

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

svg.open {
  transform: rotate(0deg);
  transition: transform 0.3s ease;
}

svg.close {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

</style>
