"use strict";

// just for style
require("../static/sass/main.scss");

import Vue from "vue"
import VueRouter from "vue-router"
import VueResource from "vue-resource"

import configRouter from "./component/router-config.js"

// just for debug
Vue.config.debug = true;

// -----------------------------------
// router

// install router
Vue.use(VueRouter);

var router = new VueRouter({
	history: false,
	// saveScrollPosition: true, // just for history: true
});

configRouter(Vue, router);

var userApp = Vue.extend({
	data: function(){
		return {
			rootTitle: '',
			nowYear: new Date().getFullYear()
		}
	}
});
// start router
router.start(userApp,"html");

// just for debugging
window.router = router


