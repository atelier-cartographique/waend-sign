
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const ROOT = path.resolve(__dirname);

module.exports = {
    context: ROOT,
    entry: {
        bundle: './src/index.ts',
        style: './src/style.js',
    },

    output: {
        path: path.resolve(ROOT, 'dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    resolve: {
        mainFields: ['browser', 'main'],
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },

            {
                enforce: 'pre',
                test: /\.ts$/,
                use: "source-map-loader"
            },
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
    ],

    devtool: 'inline-source-map',
};


