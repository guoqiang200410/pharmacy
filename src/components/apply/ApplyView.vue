<template>
	<div>
		<mt-header fixed title="进药申请" class="head">
	    	<mt-button icon="back" slot="left" @click="goBack">微信</mt-button>
	    	<mt-button icon="more" slot="right"></mt-button>
	  	</mt-header>
	  	
	  	<div class="apply-list apply-first">
	  		<div class="list-top">
	  			<img src="../../assets/image/apply-shop1.png" width="92px" height="79px"/>
		  		<div>
		  			<p class="list-mName">白云山伤风感冒胶囊</p>
		  			<p>购买时间：2015-12-15<span>两个疗程</span></p>
		  			<p class="list-quantity">
		  				<span>药品疗程：</span>
		  				<button>-</button>
		  				<input type="text" value="2" />
		  				<button>+</button>
		  			</p>
		  		</div>
	  		</div>
		  	
		  	<div class="list-bottom">
		  		<p>总价<span>￥800.45</span></p>
		  		<router-link to="/succeed">
		  			<button>确认</button>
		  		</router-link>
		  	</div>
	  	</div>
	  	
	  	<div class="apply-list">
	  		<div class="list-top">
	  			<img src="../../assets/image/apply-shop1.png" width="92px" height="79px"/>
		  		<div>
		  			<p class="list-mName">白云山伤风感冒胶囊</p>
		  			<p>购买时间：2015-12-15<span>两个疗程</span></p>
		  			<p class="list-quantity">
		  				<span>药品疗程：</span>
		  				<button>-</button>
		  				<input type="text" value="2" />
		  				<button>+</button>
		  			</p>
		  		</div>
	  		</div>
		  	
		  	<div class="list-bottom">
		  		<p>总价<span>￥800.45</span></p>
		  		<router-link to="/succeed">
		  			<button>确认</button>
		  		</router-link>
		  	</div>
	  	</div>
	  	
	  	<div class="apply-list">
	  		<div class="list-top">
	  			<img src="../../assets/image/apply-shop1.png" width="92px" height="79px"/>
		  		<div>
		  			<p class="list-mName">白云山伤风感冒胶囊</p>
		  			<p>购买时间：2015-12-15<span>两个疗程</span></p>
		  			<p class="list-quantity">
		  				<span>药品疗程：</span>
		  				<button>-</button>
		  				<input type="text" value="2" />
		  				<button>+</button>
		  			</p>
		  		</div>
	  		</div>
		  	
		  	<div class="list-bottom">
		  		<p>总价<span>￥800.45</span></p>
		  		<router-link to="/succeed">
		  			<button>确认</button>
		  		</router-link>
		  	</div>
	  	</div>
	  	
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
	header .mint-header-title{
		font-size: 18px;
	}
	.setCode{
		width: 65%;
		margin: 0 auto;
		margin-top: 100px;
	}
	.apply-first{
		margin-top: 55px;
	}
	.apply-list{
		width: 100%;
		padding-left: 5%;
		padding-top: 15px;
		background: #fff;
		border-top: 1px solid #e1e1e1;
		border-bottom: 1px solid #e1e1e1;
		margin-bottom: 8px;
	}
	.list-top{
		border-bottom: 1px solid #e1e1e1;
		height: 95px;
	}
	.list-top img{
		float: left;
		margin-right: 15px;
	}
	.list-top p{
		margin: 0;
	}
	.list-quantity span{
		float: left;
	}
	.list-quantity button{
		height: 22px;
		width: 22px;
		float: left;
		padding: 0px;
		border-radius: 3px 0px 0px 3px;
	}
	.list-quantity button:last-child{
		border-radius: 0px 3px 3px 0px;
	}
	.list-quantity input{
		height: 22px;
		float: left;
		width: 30px;
		border-radius: 0px;
		padding: 0px;
		text-align: center;
		font-size: 13px;
	}
	.list-quantity:after{
		clear: both;
	}
	.list-top p:nth-child(1){
		font-size: 16px;
		color: #000;
		padding: 3px 0px;
	}
	.list-top p:nth-child(2){
		padding-bottom: 10px;
	}
	.list-top p:nth-child(2) span{
		margin-left: 15px;
	}
	
	.list-bottom{
		clear: both;
		height: 45px;
	}
	.list-bottom p{
		float: left;
		line-height: 45px;
	}
	.list-bottom p span{
		color: #ff6b3d;
		font-size: 15px;
	}
	.list-bottom button{
		float: right;
		margin-top: 7px;
		height: 26;
		width: 64px;
		background: #F08C34;
		color: #fff;
		border-radius: 50px;
		border: 0px;
		margin-right: 2.5%;
	}
</style>