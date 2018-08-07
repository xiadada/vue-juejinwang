<template>
	<div class="juejin-head clearfix">
		<ul class="head-left clearfix">
			<li class="juejin-title"><router-link :to="{name: 'homeLink'}" class="active-title"><img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"></router-link></li>
			<li class="home-head"><router-link :to="{name: 'homeLink'}" :class="{active: isActive}">首页</router-link></li>
			<li class="boiling-point-head"><router-link :to="{name: 'boilingPointLink'}">沸点</router-link></li>
			<li class="little-brochure"><router-link :to="{name: ''}">小册</router-link></li>
			<li class="open-source"><router-link :to="{name: ''}">开源库</router-link></li>
			<li class="activity"><router-link :to="{name: ''}">活动</router-link></li>
		</ul>
		
		<ul class="head-right clearfix">
			<li class="input-container">
				<input type="text" placeholder="搜索掘金" class="search-input" @focus="styleChange">
				<div class="search-icon">
					<svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					    <!-- Generator: sketchtool 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
					    <title>B97EB10A-8F34-4AB5-ABAF-41D933741ED0</title>
					    <desc>Created with sketchtool.</desc>
					    <defs></defs>
					    <g id="首页" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					        <g id="导航栏搜索框" transform="translate(-990.000000, -19.000000)" fill="#C3CCD5">
					            <g id="Group" transform="translate(990.000000, 19.000000)">
					                <path d="M12.986126,14.4003395 L16.2928932,17.7071068 C16.6834175,18.0976311 17.3165825,18.0976311 17.7071068,17.7071068 C18.0976311,17.3165825 18.0976311,16.6834175 17.7071068,16.2928932 L14.4003395,12.986126 C15.9603881,10.7573298 15.7452402,7.66401983 13.7548959,5.67367554 C11.5233285,3.44210815 7.90524292,3.44210815 5.67367554,5.67367554 C3.44210815,7.90524292 3.44210815,11.5233285 5.67367554,13.7548959 C7.66401983,15.7452402 10.7573298,15.9603881 12.986126,14.4003395 Z M7.0878891,12.3406823 C5.6373703,10.8901635 5.6373703,8.5384079 7.0878891,7.0878891 C8.5384079,5.6373703 10.8901635,5.6373703 12.3406823,7.0878891 C13.7912011,8.5384079 13.7912011,10.8901635 12.3406823,12.3406823 C10.8901635,13.7912011 8.5384079,13.7912011 7.0878891,12.3406823 Z" id="Combined-Shape"></path>
					            </g>
					        </g>
					    </g>
					</svg>
				</div>
			</li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		

	</div>
	
</template>
<script>
	export default{
		data(){
			return {
				isActive: true,
				noActive: true
			}
		},
		methods: {
			styleChange(){
				console.log('a');
			}
		}
	}
</script>
<style scoped lang="scss">
.juejin-head{
	max-width: 960px;
    margin: auto;
    height: 80px;
    .head-left{
    	float: left;
    	height: 80px;
    	 li{
	    	float: left;
	    	margin-right: 42px;
	    	cursor: pointer;
	    	a{
	    		color: #71777c;
	    		&.active{
	    			color: #007fff;
	    		}
	    		&.active-title{
	    			font-size: 45px;
	    		}
	    		&:hover{
	    			color: #007fff;
	    		}
	    	}
	    }
    }
    .head-right{
    	float: right;
    	height: 80px;
    	li{
    		float: left;
    		&.input-container{
    			position: relative;
    			.search-input{
    				height: 36px;
    				line-height: 36px;
    				width: 158px;
    				border: 1px solid hsla(0,0%,59%,.2);
    				background-color: rgba(227,231,236,.2);
    				border-radius: 2px;
    				padding-left: 5px;
    				color: #ccc;
    				outline: none;
    			}
    			.search-icon{
    				position: absolute;
    				right: 5px;
    				top: 7px;
    			}
    		}
    	}

    }
}

	
</style>