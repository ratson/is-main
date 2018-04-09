'use strict'

module.exports = importMetaOrModule =>
  Boolean(
    process &&
      process.mainModule &&
      importMetaOrModule &&
      ((importMetaOrModule.url &&
        importMetaOrModule.url === `file://${process.mainModule.filename}`) ||
        process.mainModule === importMetaOrModule),
  )
