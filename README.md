
# 单页面SPA with Vue.js

## overview

基于 Vue.js框架部署的单页面web应用程序。之前的repo（以 backbone 为框架）的Vue.js 版本。

同时，模块以nodejs风格编码并使用ES6语法，显得编码更加简洁易懂。

## ES6

通过 babel 预编译 ES6 语法的js。而vue文件已经默认对ES6进行预编译。那么意味着可以通过ES6 语法来编写js和vue文件。见[babel](https://github.com/babel/babel-loader) 和 [vue-loader](https://github.com/vuejs/vue-loader) 配置和使用。

## SVG sprites

通过 webpack 的加载器 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 引用svg文件。

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
