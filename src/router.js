import Vue from 'vue'

//引入index.vue
import index from './components/index.vue'
import cart from './components/cart.vue'
import detail from './components/detail.vue'

import usercontainer from './components/usercontainer.vue'
import userdetail from './components/userdetail.vue'
import usercenter from './components/usercenter.vue'
import userlistr from './components/userlist.vue'
//导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//路由规则
let routes=[
  {path:'/',component:index},
  {path:'/index',component:index},
  {path:'/cart',component:cart},
  {path:'/detail/:id',component:detail},
  {     path:'/user',
       component:usercontainer,
       children:[
         {path:'detail',component:userdetail},
         {path:'center',component:usercenter},
         {path:'list',component:userlistr}
       ]
     }
]
//实例路由
let router =new VueRouter({
  routes
})

export default router;