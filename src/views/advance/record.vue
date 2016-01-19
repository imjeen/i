
<template>
	
	<section>
		<ol class="record-list" v-if="goodsList.length">

			<li class="record-item" v-for="goods in goodsList | orderBy 'timeline' ">
				<div class="i-grid i-grid--no-spacing">
					<div class="i-cell i-cell--4-col"><img v-bind:src="goods.imagePath" alt="" width="100%"></div>
					<div class="i-cell i-cell--8-col">
						<h2 class="ellipsis--twoline"><a v-bind:href="goods.link">{{goods.name}}</a></h2>
						<p>{{goods.price | currency '￥'}}</p>
					</div>
				</div>
			</li>

			<li class="record-item">
				<div class="i-grid i-grid--no-spacing">
					<div class="i-cell i-cell--4-col"><img src="/static/images/200x200.png" alt="" width="100%"></div>
					<div class="i-cell i-cell--8-col">
						<h2 class="ellipsis--twoline"><a href="#">【奥普浴霸】多功能风暖集成吊顶QDP5020A（新）| 全国包邮（偏远除外）</a></h2>
						<p>$00.00</p>
					</div>
				</div>
			</li>

		</ol>

		<p>
			<button v-on:click="clear">清除</button>
		</p>
	</section>

	<section>track list</section>
	<p>number: {{trackNumber}}</p>
</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {
				goodsList: [
					{
						id: 0,
						name: "name #1",
						price: 110,
						link: "path/to/link",
						imagePath: "/static/images/200x200.png",
						state: "",
						timeline: 1,
					},
					{
						id: 0,
						name: "name #2",
						price: 110,
						link: "path/to/link",
						imagePath: "/static/images/200x200.png",
						state: "",
						timeline: 0,
					},
				],

			}
		},
		methods: {
			clear(){
				this.$data.goodsList = [];
			}
		},
		ready(){

			// this.$http.get("api/to/url",(data, status, req) => {
			// 	this.$set("goodsList", data)
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

<style lang="sass">
	
</style>
