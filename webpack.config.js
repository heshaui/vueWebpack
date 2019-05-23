//引入插件
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//引入导出css插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

const config = {
	mode: 'development',
	entry:'./src/main.js',
	//服务
	devServer:{
		//启用 webpack 的模块热替换特性
		hot:true
	},
	module:{
		rules:[
			{
				test:/\.vue$/,
				loader:'vue-loader'
			},
			{//ES6
			      test:/\.js$/,
			      loader:'babel-loader',
			      exclude:path.resolve(__dirname,'node_modules'),
			      query:{//若在package.json中定义了这个presets，则这边可以删掉
			          presets:['es2015']
			      }
			},
			{//CSS
			    test:/\.css/,
			    use:ExtractTextPlugin.extract({
			       use:['css-loader']
			    })
			},
			{//Sass
			     test:/\.scss/,
			     use:ExtractTextPlugin.extract({
			        fallback:"style-loader",
			        use:['css-loader','sass-loader']
			     },)
			}
		]
	},
	//从Compiler版本修改为Runtime版本
	resolve: {
		alias: { 'vue': 'vue/dist/vue.js' } 
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:'index.html',
			template:'./index.html',
			hash:true
		}),
		//将css单独打包插件
		new ExtractTextPlugin({
		     filename:"bundle.css"//制定编译后的文件名称
		}),
		new VueLoaderPlugin()
	],
	output:{
		filename:'bundle.js',
		path:path.resolve(__dirname,'dist')
	}
}

module.exports = config;