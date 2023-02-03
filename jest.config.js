module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  setupFiles: ['./jest.setup.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@App/(.*)': '<rootDir>/src/$1',
    '^@Test/(.*)': '<rootDir>/tests/$1',
  },
  setupFilesAfterEnv: ['./src/test/setup.ts'],
  coveragePathIgnorePatterns: ['./src/app.module.ts', './src/main.ts'],
  collectCoverageFrom: ['src/**/*.ts', '!**/node_modules/**', '!**/tests/**'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
