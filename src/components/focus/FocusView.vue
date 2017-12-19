<template>
	<div>
		<mt-header fixed title="我的关注" class="head">
		  	<mt-button icon="back" slot="left" @click="goBack">微信</mt-button>
		  	<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		
		<mt-cell title="老吃太饱真会撑出十种甲方姜" label="老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方..." class="focus-first focus-list">
			<img slot="icon" src="../../assets/image/focus-1.png" width="92px" height="69px">
		</mt-cell>
		
		<mt-cell title="老吃太饱真会撑出十种甲方姜" label="老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方..." class=" focus-list">
			<img slot="icon" src="../../assets/image/focus-2.png" width="92px" height="69px">
		</mt-cell>
		
		<mt-cell title="老吃太饱真会撑出十种甲方姜" label="老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方..." class=" focus-list">
			<img slot="icon" src="../../assets/image/focus-3.png" width="92px" height="69px">
		</mt-cell>
		
		<mt-cell title="老吃太饱真会撑出十种甲方姜" label="老吃太饱真会撑出十种甲方姜老吃太饱真会撑出十种甲方..." class=" focus-list">
			<img slot="icon" src="../../assets/image/focus-4.png" width="92px" height="69px">
		</mt-cell>
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
	.focus-first{
		margin-top: 55px;
	}
	.focus-list{
		padding: 10px 3px;
		border-top: 1px solid #e1e1e1;
		border-bottom: 1px solid #e1e1e1;
		margin-bottom: 8px;
	}
	.mint-cell-wrapper img{
		float: left;
		margin-right: 13px;
	}
</style>