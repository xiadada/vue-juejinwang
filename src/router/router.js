import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'
import BoilingPoint from '../components/BoilingPoint'
import LittleBrochure from '../components/LittleBrochure'
import OpenSource from '../components/OpenSource'
import Activity from '../components/Activity'

//二级路由
import Android from '../components/Home/HomeLeft/Android'
import ArtificialIntelligence from '../components/Home/HomeLeft/ArtificialIntelligence'
import BackEnd from '../components/Home/HomeLeft/BackEnd'
import FrontEnd from '../components/Home/HomeLeft/FrontEnd'
import IOS from '../components/Home/HomeLeft/iOS'
import PerationMaintenance from '../components/Home/HomeLeft/PerationMaintenance'
import Read from '../components/Home/HomeLeft/Read'
import Recommend from '../components/Home/HomeLeft/Recommend'
import ToolResources from '../components/Home/HomeLeft/ToolResources'

Vue.use(Router)
const routes = [
	{
	  path: '/Home/home',
      name: 'homeLink',
      component: Home,
	  redirect: '/Home/HomeLeft/recommend',
      //二级路由
      children: [
      	{
      		path: '/Home/HomeLeft/android',
		    name: 'androidLink',
		    component: Android
      	},{
      		path: '/Home/HomeLeft/artificialIntelligence',
		    name: 'artificialIntelligenceLink',
		    component: ArtificialIntelligence
      	},{
      		path: '/Home/HomeLeft/backEnd',
		    name: 'backEndLink',
		    component: BackEnd
      	},{
      		path: '/Home/HomeLeft/frontEnd',
		    name: 'frontEndLink',
		    component: FrontEnd
      	},{
      		path: '/Home/HomeLeft/iOS',
		    name: 'iOSLink',
		    component: IOS
      	},{
      		path: '/Home/HomeLeft/perationMaintenance',
		    name: 'perationMaintenanceLink',
		    component: PerationMaintenance
      	},{
      		path: '/Home/HomeLeft/read',
		    name: 'readLink',
		    component: Read
      	},{
      		path: '/Home/HomeLeft/recommend',
		    name: 'recommendLink',
		    component: Recommend
      	},{
      		path: '/Home/HomeLeft/toolResources',
		    name: 'toolResourcesLink',
		    component: ToolResources
      	}
      ]
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
	},{
		path: '/',
		redirect: '/Home/home'
	}
]

export default new Router({
  routes
})
