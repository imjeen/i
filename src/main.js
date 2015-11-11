
var Vue = require("vue");
var VueRouter = require("vue-router");

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

var userApp = Vue.extend({});
// start router
router.start(userApp,"#userApp");

// just for debugging
window.router = router


