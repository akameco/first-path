// @flow
const path = require('path')
const firstPath = require('.')

test('throw errors', () => {
  // $FlowFixMe
  expect(() => firstPath(1)).toThrowErrorMatchingSnapshot()
})

test('return first path', () => {
  const file = path.join('src', 'nest', 'file')
  expect(firstPath(file)).toBe('src')
})

test('return first path with string', () => {
  const file = 'nest/nest1/nest2/nest3'
  expect(firstPath(file)).toBe('nest')
})
