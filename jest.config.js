/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  verbose: true,
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testRegex: "\\.test\\.ts$",
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: ["ts", "tsx", "js", "mjs", "json"],
  globals: {
    "ts-jest": {
      diagnostics: true
    }
  }
};