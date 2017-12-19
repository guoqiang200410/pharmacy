<template>
	<div>
		<mt-header fixed title="账户设置" class="head">
	    	<mt-button icon="back" slot="left" @click="goBack">微信</mt-button>
	    	<mt-button icon="more" slot="right"></mt-button>
	  	</mt-header>
	  	
	  	<div class="setCode">
	  		<img src="../../assets/image/set-code.png" width="100%" />
	  		<p class="inviteCode">邀请码：2345</p>
	  	</div>
	  	
	  	<div class="link-title">
	  		<img src="../../assets/image/set-link.png" width="16px"/>链接地址
	  	</div>
	  	
	  	<div class="link-dress">
	  		<a href="http://123.56.102.141/hlc/webapp/index">
	  			http://123.56.102.141/hlc/webapp/index
	  		</a>
	  	</div>
	  	
	  	<mt-button class="recommend-btn">推荐</mt-button>
	  	
	  	
	</div>
		
</template>

<script>
	export default{
		methods:{
			goBack(){
				window.history.go(-1)
			}
		}
	}
</script>

<style scoped>
	header{
		background: #2ca7d8;
	}
	.setCode{
		width: 65%;
		margin: 0 auto;
		margin-top: 100px;
	}
	.inviteCode{
		font-size: 18px;
		color: #000;
		text-align: center;
		margin-top: 15px;
	}
	.link-title{
		width: 85%;
		margin: 0 auto;
		color: #999;
		margin-top: 30px;
	}
	.link-title img{
		margin-right: 5px;
	}
	
	.link-dress{
		width: 85%;
		margin: 0 auto;
		margin-top: 15px;
		background: #eee;
		border: 1px solid #dcdcdc;
		border-radius: 5px;
		height: 45px;
		line-height: 45px;
		text-align: center;
		text-decoration: underline;
		font-size: 19px;
	}
	.recommend-btn{
		width: 85%;
		height: 45px;
		background: #f08c34;
		color: #fff;
		margin-left: 7.5%;
		margin-top: 30px;
	}
</style>