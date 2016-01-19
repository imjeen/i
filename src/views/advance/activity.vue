
<template>
	<div v-if="activity.length === 0">nothing to activity</div>
	<div v-else>
		<section>
			<h2>activity</h2>
		</section>
	</div>
</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {
				activity: []
			}
		},
		route:{
			data(transition){
				store.setHtmlTitle("我的活动");
				transition.next(this.$data);
			}
		}
	}
</script>
