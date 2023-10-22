import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import moment from "moment";

new Vue({
  router,
  store,
  moment,
  render: (h) => h(App),
}).$mount("#app");
