import process from "node:process";

function isMain(importMetaOrModule: ImportMeta | NodeJS.Module): boolean {
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

  if (typeof process.mainModule === "undefined") {
    const url = `file://${process.argv[1]}`;
    return [url, `${url}.mjs`].includes(importMetaOrModule.url);
  }

  return importMetaOrModule.url === `file://${process.mainModule.filename}`;
}

export default isMain;
