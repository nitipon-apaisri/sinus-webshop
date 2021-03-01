import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBag, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(faShoppingBag);
library.add(faSearch);
library.add(faUser);
Vue.config.productionTip = false;

new Vue({
   router,
   store,
   render: (h) => h(App),
}).$mount("#app");
