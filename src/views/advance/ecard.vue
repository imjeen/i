
<template>
	<div v-if="ecard.length === 0">nothing for ecard</div>
	<div v-else>
		<section>
			<h2>ecard</h2>
		</section>
	</div>
</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {
				ecard: []
			}
		},
		route:{
			data(transition){
				store.setHtmlTitle("电子会员卡");
				transition.next(this.$data);
			}
		}
	}
</script>
