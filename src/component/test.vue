<style>
	.test{
		background-color: #ddd;
	}
</style>

<template>
	<div class="test">
	  <h3>user profile</h3>
	  <h4>test: {{test.a}}</h4>
	  <input type="text" v-model="test.a">
	  <p>Current count: {{test.count}}</p>
	</div>
</template>
<script>
	module.exports = {
		data: function(){
			return {
				test: {
					a: "it is a test!",
					count: 0
				}
			}
		},
		route: {
			data: function(transition){

				var myData = this.$data;

				setInterval(function(){
					myData.test.count++;
				},1000);
				
				transition.next(myData);
			},
			canReuse: function(transition){
				// console.log('canReuse');
			},
			canActivate: function(transition){
				// console.log('canActivate');
				transition.next();
			},
			canDeactivate: function(transition){
				// console.log('canDeactivate');
				transition.next();
			},
			activate: function(transition){
				// console.log('activate');
				transition.next();
			},
			deactivate: function(transition){
				// console.log('deactivate');
				transition.next();
			}
		},
	};
</script>