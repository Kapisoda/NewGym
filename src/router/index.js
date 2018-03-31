import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path == '/') {
    next()
  }else if (!window.sessionStorage.getItem('auth_token')) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router