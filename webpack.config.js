const path = require('path');
// const miniCss = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// const HandlebarsPlugin = require('handlebars-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
	},
	externalsPresets: { node: true },
	externals: [nodeExternals()],
	resolve: {
		extensions: ['.ts', '.js', '.json'],
	},
	resolveLoader: {
		// modules: ['node_modules'],
		extensions: ['.hbs'],
		alias: {
			hbs: 'handlebars-loader',
		},
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-typescript"],
					},
				}
			},
			{
				test: /\.hbs/,
				loader: 'handlebars-loader',
				// exclude: /(node_modules)/,
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
	optimization: {
		minimizer: [
			new CssMinimizerPlugin(),
		],
	},
	plugins: [
		new MiniCssExtractPlugin(),
		// new HandlebarsPlugin({
		// 	output: path.join(process.cwd(), 'build', '[name].html'),
		// 	onBeforeSetup(Handlebars) {},
		// 	onBeforeAddPartials(Handlebars, partialsMap) {},
		// 	onBeforeCompile(Handlebars, templateContent) {},
		// 	onBeforeRender(Handlebars, data, filename) {},
		// 	onBeforeSave(Handlebars, resultHtml, filename) {},
		// 	onDone(Handlebars, filename) {},
		// }),
		new HtmlWebpackPlugin({
			inject: false,
			template: './src/index.html',
		}),
	],
};
