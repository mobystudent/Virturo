import Vue from 'vue';

// Import global components
import { Dialog } from 'element-ui';

// Internationalization: http://element.eleme.io/#/en-US/component/i18n
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import '../assets/css/element.scss';

// Configure language
locale.use(lang);

// Configure global components
Vue.use(Dialog);
