module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', 'import', '@typescript-eslint'],
    rules: {
        'prettier/prettier': 'error',
        eqeqeq: ['error', 'smart'],
    },
};