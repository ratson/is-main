import process from "node:process";

function isMain(importMetaOrModule) {
  if (!importMetaOrModule || typeof process === "undefined") {
    return false;
  }

  if (process.mainModule === importMetaOrModule) {
    return true;
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
