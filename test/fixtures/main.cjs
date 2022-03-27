"use strict";

const { isMain } = require("../..");

if (isMain(module)) {
  console.log("is main");
}
