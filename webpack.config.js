const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer');
const mode = 'development';

const config  = {
    name: 'KSWWebsite',
    mode: mode === 'development' ? 'development' : 'production',
    devtool: mode === 'development' ? 'inline-source-map' : 'hidden-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {},
    },
    entry: {
        app: './src/index',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: { browsers: ['last 2 chrome versions'] },
                                debug: mode === 'development',
                            },
                        ],
                        '@babel/preset-react',
                        '@babel/preset-typescript',
                    ],
                    env: {
                        development: {},
                        production: {},
                    },
                },
                exclude: path.join(__dirname, 'node_modules'),
            },
            {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                include: /images/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/'
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new webpack.EnvironmentPlugin({ NODE_ENV: mode === 'development' ? 'development' : 'production' }),
        new webpack.DefinePlugin({
            'process.env.GOOGLE_CLIENT_ID': JSON.stringify('567865268334-rcdi6r5c4q9nd1gobm14l1fgekvut1nn.apps.googleusercontent.com'),
            'process.env.KAKAO_REST_API_KEY' : JSON.stringify('005093da128287b4a5fcd995dcc88106'),
            'process.env.KAKAO_CALLBACK_URL' : mode === 'development' ? JSON.stringify('http://localhost:8080/oauth') : JSON.stringify('https://mypill.co.kr/oauth'),
            'process.env.NAVER_CLIENT_ID' : JSON.stringify('DZvVufHJdP8y88x58FiE'),
            'process.env.NAVER_CLIENT_SECRET' : JSON.stringify('hoa4PM6Iyn'),
            'process.env.NAVER_CALLBACK_URL' : JSON.stringify('http://localhost/naver_login/callback'),
        }),
    ],
    output: {
        path: path.join(__dirname, 'public/dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'src/dist'),
        },
        proxy: {
            '/': 'http://localhost',
        },
    },
};

if (mode === 'development' && config.plugins) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(new ReactRefreshWebpackPlugin());
    config.plugins.push(new WebpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: 'server', openAnalyzer: false }));
    config.module.rules[0].options.env.development.plugins = [['@emotion/babel-plugin', { sourceMap: true }], require.resolve('react-refresh/babel')];
}

if (mode === 'production' && config.plugins) {
    config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
    config.plugins.push(new WebpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: 'static' }));
    config.module.rules[0].options.env.production.plugins = ['@emotion/babel-plugin'];
}

module.exports = config;

//
// const path = require('path');
//
// module.exports = {
//     name: 'kswwebsite',
//     mode: 'production', //실 서비스 : production
//     devtool: 'eval',
//     devServer: {
//         hot: true,
//         inline: true,
//         contentBase: path.join(__dirname,"src"),
//         historyApiFallback: true,
//     },
//     resolve: {
//         extensions: ['.js', '.jsx'],
//     },
//     entry: {
//         app: ['babel-polyfill', './src/Index'],
//     }, //입력
//     module: {
//         rules: [{
//             test: /\.jsx?/,
//             loader: 'babel-loader',
//             options: {
//                 presets: [
//                     ['@babel/preset-env', {
//                         targets: {
//                             browsers: ['> 1% in KR']
//                         },
//                         debug: true,
//                     }],
//                     '@babel/preset-react',
//                 ],
//                 plugins: [
//                     '@babel/plugin-proposal-class-properties',
//                     'react-hot-loader/babel',
//                 ]
//             },
//         }],
//     },
//     output: {
//         path: path.join(__dirname, 'public/dist'),
//         filename: 'main.js',
//         publicPath: '/',
//     },
// }
