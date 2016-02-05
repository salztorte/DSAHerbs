var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry : './dest/bundle.js',
    output : {
        path : path.join(__dirname, 'www/build'),
        filename : 'bundle.js'
    },
    devtool : [
        "source-map"
    ],
    module : {
        loaders : [
            {
                test : /.jsx?$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query : {
                    presets : ['es2015', 'react']
                }
            }
        ]
    }
};


//module.exports = {
//    entry : './src/index.js',
//    output : {
//        path : path.join(__dirname, 'www/build'),
//        filename : 'bundle.js'
//    },
//    devtool : [
//        "source-map"
//    ],
//    module : {
//        loaders : [
//            {
//                test : /.jsx?$/,
//                loader : 'babel-loader',
//                exclude : /node_modules/,
//                query : {
//                    presets : ['es2015', 'react']
//                }
//            }
//        ]
//    }
//};