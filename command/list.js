'use strict'
const config = require('../templates.json')

module.exports = () => {
  console.log(config)
  process.exit()
}