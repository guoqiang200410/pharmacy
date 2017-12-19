<template>
	<div id="app">
		<router-view></router-view>
		<FootView></FootView>
	</div>
</template>

<script>
import FootView from './components/foot/FootView.vue'
export default {
	components:{
		FootView
	}
}

</script>

<style>
		body{
			background: #f5f5f5;
		}
</style>
