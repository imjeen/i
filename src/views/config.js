
export default function(Vue, router){
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
				"/": { component: require("./own/setting.vue") },
				"/ecard": {
					name: "ecard",
					component: require("./own/ecardView.vue")
				},
				"/customize": {
					name: "customize",
					component: require("./own/customize/index.vue")
				}
			}
		},

		"*": { component: require("./404View.vue") }
	});

}
