<style>
	
</style>

<template>

	<section class="normal-layer" v-if="items.length > 0">
		
	</section>

	<empty v-else v-bind:empty="empty"></empty>

</template>

<script>
	import store from "../../store"
	import item from "../../components/flow-item.vue"
	import empty from "../../components/empty.vue"
	export default {
		components: { item, empty },
		data(){
			return {
				empty: {
					figure: {
						img: "",
						caption: "还没有订单哦～"
					},
					button:{
						link: "#",
						text: ""
					}
				},
				items: []
			}
		},
		methods: {
		},
		route: {
			data(transition){
				store.setHtmlTitle("我的订单");
				transition.next(this.$data);
			}
		}
	};
</script>
