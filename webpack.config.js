const {resolve} = require('path');

module.exports = {
    mode: "development",
    entry: './index.js',
    context: __dirname,
    output: {
        path: resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    devServer: {
        port: 8070
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/, loader: 'file-loader'},
        ],
    }
};
