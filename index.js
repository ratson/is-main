'use strict'

module.exports = importMetaOrModule => {
  if (!importMetaOrModule || typeof process === 'undefined') {
    return false
  }
  if (process.mainModule === importMetaOrModule) {
    return true
  }
  if (!importMetaOrModule.url) {
    return false
  }
  if (typeof process.mainModule === 'undefined') {
    return importMetaOrModule.url === `file://${process.argv[1]}`
  }

  return importMetaOrModule.url === `file://${process.mainModule.filename}`
}
