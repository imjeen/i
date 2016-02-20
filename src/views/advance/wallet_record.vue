
<template>
	
	<navigation v-bind:navs="navs"></navigation>

	<section v-if="record.length > 0">
		
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
					{ link: "",text: "交易记录" },
					{ link: "#",text: "充值记录" },
					{ link: "#",text: "提现记录" },
				],
				empty: {
					figure: {
						img: "",
						caption: "您没有记录哦～"
					},
					button:{
						link: "#",
						text: ""
					}
				},
				record: []
			}
		},
		route:{
			data(transition){
				store.setHtmlTitle("收支明细");
				transition.next(this.$data);
			}
		}
	}
</script>
