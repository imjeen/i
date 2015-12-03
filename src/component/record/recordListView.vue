
<template>
	<section>track list</section>
	<p>number: {{trackNumber}}</p>
</template>

<script>
	let mydata = 0;
	export default {
		data(){
			return {
				trackNumber: ++mydata
			}
		}
	}
</script>