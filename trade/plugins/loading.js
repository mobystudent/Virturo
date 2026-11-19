import Vue from 'vue';

function checkLoading(el, binding) {
  const { value } = binding;
  if (value) {
    el.classList.add('v-loading-spinner');
  } else {
    el.classList.remove('v-loading-spinner');
  }
}

Vue.directive('loading', {
  inserted: (el, binding) => {
    checkLoading(el, binding);
  },
  update(el, binding) {
    checkLoading(el, binding);
  },
});
