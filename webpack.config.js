/*eslint-env node*/

module.exports = {
  mode: 'production',
	output: {
		filename: 'scripts.min.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true
				}
			}
		]
	}
};
