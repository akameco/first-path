// @flow
'use strict'
const path = require('path')

module.exports = (filePath /*: string */) => {
  if (typeof filePath !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof filePath}`)
  }

  return path
    .dirname(filePath)
    .split(path.sep)
    .shift()
}
