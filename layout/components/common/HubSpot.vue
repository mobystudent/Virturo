<template>
  <div style="display: none">
    <h2>Chat</h2>
    <div id="chat" />
  </div>
</template>

<script>
export default {
  name: 'Cookie',
  mounted() {
    window.intercomSettings = {
      api_base: 'https://api-iam.intercom.io',
      app_id: 'x7erpunb',
    };

    (function () {
      const w = window;
      const ic = w.Intercom;
      if (typeof ic === 'function') {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        const d = document;
        const i = function (...args) {
          i.q.push(args);
        };
        i.q = [];
        i.c = function (args) {
          i.q.push(args);
        };
        w.Intercom = i;
        const l = function () {
          const s = d.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = 'https://widget.intercom.io/widget/x7erpunb';
          const x = d.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        };
        if (document.readyState === 'complete') {
          l();
        } else if (w.attachEvent) {
          w.attachEvent('onload', l);
        } else {
          w.addEventListener('load', l, false);
        }
      }
    }());
  },
};
</script>

<style>
#intercom-container {
  margin-bottom: 10px;
}

#intercom-widget {
  width: 300px;
  height: 500px;
  border: none;
}

#intercom-container {
  z-index: 400 !important;
}
</style>
