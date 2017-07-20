'use strict';
const { STRING } = require('sequelize')
const db = require('../index.js')

module.exports = db.define('crime', {
  name: {
    type: STRING,
    allowNull: false
  }
})
