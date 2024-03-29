module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': 0,
    'linebreak-style': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
  },
};
