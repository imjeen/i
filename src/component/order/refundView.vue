
<template>
	<div v-if="refundOrder.length === 0"> nothing to refund</div>
	<div v-else>
		<section>
			<h2>order refund</h2>
		</section>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				refundOrder: []
			}
		},
		route:{
			data(transition){
				this.$root.rootTitle = "待付款/售后";
				transition.next(this.$data);
			}
		}
	}
</script>