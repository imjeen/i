
// module.exports =  function configRouter(Vue,router){
export function configRouter(Vue, router){
	router.map({
		"/": {
			// name: "home",
			component: require("./app.vue")
		},

		// own
		"/own": {
			name: "own",
			component: Vue.extend({template: "<router-view></router-view>"}),
			subRoutes: {
				"/": { component: require("./own/infoView.vue") },
				"/ecard": {
					name: "ecard",
					component: require("./own/ecardView.vue")
				},
			}
		},

		"*": { component: require("./404View.vue") }
	});

}
