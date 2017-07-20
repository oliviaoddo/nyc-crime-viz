'use strict';
const { INTEGER } = require('sequelize')
const db = require('../index.js')

module.exports = db.define('precinct', {
  id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true
    }
})
