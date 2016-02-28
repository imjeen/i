
<style lang="sass">
	$ppr: 720px / 16 / 1rem;
	.redpacket-masthead{
		margin-bottom: 15px/$ppr;
		background-color: #fff;
		padding: 20px/$ppr 15px/$ppr 10px/$ppr;
		/*font-size: 16px/$ppr;*/
		.highlight{
			color: #f30;
			vertical-align: text-bottom;
			font-size: 36px/$ppr;
			font-weight: bold;
			display: block;
			&:first-letter{
				font-size: 16px/$ppr;
			}
		}
		.rule-link{
			float: right;
			text-decoration: underline;
		}
		.rule-limit{
			margin-top: 10px/$ppr;
			color: #666;
		}
	}

</style>

<template>

	<aside class="redpacket-masthead"  v-if="redpackets.length > 0">
		<p><a v-link="{path: '/av/redpacket/rule'}" class="rule-link">活动规则</a>当前可使用红包金额 <br><span class="highlight">￥120</span></p>
		<p class="rule-limit">此红包抵扣使用</p>
	</aside>

	<section class="normal-layer inherit-background-layer no-border-layer" v-if="redpackets.length > 0">

		<ol class="ticket-list">

			<li class="ticket-item" v-for="item in redpackets">
					<div class="i-grid i-grid--no-spacing">
						<figure class="ticket-figure ticket-figure--red i-cell i-cell--4-col i-cell--stretch"><strong>￥{{item.charge}}</p></strong></figure>
						<div class="ticket-caption i-cell i-cell--8-col i-cell--middle">
							<h2 class="item-caption ellipsis--2-line">{{item.title}}</h2>
							<p>领取时间：&nbsp;{{item.receiveDate}}</p>
							<p>有限时间：&nbsp;{{item.deadDate}}</p>
						</div>
					</div>
			</li>

		</ol>

	</section>

	<empty v-if="redpackets.length === 0" v-bind:empty="empty"></empty>

</template>

<script>
	import store from "../../store"
	import empty from "../../components/empty.vue"

	export default {
		data(){
			return {
				empty: {
					figure:{
						img: "",
						caption: "还没有红包哦"
					},
					button: {
						link: "#",
						text: "抢红包"
					}
				},
				redpackets: [
					{
						title: "おやすみのキスを",
						charge: "100",
						receiveDate: "2016-01-01",
						deadDate: "2016-02-14",
					},
					{
						title: "小さな光でもいじてみた",
						charge: "120",
						receiveDate: "2016-02-01",
						deadDate: "2016-02-20",
					}
				],
			}
		},
		components: {
			empty,
		},
		route:{
			data(){
				store.setHtmlTitle("新年红包")
			},
		}
	}
</script>
