//路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Recognise from '../pages/Recognise/Recognise.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
import phoneLogin from '../pages/phoneLogin/phoneLogin.vue'
import emailLogin from '../pages/emailLogin/emailLogin.vue'
import Register from '../pages/Register/Register.vue'

/*外层大组件才使用组件懒加载*/
/*const Home = () => import('../pages/Home/Home.vue')*/

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path:'/home',
      component: Home,
      /*meta设置元数据 设置某一个组件是否在当前路由显示*/
      meta:{
        showFooter: true
      }
    },
    {
      path:'/category',
      component: Category,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/recognise',
      component: Recognise,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/cart',
      component: Cart,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/search',
      component: Search,
    },
    {
      path:'/personal',
      component: Personal,
    },

    {
      path:'/',
      redirect: '/home'
    },

    {
      path:'/phone',
      component: phoneLogin,
    },
    {
      path:'/email',
      component: emailLogin,
    },
    {
      path:'/register',
      component: Register,
    },
  ]
})
