import Vue from 'vue'
import Router from 'vue-router'
import Home from './Home.vue'
import Login from './Login.vue'

import index from './components/admin/index.vue'
import adminList from './components/admin/adminList.vue'
import userList from './components/admin/userList.vue'
import staffList from './components/admin/staffList.vue'
import addUser from './components/admin/addUser.vue'
import approval from './components/admin/approval.vue'
import completed from './components/admin/completed.vue'

import MyRepair from './components/User/MyRepair.vue'
import Repair from './components/User/Repair.vue'
import ceshiPhoto from './ceshiPhoto.vue'

import ceshi from './ceshi.vue'
import repairOrder from  './components/Maintence/repairOrder.vue'
import declare from './components/Maintence/declare.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name:'login',
      component:Login
    },
    {
      path:'/Home',
      component:Home,
      children:[
        {
          path:'index',
          name:'index',
          component:index
        },
        {
          path:'adminList',
          name:'adminList',
          component:adminList
        },
        {
          path:'userList',
          name:'userList',
          component:userList
        },
        {
          path:'staffList',
          name:'staffList',
          component:staffList
        },
        {
          path:'addUser',
          name:'addUser',
          component:addUser
        },
        {
          path:'approval',
          name:'approval',
          component:approval
        },
        {
          path:'completed',
          name:'completed',
          component:completed
        },
        {
          path:'ceshi',
          name:'ceshi',
          component:ceshi
        },
        {
          path:'MyRepair',
          name:'myrepair',
          component:MyRepair
        },
        {
          path:'Repair',
          name:'repair',
          component:Repair
        },
        {
          path:'ceshiPhoto',
          name:'ceshiPhoto',
          component:ceshiPhoto
        },
        {
          path:'repairOrder',
          name:'repairOrder',
          component:repairOrder
        },
        {
          path:'declare',
          name:'declare',
          component:declare
        }
      ]
    },
  ]
})
