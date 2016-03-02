<style lang="sass">
	$ppr: 720px / 16 / 1rem;


</style>

<template>

	<navigation v-bind:navs="navs"></navigation>

	<section class="normal-layer no-border-layer inherit-background-layer" v-if="vouchers.length > 0">

		<ol class="ticket-list">

			<li class="ticket-item" v-for="voucher in vouchers">
				<a v-link="{ name: 'detail', params: { barcode: voucher.barcode } }">
					<div class="i-grid i-grid--no-spacing">
						<figure class="ticket-figure ticket-figure--gold i-cell i-cell--4-col i-cell--stretch"><strong>￥{{voucher.price}}</p></strong></figure>
						<div class="ticket-caption i-cell i-cell--8-col i-cell--middle">
							<h2 class="item-caption ellipsis--2-line">{{voucher.title}}</h2>
							<p>{{voucher.description}}</p>
						</div>
					</div>
				</a>
			</li>

		</ol>

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
						caption: "您没有代金券哦～"
					},
					button:{
						link: "#",
						text: ""
					}
				},
				vouchers: [
					{ barcode: "12345", price: 50, title: "title #1", "description": "description #1" },
					{ barcode: "abcde", price: 100, title: "title #2", "description": "description #2" },
				]
			}
		},
		route:{
			data(){
				store.setHtmlTitle("代金券");
			}
		}
	}
</script>
