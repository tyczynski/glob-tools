/**
 * Jest configuration file
 *
 * @see {@link https://jestjs.io/docs/configuration}
 * @see {@link https://nextjs.org/docs/testing#jest-and-react-testing-library}
 */
import type { Config } from '@jest/types';

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig: Config.InitialOptions = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Handle module aliases
    '^~/pubic/(.*)$': '<rootDir>/public/$1',
    '^~/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
