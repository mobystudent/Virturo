<template>
  <UserAccount>
    <template #title>
      Validating your<br />
      temporary code...
    </template>
    <template #content>
      <div class="spinner-wrap">
        <img class="spinner rotating" src="~/static/img/spinner.png" />
      </div>
    </template>
  </UserAccount>
</template>

<script>
import UserAccount from '@/components/common/UserAccount';
export default {
  components: { UserAccount },
};
</script>

<style lang="scss" scoped>
.spinner-wrap {
  padding: 120px 0 120px 0;

  img.spinner {
    width: 49px;
    height: 49px;
    margin: 0 auto;
    display: block;
  }
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
</style>
