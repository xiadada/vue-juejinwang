<template>
	<div class="home-right-part-two">
		<div class="part-two-head clearfix">
			<span class="part-two-head-title">热门标签</span>
			<a class="check-all" href="#">查看全部</a>
		</div>
		<div class="hot-tag">
			<router-link v-for="(hotTagsItem,hotTagsIndex) in getHotTags" class="hot-tag-list" tag="a" :to="{name: 'jiaGouLink'}" target="_blank">{{ hotTagsItem.name }}</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {}
		},
		computed: {
			getHotTags:{
				get(){
					return this.$store.state.hotTags;
				},
				set(){

				}
			}
		}
	}
</script>
<style scoped lang="scss">
.home-right-part-two{
	background-color: #fff;
    border-radius: 2px;
    margin-bottom: 24px;
	.part-two-head{
		height: 45px;
		line-height: 45px;
		padding: 0 1.333rem;
		border-bottom: 1px solid #f6f6f6;
		.part-two-head-title{
			float: left;
			font-size: 14px;
		}
		.check-all{
			float: right;
			cursor: pointer;
			font-size: 12px;
			color: #007fff;
		}
	}
	.hot-tag{
		padding: 1.333rem;
		.hot-tag-list{
			display: inline-block;
			margin-right: 12px;
		    margin-bottom: 12px;
		    background-color: #f3f6f3;
		    cursor: pointer;
		    height: 30px;
		    font-size: 12px;
		    color: #333;
		    line-height: 30px;
		    padding-left: 22px;
		    padding-right: 22px;
		    border-radius: 30px;
		    &:hover{
		    	color: #fff;
    			background-color: #0c0;
		    }
		}
	}
}
	
</style>