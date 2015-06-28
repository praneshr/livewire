
'use strict';

var webpack = require('webpack');
module.exports = function(release) {
    return {
        entry: './js/main.js',

        output: {
            filename: 'final.js',
            path: './js/compiled',
            publicPatch: './'
        },
        resolve: {
            extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx'],
        },

        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: 'style!css'
                },
                {
                    test: /\.scss$/,
                    loader: 'style!css!sass'
                },
                {
                    test: /\.less$/,
                    loader: 'style!css!less'
                },
                {
                    test: /\.gif/,
                    loader: 'url-loader?limit=10000&mimetype=image/gif'
                },
                {
                    test: /\.jpg/,
                    loader: 'url-loader?limit=10000&mimetype=image/jpg'
                },
                {
                    test: /\.png/,
                    loader: 'url-loader?limit=10000&mimetype=image/png'
                },
                {
                    test: /\.jsx?$/,
                    loader: 'jsx-loader?harmony'
                }
            ]
        },
        jshint: {
            'browser': true
        }
    };
};
