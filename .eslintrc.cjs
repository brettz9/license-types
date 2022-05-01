'use strict';

module.exports = {
  extends: 'eslint:recommended',
  overrides: [
    {
      files: '*.cjs',
      env: {
        node: true
      }
    }
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022
  }
};
