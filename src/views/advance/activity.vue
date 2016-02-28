
<template>
	
	<section v-if="activity.length > 0">
		
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
						caption: "您没有活动哦～"
					},
					button:{
						link: "#",
						text: ""
					}
				},
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
