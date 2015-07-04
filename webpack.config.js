var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var glob = require("glob");
var sassLoaders = [
    "css-loader",
    "autoprefixer-loader",
    "sass-loader"
];
var entries = [
        './css/main.scss',
        './js/Main.jsx',
        './js/background.js',
        './manifest.json'
    ]
    .concat(glob.sync('./*.html'))
    .concat(glob.sync('./img/*'));

var IxInternetPortal = {
    entry: entries,
    module: {
        loaders: [
            {
                test: /\html?$/,
                loader: "file?name=../[name].[ext]"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", sassLoaders.join("!"))
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.ico$/,
                loader: "file?name=../img/[name].[ext]"
            },
            {
                test: /\.jsx$/,
                loader: 'jsx-loader'
            },
            {
                test: /background.js$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'file?name=../[name].[ext]'
            }
        ]
    },
    output: {
        path: path.join(__dirname, "build/js"),
        filename: "[name].js"
    },
    plugins: [
        new ExtractTextPlugin('../css/main.css')
    ]
};

module.exports = IxInternetPortal;
