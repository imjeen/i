
<template>
	<div v-if="coupon.length === 0">nothing for coupon</div>
	<div v-else>
		<section>
			<h2>coupon</h2>
		</section>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				coupon: []
			}
		},
		route:{
			data(transition){
				this.$root.rootTitle = "我的优惠券";
				transition.next(this.$data);
			}
		}
	}
</script>
