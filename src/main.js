import Vue from "vue";
import Vant from "vant";
import "@/assets/style/font/iconfont.css";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router/index";
import "@/assets/style/index.less";
import $axios from "@/utils/request";
import mixin from "./mixin/index";
import store from "./store/index";
// rem
import "amfe-flexible";
// 把变量挂载到vue的原型上
Vue.prototype.$axios = $axios;
Vue.prototype.aaa = 10000;

Vue.mixin(mixin);
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
