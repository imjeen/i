
<template>
	<section class="normal-layer">
		<ul class="feature-list">
			<li class="feature-item">
				<div class="inner-bar">微信服务推荐</div>
			</li>
		</ul>

		<ul class="feature-list">
			<li class="feature-item">
				<div class="inner-bar">关于我们</div>
			</li>
		</ul>

	</section>
</template>

<script>
	import store from "../../store"
	export default {
		route:{
			data(){
				store.setHtmlTitle("更多");
			}
		}
	}
</script>
