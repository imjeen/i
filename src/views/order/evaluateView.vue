
<template>
	<div v-if="evaluateOrder.length === 0">
		nothig to evaluate
	</div>
	<div v-else>
		<section>
			<h2>evaluate</h2>
		</section>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				evaluateOrder: []
			}
		},
		route:{
			data(transition){
				this.$root.rootTitle = "待评价";
				transition.next(this.$data);
			}
		}
	}
</script>
