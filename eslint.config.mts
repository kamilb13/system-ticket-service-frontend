import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig (
    js.configs.recommended,
    tseslint.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        rules: {
            'object-curly-spacing': ['error', 'always'],
            'comma-dangle': ['error', 'always-multiline'],
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            '@typescript-eslint/no-explicit-any': ['off'],
        },
        languageOptions: {
            sourceType: 'module',
            globals: {
                ...globals.browser,
            },
        },
    },
);