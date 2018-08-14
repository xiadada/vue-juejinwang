<template>
	<div>111</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return {}
		},
		beforeCreate(){
			axios.get('/static/Data/frontEnd.json').then(res => {
				this.$store.commit("updateHotTags",res.data.data.frontEndHotTags)
			})
		}
	}
	
</script>
<style scoped lang="scss">
	
</style>
