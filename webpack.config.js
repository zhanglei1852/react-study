import webpack from 'webpack'
import path from 'path'

module.exports = {
	context: __dirname + '/src',
	entry: './index.js',
	output: {
		path: __dirname + '/src/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}