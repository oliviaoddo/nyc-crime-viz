'use strict';
const {INTEGER, STRING} = require('sequelize')
const db = require('../index.js')

module.exports = db.define('count', {
  count: INTEGER,
  year: STRING
})
