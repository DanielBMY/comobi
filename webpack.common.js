// You can't use import statements here
const path = require("path");
let webpack = require('webpack')
let devMode = process.env.NODE_ENV === 'development'

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(jpe?g|png|svg)$/,
				use: {
					loader: 'file-loader'
				}
			},
			{
				test: /\.ya?ml$/,
				use: 'js-yaml-loader'
			}
		]
	},
	mode: devMode ? 'development' : 'production',
	plugins: [
		devMode && new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			INSTANCE : JSON.stringify(process.env.INSTANCE)
		})
	].filter(Boolean)
}
