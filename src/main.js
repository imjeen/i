"use strict";

// just for style
require("../static/sass/main.scss");

import Vue from "vue"
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import configRouter from "./views/config"
import store from "./store/"

// true => just for debug
Vue.config.debug = false;

// install plugin
Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter({
	history: false,
	// saveScrollPosition: true, // just for history: true
});

configRouter(Vue, router);

var userApp = Vue.extend({
	data(){
		return store.getData()
	},
	methods: {
		goBack(){
			history.back()
		}
	}
});

// start router
router.start(userApp,"html");

// just for debugging
window.router = router
