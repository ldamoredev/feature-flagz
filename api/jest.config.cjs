module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['jest-extended/all'],
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'ts'],
  testRegex: '/test/(.*)\\.test\\.(ts|js)$',
  watchman: false,
}
