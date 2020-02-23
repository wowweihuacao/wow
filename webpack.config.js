const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const htmlPlugin = new HtmlPlugin({
    //指定要用到的模板
    template: './src/index.html',
    //指定生成的文件名称，该文件存在于内存中，目录中不显示
    filename: 'index.html'
})

module.exports = {
    mode: "development", //开发模式
    entry: path.join(__dirname, './src/index.js'), //打包入口文件路径
    output: { //打包出口文件路径
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [htmlPlugin, new VueLoaderPlugin()],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.(jpg|png|gif|jpeg|bmp|ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader?limit=10000'
            },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    }
}