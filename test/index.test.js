import test from 'ava'

import isMain from '..'

test.beforeEach(t => {
  t.context.mainModuleOrigin = process.mainModule
  t.context.argvOrigin = process.argv
})

test.afterEach.always(t => {
  process.mainModule = t.context.mainModuleOrigin
  process.argv = t.context.argvOrigin
})

test('return true when match process.mainModule.filename', t => {
  process.mainModule.filename = '/root'

  t.true(
    isMain({
      url: 'file:///root',
    }),
  )
})

test('return false for url with querystring', t => {
  process.mainModule.filename = '/root'

  t.false(isMain({ url: 'file:///root?test=true' }))
})
