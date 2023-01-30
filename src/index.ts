import { fileURLToPath } from "node:url";
import * as process from "node:process";

export function isMain(
  importMetaOrModule: ImportMeta | NodeJS.Module,
  getMainScriptPath = () => process.argv[1]
): boolean {
  if (!importMetaOrModule || typeof process === "undefined") {
    return false;
  }

  if (process.mainModule === importMetaOrModule) {
    return true;
  }

  if (!("url" in importMetaOrModule)) {
    return false;
  }

  if (!importMetaOrModule.url) {
    return false;
  }

  const p = fileURLToPath(importMetaOrModule.url);
  return p === getMainScriptPath();
}

export default isMain;
