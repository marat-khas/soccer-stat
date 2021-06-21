module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'no-shadow': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'quotes': ['error', 'single', 'avoid-escape'],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx', '.ts'] }],
    '@typescript-eslint/no-shadow': ['error'],
  },
  'globals': {
    'PUBLIC_PATH': '/'
  },
};
