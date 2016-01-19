<style>
	
</style>

<template>

	<nav>
		<ul class="i-grid">
			<li class="i-cell i-cell--2-col"><a href="#">全部</a></li>
			<li class="i-cell i-cell--2-col"><a href="#">待支付</a></li>
			<li class="i-cell i-cell--2-col"><a href="#">待发货</a></li>
			<li class="i-cell i-cell--2-col"><a href="#">待收货</a></li>
			<li class="i-cell i-cell--2-col"><a href="#">待评价</a></li>
			<li class="i-cell i-cell--2-col"><a href="#">退款/售后</a></li>
		</ul>
	</nav>

	<section class="normal-layer">
		
	</section>

</template>

<script>
	import store from "../../store"
	export default {
		// data
		data(){
			return {
			}
		},
		methods: {
		},
		route: {
			data(transition){
				store.setHtmlTitle("我的订单");
				transition.next(this.$data);
			}
		}
	};
</script>
