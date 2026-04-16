import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        rules: {
            'object-curly-spacing': ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
        },
    },
];