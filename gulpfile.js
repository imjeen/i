
var gulp = require("gulp");
var connect = require("gulp-connect");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

var myPort = process.env.PORT || 80;

gulp.task("connect",function(){
	connect.server({
		port: myPort
	});
});

// webpack build
gulp.task('webpack:build',function(callback){
	var myConfig = Object.create(webpackConfig);
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			VERSION: JSON.stringify("5fa3b9"),
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

// webpack debug
gulp.task("webpack:build-dev", function(callback) {

	// modify some webpack config options
	var devConfig = Object.create(webpackConfig);
	devConfig.devtool = "sourcemap";
	devConfig.debug = true;

	devConfig.plugins = devConfig.plugins.concat(
		new webpack.optimize.DedupePlugin()
	);

	// create a single instance of the compiler to allow caching
	var devCompiler = webpack(devConfig);

	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task("watch",function(){
	gulp.watch('./src/**',['webpack:build-dev'])
			.on('change', function(event) {
			  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
			});
});

gulp.task("help",function(){
	var tasks = Object.keys(gulp.tasks);
	for(var key in tasks){
		console.log("$ gulp %s",tasks[key]);
	}
});
