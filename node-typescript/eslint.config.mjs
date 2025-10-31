import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  // 1) Ignore build & deps
  { ignores: ['dist/**', 'node_modules/**'] },

  // 2) Base JS + TS recommendations
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 3) TS files rules
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module'
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off'
    }
  },

  // 4) Jest config (CommonJS) – allow `module` & Node globals
  {
    files: ['jest.config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node
    }
  }
];
