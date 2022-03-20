// eslint-disable-next-line import/no-named-as-default
import isMain from ".";

test("is not main", () => {
  expect(isMain(import.meta)).toBe(false);
});
