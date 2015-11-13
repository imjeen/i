
module.exports = function configRouter(Vue, router){

	// normal
	router.map({
		// root
		"/": { component: require("./own/index.vue") },

		// test
		// "/test": { component: require("./test.vue") }, 

		// own
		"/own": { 
			component: Vue.extend({template: "<router-view></router-view>"}),
			subRoutes: {
				"/": { component: require("./own/index.vue") },
				"/info": { component: require("./own/info.vue") },
				"/ecard": { component: require("./own/ecard.vue") },
				"/activity": { component: require("./own/activity.vue") },
				"/coupon": { component: require("./own/coupon.vue") },
				"/reservation": { component: require("./own/reservation.vue") },
			}
		},

		// order
		"/order": {
			component: Vue.extend({template: "<router-view></router-view>"}),
			subRoutes: {
					"/": {component: require("./own/index.vue") },
					"/list": { component: require("./order/list.vue") },
					"/cart": { component: require("./order/cart.vue") },
					"/refund": { component: require("./order/refund.vue") },
					"/wait": {
						component:  Vue.extend({template: "<router-view></router-view>"}),
						subRoutes: {
							"/": { component: require("./order/waitPay.vue") },
							"/evaluate": { component: require("./order/evaluate.vue") },
							"/delivery": { component: require("./order/waitDelivery.vue") },
							"/pay": { component: require("./order/waitPay.vue") },
							"/receive": { component: require("./order/waitReceive.vue") },
						}
					},
					
				}
			},

		// track
		"track": {
			component: Vue.extend({template: "<router-view></router-view>"}),
			subRoutes: {
				"/": { component: require("./track/trackList.vue") },
				"/list": { component: require("./track/trackList.vue") },
				// "/*": { component: require("./track/trackList.vue") },
			}
		},

		// not found
		"*": { component: require("./404.vue") },

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

	// router.afterEach(function (transition) {
	//   console.log('成功浏览到: ' + transition.to.path)
	// })
	
};
