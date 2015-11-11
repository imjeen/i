
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// var Uglify = require("webpack/lib/optimize/UglifyJsPlugin");

module.exports = {
    // cache: true,
    context: __dirname, // default: process.cwd()
    entry:{
    	userMain: "./src/main.js",
        vendor: ['vue']
    },
    output: {
        path: "./build",
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },
    module: {
        loaders: [
            /*{ test: /\.css$/, loader: "style!css" },
            // Extract css files
            {
                test: /\.css$/,
                loader: "style-loader!css-loader" 
            },*/
            { test: /\.html$/, loader: "html-loader" }

        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        // new webpack.ProvidePlugin({
        //     jQuery: "jquery",
        //     $: "jquery"
        // }),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        // new webpack.optimize.Uglify()
    ],
    resolve: {
        // 省略 .js 后缀
        extensions: ['', '.js'],
        // for resolve, e.g: require('vue')
        alias:{
            'vue':          __dirname + "/bower_components/vue/dist/vue.js",
            'vue-router':   __dirname + "/bower_components/vue-router/dist/vue-router.js",
        }

    }
};