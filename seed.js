const {Crime, Precinct, Count} = require('./db/models')
const db = require('./db');
const Promise = require('bluebird')


var data = {
    crimes: [
        {name: 'Murder'},
        {name: 'Rape'},
        {name: 'Robbery'}
    ],
    precincts: [
        {pct: 70},
        {pct: 88},
        {pct: 138}
    ],
    counts: [
        {count: 70, year: '2016', crimeId: 1, precinctId: 1},
        {count: 88, year: '2015',  crimeId: 1, precinctId: 1},
        {count: 138, year: '2017',  crimeId: 1, precinctId: 1}
    ]

}


db.sync({force: true})
.then(function () {
  const crimes = Promise.map(data.crimes, function(crime){
     return Crime.create(crime);
  });
  const precincts = Promise.map(data.precincts, function(pct){
     return Precinct.create(pct);
  });
    const counts = Promise.map(data.counts, function(count){
     return Count.create(count);
  });
  return Promise.all([crimes, precincts, counts]);
})
.then(function () {
  console.log('Finished inserting data');
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
})
.finally(function () {
  db.close(); // creates but does not return a promise
  return null; // stops bluebird from complaining about un-returned promise
});
