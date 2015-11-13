
<template>
	<h2>FOUR OH FOUR</h2>
	<section>not found... share data->{{nowYear}}</section>
</template>

<script>
	module.exports = {
		props: ['nowYear'],
		route: {
			data: function(transition){
				console.dir(this);
				transition.next({});
			}
		}
	};
</script>
