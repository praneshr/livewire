var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var sassLoaders = [
    "css-loader",
    "autoprefixer-loader",
    "sass-loader"
];
var IxInternetPortal = {
    entry: './js/main.jsx',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!"))
            },
            { 
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
                loader: "file" 
            },
            {
                test: /\.jsx?$/,
                loader: 'jsx-loader?harmony'
            }
        ]
    },
    output: {
        path: "./build",
        filename: "main.js"
    },
    plugins: [
        new ExtractTextPlugin('main.css')
    ]
};

module.exports = IxInternetPortal;
