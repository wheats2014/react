var path = require('path');


module.exports = {
    entry: [
        path.resolve(__dirname, 'app.jsx')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader'
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
    }
};
