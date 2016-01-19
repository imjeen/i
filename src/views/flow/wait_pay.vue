
<template>
	<h2>详情页：{{$route.params.item}}</h2>
	<div v-if="waitPayOrder.length === 0">
		nothing to wait pay
	</div>
	<div v-else>
		<section>
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
					<p><button>去支付</button></p>
				</dd>
			</dl>
		</section>
	</div>

</template>


<script>
	import store from "../../store"
	export default {
		data(){
			return {
				waitPayOrder: []
			}
		},
		route: {
			data(transition){
				store.setHtmlTitle("等待支付");
				transition.next(this.$data);
			}
		}
	}
</script>
