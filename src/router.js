import Vue from 'vue'
import Router from 'vue-router'
import mainLayout from "@/layouts/mainLayout";
import elementPanel from "@/components/mainPanels/elementPanel";
import HelloWorld from "@/components/HelloWorld";
import test from "@/components/test";
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: mainLayout,
        redirect: '/elementPanel',
        children:[{
            path: 'elementPanel',
            component: elementPanel,
        },{
            path: 'test',
            component: test,
        }]
    },{
        path: '/helloWorld',
        component: HelloWorld,
    }]
})
