module.exports = {
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'module'
  },
  extends: 'airbnb-base/legacy',
  env: {
    browser: true,
    jquery: true,
    jasmine: true
  },
  globals: {
    Routes: true,
    I18n: true,
    Flash: true,
    loadFixtures: true,
    setFixtures: true
  }
};
