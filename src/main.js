import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
<<<<<<< HEAD
//Import Toogle Switch
import ToggleSwitch from 'vuejs-toggle-switch'

//Make Toogle switch (on/off) available throughout your project
Vue.use(ToggleSwitch)
=======
import Vuelidate from 'vuelidate'
>>>>>>> a6508f00f7e842ba703278334ad2e4fb3d70ffbf

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuelidate)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
