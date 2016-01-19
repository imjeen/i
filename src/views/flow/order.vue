<style>
	
</style>

<template>
	<h1>我的订单</h1>
	<section v-for="orderItem in orderItems"> 
		<h2>{{$index + 1}}xx订单 - 店铺<span>等待买家付款</span></h2>
		<a v-link="{ path: 'list/' + ($index + 1) + '/detail' }">
			<ul>
				<li><img  alt=""></li>
			</ul>
		</a>
		<p>下单时间：</p>
		<p>共3个商品，总价30￥</p>
		<p>
			<button @click.prevent="doCancelOrder('hello')">取消订单</button>
			<!-- go to a url -->
			<button @click.prevent="doOrderIt">支付</button>
		</p>
	</section>
</template>

<script>
	import store from "../../store"
	export default {
		// data
		data(){
			return {
				orderNumber: 100,
				orderItems: [
					{
						orderId: 1
					},
					{
						orderId: 2
					}
				]
			}
		},
		methods: {
			doCancelOrder(msg){
				alert('cancelOrder...' + msg);
			},
			doOrderIt(){
				alert("order it!")
			}
		},
		route: {
			data(transition){
				store.setHtmlTitle("我的订单");
				transition.next(this.$data);
			}
		}
	};
</script>
