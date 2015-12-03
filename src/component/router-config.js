
var store = require('../store/index');

// import store from "../store/index";

module.exports = function configRouter(Vue, router){

	// normal
	router.map({
		// root
		"/": { component: require("./homeView.vue") },

		// test
		"/test": { component: require("./test.vue") }, 

		// own
		"/own": { 
			component: Vue.extend({template: "<router-view></router-view>"}),
			subRoutes: {
				"/": { component: require("./homeView.vue") },
				"/info": { component: require("./own/infoView.vue") },
				"/ecard": { component: require("./own/ecardView.vue") },
				"/activity": { component: require("./own/activityView.vue") },
				"/coupon": { component: require("./own/couponView.vue") },
				"/reservation": { component: require("./own/reservationView.vue") },
			}
		},

		// order
		"/order": {
			component: Vue.extend({template: "<router-view></router-view>"}),
			subRoutes: {
					"/": {component: require("./homeView.vue") },
					"/list": { 
						component: Vue.extend({template: "<router-view></router-view>"}),
						subRoutes: {
							"/": { component: require("./order/listView.vue"), },
							"/:item/detail": { component: require("./order/listItemDetailView.vue") }
						}
					},
					"/cart": { component: require("./order/cartView.vue") },
					"/refund": { component: require("./order/refundView.vue") },
					"/wait": {
						component:  Vue.extend({template: "<router-view></router-view>"}),
						subRoutes: {
							"/": { component: require("./order/waitPayView.vue") },
							"/evaluate": { component: require("./order/evaluateView.vue") },
							"/delivery": { component: require("./order/waitDeliveryView.vue") },
							"/pay": { component: require("./order/waitPayView.vue") },
							"/receive": { component: require("./order/waitReceiveView.vue") },
						}
					},
					
				}
			},

		// track
		"record": {
			component: Vue.extend({template: "<router-view></router-view>"}),
			subRoutes: {
				"/": { component: require("./record/recordListView.vue") },
				"/list": { component: require("./record/recordListView.vue") },
				// "/*": { component: require("./404View.vue") },
			}
		},

		// not found
		"*": { component: require("./404View.vue") },

	});


	// redirect
  /*router.redirect({
    '/': '/own'
  });*/
/*
	router.beforeEach(function (transition) {
		console.log("route before");
		if(store.fetch().user.islogin !== true){
			router.go("/login");
			transition.abort();
		}else{
			transition.next();
		}
	  // if (transition.to.auth) {
	  //   // 对用户身份进行验证...
	  //   // console.log('ok')
	  // }
	});*/

	// router.afterEach(function (transition) {
	//   console.log('成功浏览到: ' + transition.to.path)
	// })
	
};
