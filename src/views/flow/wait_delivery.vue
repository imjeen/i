
<template>
	<div v-if="waitDelivery.length === 0">nothing to delivery</div>
	<div v-else>
		<section>
			<h2>order wait delivery</h2>
		</section>
	</div>
</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {
				waitDelivery: []
			}
		},
		route: {
			data(transition){
				store.setHtmlTitle("等待发货");
				transition.next(this.$data);
			}
		}
	}
</script>
