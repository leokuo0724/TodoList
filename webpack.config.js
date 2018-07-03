HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "./index.html"
});

var webpack = require("webpack")
// 簡化code 混淆兼壓縮
var UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
    //編譯進入點
    entry: "./src/index.js",
    output: {
        path: __dirname,
        //編譯完的位置
        filename: "./dist/bundle.js",
        sourceMapFilename: 'bundle.map',
        libraryTarget: 'var',
        library: 'EntryPoint'
    },
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    //簡化code用
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    }
}
