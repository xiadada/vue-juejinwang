import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Head'
import BoilingPoint from '../components/BoilingPoint'

Vue.use(Router)
const routes = [
	{
	  path: '/Home',
      name: 'homeLink',
      component: Home,
      redirect: '/Home/home'
	},{
	  path: '/boilingPoint',
      name: 'boilingPointLink',
      component: BoilingPoint
	}
]

export default new Router({
  routes
})
