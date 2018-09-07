<template>
	<div class="dialog" v-if="isShow">
		<!-- 外层的遮罩，点击事件用来关闭弹窗，isShow控制弹窗显示，隐藏的props -->
		<div class="dialog-cover" v-if="isShow"></div>
		<transition name="drop">
			<div class="dialog-content" :style="{top:topDistance+'%',width:widNum+'px',left:leftSite+'%',padding:pd+'px'}" v-if="isShow">
				<div class="dialog-head">
					<!-- 弹窗头部 title -->
					<slot name="header">提示信息</slot>
				</div>
				<div class="dialog-main">
					<!-- 弹窗的内容 -->
					<slot name="main">弹窗内容</slot>
				</div>
				<!-- 弹窗关闭按钮 -->
				<div class="head-close" @click="closeMyself">X</div>
				<div class="foot-content">
					<div class="foot-title">第三方账号登录：</div>
					<div class="foot-login-link">
						<a href="https://api.weibo.com/oauth2/authorize?client_id=162709412&response_type=code&redirect_uri=https%3a%2f%2fgold.xitu.io%2foauth%2flogin&state=weibo" target="_blank">
							<img src="/static/img/weibo.png">
						</a>
						<a href="https://open.weixin.qq.com/connect/qrconnect?appid=wx1f78f78832fc2c16&redirect_uri=https%3a%2f%2fgold.xitu.io%2foauth%2flogin&response_type=code&scope=snsapi_login&state=wechat#wechat_redirect" target="_blank">
							<img src="/static/img/wechat.png">
						</a>
						<a href="https://github.com/login/oauth/authorize?client_id=b9c43dc2e807f3b31c38&state=github&redirect_uri=http%3a%2f%2fgold.xitu.io%2foauth%2flogin" target="_blank">
							<img src="/static/img/GitHub.png">
						</a>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		isShow: {
			//弹窗组件是否显示，默认不显示
			type: Boolean,
			default: false,
			require: true //必须
		},
		//下面这些属性会绑定到div上
		widNum: {
			//内容宽度
			type: Number,
			default: 318
		},
		leftSite: {
			//左定位
			type: Number,
			default: 50
		},
		topDistance: {
			//top上边距
			type: Number,
			default: 50
		},
		pd: {
			//上内边距
			type: Number,
			default: 20
		}
	},
	methods: {
		closeMyself(){
			this.$emit("on-close");
			//如果需要传参的话，可以在“on-close”后面再加参数，然后在父组件的函数里接收就可以了
		}
	}
}
	
</script>

<style lang="scss" scoped>
*{
	padding: 0;
	margin: 0;
	text-decoration: none;
	list-style: none;
	box-sizing: border-box;
}
//最外层设置position定位
.dialog{
	// position: relative;
	position: fixed;
	display: inline-block;
	color: #2e2c2d;
	font-size: 16px;
}
//遮罩，设置背景层，z-index值要足够大确保能覆盖，高度，宽度设置满，做到全屏遮罩
.dialog-cover{
	background: rgba(0,0,0,0.3);
	position: fixed;
	z-index: 200;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
//内容层z-index要比遮罩层大
.dialog-content{
	position: fixed;
	transform: translate(-50%,-50%);
	z-index: 300;
	background-color: #fff;
	border-radius: 2px;
	.dialog-head{
		line-height: 24px;
		font-size: 20px;
		margin: 0 0 20px;
		font-weight: bold;
	}
	.head-close{
		position: absolute;
		top: 20px;
		right: 20px;
		text-align: center;
		cursor: pointer;
    	opacity: .4;
    	line-height: 24px;
	}
	.foot-content{
		margin-top: 15px;
	    line-height: 19px;
	    color: #8b9196;
	    font-size: 15px;
	    .foot-login-link{
	    	margin-top: 15px;
	    	padding: 0 20px;
	    	a{
	    		display: inline-block;
	    		width: 45px;
	    		height: 45px;
	    		text-align: center;
	    		line-height: 45px;
	    		margin-right: 46px;
	    		 border-radius: 50%;
			    background-color: #f4f8fb;
	    		&:last-child{
	    			margin-right: 0;
	    		}
	    	}
	    }
	}
}
</style>