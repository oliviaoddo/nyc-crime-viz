const Promise = require('bluebird');

const { Crime, Count } = require('../models')
const db = require('../index');
const crimeDB = require('./crime-data');


const allCrimeNames = [
  'Murder & Non Negl. Manslaughter',
  'Rape',
  'Robbery',
  'Felony Assault',
  'Burglary',
  'Grand Larceny',
  'Grand Larceny of Motor Vehicle'
]

const actualPCTs = [];

for (let i = 0; i < crimeDB.length; i += 8) {
  actualPCTs.push(crimeDB[i].PCT);
}
// console.log('actualPCTs', actualPCTs);


db.sync({ force: true })
  // .then(() => {
  //   return Crime.create({ name: allCrimeNames[2] })
  // })

  .then(() => {
    return Promise.map(allCrimeNames, crime => {
      return Crime.create({ name: crime })
    })
  })
  
  // .then(() => {
  //   return Promise.map(actualPCTs, pct => {
  //     return Precinct.create({ pct })
  //   })
  // })
  .catch(err => console.error('Error Syncing...', err))
