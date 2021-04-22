const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: '[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
            {
                test: /\.vue?$/,
                use: 'vue-loader'
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true, //为每个静态文件提供压缩
        port: 9001
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "管理输出"
        })
    ]
}