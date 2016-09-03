/**
 * Created by jaelomin on 2016. 1. 14..
 *
 */

'use strict';

var webpack = require('webpack');

module.exports = {
    entry : {
        src : ['./js/behavior.js']
    },
    output : {
        path : './js/dist',
        filename : 'bundle.js'
    },
    plugins : [
        new webpack.ProvidePlugin({
            '_' : 'underscore',
            '$' : 'jQuery',
            'Backbone' : 'Backbone'
        })
    ]
};