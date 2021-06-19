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
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx', '.ts'] }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // 'simple-import-sort/imports': ['error',
    //   {
    //     groups: [
    //       ['^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'],
    //       ['^react', '^@?\\w'],
    //       ['^(@components|@constants)(/.*|$)'],
    //       ['^.+\\.ico$', '^.+\\.jpg$', '^.+\\.png$', '^.+\\.svg$'],
    //       ['^.+\\.s?css$'],
    //     ],
    //   },
    // ],
  },
};
