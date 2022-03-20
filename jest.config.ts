import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest/presets/js-with-ts-esm",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      useESM: true,
    },
  },
  extensionsToTreatAsEsm: [".ts"],
  testPathIgnorePatterns: ["/node_modules/", "dist"],
};

export default config;
