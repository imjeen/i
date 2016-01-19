
<template>

	<section class="normal-layer">
		<dl>
			<dt><h3><label><input type="checkbox">旗舰店</label></h3></dt>
			<dd>
				<ul>
					<li></li>
					<li></li>
				</ul>
			</dd>
		</dl>
	</section>

	<aside>
		<label><input type="checkbox"></label>
	</aside>

</template>

<script>
	import store from "../../store"
	export default {
		data(){
			return {

			}
		},
		route: {
			data(transition){
				store.setHtmlTitle("购物车");
				transition.next(this.$data);
			}
		}
	}
</script>

<style lang="sass?outputStyle=expanded">


</style>
