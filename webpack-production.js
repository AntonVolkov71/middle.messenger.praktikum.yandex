const path = require('path');

module.exports = function productionConfig() {
	return {
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'index.js',
		},
	};
};
