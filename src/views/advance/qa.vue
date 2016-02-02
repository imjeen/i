
<template>

	<aside>
		<figure><img src="" alt=""></figure>
		<p></p>
		<p>积分： | 经验值： </p>
		<p><button>积分兑礼品</button></p>
	</aside>
	
	<nav>
		<li>消息</li>
		<li>我的问题</li>
		<li>我的回答</li>
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
						caption: "您没有优惠券哦～"
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
