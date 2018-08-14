<template>
	<div class="home-right-content">
		<right-part-one></right-part-one>
		<right-part-two></right-part-two>
		<right-part-three></right-part-three>
		<right-part-four></right-part-four>
		<right-part-five></right-part-five>
		<right-part-six></right-part-six>
		<right-part-seven></right-part-seven>
	</div>
</template>
<script>
	import RightPartOne from './RightPartOne'
	import RightPartTwo from './RightPartTwo'
	import RightPartThree from './RightPartThree'
	import RightPartFour from './RightPartFour'
	import RightPartFive from './RightPartFive'
	import RightPartSix from './RightPartSix'
	import RightPartSeven from './RightPartSeven'
	export default{
		data(){
			return {}
		},
		components:{
			'right-part-one': RightPartOne,
			'right-part-two': RightPartTwo,
			'right-part-three': RightPartThree,
			'right-part-four': RightPartFour,
			'right-part-five': RightPartFive,
			'right-part-six': RightPartSix,
			'right-part-seven': RightPartSeven
		}
	}
	
</script>
<style scoped lang="scss">
	
</style>