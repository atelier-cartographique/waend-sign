
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const ROOT = path.resolve(__dirname);

module.exports = {
    context: ROOT,
    entry: {
        bundle: './src/index.ts',
        style: './style/index.js',
    },

    output: {
        path: path.resolve(ROOT, 'dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    resolve: {
        // mainFields: ['browser', 'main'],
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                    }

                ]
            },
            // CSS
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },

            // LESS
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader"
                })
            },

            //fonts
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    publicPath: '/client/assets/edit/'
                }
            },

            //images
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    publicPath: '/client/assets/edit/'
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("[name].css"),
        new UglifyJSPlugin({
            parallel: true,
            uglifyOptions: {
                ie8: false,
                ecma: 6,
                compress: {

                }
            }
        }),
    ],
};


