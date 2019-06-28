module.exports = {
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['node'],
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  rules: {
    'node/exports-style': ['error', 'exports'],
    'node/no-unpublished-require': [
      'error',
      {
        allowModules: ['chai'],
      },
    ],
    'no-console': 0,
    'comma-dangle': ['error', 'always-multiline'],
  },
  env: {
    node: true,
    mocha: true,
  },
};
