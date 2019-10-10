import Vue from 'vue'
import Router from 'vue-router'
import Lphone from '../components/Lphone'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"",redirect:"/lphone"},
    {path:"/lphone",component:Lphone}
  ]
})
