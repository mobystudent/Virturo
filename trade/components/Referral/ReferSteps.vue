<template>
  <div class="refer-steps-container">
    <div class="refer-step" v-for="(step, index) in steps" :key="index">
        <div class="refer-step-row">
            <p class="refer-step-title">STEP 0{{ index + 1 }}</p>
            <div class="refer-step-icon" v-html="step.icon"></div>
        </div>
      
        <div class="refer-step-text">
            <p class="refer-step-description">{{ step.description }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReferSteps',
  data() {
    return {
      steps: [
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6.16689 5.2668L13.2419 2.90846C16.4169 1.85013 18.1419 3.58346 17.0919 6.75846L14.7336 13.8335C13.1502 18.5918 10.5502 18.5918 8.96689 13.8335L8.26689 11.7335L6.16689 11.0335C1.40856 9.45013 1.40856 6.85846 6.16689 5.2668Z" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.4248 11.3755L11.4081 8.38379" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          description: "Invite friends with your unique link—they trade, you earn"
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.49984 1.66699H12.4998C16.6665 1.66699 18.3332 3.33366 18.3332 7.50033V12.5003C18.3332 16.667 16.6665 18.3337 12.4998 18.3337H7.49984C3.33317 18.3337 1.6665 16.667 1.6665 12.5003V7.50033C1.6665 3.33366 3.33317 1.66699 7.49984 1.66699Z" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.1416 12.7254L12.5916 7.27539" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.48351 8.64179C8.0496 8.64179 8.50849 8.1829 8.50849 7.61681C8.50849 7.05071 8.0496 6.5918 7.48351 6.5918C6.91741 6.5918 6.4585 7.05071 6.4585 7.61681C6.4585 8.1829 6.91741 8.64179 7.48351 8.64179Z" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.9332 13.4084C13.4993 13.4084 13.9582 12.9495 13.9582 12.3834C13.9582 11.8173 13.4993 11.3584 12.9332 11.3584C12.3671 11.3584 11.9082 11.8173 11.9082 12.3834C11.9082 12.9495 12.3671 13.4084 12.9332 13.4084Z" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          description: "Get 500 for every referral over 2,500"
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.1667 17.0837H5.83341C3.33341 17.0837 1.66675 15.8337 1.66675 12.917V7.08366C1.66675 4.16699 3.33341 2.91699 5.83341 2.91699H14.1667C16.6667 2.91699 18.3334 4.16699 18.3334 7.08366V12.917C18.3334 15.8337 16.6667 17.0837 14.1667 17.0837Z" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.58325 7.91699V12.0837" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.4167 7.91699V12.0837" stroke="#157275" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
          description: "Get instant cash and unlock epic rewards"
        }
      ]
    };
  }
};
</script>

<style scoped>
.refer-steps-container {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 992px) {
    flex-flow: column;
  }
}

.refer-step-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.refer-step {
  padding: 16px;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: flex-start; */
  gap: 14px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  background: #FFF;
  @media (max-width: 992px) {
    width: 100%;
    gap: 8px;
  }
}

.refer-step-icon {
  /* margin-bottom: 8px; */
}

.refer-step-title {
  color: rgba(40, 41, 41, 0.60);
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;
  margin: 0;
}

.refer-step-description {
  color: #282929;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;
  margin: 0;
}
</style>
