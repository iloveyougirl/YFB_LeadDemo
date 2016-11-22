import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)


import VueRouter from 'vue-router';
Vue.use(VueRouter);
import urls from './urls.js'

const router = new VueRouter({ routes:urls });
export default new Vue({
      el: '#app',
      router,
      render: h => h(App)
});
