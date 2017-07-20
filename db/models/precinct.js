'use strict';
const { INTEGER } = require('sequelize')
const db = require('../index.js')

module.exports = db.define('precinct', {
  pct: {
        type: INTEGER,
        allowNull: false
    }
})
