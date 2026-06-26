import { fixupConfigRules } from '@eslint/compat';
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tsdocPlugin from 'eslint-plugin-tsdoc';

export default [
  {
    ignores: [
      'packages/storybook/**',
      '**/*.stories.tsx',
      '**/dist/**',
      '**/node_modules/**',
    ],
  },

  js.configs.recommended,

  // @typescript-eslint recommended (sets up plugin + parser)
  ...tsPlugin.configs['flat/recommended'],

  // React (fixupConfigRules patches old context.getFilename() API for ESLint 10)
  ...fixupConfigRules([
    reactPlugin.configs.flat.recommended,
    reactPlugin.configs.flat['jsx-runtime'],
  ]),

  // React Hooks (v7 native flat config)
  reactHooksPlugin.configs.flat['recommended-latest'],

  // JSX A11y (v6.10 native flat config)
  jsxA11yPlugin.flatConfigs.strict,

  {
    plugins: {
      'import': importPlugin,
      'tsdoc': tsdocPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        project: ['./tsconfig.json'],
        sourceType: 'module',
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
      '@typescript-eslint/consistent-indexed-object-style': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true, varsIgnorePattern: 'h' }],
      '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
      '@typescript-eslint/no-wrapper-object-types': 'error',
      'array-bracket-spacing': ['error', 'never'],
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': ['error', { after: true, before: true }],
      'brace-style': ['error', '1tbs'],
      'comma-dangle': ['error', 'always-multiline'],
      'complexity': ['error'],
      'curly': ['error', 'all'],
      'default-case': 'error',
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'function-call-argument-newline': ['error', 'consistent'],
      'import/no-unresolved': 'error',
      'import/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
          },
          groups: [
            'type',
            'builtin',
            'external',
            'internal',
            ['sibling', 'parent'],
            'index',
            'unknown',
          ],
          'newlines-between': 'never',
          pathGroups: [
            {
              group: 'object',
              pattern: '{.,..}/*.scss',
              position: 'after',
            },
          ],
        },
      ],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'jsx-a11y/no-autofocus': 'off',
      'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      'max-depth': ['error', { max: 4 }],
      'max-len': ['error', { code: 400 }],
      'max-params': ['error', 4],
      'newline-per-chained-call': 'off',
      'no-array-constructor': 'error',
      'no-await-in-loop': 'error',
      'no-useless-assignment': 'off',
      'no-console': ['error', { allow: ['error', 'warn'] }],
      'no-extra-bind': 'error',
      'no-magic-numbers': 'off',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-nested-ternary': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'operator-linebreak': ['error', 'before', { overrides: { '&&': 'after' } }],
      'quotes': ['error', 'single'],
      'react/display-name': 'off',
      'react/prop-types': 'off',
      'react-hooks/incompatible-library': 'off',
      'semi': ['error', 'always'],
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: false,
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      'sort-keys': ['error', 'asc'],
      'space-before-function-paren': ['error', 'never'],
      'tsdoc/syntax': 'off',
    },
  },

  // JS/MJS files — no project-aware type checking
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      parserOptions: {
        project: false,
      },
    },
  },

  // Config files — no project-aware type checking
  {
    files: ['**/*.config.ts'],
    languageOptions: {
      parserOptions: {
        project: false,
      },
    },
  },

];
