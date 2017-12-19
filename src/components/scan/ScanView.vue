<template>
	<div>
		<mt-header fixed title="扫一扫" class="head">
			<mt-button icon="back" slot="left" @click="goBack"></mt-button>
		</mt-header>
		
		<div>
			<div id='scan_receptacle' class="scan-receptacle">
				<router-link to="/shopping">
	    			跳转
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	/*var scan = new plus.barcode.Barcode('scan_receptacle');
	scan.onmarked = function(data){
		
	};*/
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
</style>