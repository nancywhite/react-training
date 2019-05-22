const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            title: 'Take a poll...',
            mainDiv: 'welcome-message',
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/data',
                to: 'data/'
            }
        ])
    ]
};
