
<template>
	<div v-if="ecard.length === 0">nothing for ecard</div>
	<div v-else>
		<section>
			<h2>ecard</h2>
		</section>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				ecard: []
			}
		},
		route:{
			data(transition){
				this.$root.rootTitle = "我的电子会员卡";
				transition.next(this.$data);
			}
		}
	}
</script>
