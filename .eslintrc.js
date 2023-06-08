module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        //去除空格的错误校验
        "indent": ["off", 2],
        //以下两行去除结尾必须留空行的校验
        "eol-last": 0,
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'space-before-function-paren': 0,
        // "function-paren-newline": ["error", "never"],
        // "function-paren-newline": ["error", { "minItems": 3 }],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'always',
                asyncArrow: 'always',
            },
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}