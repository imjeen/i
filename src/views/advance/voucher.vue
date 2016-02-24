<style lang="sass">
	$ppr: 720px / 16 / 1rem;

	$ticket-color: #F3D430;
	.voucher-ticket-list{
		.ticket-item{
			background-color: #fff;
			margin-bottom: 10px/$ppr;
			&:last-child{ margin-bottom: 0; }
		}
		.ticket-figure{
			color: #fff;
      background-color: $ticket-color;
      background-image: radial-gradient(circle at left, #efe 50%, $ticket-color 50%);
      background-size: 06px/$ppr 12px/$ppr ;
  		background-repeat: repeat-y;
  		position: relative;
  		min-height: 80px/$ppr;
  		strong{
  			display: flex;
  			justify-content: center;
  			align-items: center;
  			position: absolute;
  			height: 100%;
  			width: 100%;
  			font-size: 30px/$ppr;
  		}
		}
		.ticket-caption{
			padding-left: 10px/$ppr;
			text-align: center;
		}
		h2{ margin-bottom: 5px/$ppr }
	}
</style>

<template>

	<navigation v-bind:navs="navs"></navigation>

	<section class="normal-layer no-border-layer inherit-background-layer" v-if="vouchers.length > 0">

		<ol class="voucher-ticket-list">

			<li class="ticket-item" v-for="voucher in vouchers">
				<a v-link="{ name: 'detail', params: { barcode: voucher.barcode } }">
					<div class="i-grid i-grid--no-spacing">
						<figure class="ticket-figure i-cell i-cell--4-col i-cell--stretch"><strong>￥{{voucher.price}}</p></strong></figure>
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
