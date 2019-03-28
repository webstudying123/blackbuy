import Vue from 'vue'
import App from './App.vue'

//引入全局的静态资源
import './assets/statics/site/css/style.css'


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

//引入index.vue
import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'
//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//路由规则
let routes=[
  {path:'/',component:index},
  {path:'/index',component:index},
  {path:'/cart',component:cart},
  {path:'/detail/:id',component:detail}
]
//实例路由
let router =new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
