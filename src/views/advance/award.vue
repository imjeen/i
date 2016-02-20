
<template>

	<section v-if="award.length > 0">
		
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
						caption: "您没有抽奖哦～"
					},
					button:{
						link: "#",
						text: ""
					}
				},
				award: []
			}
		},
		route:{
			data(){
				store.setHtmlTitle("我的抽奖");
			}
		}
	}
</script>
