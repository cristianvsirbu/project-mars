module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // React-specific rules
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/no-array-index-key': 'warn',
    'react/self-closing-comp': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-key': 'error',
    'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],

    // JavaScript best practices
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'prefer-const': 'warn',
    'no-duplicate-imports': 'error',
    'no-use-before-define': ['error', { functions: false }],
    'eqeqeq': ['warn', 'always'],
    'no-var': 'error',
    'object-shorthand': 'warn',
  },
}
