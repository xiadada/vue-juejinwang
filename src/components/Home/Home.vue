<template>
	<div class="home-container clearfix">
		<div class="home-left-container">
			<home-left></home-left>
		</div>
		<div class="home-right-container">
			<home-right></home-right>
		</div>
	</div>
</template>
<script>
	import HomeLeft from './HomeLeft/HomeLeft'
	import HomeRight from './HomeRight/HomeRight'
	export default{
		components: {
			'home-left': HomeLeft,
			'home-right': HomeRight
		}
	}
	
</script>
<style scoped lang="scss">
.home-left-container{
	float: left;
	width: 700px;
	background: #fff;
}
.home-right-container{
	float: left;
	width: 240px;
	margin-left: 20px;
}
	
</style>