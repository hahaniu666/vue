import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import test from '@/components/test'
import clickAdd from '@/components/clickAdd'

/*
*1. 注意：空格不能超过一行，否则会报错
*2. 也不要在后面加分号，否则也会报错
* */
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/clickAdd',
      name: 'clickAdd',
      component: clickAdd
    }
  ]
})
