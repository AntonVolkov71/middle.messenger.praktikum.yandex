const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function commonConfig() {
	return {
		entry: './src/index.ts',
		target: 'web',

		devServer: {
			historyApiFallback: true,
		},
		resolve: {
			extensions: ['.ts', '.js', '.json'],
			alias: {
				handlebars: 'handlebars/dist/handlebars.js',
				'@partials': path.resolve(__dirname, 'src/display-components/partials'),
				'@utils': path.resolve(__dirname, 'src/utils/'),
				'@services': path.resolve(__dirname, 'src/services/'),
				'@assets': path.resolve(__dirname, 'src/assets/'),
				'@myTypes': path.resolve(__dirname, 'src/types/'),
				'@store': path.resolve(__dirname, 'src/store/'),
				'@api': path.resolve(__dirname, 'src/api/'),
				'@components': path.resolve(__dirname, 'src/display-components/components/'),
				'@pages': path.resolve(__dirname, 'src/display-components/pages/'),
				'@layout': path.resolve(__dirname, 'src/display-components/layout/'),
			},
		},
		optimization: {
			minimizer: [
				new CssMinimizerPlugin(),
			],
		},
		plugins: [
			new MiniCssExtractPlugin(),
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
		],
		module: {
			rules: [
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-typescript'],
						},
					},
				},
				{
					test: /\.tsx?$/,
					use: [
						{
							loader: 'ts-loader',
							options: {
								configFile: path.resolve(__dirname, 'tsconfig.json'),
							},
						},
					],
					exclude: /node_modules/,
				},
				{
					test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
					type: 'asset/resource',
				},
				{
					test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
					type: 'asset/inline',
				},
				{
					test: /.s?css$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				},
			],
		},
	};
};
