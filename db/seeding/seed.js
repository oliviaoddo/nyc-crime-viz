const crimeDB = require('./crime-data');

crimeDB.forEach(crimeYearsPerPrecinct => {

  console.log('Precinct', crimeYearsPerPrecinct.PCT);

  
})