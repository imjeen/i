
<style lang="sass">
	$ppr: 720px / 16 / 1rem;
	.record-list{
		figure{ 
			padding-right: 15px/$ppr;
			font-size: 0; 
		}
		.record-item{
			background-color: #fff; 
			margin-bottom: 10px/$ppr; 
		}
		.item-caption{ margin-bottom: 8px/$ppr; }
	}
</style>

<template>
	
	<section class="normal-layer inherit-background-layer" v-if="recordList.length > 0">

		<ol class="record-list">

			<li class="record-item" v-for="goods in recordList | orderBy 'timeline' ">
				<div class="i-grid i-grid--no-spacing">
					<figure class="i-cell i-cell--4-col i-cell--middle"><img v-bind:src="goods.imagePath" alt="" width="100%"></figure>
					<div class="i-cell i-cell--8-col i-cell--middle">
						<h2 class="item-caption ellipsis--2-line"><a v-bind:href="goods.link">{{goods.name}}</a></h2>
						<p>{{goods.price | currency '￥'}}</p>
					</div>
				</div>
			</li>

		</ol>

		<p class="btn-wrap">
			<button type="button" class="btn btn-block btn-simple" v-on:click="clear">清除</button>
		</p>
	</section>

	<empty v-else v-bind:empty="empty"></empty>

</template>

<script>
	import store from "../../store"
	import empty from "../../components/empty.vue"

	import png200 from '../../../static/images/200x200.png'

	export default {
		components: {
			empty
		},
		data(){
			return {
				empty: {
					figure: {
						img: "",
						caption: "您还没有足迹的哦～"
					},
					button:{
						link: "#",
						text: ""
					}
				},
				recordList: [
					{
						id: 0,
						name: "今、想う事は１つ 君に会いたい",
						price: 110,
						link: "path/to/link",
						imagePath: png200,
						state: "",
						timeline: 1,
					},
					{
						id: 0,
						name: "最後の言葉忘れない, 風の匂いで 空の模様で 君の笑顔も 僕の想いも思い出になってゆく",
						price: 110,
						link: "path/to/link",
						imagePath: png200,
						state: "",
						timeline: 0,
					},
					{
						id: 0,
						name: "聞かせて欲しい　キミのこえいも思い出になってゆく",
						price: 190,
						link: "path/to/link",
						imagePath: png200,
						state: "",
						timeline: 2,
					},	
				],

			}
		},
		methods: {
			clear(){
				this.$data.recordList = [];
			}
		},
		ready(){

			// this.$http.get("api/to/url",(data, status, req) => {
			// 	this.$set("recordList", data)
			// })
			// .error( (data, status, req) => {

			// });

		},

		route: {
			data(){
				store.setHtmlTitle("我的足迹")
			},
		}
		
	}
</script>
