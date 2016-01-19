
<template>
	<div v-if="coupon.length === 0">nothing for coupon</div>
	<div v-else>
		<section>
			<h2>coupon</h2>
		</section>
	</div>
</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {
				coupon: []
			}
		},
		route:{
			data(transition){
				store.setHtmlTitle("我的优惠券");
				transition.next(this.$data);
			}
		}
	}
</script>
