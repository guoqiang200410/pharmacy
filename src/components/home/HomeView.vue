<template>
	
	<div>
		<mt-header fixed title="销售记录" class="head">
			
			
				<mt-button icon="more" slot="right" @click="show=!show">
					<div class="head-unfurled" v-show="show">
						<router-link to="/scan" tag="li">
							<img src="../../assets/image/head-scan.png" width="18px"/>
							扫码加药代
						</router-link>
						<router-link to="/scan" tag="li">
							<img src="../../assets/image/head-doctor.png" width="18px"/>
							输入医生邀请码
						</router-link>
					</div>
				</mt-button>
				
			
	  	</mt-header>
	  	
	  	<mt-swipe :auto="4000" class="swiper">
			<mt-swipe-item class="img">
				<img src="../../assets/image/banner.png"/>
			</mt-swipe-item>
			<mt-swipe-item class="img">
				<img src="../../assets/image/banner.png"/>
			</mt-swipe-item>
			<mt-swipe-item class="img">
				<img src="../../assets/image/banner.png"/>
			</mt-swipe-item>
		</mt-swipe>
		
		<mt-navbar class="page-part" v-model="selected">
			<mt-tab-item id="1">本周</mt-tab-item>
			<mt-tab-item id="2">历史</mt-tab-item>
		</mt-navbar>

		<!-- tabcontainer -->  
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<mt-cell class="list-cont list-first" is-link>
					<div class="list-icon">
						<img src="../../assets/image/home-drug-active.png" width="35px"/>
					</div>
					<div class="list-date">
						<p>周四<i class="new-orange-txt">2015.6.23</i></p>
						<p class="list-progress">
							<span class="new-orange"></span>
						</p>
					</div>
					<div class="new-orange-txt">30盒</div>
				</mt-cell>
				
				<mt-cell class="list-cont" is-link>
					<div class="list-icon">
						<img src="../../assets/image/home-drug-visited.png" width="35px"/>
					</div>
					<div class="list-date">
						<p>周三<i>2015.6.22</i></p>
						<p class="list-progress">
							<span class="old-gray"></span>
						</p>
					</div>
					<div>65盒</div>
				</mt-cell>
				
				<mt-cell class="list-cont" is-link>
					<div class="list-icon">
						<img src="../../assets/image/home-drug-visited.png" width="35px"/>
					</div>
					<div class="list-date">
						<p>周二<i>2015.6.21</i></p>
						<p class="list-progress">
							<span class="old-gray"></span>
						</p>
					</div>
					<div>58盒</div>
				</mt-cell>
				
				<mt-cell class="list-cont" is-link>
					<div class="list-icon">
						<img src="../../assets/image/home-drug-visited.png" width="35px"/>
					</div>
					<div class="list-date">
						<p>周一<i>2015.6.20</i></p>
						<p class="list-progress">
							<span class="old-gray"></span>
						</p>
					</div>
					<div>87盒</div>
				</mt-cell>
	    	</mt-tab-container-item>
	    	
	    	
	    	
	    	
	    	
	    	<mt-tab-container-item id="2">
	    		<mt-cell class="list-cont list-first" is-link>
					<div class="list-icon">
						<img src="../../assets/image/home-drug-visited.png" width="35px"/>
					</div>
					<div class="list-date">
						<p>周日<i>2015.6.23</i></p>
						<p class="list-progress">
							<span class="old-gray"></span>
						</p>
					</div>
					<div>105盒</div>
				</mt-cell>
	    		
	    		<mt-cell class="list-cont" is-link>
					<div class="list-icon">
						<img src="../../assets/image/home-drug-visited.png" width="35px"/>
					</div>
					<div class="list-date">
						<p>周六<i>2015.6.23</i></p>
						<p class="list-progress">
							<span class="old-gray"></span>
						</p>
					</div>
					<div>87盒</div>
				</mt-cell>
	    		
	    		<mt-cell class="list-cont" is-link>
					<div class="list-icon">
						<img src="../../assets/image/home-drug-visited.png" width="35px"/>
					</div>
					<div class="list-date">
						<p>周五<i>2015.6.23</i></p>
						<p class="list-progress">
							<span class="old-gray"></span>
						</p>
					</div>
					<div>65盒</div>
				</mt-cell>
	    		
	        	<mt-cell class="list-cont" is-link>
					<div class="list-icon">
						<img src="../../assets/image/home-drug-visited.png" width="35px"/>
					</div>
					<div class="list-date">
						<p>周四<i>2015.6.23</i></p>
						<p class="list-progress">
							<span class="old-gray"></span>
						</p>
					</div>
					<div>30盒</div>
				</mt-cell>
				
				<mt-cell class="list-cont" is-link>
					<div class="list-icon">
						<img src="../../assets/image/home-drug-visited.png" width="35px"/>
					</div>
					<div class="list-date">
						<p>周三<i>2015.6.22</i></p>
						<p class="list-progress">
							<span class="old-gray"></span>
						</p>
					</div>
					<div>65盒</div>
				</mt-cell>
				
				<mt-cell class="list-cont" is-link>
					<div class="list-icon">
						<img src="../../assets/image/home-drug-visited.png" width="35px"/>
					</div>
					<div class="list-date">
						<p>周二<i>2015.6.21</i></p>
						<p class="list-progress">
							<span class="old-gray"></span>
						</p>
					</div>
					<div>58盒</div>
				</mt-cell>
				
				<mt-cell class="list-cont" is-link>
					<div class="list-icon">
						<img src="../../assets/image/home-drug-visited.png" width="35px"/>
					</div>
					<div class="list-date">
						<p>周一<i>2015.6.20</i></p>
						<p class="list-progress">
							<span class="old-gray"></span>
						</p>
					</div>
					<div>87盒</div>
				</mt-cell>
				
				
	    	</mt-tab-container-item>
		</mt-tab-container>
		
		
		
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				selected: '1',
				show:false
			}
		}
	}
