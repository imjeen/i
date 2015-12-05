
<template>
	<div v-if="reservation.length === 0">nothing to reservate</div>
	<div v-else="">
		<h2>reservation</h2>
		<section></section>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				reservation: []
			}
		},
		route:{
			data(transition){
				this.$root.rootTitle = "我的预约";
				transition.next(this.$data);
			}
		}
	}
</script>
