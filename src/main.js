
var Vue = require("vue");
var VueRouter = require("vue-router");
var VueResource = require("vue-resource");

var configRouter = require('./component/router-config.js');

// just for debug
Vue.config.debug = true;

// -----------------------------------
// router

// install router
Vue.use(VueRouter);

var router = new VueRouter({
	history: false,
	saveScrollPosition: true
});

configRouter(Vue, router);

var userApp = Vue.extend({
	data: function(){
		return {
			nowYear: new Date().getFullYear()
		}
	}
});
// start router
router.start(userApp,"html");

// just for debugging
window.router = router


