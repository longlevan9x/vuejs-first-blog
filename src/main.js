import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LoadScript from "./plugins/load-script";
import {VueMasonryPlugin} from "vue-masonry";

Vue.config.productionTip = false;

LoadScript.loadScript("/assets/js/jquery-3.2.1.min.js");
LoadScript.loadScript("/assets/js/plugins.js");
LoadScript.loadScript("/assets/js/main.js");

Vue.use(VueMasonryPlugin);

new Vue({
  mode: history,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
