<template>
	<div>
		<mt-header fixed title="医生档案" class="head">
			<mt-button icon="back" slot="left" @click="goBack">微信</mt-button>
			<mt-button icon="more" slot="right"></mt-button>
	  	</mt-header>
		
		<div class="mine-first">
    		<mt-cell title="头像" is-link class="message-head">
				<span>
					<img src="../../assets/image/mine-head.png" height="55px"/>
				</span>
			</mt-cell>
			<mt-cell title="姓名" is-link>
				<span>张大大</span>
			</mt-cell>
			<mt-cell title="昵称" is-link>
				<span>静雅居士</span>
			</mt-cell>
    	</div>
    	
    	<div>
    		<mt-cell title="性别" is-link>
				<span>男</span>
			</mt-cell>
			<mt-cell title="出生年月" is-link>
				<span>1989.12.12</span>
			</mt-cell>
    	</div>
    	
    	<mt-button class="save-btn">保存</mt-button>
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
	.mine-first{
		margin-top: 60px;
		margin-bottom: 15px;
	}
	.save-btn{
		width: 95%;
		height: 45px;
		background: #f08c34;
		color: #fff;
		margin-left: 2.5%;
		margin-top: 20px;
	}
	.message-head{
		padding: 7px 0;
	}
</style>