/**
 * Created by kalle on 04.01.2016.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
      //  'webpack/hot/dev-server',
        main: path.resolve(__dirname, 'app/App.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        //publicPath: 'http://localhost:8001/example',
        filename: 'webpackApp.js'
    },
    plugins:[
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })*/
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx|es6)$/,  //All .js and .jsx files //test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        //'react': 'React'
    }
};