import path from "node:path";
import { execa } from "execa";

const fixturesDir = (...args: string[]) =>
  path.join("./test/fixtures", ...args);

describe("ESM", () => {
  test("return false for non-main ESM", async () => {
    const { stdout } = await execa("node", [fixturesDir("non-main.mjs")]);
    expect(stdout).toBe("");
  });

  test("return true for main ESM", async () => {
    const { stdout } = await execa("node", [fixturesDir("main.mjs")]);
    expect(stdout).toBe("is main");
  });
});

describe("CJS", () => {
  test("return false for non-main module", async () => {
    const { stdout } = await execa("node", [fixturesDir("non-main.cjs")]);
    expect(stdout).toBe("");
  });

  test("return true for main module", async () => {
    const { stdout } = await execa("node", [fixturesDir("main.cjs")]);
    expect(stdout).toBe("is main");
  });
});

describe("--experimental-modules", () => {
  test("return true for main module", async () => {
    const { stdout } = await execa("node", [
      "--experimental-modules",
      fixturesDir("main.mjs"),
    ]);

    expect(stdout).toBe("is main");
  });

  test("return false for non-main module", async () => {
    const { stdout } = await execa("node", [
      "--experimental-modules",
      fixturesDir("non-main.mjs"),
    ]);

    expect(stdout).toBe("");
  });
});

describe("ts-node", () => {
  const args = [
    "-T",
    "--esm",
    "-O",
    JSON.stringify({ module: "ESNext" }),
    "--preferTsExts",
    "--skipProject",
  ];

  test(
    "return true for main module",
    async () => {
      const { stdout } = await execa("ts-node", [
        ...args,
        fixturesDir("main.ts"),
      ]);

      expect(stdout).toBe("is main");
    },
    1000 * 30,
  );

  test(
    "return false for non-main module",
    async () => {
      const { stdout } = await execa("ts-node", [
        ...args,
        fixturesDir("non-main.ts"),
      ]);

      expect(stdout).toBe("");
    },
    1000 * 30,
  );
});
