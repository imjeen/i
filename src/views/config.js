
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

				"/password": {
					name: "password",
					component: require("./own/password.vue")
				},

				"/verify": {
					name: "verify",
					component: require("./own/phone_verify.vue")
				},

				"/address": {
					name: "address",
					component: Vue.extend({template: "<router-view></router-view>"}),
					subRoutes: {
						"/": { component:require("./own/address/index.vue") },
						"/edit": { component:require("./own/address/edit_address.vue") },
						"/new": { component:require("./own/address/edit_address.vue") }
					}
				},

				"/customize": {
					name: "customize",
					component: Vue.extend({template: "<router-view></router-view>"}),
					subRoutes: {
						"/": { component: require("./own/customize/index.vue") },
						"/edit/house": {
							name: "house",
							component: require("./own/customize/edit_house.vue")
						},
						"/edit/decoration":{
							name: "decoration",
							component: require("./own/customize/edit_decoration.vue")
						}
					}
				},

			}
		},

		"*": { component: require("./404View.vue") }
	});

}
