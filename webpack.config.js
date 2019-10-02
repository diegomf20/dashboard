const { VueLoaderPlugin } = require('vue-loader') 
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname+'/public',
        filename: 'app.js'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 50,
        poll: 100
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
              }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // chunks:["light-dashboard.css"]
        })
    ],
    devServer: {
        port: 3000,
        historyApiFallback: true
    }
}