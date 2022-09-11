module.exports = function developmentConfig() {
	return {
		devServer: {
			historyApiFallback: true,
			hot: true,
			port: 3000,
		},
	};
};
