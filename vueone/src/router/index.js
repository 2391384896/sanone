import Vue from 'vue'
import Router from 'vue-router'
import Lphone from '../components/Lphone'
import Shit from '@/components/Shit'
import Tyg from '../components/Tyg'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"",redirect:"/lphone"},
    {path:"/lphone",component:Lphone},
    {path:"/shit",component:Shit},
    {path:"/Tyg",component:Tyg}
  ]
})
