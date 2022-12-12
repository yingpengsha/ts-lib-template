/**
 * @type {import('eslint-define-config').EslintConfig}
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    // ts will check these rule
    'no-undef': 'off',
    'no-unused-vars': 'off',

    // replace 'no-redeclare' with @typescript-eslint
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error']
  }
}
