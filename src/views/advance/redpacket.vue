
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
	.redpacket-list{

		$right-padding: 30% !default;

		padding: 0 12px/$ppr;
		margin-bottom: 10px/$ppr;
		.redpacket-item{
			background-color: #fff;
			padding: 8px/$ppr 6px/$ppr;
			position: relative;
			padding-right: $right-padding;
			margin-bottom: 8px/$ppr;
			& > h3{
				font-size: 14px/$ppr;		
				padding: 5px/$ppr 0;
			}
			& > p{ 
				font-size: 12px/$ppr;
				color: #666;
			}
			.highlight{
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				width: $right-padding;
				background-color: #d00;
				color: #fff;
				font-size: 40px/$ppr;
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
				& > small{
					font-family: Arial;
					font-size: 30px/$ppr;
				}
			}
		}
	}
</style>

<template>
	
	<section v-if="redpackets.length > 0">

		<aside class="redpacket-masthead">
			<p><a v-link="{path: '/av/redpacket/rule'}" class="rule-link">活动规则</a>当前可使用红包金额 <br><span class="highlight">￥120</span></p>
			<p class="rule-limit">此红包抵扣使用</p>
		</aside>

		<ul class="redpacket-list">
			<li class="redpacket-item" v-for="redpacket in redpackets">
				<strong class="highlight"><small>￥</small>{{redpacket.charge}}</strong>
				<h3>{{redpacket.title}}</h3>
				<p>领取时间：&nbsp;{{redpacket.receiveDate}}</p>
				<p>有限时间：&nbsp;{{redpacket.deadDate}}</p>
			</li>
		</ul>

	</section>

	<empty v-else v-bind:empty="empty"></empty>

</template>

<script>
	import store from "../../store"
	import empty from "../../components/empty.vue"
	export default {
		data(){
			return {
				empty: {
					figure:{
						img: "/static/images/200x200.png",
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
