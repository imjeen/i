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
            // { test: /\.html$/, loader: "html-loader" },
            { test: /\.vue$/, loader: "vue-loader" },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime'],
                    presets: ['es2015']
                }
            },

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

    // for style
    module.exports.module.loaders && module.exports.module.loaders.push(
        { test: /\.css$/, loaders: ["style","css"] },
        { test: /\.scss$/, loaders: ["style","css","sass"]  }
    );

}else{

    module.exports.devtool = '#source-map';
    
    module.exports.module.loaders && module.exports.module.loaders.push(
        { test: /\.css$/, loaders: ["style","css?sourceMap"] },
        { test: /\.scss$/, loaders: ["style","css?sourceMap","sass?sourceMap"]  }
    );

}
