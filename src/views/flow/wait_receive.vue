
<template>
	
	<section class="normal-layer" v-if="items.length > 0">
		
	</section>

	<empty v-else v-bind:empty="empty"></empty>

</template>

<script>
	import store from "../../store"
	import empty from "../../components/empty.vue"
	export default {
		components: { empty },
		data(){
			return {
				empty: {
					figure: {
						img: "",
						caption: "您没有待收货的商品哦～"
					},
					button:{
						link: "#",
						text: ""
					}
				},
				items: []
			}
		},
		route: {
			data(transition){
				store.setHtmlTitle("待收货");
				transition.next(this.$data);
			}
		}
	}
</script>
