import Vue from 'vue'
import Vuex from 'vuex'
import menus from './modules/menus'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        menus
    }
})
export default store
