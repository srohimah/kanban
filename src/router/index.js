import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
// import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // component: HelloWorld
      component: Board
    }
  ]
})
