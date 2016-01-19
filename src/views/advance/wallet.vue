
<template>
	<section class="normal-layer">
		<ul class="feature-list">
			<li class="feature-item"></li>
		</ul>
	</section>	
</template>

<script>
	import store from "../../store"
	export default {
		route:{
			data(){
				store.setHtmlTitle("我的钱包");
			}
		}
	}
</script>
