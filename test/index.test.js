import test from "ava";

import isMain from "..";

test.beforeEach((t) => {
  t.context.mainModuleOrigin = process.mainModule;
  t.context.argvOrigin = process.argv;
});

test.afterEach.always((t) => {
  process.mainModule = t.context.mainModuleOrigin;
  process.argv = t.context.argvOrigin;
});

test("return true when match process.mainModule.filename", (t) => {
  process.mainModule.filename = "/root";

  t.true(
    isMain({
      url: "file:///root",
    }),
  );
});

test("return false for url with querystring", (t) => {
  process.mainModule.filename = "/root";

  t.false(isMain({ url: "file:///root?test=true" }));
});

test("return true using process.argv[1]", (t) => {
  process.mainModule = undefined;
  process.argv = [null, "/root.mjs"];

  t.true(isMain({ url: "file:///root.mjs" }));
});

test("return true for process.argv[1] without file extention", (t) => {
  process.mainModule = undefined;
  process.argv = [null, "/root"];

  t.true(isMain({ url: "file:///root.mjs" }));
});
