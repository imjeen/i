
<template>
	<h2>FOUR OH FOUR</h2>
	<section>not found... share data->{{nowYear}}</section>
</template>

<script>
	export default {
		data(){
			return {
				nowYear: this.$root.nowYear
			}
		},
		route: {
			data(transition){
				this.$root.rootTitle = "找不到";
				transition.next(this.$data);
			}
		}
	}
</script>
