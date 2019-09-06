import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import ('../views/Home')
const About = () => import ('../views/About')
const Add = () => import ('../views/Add')

Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/add',
      component: Add
    }
  ]
})

export default router