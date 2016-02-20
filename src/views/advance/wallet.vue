
<template>
	<section class="normal-layer">
		<ul class="feature-list">
			<li class="feature-item">
				<a v-link="{path: 'record'}"><h3 class="inner-bar">收支明细<span class="tip-right"><i class="right-dir-icon dir-icon"></i></span></h3></a>
			</li>
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
