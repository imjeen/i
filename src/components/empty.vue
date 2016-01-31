
<style lang="sass">
	$ppr: 720px / 16 / 1rem;
	.empty-layer{
		min-height: inherit;
		padding-top: 20px/$ppr;
		& > figure{
			max-width: 60%;
			text-align: center;
			margin: 0 auto;
			font-size: 0;
			figcaption{
				font-size: 16px/$ppr;
				font-weight: bold;
				padding: 10px/$ppr 0;
			}
		}
		& > p{
			margin: 30px/$ppr 0;
			text-align: center;
			& > a{
				width: 60%;
				display: inline-block;
			}
		}
	}
</style>

<template>

	<section class="empty-layer normal-layer inherit-background-layer">
		<figure>
			<img v-bind:src="!empty.figure.img ? '/static/images/200x200.png' : empty.figure.img" alt="" width="100%">
			<figcaption v-if="empty.figure.caption">{{empty.figure.caption}}</figcaption>
		</figure>
		<p class="btn-wrap" v-if="empty.button.link && empty.button.text">
			<a class="btn btn-danger" role="button" v-bind:href="empty.button.link">{{empty.button.text}}</a>
		</p>
	</section>

</template>

<script>
	export default {
		name: "empty",
		props: {
			empty: {
				// type: Object,
				default: {
					figure: {
						img: "",
						caption: ""
					},
					button:{
						link: "",
						text: ""
					}
				}
			}
		},

	}
</script>
