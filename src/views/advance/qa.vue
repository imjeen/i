
<style lang="sass">
	$ppr: 720px / 16 / 1rem;
	.qa-masthead{
		overflow: hidden;
		padding: 12px/$ppr;
		margin-bottom: 15px/$ppr;
		background-color: #fff;
		.qa-figure{
			margin: 0;
			float: left;
			height: 100px/$ppr;
			width: 100px/$ppr;
			max-width: 100px/$ppr;
			border-radius: 50%;
			overflow: hidden;
			background-image: url("/static/images/avatar.png");
			background-repeat: no-repeat;
			background-size: contain;
			margin-right: 20px/$ppr;
		}
		& > h2{
			margin-top: 10px/$ppr;
		}
		& > p{
			margin-top: 5px/$ppr;
		}
	}
	.qa-list{
		overflow: hidden;
		padding: 0 12px/$ppr;
		background-color: #fff;
		& > li{
			width: 33.33%;
			float: left;
			text-align: center;
			& > h3{ padding: 10px/$ppr 5px/$ppr; }
		}
	}
</style>

<template>

	<aside class="qa-masthead">
		<figure class="qa-figure"><img alt=""></figure>
		<h2>name</h2>
		<p>积分： | 经验值： </p>
		<p><button>积分兑礼品</button></p>
	</aside>
	
	<nav class="qa-list">
		<li><h3>消息(0)</h3></li>
		<li><h3>我的问题(0)</h3></li>
		<li><h3>我的回答(0)</h3></li>
	</nav>

	<empty v-bind:empty="empty"></empty>
	
</template>

<script>
	import store from "../../store"
	import empty from "../../components/empty.vue"
	export default {
		components: { empty },
		data(){
			return {
				empty: {
					figure: {
						img: "",
						caption: "没有的哦～"
					},
					button:{
						link: "#",
						text: ""
					}
				},
			}
		},
		route:{
			data(){
				store.setHtmlTitle("问答");
			}
		}
	}
</script>
