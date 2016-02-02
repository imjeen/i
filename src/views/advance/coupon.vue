
<template>
	
	<navigation v-bind:navs="navs"></navigation>

	<section v-if="coupons.length > 0">
		
	</section>

	<empty v-else v-bind:empty="empty"></empty>

</template>

<script>
	import store from "../../store"
	import navigation from "../../components/navigation.vue"
	import empty from "../../components/empty.vue"
	export default {
		components: { navigation, empty },
		data(){
			return {
				navs: [
					{ link: "",text: "未使用" },
					{ link: "#",text: "已使用" },
					{ link: "#",text: "已过期" },
					{ link: "#",text: "已冻结" },
				],
				empty: {
					figure: {
						img: "",
						caption: "您没有优惠券哦～"
					},
					button:{
						link: "#",
						text: ""
					}
				},
				coupons: []
			}
		},
		route:{
			data(transition){
				store.setHtmlTitle("我的优惠券");
				transition.next(this.$data);
			}
		}
	}
</script>
