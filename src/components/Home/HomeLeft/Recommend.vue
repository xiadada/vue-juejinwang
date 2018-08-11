<template>
	<div class="recommend-container">
		<ul class="recommend-content">
			<li v-for="(recommendItem,recommendIndex) in recommendLists" class="recommend-item" :key="recommendIndex">
			<!-- <li class="recommend-item"> -->
				<div class="recommend-item-left">
					<div class="recommend-item-title">一位资深程序员大牛给与Java初学者的学习路线建议</div>
					<div class="recommend-item-info">
						<span :class="'recommend-item-type'">后端</span>
						<span class="recommend-info recommend-item-about">测试学习分享</span>
						<span class="split-point"></span>
						<span class="recommend-info recommend-item-time">8月前</span>
						<span class="split-point"></span>
						<span class="recommend-info read-times">55次阅读</span>
					</div>
				</div>
				<div class="img-container">
					<img src="https://user-gold-cdn.xitu.io/2018/1/9/160d8aed8d68b1c0?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1">
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				recommendLists: null
			}
		},
		beforeCreate(){
			//一进入到推荐页，就要获取数据，并把获取到的数据保存到store文件中
			axios.get('/static/Data/recommend.json').then(res => {
				console.log(res.data);
				this.recommendLists = res.data;
				console.log(this.recommendLists.data)
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
							background-color: #857dea;
							border-radius: 2px;
							font-size: 14px;
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
		    	// background: url("https://user-gold-cdn.xitu.io/2018/1/9/160d8aed8d68b1c0?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1") 0 no-repeat;
		    	right: 32px;
		    	// background-size: 100%
		    	img{
		    		width: 100%;
		    		height: 100%;
		    	}

		    }
		}
	}
}
</style>
