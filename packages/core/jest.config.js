const config = require('@feature-flagz/jest-config/jest-config')

module.exports = {
  ...config,
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
}
