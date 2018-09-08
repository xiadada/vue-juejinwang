<template>
	<div class="juejin-head clearfix">
		<ul class="head-left clearfix">
			<li class="juejin-title"><router-link :to="{name: 'homeLink'}" class="active-title"><img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"></router-link></li>
			<!-- <li class="home-head" @click="change1"><router-link :to="{name: 'homeLink'}" :class="{active: isActive == 'home'}">首页</router-link></li>
			<li class="boiling-point-head" @click="change2"><router-link :to="{name: 'boilingPointLink'}" :class="{active: isActive == 'boilingPoint'}">沸点</router-link></li>
			<li class="little-brochure"><router-link :to="{name: ''}">小册</router-link></li>
			<li class="open-source"><router-link :to="{name: ''}">开源库</router-link></li>
			<li class="activity"><router-link :to="{name: ''}">活动</router-link></li> -->
		
			<li v-for="(headItem,index) in headList" :class="headItem.class" @click="changeColor(headItem)" :key="index">
				<router-link :to="{name: headItem.toLink}" :class="{active: isActive == headItem.enName}">{{ headItem.cnName}}</router-link>
			</li>
		</ul>
		
		<ul class="head-right clearfix">
			<li class="input-container">
				<input type="text" placeholder="搜索掘金" class="search-input" @focus="searchFocus('searchJueJing')" @blur="searchBlur('searchJueJing')" :class="{active: isFocus.searchJueJing}">
				<div class="search-icon">
					<svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					    <!-- Generator: sketchtool 41.2 (35397) - http://www.bohemiancoding.com/sketch -->
					    <title>B97EB10A-8F34-4AB5-ABAF-41D933741ED0</title>
					    <desc>Created with sketchtool.</desc>
					    <defs></defs>
					    <g id="首页" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					        <g id="导航栏搜索框" transform="translate(-990.000000, -19.000000)" :fill="searchIconColor">
					            <g id="Group" transform="translate(990.000000, 19.000000)">
					                <path d="M12.986126,14.4003395 L16.2928932,17.7071068 C16.6834175,18.0976311 17.3165825,18.0976311 17.7071068,17.7071068 C18.0976311,17.3165825 18.0976311,16.6834175 17.7071068,16.2928932 L14.4003395,12.986126 C15.9603881,10.7573298 15.7452402,7.66401983 13.7548959,5.67367554 C11.5233285,3.44210815 7.90524292,3.44210815 5.67367554,5.67367554 C3.44210815,7.90524292 3.44210815,11.5233285 5.67367554,13.7548959 C7.66401983,15.7452402 10.7573298,15.9603881 12.986126,14.4003395 Z M7.0878891,12.3406823 C5.6373703,10.8901635 5.6373703,8.5384079 7.0878891,7.0878891 C8.5384079,5.6373703 10.8901635,5.6373703 12.3406823,7.0878891 C13.7912011,8.5384079 13.7912011,10.8901635 12.3406823,12.3406823 C10.8901635,13.7912011 8.5384079,13.7912011 7.0878891,12.3406823 Z" id="Combined-Shape"></path>
					            </g>
					        </g>
					    </g>
					</svg>
				</div>
			</li>
			<li class="write-article" @click="openDropDialog('writeArticle')" ref="writeArticle" id="writeArticle">
				<img src="../assets/write.png">
				<span class="write-article-text">写文章</span>
				<drop-dialog :is-show="getDropDialogOptions['writeArticle'].isShow" :top-distance="getDropDialogOptions['writeArticle'].topDistance" :left-distance="getDropDialogOptions['writeArticle'].leftDistance" ref="writeArticle-dropDialog" :id="getDropDialogOptions['writeArticle'].id">
		        	<div class="write-article-content" slot="drop-dialog-content">
		        		<h1 class="write-article-title">来掘金写文章，您将有机会</h1>
		        		<ul class="chance-list">
		            		<li class="chance-item">与超过 300 万开发者分享您的经验和观点</li>
		            		<li class="chance-item">被编辑推荐，获得更多曝光和关注</li>
		            		<li class="chance-item">加入专栏作者群，结识众多优秀开发者</li>
		          		</ul>
		          		<button class="start-write">开始写文章</button>
		      		</div>
			    </drop-dialog>
			</li>
			<li class="login-and-sign">
				<span class="login" @click="openDialog('isShowLoginPublish')">登录</span>
				<dialog-app :is-show="options.isShowDialog.isShowLoginPublish" :top-distance="options.topNum" @on-close="closeDialog('isShowLoginPublish')">
			    	<h1 class="head-title" slot="header">登录</h1>
			    	<div class="dialog-publish-main" slot="main" >
			    		<div class="login-hold">
			    			<input type="text" name="" placeholder="请输入手机号或邮箱" class="login-account" @focus="searchFocus('loginAccount')" @blur="searchBlur('loginAccount')" :class="{active: isFocus.loginAccount}">
			    		</div>
			    		<div class="login-hold">
			    			<input type="password" name="" placeholder="请输入密码" class="login-password" @focus="searchFocus('loginPassword')" @blur="searchBlur('loginPassword')" :class="{active: isFocus.loginPassword}">
			    		</div>
			    		<button class="login-btn">登录</button>
			    		<div class="no-account clearfix">
			    			<div class="login-link">
			    				<span class="no-account-text">没有账号？</span>
			    				<span class="register">注册</span>
			    			</div>
			    			<a href="https://juejin.im/reset-password" class="forget-password">忘记密码</a>
			    		</div>
			    	</div>
			    </dialog-app>
				<span class="split-point"></span>
				<span class="sign" @click="openDialog('isShowRegisterPublish')">注册</span>
				<dialog-app :is-show="options.isShowDialog.isShowRegisterPublish" :top-distance="options.topNum" @on-close="closeDialog('isShowRegisterPublish')">
			    	<h1 class="head-title" slot="header">注册</h1>
			    	<div class="dialog-publish-main" slot="main" >
			    		<div class="login-hold">
			    			<input type="text" name="" placeholder="请输入用户名" class="login-account" @focus="searchFocus('loginAccount')" @blur="searchBlur('loginAccount')" :class="{active: isFocus.loginAccount}">
			    		</div>
			    		<div class="login-hold">
			    			<input type="text" name="" placeholder="请输入手机号" class="login-telephone" @focus="searchFocus('loginTelephone')" @blur="searchBlur('loginTelephone')" :class="{active: isFocus.loginTelephone}">
			    		</div>
			    		<div class="login-hold">
			    			<input type="password" name="" placeholder="请输入密码" class="login-password" @focus="searchFocus('loginPassword')" @blur="searchBlur('loginPassword')" :class="{active: isFocus.loginPassword}">
			    		</div>
			    		<button class="login-btn">注册</button>
			    		<div class="no-account">
			    			<span class="had-account-login">已有账号登录</span>
			    		</div>
			    	</div>
			    </dialog-app>
			</li>
		</ul>
	</div>
