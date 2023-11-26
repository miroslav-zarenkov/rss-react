const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.tsx',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
  ],
};
module.exports = createJestConfig(customJestConfig);
