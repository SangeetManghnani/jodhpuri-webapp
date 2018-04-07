const config = require('./config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

var webpackConfig = {
    // entry: [
    //     config.CLIENT_DIR + '/main.js'
    // ],
    resolve: {
        extensions: ['.hbs', '.html'],
    },
    entry: {
        main: config.CLIENT_DIR + '/main.js',
        home: config.CLIENT_DIR + '/home/home.js',
        about: config.CLIENT_DIR + '/aboutUs/about-us.js',
    },
    devtool: 'source-map',
    output: {
        path: config.DIST_DIR,
        filename: 'bundle/[name].bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: config.NPM_DIR,
                loader: 'babel',
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract('style-loader', 'css!sass'),
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars'
            },
        ]
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new ExtractTextPlugin('bundle/bundle.css'),
        // new HtmlWebpackPlugin({
        //     template: config.CLIENT_DIR + '/main-layout.hbs'
        // }),
        new webpack.optimize.UglifyJsPlugin({
            disable: process.env.NODE_ENV !== 'production',
            compressor: {
                warnings: false, // Suppress uglification warnings
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true
            },
        }),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0
        }),
        new CopyWebpackPlugin([
            { from: 'src/client/assets/', to: '../public/assets/' }
        ])
    ],
    postcss: () => [autoprefixer({ browsers: 'last 2 version' })],
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['client', 'node_modules'],
        root: config.ROOT_DIR
    }
}

module.exports = webpackConfig;