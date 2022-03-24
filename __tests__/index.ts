import isMain from "../src/index.js";

test("is not main", () => {
  expect(isMain(import.meta)).toBe(false);
});
