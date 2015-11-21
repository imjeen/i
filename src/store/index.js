"use strict";
const key = "PLUSPLAN-VUE";

if(!localStorage.getItem(key)){
	let now = new Date();
	let data = {
		user: {
			id: 0,
			name: "####################bill",
			islogin: true
		}
	};
	localStorage.setItem(key,JSON.stringify(data));
}

const store = {};

store.fetch =  function(){
	return JSON.parse(localStorage.getItem(key));
}

store.save = (val) => {
	localStorage.setItem(key,val);
}

module.exports =  store;
