
<template>
	<section class="normal-layer">
		<ul class="feature-list">
			<li class="feature-item"><a v-link="{path: 'record'}">收支明细</a></li>
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
