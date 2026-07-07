import js from '@eslint/js'
import globals from 'globals'
import playwright from 'eslint-plugin-playwright'
import { defineConfig } from 'eslint/config'

export default defineConfig([
    playwright.configs['flat/recommended'],

    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            sourceType: 'module',
        },
    },

    {
        files: ['**/*.cjs'],
        languageOptions: { sourceType: 'commonjs' },
    },
])
