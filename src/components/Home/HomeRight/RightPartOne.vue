<template>
	<div class="home-right-part-one">
		<p class="part-one-title">掘金 - juejin.im</p>
		<p class="part-one-desc">一个帮助开发者成长的社区</p>
		<p class="part-one-sign">现在注册，送你<a href="/books">45元</a>买小册</p>
		<div class="sign-up-input">
			<input class="user-info" type="text" name="" placeholder="用户名">
			<input class="user-info" type="text" name="" placeholder="手机号">
			<input class="user-info" type="text" name="" placeholder="密码（不少于6位）">
			<button class="sign-up-now">立即注册</button>
		</div>
		<div class="third-party-login">
			<span class="third-party-login-text">第三方登录：</span>
			<img src="/static/img/weibo.png" alt="">
			<img src="/static/img/GitHub.png" alt="">
			<img src="/static/img/wechat.png" alt="">
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {}
		}
	}
</script>
<style scoped lang="scss">
.home-right-part-one{
	background-color: #fff;
    border-radius: 2px;
    margin-bottom: 24px;
    padding: 1.333rem;
    .part-one-title{
    	font-size: 14px;
    	font-weight: bold;
    	margin-bottom: 8px;
    }
    .part-one-desc{
    	font-size: 14px;
    	color: #2e3135;
    	margin-bottom: 8px;
    }
    .part-one-sign{
    	font-size: 14px;
    	color: #8f969c;
		margin-bottom: 16px;
		a{
			margin-left: 5px;
			margin-right: 5px;
			color: #007fff;
		}
    }
    .sign-up-input{
    	.user-info{
    		height: 38px;
    		width: 100%;
		    background-color: #fbfbfb;
		    border: 1px solid #f4f4f4;
		    border-radius: 2px;
		    outline: none;
		    margin-bottom: .833rem;
		    padding-left: 8px;
		    font-size: 13px;
    	}
    	.sign-up-now{
    		padding: 8px 0;
			width: 100%;
			font-size: 14px;
			background-color: #007fff;
		    color: #fff;
		    border-radius: 2px;
		    border: none;
		    outline: none;
		    transition: background-color .3s,color .3s;
		    cursor: pointer;
		    &:hover{
				background-color: #0371df;
		    }
    	}
    }
    .third-party-login{
    	margin-top: 18px;
    	.third-party-login-text{
			font-size: 12px;
			color: #8f969c;
			vertical-align: top;
		} 
    	img{
    		display: inline-block;
    		margin-left: 15px;
			cursor: pointer;
    	}
    	
    }
}
</style>