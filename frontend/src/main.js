import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
   faShoppingBag,
   faUser,
   faSearch,
   faAngleLeft,
   faStar,
   faShoppingCart,
   faMinusSquare,
   faPlusSquare,
   faCaretSquareRight,
   faCheckCircle,
   faHome,
   faSignOutAlt,
   faTimes,
   faEdit,
   faTrash,
   faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(faShoppingBag);
library.add(faSearch);
library.add(faUser);
library.add(faAngleLeft);
library.add(faStar);
library.add(faShoppingCart);
library.add(faMinusSquare);
library.add(faPlusSquare);
library.add(faPlus);
library.add(faCaretSquareRight);
library.add(faCheckCircle);
library.add(faHome);
library.add(faSignOutAlt);
library.add(faTimes);
library.add(faEdit);
library.add(faTrash);

Vue.config.productionTip = false;

new Vue({
   router,
   store,
   render: (h) => h(App),
}).$mount("#app");
