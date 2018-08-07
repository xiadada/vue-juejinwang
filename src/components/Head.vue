<template>
	<div class="juejin-head">
		<ul class="head-left clearfix">
			<li class="juejin-title"><router-link :to="{name: 'homeLink'}">掘金</router-link></li>
			<li class="home-head"><router-link :to="{name: 'homeLink'}">首页</router-link></li>
			<li class="boiling-point-head"><router-link :to="{name: 'boilingPointLink'}">沸点</router-link></li>
			<li class="little-brochure"><router-link :to="{name: ''}">小册</router-link></li>
			<li class="open-source"><router-link :to="{name: ''}">开源库</router-link></li>
			<li class="activity"><router-link :to="{name: ''}">活动</router-link></li>
		</ul>

	</div>
	
</template>
<script>
	export default{
		data(){
			return {
				
			}
		}
	}
</script>
<style scoped lang="scss">
 *{
	padding: 0;
	margin: 0;
	list-style: none;
	text-decoration: none;
}
 .clearfix:afetr{
  display: block;
  content: '';
  clear: both;
}
.juejin-head{
	position: fixed;
	background: #fff;
    border-bottom: 1px solid #f1f1f1;
    color: #909090;
    height: 5rem;
    z-index: 250; 
}

	
</style>