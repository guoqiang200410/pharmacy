<template>
	<div>
		<mt-header fixed title="账户设置" class="head">
	    	<mt-button icon="back" slot="left"></mt-button>
	  	</mt-header>
	  	
	  	<ul class="mui-table-view">
		    <li class="mui-table-view-cell mui-media">
		        <a href="javascript:;">
		        	<router-link to="/message">
		        		<img class="mui-media-object mui-pull-left" src="../../assets/image/mine-head.png" width="55px">
		        	</router-link>
		            
		            <div class="mui-media-body">13920484929
		                <p class='mui-ellipsis'>三聚药业</p>
		            </div>
		            <span class="Qr-code">
		            	<img src="../../assets/image/Qr-code.png" width="40px"/>
		            </span>
		        </a>
		    </li>
    	</ul>
    	
    	<div class="mine-first">
    		<router-link to="/message">
	    		<mt-cell title="个人信息" is-link>
	    				
						<span></span>
						<img slot="icon" src="../../assets/image/mine-list1.png" width="24" height="24">
	    			
				</mt-cell>
    		</router-link>
    		
    		<router-link to="/focus">
				<mt-cell title="我的关注" is-link>
					<span></span>
					<img slot="icon" src="../../assets/image/mine-list2.png" width="24" height="24">
				</mt-cell>
			</router-link>
			
			
			<mt-cell title="推荐商店" is-link>
				<span></span>
				<img slot="icon" src="../../assets/image/mine-list3.png" width="24" height="24">
			</mt-cell>
			
    	</div>
    	
    	<div>
    		<router-link to="/apply">
	    		<mt-cell title="进药申请" is-link>
					<span></span>
					<img slot="icon" src="../../assets/image/mine-list4.png" width="24" height="24">
				</mt-cell>
			</router-link>
			
			<router-link to="/set">
				<mt-cell title="设置" is-link>
					<span></span>
					<img slot="icon" src="../../assets/image/mine-list5.png" width="24" height="24">
				</mt-cell>
			</router-link>
    	</div>
	    	
    	
    	
    	
	</div>
	
</template>

<script>
</script>

<style scoped>
	header{
		background: #2ca7d8;
	}
	.mui-table-view .mui-media-object{
		max-width: 55px;
		height: 55px;
	}
	.mui-table-view{
		margin-top: 55px;
	}
	.mui-table-view-cell .mui-media{
		position: relative;
	}
	.Qr-code{
		position: absolute;
		top: 50%;
		right: 5%;
		margin-top: -20px;
	}
	.mui-media-body{
		padding-top: 8px;
	}
	.mint-cell{
		color: #000;
	}
	
	.mine-first{
		margin-top: 15px;
		margin-bottom: 15px;
	}
</style>