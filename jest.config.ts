import { pathsToModuleNameMapper } from "ts-jest"

export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testMatch: [
    "**/*.spec.ts"
  ],
};
