import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Head'
import BoilingPoint from '../components/BoilingPoint'
import LittleBrochure from '../components/LittleBrochure'
import OpenSource from '../components/OpenSource'
import Activity from '../components/Activity'

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
	},{
	  path: '/littleBrochure',
      name: 'littleBrochureLink',
      component: LittleBrochure
	},{
	  path: '/openSource',
      name: 'openSourceLink',
      component: OpenSource
	},{
	  path: '/activity',
      name: 'activityLink',
      component: Activity
	}
]

export default new Router({
  routes
})
