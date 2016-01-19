
<template>
	<h2>详情页：{{$route.params.item}}</h2>
	<section>
		<p>收货人</p>
		<p>详情地址</p>
	</section>

	<section>
		<p>订单编号</p>
		<p>下单时间</p>
		<dl>
			<dt>
				<figure>
					<img alt="">
					<figcaption></figcaption>
				</figure>
			</dt>
			<dd>
				<p>title <span>300￥</span></p>
				<p>x3</p>
			</dd>
		</dl>
	</section>
</template>

<script>
	import store from "../../store"
	export default {
		route: {
			data(transition){
				store.setHtmlTitle("订单详情");
				transition.next(this.$data);
			}
		}
	}
</script>
