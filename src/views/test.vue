<style>
	.test{
		background-color: #ddd;
	}
</style>

<template>
	<div class="test">
	  <h3>user profile: name {{store.user.name}}</h3>
	  <h4>test: {{test.a}}</h4>
	  <input type="text" v-model="test.a">
	  <p>Current count: {{test.count}}</p>
	</div>
</template>

<script>
	"use strict";
	import store from "../store/index";
	let mytest = [];
	export default {
		data(){
			return {
				test: {
					a: "it is a test!",
					count: 0,
				},
				store: {
					user: store.fetch().user
				}
			}
		},
		ready(){
			this.$data.store = store.fetch();
		},
		route: {
			data(transition){

				var myData = this.$data;

				setInterval(function(){
					myData.test.count++;
				},1000);
				
				transition.next(myData);
			},
			canReuse(transition){
				// console.log('canReuse');
			},
			canActivate(transition){
				// console.log('canActivate');
				transition.next();
			},
			canDeactivate(transition){
				// console.log('canDeactivate');
				transition.next();
			},
			activate(transition){
				// console.log('activate');
				transition.next();
			},
			deactivate(transition){
				// console.log('deactivate');
				transition.next();
			}
		},
	};
</script>