var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        main: ['./src/main.js'],
        // vendor: ['vue','vue-router','vue-resource']
    },

    output: {
        publicPath: process.env.NODE_ENV === 'production' ? "http://imjeen.github.io/i/release/" : "/build/",
        path: __dirname + (process.env.NODE_ENV === 'production' ? "/release/" : "/build/"),
        filename: "[name].js",
        chunkFilename: "[chunkhash].js"
    },

    module: {
        loaders: [
            /* #image */
            {
                test: /\.png$/,
                loaders: [
                    'file?hash=sha512&digest=hex&name=images/[name].[ext]?[hash]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            },
            {
              test: /\.svg$/,
              loader: 'svg-sprite?' + JSON.stringify({
                name: '[name]_[hash]',
                prefixize: true,
                // spriteModule: './static/images/'
              })
            },
            /* #font */
            // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            // { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            /* #vue */
            { test: /\.vue$/, loader: "vue-loader" },
            /* #js */
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

    plugins: [
        new ExtractTextPlugin("[name].css",{ allChunks: true }),
        new webpack.optimize.CommonsChunkPlugin('common.js'),
    ],

    resolve: {
        extensions: ['', '.js'],
        alias:{
            'vue':          __dirname + "/bower_components/vue/dist/vue.js",
            'vue-router':   __dirname + "/bower_components/vue-router/dist/vue-router.js",
            'vue-resource': __dirname + "/bower_components/vue-resource/dist/vue-resource.js",
        }
    }

};

if(process.env.NODE_ENV === 'production'){

    module.exports.plugins 
        && module.exports.plugins.push(
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
            new webpack.optimize.OccurenceOrderPlugin(),
            new HtmlWebpackPlugin({
              filename: '../index.html',
              template: './src/index.template.html',
              inject: false,
              minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true,
              },
            })
        );

    // for style
    module.exports.module.loaders 
        && module.exports.module.loaders.push(
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader","css-loader!sass-loader")  }
        );

}else{

    module.exports.devtool = 'source-map';

    module.exports.plugins 
        && module.exports.plugins.push(
            new HtmlWebpackPlugin({
              filename: '../index.html',
              template: './src/index.template.html',
              inject: false
            })
        );
    
    module.exports.module.loaders 
        && module.exports.module.loaders.push(
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader?sourceMap") },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader","css-loader?sourceMap!sass-loader?sourceMap")  }
        );

}
