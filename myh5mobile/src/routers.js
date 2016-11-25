import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './home'
import Usercenter from './components/Usercenter'
import Exchangecenter from './components/exchangecenter'
import Shippingaddress from './components/shippingaddress'
import Settings from './components/Settings'

import Commodityexchange from './components/exchangecenter/commodityexchange'
import Promotions from './components/exchangecenter/Promotions'
import Redeem from './components/exchangecenter/Redeem'
import WeChatexptext from './components/exchangecenter/WeChatexptext'
//import Filladdress from './components/filladdress'
const router = new VueRouter({//这里可以带有路由器的配置参数
    hashbang: false,
    history: true,
    saveScrollPosition: false,
    transitionOnLoad: true,
    linkActiveClass: 'active'
});
router.map({
    '/': {
        component:Home
    },
    '/Usercenter': {
        component:Usercenter
    },
    '/Exchangecenter': {
        component:Exchangecenter,
        subRoutes: {
            '/': {
                component:Commodityexchange
            },
            '/Promotions': {
                component:Promotions
            },
            '/Redeem': {
                component:Redeem
            },
            '/WeChatexptext': {
                component:WeChatexptext
            }
        }
    },
    '/Shippingaddress': {
        component:Shippingaddress
    },
    '/Settings': {
        component:Settings
    }
});
export default router; //将路由器导出
