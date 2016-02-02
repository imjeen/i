
<style lang="sass">
	.flow-nav-list{
		display: flex;
		justify-content: center;
		align-item: center;
		h3{
			padding: 10px;
		}
	}
</style>

<template>
	
	<navigation v-bind:navs="navs"></navigation>

	<router-view></router-view>
	
</template>

<script>
	import navigation from "../../components/navigation.vue"
	export default {
		components: { navigation },
		data(){
			return {
				navs: [
					{ link: "/flow/order/", text: "全部" },
					{ link: "/flow/wait/pay/", text: "待支付" },
					{ link: "/flow/wait/delivery/", text: "待发货" },
					{ link: "/flow/wait/receive/", text: "待收货" },
					{ link: "/flow/wait/evaluate/", text: "待评价" },
					{ link: "/flow/refund/", text: "售后/退款" },
				]
			}
		}
	}
</script>
