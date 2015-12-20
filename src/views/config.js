
module.exports =  function configRouter(Vue,router){

	router.map({
		"/": { component: require("./app.vue") },
		"*": { component: require("./404View.vue") }
	});

}
