import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LoadScript from "./plugins/load-script";
import {VueMasonryPlugin} from "vue-masonry";
import jQuery from "jquery"

global.$ = jQuery;
global.jQuery = jQuery;

Vue.config.productionTip = false;

// LoadScript.loadScript("/assets/js/jquery.min.js");
// LoadScript.loadScript("/assets/js/jquery-migrate-3.0.1.min.js");
// LoadScript.loadScript("/assets/js/popper.min.js");
// LoadScript.loadScript("/assets/js/bootstrap.min.js");
// LoadScript.loadScript("/assets/js/jquery.easing.1.3.js");
// LoadScript.loadScript("/assets/js/jquery.waypoints.min.js");
// LoadScript.loadScript("/assets/js/jquery.stellar.min.js");
LoadScript.loadScript("/assets/js/owl.carousel.min.js");
LoadScript.loadScript("/assets/js/jquery.magnific-popup.min.js");
LoadScript.loadScript("/assets/js/jquery.animateNumber.min.js");
LoadScript.loadScript("/assets/js/aos.js");
LoadScript.loadScript("/assets/js/bootstrap-datepicker.js");
LoadScript.loadScript("/assets/js/scrollax.min.js");
//LoadScript.loadScript("/assets/js/google-map.js");
LoadScript.loadScript("/assets/js/main.js");

Vue.use(VueMasonryPlugin);

new Vue({
  mode: history,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
