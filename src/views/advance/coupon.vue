
<template>
	
	<navigation v-bind:navs="navs"></navigation>

	<section class="normal-layer no-border-layer inherit-background-layer" v-if="coupons.length > 0">
		<ol class="ticket-list">

			<li class="ticket-item" v-for="item in coupons">
				<a a-v-link="{ name: 'detail', params: { barcode: item.barcode } }">
					<div class="i-grid i-grid--no-spacing">
						<figure class="ticket-figure ticket-figure--red i-cell i-cell--4-col i-cell--stretch"><strong>￥{{item.price}}</p></strong></figure>
						<div class="ticket-caption i-cell i-cell--8-col i-cell--middle">
							<h2 class="item-caption ellipsis--2-line">{{item.title}}</h2>
							<p>{{item.description}}</p>
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
						caption: "您没有优惠券哦～"
					},
					button:{
						link: "#",
						text: ""
					}
				},
				coupons: [
					{ barcode: "12345", price: 50, title: "title #1", "description": "description #1" },
					{ barcode: "abcde", price: 100, title: "title #2", "description": "description #2" },
				],
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
