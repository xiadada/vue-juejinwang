<template>
	<div class="home-left-container">
		<div class="home-left-head clearfix">
			<span class="home-head-title">热门文章</span>
			<ul class="select-tab clearfix">
				<li v-for="(homeLeftListItem,homeLeftListIndex) in homeLeftList" @click="changeTabColor(homeLeftListItem)" :key="homeLeftListIndex">
					<router-link tag="span" :class="{'router-link-action': homeLeftListItem.eName == tabSelectName}" :to="{name: homeLeftListItem.toLink}">
						{{ homeLeftListItem.name }}
					</router-link>
				</li>
				<!-- <li v-for="(homeLeftListItem,homeLeftListIndex) in homeLeftList" @click="changeTabColor(homeLeftListItem)" :key="homeLeftListIndex" :class="{'router-link-action': homeLeftListItem.eName == tabSelectName}">
						{{ homeLeftListItem.name }}
				</li> -->
			</ul>
		</div>
		<div class="home-left-content">
			<router-view></router-view>
		</div>
	</div>
	
</template>
<script>
	export default{
		data(){
			return {
				homeLeftList: [
					{
						name: '推荐',
						eName: 'recommend',
						toLink: 'recommendLink'
					},{
						name: '前端',
						eName: 'frontEnd',
						toLink: 'frontEndLink'
					},{
						name: 'Android',
						eName: 'android',
						toLink: 'androidLink'
					},{
						name: '后端',
						eName: 'backEnd',
						toLink: 'backEndLink'
					},{
						name: '人工智能',
						eName: 'artificialIntelligence',
						toLink: 'artificialIntelligenceLink'
					},{
						name: 'iOS',
						eName: 'iOS',
						toLink: 'iOSLink'
					},{
						name: '工具资源',
						eName: 'toolResources',
						toLink: 'toolResourcesLink'
					},{
						name: '阅读',
						eName: 'read',
						toLink: 'readLink'
					},{
						name: '运维',
						eName: 'perationMaintenance',
						toLink: 'perationMaintenanceLink'
					}
				],
				tabSelectName: 'recommend'
			}
		},
		methods: {
			changeTabColor(homeLeftListItem){
				this.tabSelectName = homeLeftListItem.eName;
			}
		}
	}
</script>
<style scoped lang="scss">
	.home-left-head{
		padding: 24px 32px;
		border-bottom: 1px solid rgb(246, 246, 246);
		.home-head-title{
			display: inline-block;
			float: left;
			font-size: 16px;
		}
		.select-tab{
			float: right;
			li{
				float: left;
				margin-right: 20px;
				cursor: pointer;
				font-size: 14px;
				color: rgb(144, 151, 156);
				span{
					&.router-link-action{
						color: rgb(0, 127, 255);
					}
				}
				/* &.router-link-action{
					color: rgb(0, 127, 255);
				} */
				&:last-child{
					margin-right: 0px;
				}
			}
		}
	}
</style>