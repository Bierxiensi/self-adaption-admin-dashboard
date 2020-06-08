import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/css/index.sass'
import './assets/css/transition.sass'
import './assets/css/element.sass'
import './assets/css/myMenu.sass'
import './assets/css/slideBar.sass'
//import css
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import vueBeauty from 'vue-beauty'
import 'vue-beauty/package/style/vue-beauty.min.css'

// import { Table } from 'view-design'
import myMenu from "@/myComponents/myMenu";


Vue.config.productionTip = false
Vue.use(Vuex)
//import components
Vue.use(vueBeauty)
// Vue.component('iViewTable', Table)
Vue.use(ElementUI)
Vue.use('myMenu', myMenu)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
