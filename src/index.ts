import * as path from "node:path";
import * as process from "node:process";
import { fileURLToPath } from "node:url";

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
  const scriptPath = getMainScriptPath();
  const ext = path.extname(scriptPath);
  return p === (ext ? scriptPath : scriptPath + path.extname(p));
}

export default isMain;
