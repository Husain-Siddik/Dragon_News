/* eslint-env node */
module.exports = {
  root: true,
  // for deasy ui require error
  node : true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
