<template>
  <div class="lds-dual-ring"></div>
</template>

<style lang="scss" scoped>
.lds-dual-ring {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.lds-dual-ring:after {
  content: ' ';
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 3px solid $common-white;
  border-color: $common-white transparent $common-white transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
