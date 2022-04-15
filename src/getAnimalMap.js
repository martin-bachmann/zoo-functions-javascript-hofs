const data = require('../data/zoo_data');

function getAnimalMapComplex({ sorted, sex }) {
  return data.species.reduce((acc, { location, name, residents }, index) => {
    if (!acc[location]) { acc[location] = []; }
    if (sex) {
      const filterArr = residents.filter(({ sex: sexRes }) => sex === sexRes);
      const nameArr = filterArr.map(({ name: nameRes }) => nameRes);
      if (sorted) { nameArr.sort(); }
      acc[location].push({ [name]: nameArr });
    } else {
      const nameArr = residents.map(({ name: nameRes }) => nameRes);
      if (sorted) { nameArr.sort(); }
      acc[location].push({ [name]: nameArr });
    }
    return acc;
  }, {});
}

function getAnimalMapSimple() {
  return data.species.reduce((acc, element) => {
    if (!acc[element.location]) {
      acc[element.location] = [];
    }
    acc[element.location].push(element.name);
    return acc;
  }, {});
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return getAnimalMapSimple();
  }
  if (!options.includeNames) {
    return getAnimalMapSimple();
  }
  return getAnimalMapComplex(options);
}

getAnimalMap({ includeNames: true, sorted: true });

module.exports = getAnimalMap;
