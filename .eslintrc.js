// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'airbnb-base',
//   ],
//   rules: {
//     'no-console': 'off',
//   },
// 	parser: '@typescript-eslint/parser',
// 	parserOptions: {
// 		ecmaVersion: 'latest',
// 		project: 'tsconfig.json',
// 		tsconfigRootDir : __dirname,
// 		sourceType: 'module',
// 	},
// 	plugins: ['@typescript-eslint/eslint-plugin'],
// 	ignorePatterns: ['.eslintrc.js'],
// };

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-console': 'off',
	},
};
