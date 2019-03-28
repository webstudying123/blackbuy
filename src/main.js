import Vue from 'vue'
import App from './App.vue'

//引入全局的静态资源
import './assets/statics/site/css/style.css'

//计数器,饿了么插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//引入axios
import axios from 'axios'
Vue.prototype.$axios=axios

axios.defaults.baseURL='http://111.230.232.110:8899/'

//全局过滤器
import moment from 'moment';
Vue.filter('globalformattime', function(value,formattemplate){
   if(formattemplate){
    return moment(value).format(formattemplate);

   }else {
     return moment(value).format('YYYY-MM-DD');
   }
})

Vue.config.productionTip = false;

import router from './router'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
