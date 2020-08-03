const path = require('path');

module.exports = {
    name: 'kswwebsite',
    mode: 'production', //실 서비스 : production
    devtool: 'eval',
    devServer: {
        hot: true,
        inline: true,
        contentBase: path.join(__dirname,"src"),
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        app: ['babel-polyfill', './src/Index'],
    }, //입력
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR']
                        },
                        debug: true,
                    }],
                    '@babel/preset-react',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel',
                ]
            },
        }],
    },
    output: {
        path: path.join(__dirname, 'public/dist'),
        filename: 'main.js',
        publicPath: '/',
    },
}
