const { merge } = require('webpack-merge');
const developmentConfig = require('./webpack-development');
const productionConfig = require('./webpack-production');
const commonConfig = require('./webpack-common');

const common = commonConfig();
const development = { ...developmentConfig() };
const production = { ...productionConfig() };

module.exports = (env, args) => {
	switch (args.mode) {
	case 'development':
		return merge(common, development);
	case 'production':
		return merge(common, production);

	default:
		throw new Error('No matching configuration was found!');
	}
};