</script>

<style scoped>
	body{
		background: #f5f5f5;
	}
	header{
		background: #2ca7d8;
		position: relative;
	}
	.mint-button{
		overflow: inherit;
	}
	.mint-header-button{
		position: relative;
	}
	.head-unfurled{
		position: absolute;
		top: 50px;
		right: -5px;
		width: 155px;
		height: 100px;
		background: #fff;
		border: 1px solid #e1e1e1;
		border-radius: 10px;
		color: #000;
	}
	.head-unfurled li{
		list-style: none;
		text-align: left;
		height: 50%;
		border-bottom: 1px solid #e1e1e1;
		line-height: 50px;
		width: 95%;
		margin: 0 auto;
		position: relative;
		text-indent: 40px;
	}
	.head-unfurled li img{
		position: absolute;
		top: 50%;
		left: 7px;
		margin-top: -9px;
	}
	.mint-swipe{
		height: 177px;
		margin-top: 30px;
	}
	.mint-swipe-item img{
		width: 100%;
	}
	.mint-navbar{
		border-top: 1px solid #e1e1e1;
		border-bottom: 1px solid #e1e1e1;
	}
	.mint-navbar .mint-tab-item.is-selected{
		border-bottom: 2px solid #6dba42;
		color: #6dba42;
		margin-bottom: 0px;
	}
	.mint-tab-item{
		color: #000;
	}
	.list-first{
		margin-top: 8px;
	}
	.list-cont{
		position: relative;
		padding: 10px;
	}
	.list-icon{
		position: absolute;
		top: 50%;
		left: 2.5%;
		margin-top: -17px;
	}
	.list-date{
		position: absolute;
		top: 50%;
		left: 13%;
		margin-top: -17px;
		width: 70%;
	}
	.list-date p{
		font-size: 16px;
		margin-top: 2px;
	}
    .list-date p i{
		font-size: 14px;
		font-style: normal;
		margin-left: 8px;
	}
	.list-progress{
		position: relative;
		width: 80%;
		height: 6px;
		border-radius: 5px;
	}
	.list-progress span{
		position: absolute;
		width: 50%;
		height: 6px;
		border-radius: 5px;
		top: 0px;
		left: 0px;
	}
	.new-orange-txt{
		color: #ff6b3d;
	}
	.new-orange{
		color: #ff6b3d;
		background: #ff6b3d;;
	}
	.old-gray{
		background: #cdcdcd;
	}
</style>