'use strict'

const execa = require('execa')

const isMain = require('.')

test('return false for undefined', () => {
  expect(isMain()).toBe(false)
})

test('return false for non-main ESM', async () => {
  const { stdout } = await execa('node', [
    '-r',
    'esm',
    require.resolve('./test/fixtures/non-main.mjs'),
  ])
  expect(stdout).toBe('')
})

test('return true for main ESM', async () => {
  const { stdout } = await execa('node', [
    '-r',
    'esm',
    require.resolve('./test/fixtures/main.mjs'),
  ])
  expect(stdout).toBe('is main')
})

test('return false for non-main module', async () => {
  const { stdout } = await execa('node', [
    require.resolve('./test/fixtures/non-main.js'),
  ])
  expect(stdout).toBe('')
})

test('return true for main module', async () => {
  const { stdout } = await execa('node', [
    require.resolve('./test/fixtures/main.js'),
  ])
  expect(stdout).toBe('is main')
})
