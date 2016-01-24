
<template>
	<section class="normal-layer no-padding-layer">
		<ul class="feature-list border-gap-list interaction-list">
			<li class="feature-item">
				<a href="#">
					<h3 class="inner-bar">店铺预约<span class="tip-right"><i class="right-dir-icon dir-icon"></i></span></h3>
				</a>
			</li>
			<li class="feature-item">
				<a href="#">
					<h3 class="inner-bar">装修预约<span class="tip-right"><i class="right-dir-icon dir-icon"></i></span></h3>
				</a>
			</li>
			<li class="feature-item">
				<a href="#">
					<h3 class="inner-bar">顾问预约<span class="tip-right"><i class="right-dir-icon dir-icon"></i></span></h3>
				</a>
			</li>
			<li class="feature-item">
				<a href="#">
					<h3 class="inner-bar">活动预约<span class="tip-right"><i class="right-dir-icon dir-icon"></i></span></h3>
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
	import store from "../../store"
	export default {
		route:{
			data(){
				store.setHtmlTitle("我的预约");
			}
		}
	}
</script>
