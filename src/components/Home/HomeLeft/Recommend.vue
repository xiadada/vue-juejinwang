<template>
	<div class="recommend-container">
		<ul class="recommend-content">
			<li v-for="(recommendItem,recommendIndex) in recommendLists" class="recommend-item" :key="recommendIndex">
				<div class="recommend-item-left">
					<div class="recommend-item-title">{{ recommendItem.title }}</div>
					<div class="recommend-item-info">
						<span class="recommend-item-type" :class="recommendItem.type">{{ recommendItem.typeName }}</span>
						<span class="recommend-info recommend-item-about">{{ recommendItem.recommendAbout }}</span>
						<span class="split-point"></span>
						<span class="recommend-info recommend-item-time">{{ recommendItem.recommendTime }}</span>
						<span class="split-point"></span>
						<span class="recommend-info read-times">{{ recommendItem.readCount }} 次阅读</span>
					</div>
				</div>
				<div class="img-container">
					<img v-show="recommendItem.img" :src="recommendItem.img">
				</div>
			</li>
			<li v-show="addNoData" class="no-data-display">列表为空</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				recommendLists: '',
				addNoData: false
			}
		},
		beforeCreate(){
			//一进入到推荐页，就要获取数据，并把获取到的数据保存到store文件中
			axios.get('/static/Data/recommend.json').then(res => {
				if(res.data.meta.message == 'ok'){
					this.recommendLists = res.data.data.recommendLists;
					if(res.data.data.length == 0){
						this.addNoData = true;
					}
					this.$store.commit("updateRecommendLists",res.data.data.recommendLists);
					this.$store.commit("updateHotTags",res.data.data.recommendHotTags);
				}
			})
		}
	}
	
</script>
<style scoped lang="scss">
.recommend-container{
	.recommend-content{
		.recommend-item{
			position: relative;
			width: 100%;
			height: 98px;
			padding: 18px 32px;
			cursor: pointer;
			border-bottom: 1px solid rgba(178,186,194,.15);
			.recommend-item-left{
				position: absolute;
				width: 521px;
				.recommend-item-title{
					margin: 8px 0 13px;
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    font-weight: bold;
				    font-size: 16px;
				    &:hover{
				    	text-decoration: underline;
				    }
				}
				.recommend-item-info{
			    	span{
						display: inline-block;
						&.recommend-item-type{
							width: 54px;
							height: 21px;
							line-height: 21px;
							text-align: center;
							color: #fff;
							margin-right: 19px;
							border-radius: 2px;
							font-size: 14px;
							&.backEnd{
								background-color: #857dea;
							}
							&.read{
								background-color: #abbb79;
							}
						}
						&.recommend-info{
							color: #909090;
							font-size: 12px; 
							&.recommend-item-about:hover{
								color: #007fff;
							}
						}
						&.split-point{
							width: 2px;
							height: 2px;
							line-height: 2px;
							border-radius: 50%;
							background-color: #909090;
							margin-bottom: 3px;
						}
			    	}
			    }
			}
		    .img-container{
		    	position: absolute;
		    	width: 106px;
		    	height: 69px;
		    	transform: translateY(-5%);
		    	right: 32px;
		    	img{
		    		width: 100%;
		    		height: 100%;
		    	}
		    }
		}
		.no-data-display{
			text-align: center;
			height: 98px;
			line-height: 98px;
			color: #90979c;
		}
	}
}
</style>
