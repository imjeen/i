
<template>
	<section>track list</section>
	<p>number: {{trackNumber}}</p>
</template>

<script>
var mydata = 0;
	module.exports = {
		data: function(){
			return {
				trackNumber: ++mydata
			}
		}
	};
</script>