const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const animalsArr = ids.map((id) => species.find((animal) => animal.id === id));
  return animalsArr;
}

module.exports = getSpeciesByIds;
