import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/home'
import Manage from './components/manageurl'
import Statistics from './components/statistics'
import Details from './components/details'
import Jump from './components/jump'
const router = new VueRouter(); //这里可以带有路由器的配置参数
router.map({
    '/home': {
        component:Home
    },
    '/manage': {
        component:Manage
    },
    '/statistics': {
        component:Statistics
    },
    '/details': {
        component:Details
    },
    '/jump': {
        component:Jump
    }
});
export default router; //将路由器导出
