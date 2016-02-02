
<style lang="sass">
	$ppr: 720px / 16 / 1rem;
	.nav-list{
		display: flex;
		justify-content: center;
		align-items: center;
		& > li{}
		h3{
			/*color: inherit;*/
			font-size: 16px/$ppr;
			text-align: center;
			padding: 10px/$ppr 10px/$ppr;
		}

		.v-link-active{
			h3{ border-bottom: 1px solid #ef3365; }
		}
	}
</style>

<template>
	<nav>
		<ul class="nav-list">
			<li v-for="nav in navs" >
				<a v-link="{path: nav.link}">
					<h3>{{nav.text}}</h3>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: "navigation",
		props: {
			navs: {
				type: Array,
				default: [
					{ link: "", text: "" }
				]
			}
		}
	}
</script>
