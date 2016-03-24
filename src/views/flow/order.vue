<style lang="sass">
	$ppr: 720px / 16 / 1rem;
	.flow-goods-item{
		background-color: #fff;
		padding: 10px/$ppr;
		margin: 10px/$ppr 0;
		box-shadow: 0px/$ppr 2px/$ppr 2px/$ppr 1px/$ppr rgba(0,0,0,0.2);
		border-radius: 5px/$ppr;

		.item--title{}
		.item--item{
			margin-top: 10px/$ppr;
			padding-top: 10px/$ppr;
			border-top: 1px solid #ddd;
			&:last-child{
				border-top-style: dashed;
			}
		}
	}
</style>

<template>

	<section class="normal-layer inherit-background-layer" v-if="items.length > 0">

		<dl class="flow-goods-item" v-for="item in items">
			<dt class="item--title"><h4>某某商品</h4></dt>
			<dd class="item--item">
				<ul>
					<li></li>
				</ul>
			</dd>
			<dd class="item--item">
				<p>实付款： ￥0.00（含运费￥0.00） <button role="button" class="btn btn-danger">去支付</button></p>
			</dd>
			<dd class="item--item">
				<p>下单于 2016-06-12 17：15：30 <strong>共1件商品</strong></p>
			</dd>
		</dl>
		
	</section>

	<empty v-else v-bind:empty="empty"></empty>

</template>

<script>
	import store from "../../store"
	import empty from "../../components/empty.vue"
	export default {
		components: { empty },
		data(){
			return {
				empty: {
					figure: {
						img: "",
						caption: "还没有订单哦～"
					},
					button:{
						link: "#",
						text: ""
					}
				},
				items: [
					{ name: "XXX", status: "等待支付", price: "", timestamp: "" },
					{},
				],
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
