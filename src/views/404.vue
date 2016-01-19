
<template>
	<h2>FOUR OH FOUR</h2>
	<section>not found... share data->{{nowYear}}</section>
</template>

<script>
	import store from "../store"
	export default {
		data(){
			return {
				nowYear: this.$root.nowYear
			}
		},
		route: {
			data(transition){
				store.setHtmlTitle("404找不到");
				transition.next(this.$data);
			}
		}
	}
</script>
