import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testEnvironmentOptions: {
    resources: "usable",
  },
  globals: {
    PRODUCTION: false,
  },
  testRegex: "((\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  testPathIgnorePatterns: ["/node_modules/", "setup.ts", "/fixtures/"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        isolatedModules: true,
      },
    ],
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/fileTransformer.js",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "src/(.*)": "<rootDir>/src/$1",
  },
  restoreMocks: true,
  clearMocks: true,
  testEnvironment: "jsdom",
  resetMocks: true,
  // globalSetup: "./jest-global-setup.js",
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  rootDir: "../",
};

export default config;

