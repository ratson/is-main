import * as path from "node:path";
import { isMain } from "../../dist/esm/index.js";

if (isMain(import.meta, () => path.resolve(process.argv[2]))) {
  console.log("is main");
}
