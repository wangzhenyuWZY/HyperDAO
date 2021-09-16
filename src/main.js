import Vue from "vue";
// import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router/index";
// import "@/assets/style/font/iconfont.css";
import "@/assets/style/index.less";
// import $axios from "@/utils/request";
import mixin from "./mixin/index";
import store from "./store/index";
// import 'lib-flexible/flexible'
import "@/components/Vant";
// rem
// import "amfe-flexible";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
Vue.use(ElementUI)
// 把变量挂载到vue的原型上
// Vue.prototype.$axios = $axios;

import "./assets/style/theme1.less";

Vue.mixin(mixin);
import initWeb3 from './utils/hecoFn'
Vue.prototype.$initWeb3 = initWeb3
Vue.config.productionTip = false;
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({ 
  locale: localStorage.getItem('lang') || 'en', 
  messages: {
    'zh': require('./lang/cn'), 
    'en': require('./lang/en')
  }
})


new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App)
});
