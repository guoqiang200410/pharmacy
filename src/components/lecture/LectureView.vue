<template>
	<div>
		<mt-header fixed title="健康百科" class="head">
	  	</mt-header>
	  	
	  	<mt-navbar v-model="selected" class="le-page-part">
		  <mt-tab-item id="1">最新资讯</mt-tab-item>
		  <mt-tab-item id="2">健康专题</mt-tab-item>
		  <mt-tab-item id="3">个人收藏</mt-tab-item>
		</mt-navbar>
		
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<router-link to="/textcont">
					<div class="le-listCont">
						<p class="le-listTitle">乙肝的共识和误区(上)</p>
						<div class="le-listDescribe">
							<img src="../../assets/image/lecture-img1.png" width="88px" height="58px" />
							<p>两性健康误区多，搜索引擎太坑爹，电 视广告瞎忽悠，信谁？</p>
							<span class="listClass">专题</span>
						</div>
					</div>
				</router-link>
				
				<router-link to="/textcont">
					<div class="le-listCont">
						<p class="le-listTitle">乙肝的共识和误区(上)</p>
						<div class="le-listDescribe">
							<img src="../../assets/image/lecture-img1.png" width="88px" height="58px" />
							<p>两性健康误区多，搜索引擎太坑爹，电 视广告瞎忽悠，信谁？</p>
							<span class="listClass">专题</span>
						</div>
					</div>
				</router-link>
					
				<router-link to="/textcont">
					<div class="le-listCont">
						<p class="le-listTitle">乙肝的共识和误区(上)</p>
						<div class="le-listDescribe">
							<img src="../../assets/image/lecture-img1.png" width="88px" height="58px" />
							<p>两性健康误区多，搜索引擎太坑爹，电 视广告瞎忽悠，信谁？</p>
							<span class="listClass">专题</span>
						</div>
					</div>
				</router-link>
				
				<router-link to="/textcont">
					<div class="le-listCont">
						<p class="le-listTitle">乙肝的共识和误区(上)</p>
						<div class="le-listDescribe">
							<img src="../../assets/image/lecture-img1.png" width="88px" height="58px" />
							<p>两性健康误区多，搜索引擎太坑爹，电 视广告瞎忽悠，信谁？</p>
							<span class="listClass">专题</span>
						</div>
					</div>
				</router-link>
				
				<router-link to="/textcont">
					<div class="le-listCont">
						<p class="le-listTitle">乙肝的共识和误区(上)</p>
						<div class="le-listDescribe">
							<img src="../../assets/image/lecture-img1.png" width="88px" height="58px" />
							<p>两性健康误区多，搜索引擎太坑爹，电 视广告瞎忽悠，信谁？</p>
							<span class="listClass">专题</span>
						</div>
					</div>
				</router-link>
			</mt-tab-container-item>
			<mt-tab-container-item id="2" class="le-page-partMargin bgWhite">
				
				<router-link to="/textcont">
					<div class="le-listCont bgWHite-border">
						<p class="le-listTitle">【专题】男性&女性</p>
						<div class="le-listDescribe">
							<img src="../../assets/image/lecture-img1.png" width="88px" height="58px" />
							<p>两性健康误区多，搜索引擎太坑爹，电 视广告瞎忽悠，信谁？</p>
							<span class="listProject">2014-08-13</span>
						</div>
					</div>
				</router-link>
				
				<router-link to="/textcont">
					<div class="le-listCont bgWHite-border">
						<p class="le-listTitle">【专题】男性&女性</p>
						<div class="le-listDescribe">
							<img src="../../assets/image/lecture-img1.png" width="88px" height="58px" />
							<p>两性健康误区多，搜索引擎太坑爹，电 视广告瞎忽悠，信谁？</p>
							<span class="listProject">2014-08-13</span>
						</div>
					</div>
				</router-link>
				
				<router-link to="/textcont">
					<div class="le-listCont bgWHite-border">
						<p class="le-listTitle">【专题】男性&女性</p>
						<div class="le-listDescribe">
							<img src="../../assets/image/lecture-img1.png" width="88px" height="58px" />
							<p>两性健康误区多，搜索引擎太坑爹，电 视广告瞎忽悠，信谁？</p>
							<span class="listProject">2014-08-13</span>
						</div>
					</div>
				</router-link>
				
				<router-link to="/textcont">
					<div class="le-listCont bgWHite-border">
						<p class="le-listTitle">【专题】男性&女性</p>
						<div class="le-listDescribe">
							<img src="../../assets/image/lecture-img1.png" width="88px" height="58px" />
							<p>两性健康误区多，搜索引擎太坑爹，电 视广告瞎忽悠，信谁？</p>
							<span class="listProject">2014-08-13</span>
						</div>
					</div>
				</router-link>
				
				<router-link to="/textcont">
					<div class="le-listCont bgWHite-border">
						<p class="le-listTitle">【专题】男性&女性</p>
						<div class="le-listDescribe">
							<img src="../../assets/image/lecture-img1.png" width="88px" height="58px" />
							<p>两性健康误区多，搜索引擎太坑爹，电 视广告瞎忽悠，信谁？</p>
							<span class="listProject">2014-08-13</span>
						</div>
					</div>
				</router-link>
			</mt-tab-container-item>
			<mt-tab-container-item id="3" class="list-fav">
				<div>
					<p class="leFav">
						<img src="../../assets/image/no-fav.png" width="183px" height="183px"/>
					</p>
					<p class="leFavTit">未收藏咨询</p>
				</div>
			</mt-tab-container-item>
		</mt-tab-container>
	    	
	    	
	</div>
		
  	
  	
</template>

<script>
	export default{
		data(){
			return{
				selected: '1'
			}
		}
	}
</script>

<style scoped>
	.head{
		background: #2ca7d8;
	}
	.le-page-part{
		margin-top: 40px;
		height: 40px;
		line-height: 40px;
		border: 1px solid #bcc1c4;
	}
	.le-page-partMargin{
		margin-top: 10px;
	}
	.mint-navbar .mint-tab-item.is-selected{
		border-bottom: 0px;
		color: #f08c34;
		margin-bottom: 0px;
	}
	.mint-tab-item{
		color: #6e7b86;
	}
	
	.le-listCont{
		position: relative;
		width: 100%;
		height: 100px;
	}
	.le-listDescribe{
	}
	.le-listDescribe img{
		float: left;
		margin-right: 10px;
	}
	.listClass{
		padding: 2px 14px;
		background: #f08c34;
		color: #fff;
		border-radius: 5px;
		text-align: center;
		font-size: 12px;
		position: absolute;
		bottom: 10px;
		right: 5%;
	}
	.mint-tab-container-item{
		background: #ecf1f0;
		padding-left: 5%;
	}
	
	.le-listTitle{
		font-size: 16px;
		color: #000;
		margin-bottom: 7px;
		margin-top: 15px;
	}
	
	
	.leFav{
		padding-top: 55px;
	}
	.leFav{
		text-align: center;
		color: #bebebe;
		font-size: 16px;
		margin-bottom: 20px;
	}
	.leFavTit{
		text-align: center;
	}
	.listProject{
		position: absolute;
		bottom: 10px;
		right: 5%;
		font-size: 13px;
		color: #8c8c8c;
	}
	.bgWhite{
		background: #fff;
		border-top: 1px solid #d4dadc;
		border-bottom: 1px solid #d4dadc;
	}
	.bgWHite-border{
		border-bottom: 1px solid #d4dadc;
	}
	.list-fav{
		background: #f5f5f5;
	}
</style>