</template>
<script>
	import Dialog from './Dialog'
	import DropDialog from './DropDialog'
	export default{
		data(){
			return {
				headList: [
					{
						cnName: '首页',
						enName: 'home',
						toLink: 'homeLink',
						class: 'home-head'
					},{
						cnName: '沸点',
						enName: 'boilingPoint',
						toLink: 'boilingPointLink',
						class: 'boiling-point-head'
					},{
						cnName: '小册',
						enName: 'littleBrochure',
						toLink: 'littleBrochureLink',
						class: 'little-brochure'
					},{
						cnName: '开源库',
						enName: 'openSource',
						toLink: 'openSourceLink',
						class: 'open-source'
					},{
						cnName: '活动',
						enName: 'activity',
						toLink: 'activityLink',
						class: 'activity'
					},
				],
				isActive: 'home',
				searchIconColor: '#C3CCD5',
				isFocus: {
					searchJueJing: false,
					loginAccount: false,
					loginPassword: false,
					loginTelephone: false
				},
				options: {
					isShowDialog: {
						isShowLoginPublish: false,
						isShowRegisterPublish: false,
					},
					// isShowDropDialog: {
					// 	//写文章下拉框的参数
					// 	writeArticle: {
					// 		isShow: false,
					// 		topDistance: null,
					// 		leftDistance: null
					// 	}

					// }
				}
			}
		},
		components: {
			'dialog-app': Dialog,
			'drop-dialog': DropDialog
		},
		computed: {
		    getDropDialogOptions:{
		    	//拿到下拉框的参数
		    	get(){
		    	  return this.$store.getters.getDropDialogOptions;
		    	},
		    	set(){

		    	}
		    }
		},
		methods: {
			changeColor(headItem){
				this.isActive = headItem.enName;
			},
			searchFocus(param){
				if(param == 'searchJueJing'){
					this.searchIconColor = '#007fff';
				}
				this.isFocus[param] = true;
			},
			searchBlur(param){
				if(param == 'searchJueJing'){
					this.searchIconColor = '#C3CCD5';
				}
				this.isFocus[param] = false;
			},
			openDialog(param){
		      this.options.isShowDialog[param] = true;
		    },
		    closeDialog(param){
		      this.options.isShowDialog[param] = false;
		      //把绑定的弹窗数组，设为false即可关闭弹窗
		    },
		     //利用vuex这样可以多个页面使用一个方法
		    openDropDialog(param){
		      var that = this;
		      this.$store.commit('openDropDialogs',{param: param,that: that})
		    }
		},
		mounted(){
			//编译好的Html挂载到页面完成后执行的事件钩子，该钩子函数执行时所有的DOM挂载和渲染都已完成，此钩子函数中一般会做一些ajax请求获取数据进行数据初始化
		}
	}
