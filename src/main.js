import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/css/index.sass'
import './assets/css/transition.sass'
import './assets/css/element.sass'
import './assets/css/myMenu1.sass'
import './assets/css/slideBar.sass'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import { Table } from 'view-design'
import myMenu from "@/myComponents/myMenu";


Vue.config.productionTip = false
Vue.use(Vuex)
// Vue.component('iViewTable', Table)
Vue.use(ElementUI)
Vue.use('myMenu', myMenu)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
