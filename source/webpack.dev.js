/* eslint-disable import/no-extraneous-dependencies, no-restricted-syntax, guard-for-in */

const os = require('os');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ManifestPlugin = require('webpack-manifest-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { default: common, htmlWebpackPlugin } = require('./webpack.common');

const publicPath = '/';

function getIPAddress() {
    const interfaces = os.networkInterfaces();
    for (const devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i += 1) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
    return '0.0.0.0';
}

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].chunk.js',
        publicPath,
    },
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public/'),
        watchContentBase: true,
        historyApiFallback: {
            // Paths with dots should still use the history fallback.
            // See https://github.com/facebook/create-react-app/issues/387.
            disableDotRule: true,
        },
        port: 8000,
        hot: true,
        open: true,
        host: getIPAddress(),
        disableHostCheck: true,
        compress: true,
        quiet: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            ...htmlWebpackPlugin,
        }),
        new FriendlyErrorsWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath,
        }),
    ],
    module: {
        rules: [
            {
                test: /global\.scss$/,
                loaders: [{
                    loader: 'style-loader',
                    options: {
                        sourceMap: true,
                    },
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 1,
                    },
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                }],
            },
            {
                test: /\.scss$/,
                exclude: /global\.scss$/,
                loaders: [{
                    loader: 'style-loader',
                    options: {
                        sourceMap: true,
                    },
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: true,
                        localIdentName: '[name]_[local]_[hash:base64:10]',
                        importLoaders: 2,
                    },
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            require('postcss-preset-env')({
                                autoprefixer: {
                                    flexbox: 'no-2009',
                                },
                                stage: 3,
                            }),
                        ],
                    },
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                    },
                }],
            }, {
                test: /\.css$/,
                loaders: [{
                    loader: 'style-loader',
                    options: {
                        sourceMap: true,
                    },
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: false,
                        importLoaders: 1,
                    },
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                    },
                }],
            }, {
                test: /\.less$/,
                loaders: [{
                    loader: 'style-loader',
                    options: {
                        sourceMap: true,
                    },
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                    },
                }, {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true,
                        javascriptEnabled: true,
                    },
                }],
            },
        ],
    },
});
