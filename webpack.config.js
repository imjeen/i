var webpack = require('webpack');

module.exports = {
    entry:{
    	userMain: "./src/main.js",
        vendor: ['vue','vue-router','vue-resource']
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
            { test: /\.css$/, loader: "style-loader!css-loader"  },*/
            { test: /\.vue$/, loader: "vue-loader" },
            { test: /\.html$/, loader: "html-loader" }

        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
    ],
    resolve: {
        // 省略 .js 后缀
        extensions: ['', '.js'],
        alias:{
            'vue':          __dirname + "/bower_components/vue/dist/vue.js",
            'vue-router':   __dirname + "/bower_components/vue-router/dist/vue-router.js",
            'vue-resource': __dirname + "/bower_components/vue-resource/dist/vue-resource.js",
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
};

if(process.env.NODE_ENV === 'production'){
    module.exports.plugins && module.exports.plugins.push(
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    );
}else{
    module.exports.devtool = '#source-map';
}
