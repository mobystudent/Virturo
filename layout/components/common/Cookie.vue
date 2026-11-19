<template>
  <div>
    <button
      id="hs_show_banner_button"
      type="button"
      :style="buttonStyle"
      @click="showBanner"
    >
      Cookie Settings
    </button>
  </div>
</template>

<script>
export default {
  name: 'CookieSettings',
  data() {
    return {
      buttonStyle: {
        position: 'fixed',
        bottom: '0px',
        left: '16px',
        right: 'auto',
        backgroundColor: '#157275',
        border: '1px solid #157275',
        borderRadius: '3px',
        padding: '10px 16px',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'normal',
        lineHeight: 'inherit',
        textAlign: 'left',
        textShadow: 'none',
        zIndex: '1000',
        cursor: 'pointer',
      },
    };
  },
  methods: {
    showBanner() {
      // eslint-disable-next-line no-underscore-dangle, no-multi-assign
      const _hsp = window._hsp = window._hsp || [];
      _hsp.push(['showBanner']);
    },
  },
};
</script>
