const data = require('../data/zoo_data');

function getAnimalMapSex(sorted, sex, acc, location, name, residents) {
  const filterArr = residents.filter(({ sex: sexRes }) => sex === sexRes);
  const nameArr = filterArr.map(({ name: nameRes }) => nameRes);
  if (sorted) { nameArr.sort(); }
  acc[location].push({ [name]: nameArr });
  return acc;
}

function getAnimalMapFull(sorted, acc, location, name, residents) {
  const nameArr = residents.map(({ name: nameRes }) => nameRes);
  if (sorted) { nameArr.sort(); }
  acc[location].push({ [name]: nameArr });
  return acc;
}

function getAnimalMapComplex({ sorted, sex }) { // Aqui novamente tive que quebrar em duas funções menores, pela complexidade no ESLint
  return data.species.reduce((acc, { location, name, residents }) => {
    if (!acc[location]) { acc[location] = []; }
    if (sex) {
      return getAnimalMapSex(sorted, sex, acc, location, name, residents);
    }
    return getAnimalMapFull(sorted, acc, location, name, residents);
  }, {});
}

function getAnimalMapSimple() {
  return data.species.reduce((acc, { location, name }) => {
    if (!acc[location]) { acc[location] = []; }
    acc[location].push(name);
    return acc;
  }, {});
}

function getAnimalMap(options) { // Para não ter problemas com a complexidade da função no ESLint, dividi essa função em várias menores
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
