module.exports = {
  parser: 'babel-eslint',
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    parser: 'babel-eslint',
    'eslint-disable-next-line': 2
  },
  env: {
    es6: true
  },
  // plugins: ['html', 'transform-object-rest-spread'],
  // parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module'
  }
};
