
module.exports = function configRouter(Vue, router){

	// normal
	router.map({
		// root
		"/": { component: Vue.extend({ template: require("./own/index.html") }) },

		// own
		"/own": { 
			component: Vue.extend({ template: "<router-view></router-view>" }),
			subRoutes: {
				"/": { component: Vue.extend({ template: require("./own/index.html") }) },
				"/info": { component: Vue.extend({ template: require("./own/info.html") }) },
				"/ecard": { component: Vue.extend({ template: require("./own/ecard.html") }) },
				"/activity": { component: Vue.extend({ template: require("./own/activity.html") }) },
				"/coupon": { component: Vue.extend({ template: require("./own/coupon.html") }) },
				"/reservation": { component: Vue.extend({ template: require("./own/reservation.html") }) },
			}
		},

		// order
		"/order": {
			component: Vue.extend({ template: "<router-view></router-view>" }),
			subRoutes: {
					"/": {component: Vue.extend({ template: require("./own/index.html") }) },
					"/list": { component: Vue.extend({ template: require("./order/list.html") }) },
					"/cart": { component: Vue.extend({ template: require("./order/cart.html") }) },
					"/refund": { component: Vue.extend({ template: require("./order/refund.html") }) },
					"/wait": {
						component: Vue.extend({ template: "<router-view></router-view>" }),
						subRoutes: {
							"/": { component: Vue.extend({ template: require("./order/waitPay.html") }) },
							"/evaluate": { component: Vue.extend({ template: require("./order/evaluate.html") }) },
							"/delivery": { component: Vue.extend({ template: require("./order/waitDelivery.html") }) },
							"/pay": { component: Vue.extend({ template: require("./order/waitPay.html") }) },
							"/receive": { component: Vue.extend({ template: require("./order/waitReceive.html") }) },
						}
					},
					
				}
			},

		// track
		"track": {
			component: Vue.extend({ template: "<router-view></router-view>" }),
			subRoutes: {
				"/": { component: Vue.extend({ template: require("./track/trackList.html") }) },
				"/list": { component: Vue.extend({ template: require("./track/trackList.html") }) },
				// "/*": { component: Vue.extend({ template: require("./track/trackList.html")}) },
			}
		},

		// not found
		"*": { component: Vue.extend({ template: require("./not-found.html")}) },

	});

	// redirect
  /*router.redirect({
    '/': '/own'
  });*/

	/*router.beforeEach(function (transition) {
		console.log("route before");
	  // if (transition.to.auth) {
	  //   // 对用户身份进行验证...
	  //   // console.log('ok')
	  // }
	});*/

};
