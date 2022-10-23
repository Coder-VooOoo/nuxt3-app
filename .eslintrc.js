module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'plugin:vue/base',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	overrides: [],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: '12',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	rules: {
		semi: 2,
		'quote-props': ['error', 'as-needed'],
		quotes: ['error', 'single'],
		indent: ['error', 'tab'],
	}
};
