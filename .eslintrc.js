module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:jest/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
  },
};
