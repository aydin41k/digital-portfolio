module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.js'],
  collectCoverageFrom: [
    'components/**/*.js',
    'pages/**/*.js',
    '!**/node_modules/**',
  ],
};

