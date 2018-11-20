/* eslint-disable import/no-extraneous-dependencies, no-underscore-dangle */

require('dotenv').config();

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { GhostProgressPlugin } = require('ghost-progress-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports.htmlWebpackPlugin = {
    inject: true,
    template: resolveApp('template/index.html'),
    title: 'Smarppy - Consultoria e Desenvolvimento de Software',
};

module.exports.default = {
    entry: [
        resolveApp('index.js'),
    ],
    plugins: [
        new GhostProgressPlugin(),
        new CleanWebpackPlugin(['dist/**/*']),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    module: {
        strictExportPresence: true,
        rules: [
            // Disable require.ensure as it's not a standard language feature.
            { parser: { requireEnsure: false } },
            {
                test: /\.component\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /\.component\.svg$/,
                use: ['file-loader'],
            }, {
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: ['eslint-loader'],
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.mjs', '.web.js', '.js', '.web.jsx', '.jsx', '.less', '.json'],
    },
    optimization: {
        // Automatically split vendor and commons
        // https://twitter.com/wSokra/status/969633336732905474
        // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
        splitChunks: {
            chunks: 'all',
            name: false,
        },
        // Keep the runtime chunk seperated to enable long term caching
        // https://twitter.com/wSokra/status/969679223278505985
        runtimeChunk: true,
    },
};
