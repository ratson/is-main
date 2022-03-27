import path from "node:path";
import { execa } from "execa";

const fixturesDir = (...args: string[]) =>
  path.join("./test/fixtures", ...args);

test("return false for non-main ESM", async () => {
  const { stdout } = await execa("node", [fixturesDir("non-main.mjs")]);
  expect(stdout).toBe("");
});

test("return true for main ESM", async () => {
  const { stdout } = await execa("node", [fixturesDir("main.mjs")]);
  expect(stdout).toBe("is main");
});

test("return false for non-main module", async () => {
  const { stdout } = await execa("node", [fixturesDir("non-main.cjs")]);
  expect(stdout).toBe("");
});

test("return true for main module", async () => {
  const { stdout } = await execa("node", [fixturesDir("main.cjs")]);
  expect(stdout).toBe("is main");
});
