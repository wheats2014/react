var path = require('path');

var webpack = require('webpack')


module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'app/unit_component.js')
    ],
    output: {
        path: path.resolve(__dirname, '/build/'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'react-hot-loader!babel-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }]
    },
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
]
};
