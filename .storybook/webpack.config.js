const path = require('path');

const SRC_DIR = path.resolve(__dirname, '../');

module.exports = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				include: SRC_DIR,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader', options: { sourceMap: true } },
					{ loader: 'sass-loader', options: { sourceMap: true } },
				],
			},
			{
				test: /\.(jpe?g|png)$/i,
				include: SRC_DIR,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: '[name].[ext]?[hash]',
							outputPath: 'img/',
							limit: 10000,
						},
					},
					{
						loader: 'img-loader',
					},
				],
			},
		],
	}
}
