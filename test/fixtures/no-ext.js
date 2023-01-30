import { isMain } from "../../dist/esm/index.js";

if (isMain(import.meta)) {
  console.log("is main");
}
