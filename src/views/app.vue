
<template>

	<section class="masthead-section normal-layer">
		<!-- login -->
		<div class="masthead-login" v-if="isLogin">
			<figure class="masthead-figure"><img alt="" width="100%" /></figure>
			<div class="masthead-caption">
				<h3>name</h3>
				<p>钱包余额 ￥100.00</p>
				<p class="masthead-setting"><a href="#/own/info">账户设置<span>></span></a></p>
			</div>
		</div>
		<!-- no login -->
		<div class="masthead-nologin" v-else>
			<h2 class="masthead-title">欢迎来到家</h2>
			<p><a class="masthead-button" href="#/" v-link="{path: '/'}">登录/注册</a></p>
		</div>
	</section>
	
</template>

<script>
	import store from "../store"
	let year = new Date().getFullYear();
	export default {
		data(){
			return {
				user: {},
				year: year
			}
		},
		route: {
			data(transition){
				store.setHtmlTitle("个人中心");
				// this.$root.htmlTitle = "个人中心"
				// transition.next(this.$data);
			}
		}
	}
</script>
