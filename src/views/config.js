
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
						"/": { component:require("./own/address.vue") },
						"/edit": { component:require("./own/address_edit.vue") },
						"/new": { component:require("./own/address_edit.vue") }
					}
				},

			}
		},

		// flow
		"/flow": {
			name: "flow",
			component: Vue.extend({template: "<router-view></router-view>"}),
			subRoutes: {

				"/evaluate": {
					name: "evaluate",
					component: require("./flow/evaluate.vue")
				},

				"/order": {
					name: "order",
					component: Vue.extend({template: "<router-view></router-view>"}),
					subRoutes: {
						"/": { component: require("./flow/order.vue") },
						"/:id/detail": { component: require("./flow/order_detail.vue") }
					}
				},

				"/refund": {
					name: "refund",
					component: require("./flow/refund.vue")
				},

				"/wait": {
					name: "wait",
					component: Vue.extend({template: "<router-view></router-view>"}),
					subRoutes: {
						"/delivery": { component: require("./flow/wait_delivery.vue") },
						"/pay": { component: require("./flow/wait_pay.vue") },
						"/receive": { component: require("./flow/wait_receive.vue") },
					}
				},

			}
		},

		// advance
		"/av": {
			name: "advance",
			component: Vue.extend({template: "<router-view></router-view>"}),
			subRoutes: {

				"/activity": {
					name: "activity",
					component: require("./advance/activity.vue")
				},

				"/cart": {
					name: "cart",
					component: require("./advance/cart.vue")
				},

				"/coupon": {
					name: "coupon",
					component: require("./advance/coupon.vue")
				},

				"/customize": {
					name: "customize",
					component: Vue.extend({template: "<router-view></router-view>"}),
					subRoutes: {
						"/": { component: require("./advance/customize.vue") },
						"/edit/house": {
							name: "house",
							component: require("./advance/customize_house.vue")
						},
						"/edit/decoration":{
							name: "decoration",
							component: require("./advance/customize_decoration.vue")
						}
					}
				},

				"/ecard": {
					name: "ecard",
					component: require("./advance/ecard.vue")
				},

				"/record": {
					name: "record",
					component: require("./advance/record.vue")
				},

				"/reservation": {
					name: "reservation",
					component: require("./advance/reservation.vue")
				},

			}
		},

		"*": { component: require("./404.vue") }
	});

}
