import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 路由的配置中必须有path
      path: '/',
      name: 'home'
    }
  ]
})
