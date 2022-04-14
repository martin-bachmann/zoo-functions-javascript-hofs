const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const entrantsObj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      entrantsObj.child += 1;
      return;
    }
    if (entrant.age > 49) {
      entrantsObj.senior += 1;
      return;
    }
    entrantsObj.adult += 1;
  });
  return entrantsObj;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return (child * data.prices.child) + (adult * data.prices.adult) + (senior * data.prices.senior);
}

calculateEntry({});

module.exports = { calculateEntry, countEntrants };
