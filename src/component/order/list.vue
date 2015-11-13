<style>
	h2{
		color: green;
	}
</style>

<template>
	<section>
		<h2>订单数：{{orderNumber}} </h2>
	</section>
</template>

<script>
	module.exports = {
		// data
		data: function(){
			return {
				orderNumber: 100
			}
		}
	};
</script>
