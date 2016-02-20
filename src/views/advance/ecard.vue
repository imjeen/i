
<style lang="sass">
	$ppr: 720px / 16 / 1rem;
	.ecard-masthead{
		.ecard-figure{
			text-align: center;
			& > p{  }
		}
	}
	.ecard-fun-list{
		overflow: hidden;
		& > li{
			width: 33.33%;
			float: left;
			& > h3{ padding: 10px/$ppr 5px/$ppr; }
		}
	}
</style>

<template>
	
	<section class="ecard-masthead normal-layer">
		<figure class="ecard-figure">
			<img  alt="">
			<p>name &nbsp;&nbsp; NO.111 2222 3333</p>
		</figure>
		<div class="ecard-barcode"></div>
	</section>

	<section class="normal-layer">
		<ul class="ecard-fun-list">
			<li><h3>实用性</h3></li>
			<li><h3>便捷性</h3></li>
			<li><h3>安全性</h3></li>
		</ul>
	</section>

	<section class="normal-layer">
		<ul class="feature-list">
			<li class="feature-item">
				<a href="#"><h3 class="inner-bar">会员权益<span class="tip-right"><i class="right-dir-icon dir-icon"></i></span></h3></a>
			</li>
		</ul>
	</section>

</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {
				ecard: [1]
			}
		},
		route:{
			data(transition){
				
				if(this.$data.ecard.length === 0){
					// to: ecard/open
					transition.redirect("open");
				}
				store.setHtmlTitle("电子会员卡");
				transition.next(this.$data);
			}
		}
	}
</script>
