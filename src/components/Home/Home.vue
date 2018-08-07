<template>
	<div class="home-container">
		<div class="home-left-container">
			<home-left></home-left>
		</div>
		<div class="home-right-container">
			<home-right></home-right>
		</div>
	</div>
</template>
<script>
	import HomeLeft from 'HomeLeft/HomeLeft'
	import HomeRight from 'HomeRight/HomeRight'

	export default{
		components: {
			'home-left': HomeLeft,
			'home-right': HomeRight
		}
	}
	
</script>
<style scoped lang="scss">
.home-left-container{
	width: 700px;
	background: #fff;
  	height: 1000px;
}
	
</style>