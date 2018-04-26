import test from 'ava'
import execa from 'execa'

import isMain from '.'

async function isNode10() {
  const { stdout } = await execa('node', ['--version'])
  return stdout.indexOf('v10.') === 0
}

test('return false for undefined', t => {
  t.false(isMain())
})

test('return false for non-main ESM', async t => {
  const { stdout } = await execa('node', [
    '-r',
    'esm',
    require.resolve('./test/fixtures/non-main.mjs'),
  ])
  t.is(stdout, '')
})

test('return true for main ESM', async t => {
  const { stdout } = await execa('node', [
    '-r',
    'esm',
    require.resolve('./test/fixtures/main.mjs'),
  ])
  t.is(stdout, 'is main')
})

test('return false for non-main module', async t => {
  const { stdout } = await execa('node', [
    require.resolve('./test/fixtures/non-main.js'),
  ])
  t.is(stdout, '')
})

test('return true for main module', async t => {
  const { stdout } = await execa('node', [
    require.resolve('./test/fixtures/main.js'),
  ])
  t.is(stdout, 'is main')
})

test('[Node v10] return true for main module', async t => {
  if (await isNode10()) {
    const { stdout: stdoutMjs } = await execa('node', [
      '--experimental-modules',
      require.resolve('./test/fixtures/main.mjs'),
    ])
    t.is(stdoutMjs, 'is main')
  }

  t.pass()
})

test('[Node v10] return false for non-main module', async t => {
  if (await isNode10()) {
    const { stdout } = await execa('node', [
      '--experimental-modules',
      require.resolve('./test/fixtures/non-main.mjs'),
    ])
    t.is(stdout, '')
  }

  t.pass()
})
