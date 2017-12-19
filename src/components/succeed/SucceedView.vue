<template>
	<div>
		<mt-header fixed title="购买成功" class="head">
	    	<mt-button icon="back" slot="left" @click="goBack">微信</mt-button>
	    	<mt-button icon="more" slot="right"></mt-button>
	  	</mt-header>
	  	<p class="suucced-icon">
	  		<img src="../../assets/image/succeed-1.png"/>
	  	</p>
	  	<p class="suucced-title">购买成功</p>
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
	.suucced-icon{
		text-align: center;
		margin-top: 180px;
	}
	.suucced-icon img{
		width: 75px;
		height: 75px;
	}
	.suucced-title{
		text-align: center;
		font-size: 18px;
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