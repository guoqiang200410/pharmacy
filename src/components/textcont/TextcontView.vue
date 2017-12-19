<template>
	<div>
		<mt-header fixed title="眼科医疗设备进口替代将..." class="head">
			<mt-button icon="back" slot="left" @click="goBack">微信</mt-button>
			<mt-button icon="more" slot="right"></mt-button>
	  	</mt-header>
	  	<div class="article">
	  		<p class="article-title">眼科医疗设备进口替代将提速,进口化替代步伐正在加快</p>
	  		<p class="article-date">
	  			<span>发布日期：2015-12-21</span>
	  			<span>阅读量：1000</span>
	  		</p>
	  		<p class="article-cont">医药网3月18日讯　17日，第十六届国际眼科学学术会议在上海举行，此次会议全面展示眼科诊断、治疗新技术，其中涉及器材设备以</p>
	  		<p class="article-cont">医药网3月18日讯　17日，第十六届国际眼科学学术会议在上海举行，此次会议全面展示眼科诊断、治疗新技术，其中涉及器材设备以</p>
	  		<p class="article-cont">医药网3月18日讯　17日，第十六届国际眼科学学术会议在上海举行，此次会议全面展示眼科诊断、治疗新技术，其中涉及器材设备以</p>
	  		<p class="article-cont">医药网3月18日讯　17日，第十六届国际眼科学学术会议在上海举行，此次会议全面展示眼科诊断、治疗新技术，其中涉及器材设备以</p>
	  		<p class="article-cont">医药网3月18日讯　17日，第十六届国际眼科学学术会议在上海举行，此次会议全面展示眼科诊断、治疗新技术，其中涉及器材设备以</p>
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
	.article{
		margin-top: 40px;
		width: 100%;
		padding: 5%;
	}
	.article-title{
		font-size: 20px;
		color: #000;
		font-weight: bold;
		line-height: 25px;
	}
	.article-date{
		height: 20px;
	}
	.article-date span:first-child{
		float: left;
	}
	.article-date span:last-child{
		float: right;
	}
	.article-cont{
		font-size: 15px;
		color: #444;
		line-height: 25px;
		text-indent: 31px;
	}
</style>