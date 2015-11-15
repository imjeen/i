
<template>
	<section>
		<h2>cart</h2>
		<dl>
			<dt>
				<figure>
					<img alt="">
					<figcaption></figcaption>
				</figure>
			</dt>
			<dd>
				<p>title</p>
				<p>30$ </p>
			</dd>
		</dl>
	</section>

	<aside>
		<p>合计： xxx￥</p>
		<p><button>结算</button></p>
	</aside>
</template>

<script>
	export default {
		route: {
			data(transition){
				this.$root.rootTitle = "购物车";
				transition.next(this.$data);
			}
		}
	}
</script>