</script>
<style scoped lang="scss">
.juejin-head{
	max-width: 960px;
    margin: auto;
    height: 60px;
    .head-left{
    	float: left;
    	height: 60px;
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
    	height: 60px;
    	>li{
    		float: left;
    		color: #007fff;
    		cursor: pointer;
    		&.input-container{
    			position: relative;
    			margin-right: 34px;
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
    				&.active{
    					border: 1px solid #007fff;
    					background-color: #fff;
    				}
    			}
    			.search-icon{
    				position: absolute;
    				right: 5px;
    				top: 7px;
    			}
    		}
    		&.write-article{
    			// position: relative;
    			img{
    				position: relative;
    				top: 5px;
    			}
    			.write-article-text{
    				display: inline-block;
    				height: 20px;
    				line-height: 20px;
    				padding-right: 14px;
    				border-right: 2px solid #e1e1e1;
    				&:hover{
    					color: #0371df;
    				}
    			}
    			.write-article-content{
    				.write-article-title{
    					font-size: 18px;
					    line-height: 1;
					    font-weight: bold;
					    color: #000;
					    text-align: center;
					    margin-bottom: 20px;
    				}

    			}
    			.chance-list{
    				margin-left: 20px;
    				.chance-item{
    					list-style: disc;
    					color: #909090;
    					font-size: 14px;
    					line-height: 17px;
    					margin-bottom: 10px;
    				}
    			}
    			.start-write{
    				display: block;
				    margin: 20px auto 0;
				    background-color: #83c73a;
				    font-size: 14px;
				    padding: 10px 40px;
				    color: #fff;
				    border-radius: 2px;
				    border: none;
				    outline: none;
				    transition: background-color .3s,color .3s;
				    cursor: pointer;
    			}
    		}
    		&.login-and-sign{
    			.login{
    				display: inline-block;
    				padding-left: 14px;
    			}
    			.split-point{
    				display: inline-block;
    				margin-bottom: 4px;
    				width: 1px;
    				height: 1px;
    				border: 1px solid #007fff;
    			}
    			.sign{
    				&:hover{
    					color: #0371df;
    				}
    			}
    		}
    	}
    	.head-title{
			font-size: 20px;
			font-weight: bold;
		}
		.dialog-publish-main{
			.login-hold{
				height: 41px;
				line-height: 41px;
				margin-bottom: 8px;
				.login-account,.login-password,.login-telephone{
					padding: 12px 10px;
				    width: 100%;
				    border: 1px solid #e9e9e9;
				    border-radius: 2px;
				    outline: none;
				    &.active{
						border: 1px solid #007fff;
    					background-color: #fff;
				    }
				}
			}
			.login-btn{
				width: 100%;
			    height: 40px;
			    color: #fff;
			    background-color: #007fff;
			    border: none;
			    border-radius: 2px;
			    outline: none;
			    box-sizing: border-box;
			    cursor: pointer;
			}
			.no-account{
				margin: 5px 0 0;
    			font-size: 14px;
    			line-height: 19px;
    			text-align: center;
    			.login-link{
    				float: left;
    				.no-account-text{
	    				color: #8b9196;
	    			}
	    			.register{
	    				color: #007fff;
	    				cursor: pointer; 
	    			}
    			}
    			.forget-password{
    				float: right;
    				color: #007fff;
    				cursor: pointer; 
    			}
    			.had-account-login{
    				color: #007fff;
	    			cursor: pointer;
    			}
			}
		}

    }
}

	
</style>