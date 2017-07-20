'use strict';
const {INTEGER, STRING} = require('sequelize')
const db = require('../index.js')

module.exports = db.define('count', {
 id: {
    type: INTEGER,
    primaryKey: true
  },
  count: INTEGER,
  year: STRING
})
