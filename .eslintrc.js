module.exports = {
  extends: ['standard', 'plugin:react/recommended'],
  env: {
    browser: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    indent: 0,
    'no-tabs': 0,
    'eol-last': ['error', 'always'],
    'no-underscore-dangle': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 0,

    // Preferred
    semi: ['error', 'always'],
    'prefer-const': 0,
    'space-before-function-paren': 0
  }
};
