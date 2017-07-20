'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is requeired everywhere

const Count = require('./count')
const Crime = require('./crime')
const Precinct = require('./precinct')


Precinct.belongsToMany(Crime, { through: { model: Count, unique: false}, foreignKey: 'precinctId', constraints: false});
Crime.belongsToMany(Precinct, { through: { model: Count, unique: false}, foreignKey: 'crimeId', constraints: false});

module.exports = {Count, Crime, Precinct}
