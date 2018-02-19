const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devServer = require('./webpack/devserver');
const pug = require('./webpack/pug');
const font = require('./webpack/font');
const video = require('./webpack/video');
// const scss = require('./webpack/scss');
// const css = require('./webpack/css');
const cssExtract = require('./webpack/css.extract');
const uglifyJs = require('./webpack/js.uglify');
const images = require('./webpack/images');
const es6Transpiler = require('./webpack/es6.transpiller');


const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([
        {
            entry: {
                'index': PATHS.source + '/pages/index/index.js',
                'methodology': PATHS.source + '/pages/methodology/methodology.js',
            },
            output: {
                path: PATHS.build,
                filename: 'js/[name].js'
            },
            plugins: [
                new HtmlWebpackPlugin({
                    filename: 'index.html',
                    chunks: ['index','common'],
                    template: PATHS.source + '/pages/index/index.pug'
                }),
                new HtmlWebpackPlugin({
                    filename: 'methodology.html',
                    chunks: ['methodology','common'],
                    template: PATHS.source + '/pages/methodology/methodology.pug'
                }),
                // new webpack.optimize.CommonsChunkPlugin({
                //     name: 'common'
                // })
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery'
                })
            ],
        },
        pug(),
        images(),
        font(),
        video()
]);

module.exports = function (env) {
    if (env === 'production') {
        return merge([
            common,
            cssExtract(),
            uglifyJs(),
            es6Transpiler()
        ]);
    }
    if (env === 'development') {
        return merge ([
            common,
            devServer(),
            cssExtract(),
            es6Transpiler()
        ])
    }
};