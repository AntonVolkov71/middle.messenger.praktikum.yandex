module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [
					".js",
					".jsx",
					".ts",
					".tsx"
				]
			}
		}
	},
	"parser": "@typescript-eslint/parser",
	"plugins": ["@typescript-eslint"],
	"parserOptions": {
		"project": "./tsconfig.json",
		"ecmaVersion": 'latest',
		"sourceType": 'module',
	},
	"rules": {
		"no-undef": 0,
		"no-underscore-dangle": 0,
		"no-param-reassign": 0,
		"react/prop-types": 0,
		"react/destructuring-assignment":0,
		"class-methods-use-this": 0,
		"react/no-unused-class-component-methods": 0,
		"no-shadow": "off",
		"import/no-cycle": 0,
		"no-useless-constructor": 0,
		"no-mixed-spaces-and-tabs": 0,
		"@typescript-eslint/no-shadow": ["error"],
		"indent": [2, "tab"],
		"no-tabs": 0,
		'no-console': 'off',
		"max-len": [2, 120],
		"@typescript-eslint/no-unused-vars": 2,
		"import/extensions": ["error", "ignorePackages", {
			"js": "never",
			"jsx": "never",
			"ts": "never",
			"tsx": "never",
			"mjs": "never"
		}]
	},
	extends: [
		"airbnb",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
	],
}
