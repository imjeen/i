
# 单页面SPA with Vue.js

## overview

基于 Vue.js框架部署的单页面web应用程序。之前的repo（以 backbone 为框架）的Vue.js 版本。

同时，模块以nodejs风格编码显得更加简洁易懂。

## usage

```
	$ bower install # install bower package for first
	$ npm install # install npm package for first
	$ npm run build # build for dev

	$ NODE_ENV=production npm run build # build for product/release
	$ npm run server # go to the URL: http://localhost
	$ npm run watch # extra watch files
```

## vue plugin

- [vue-router](https://github.com/vuejs/vue-router) Vue.js 官方路由。与 Vue.js 内核深度整合，让构建单页应用易如反掌。
- [vue-resource](https://github.com/vuejs/vue-resource) 通过 XMLHttpRequest 或 JSONP 发起请求并处理响应。
