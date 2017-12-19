<template>
	
	<mt-tabbar fixed>
		
		<mt-tab-item id="首页">
			<router-link to="/home">
				<img class="barImg" src="../../assets/image/foot-home.png"/><br />
				首页
			</router-link>
		</mt-tab-item>
	
	
		<mt-tab-item id="讲堂">
			<router-link to="/lecture">
				<img class="barImg" src="../../assets/image/foot-lecture.png"/><br />
				讲堂
			</router-link>
		</mt-tab-item>
	
	
		<mt-tab-item id="我的">
			
			<router-link to="/mine">
				<img class="barImg" src="../../assets/image/foot-mine.png"/><br />
				我的
			</router-link>
		</mt-tab-item>
		
	</mt-tabbar>
		
</template>

<script>

</script>

<style scoped>
	.barImg{
		width: 20px;
		margin-bottom: 2px;
	}
	.mint-tabbar a{
		color: #626368;
	}
</style>