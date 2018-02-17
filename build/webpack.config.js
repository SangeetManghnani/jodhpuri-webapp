var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const config = require('./config');

module.exports = {
    entry: [
        config.CLIENT_DIR + '/main.js'
    ],
    devtool: 'source-map',
    output: {
        path: config.DIST_DIR,
        filename: 'bundle/bundle.js'
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
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle/bundle.css'),
        new webpack.optimize.UglifyJsPlugin({
            disable: process.env.NODE_ENV !== 'production',
            compressor: {
                warnings: false,
            },
        }),
    ],
    postcss: () => [autoprefixer({ browsers: 'last 2 version' })],
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: ['client', 'node_modules'],
        root: config.ROOT_DIR
    }
};