
<template>
	<div v-if="waitReceive.length === 0">nothing to receive</div>
	<div v-else>
		<section>
			<h2>order wait receive</h2>
		</section>
	</div>
</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {
				waitReceive: []
			}
		},
		route: {
			data(transition){
				store.setHtmlTitle("等待收货");
				transition.next(this.$data);
			}
		}
	}
</script>
