const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalObj = species.find((element) => element.name === animal); // Identifica a espécie correta de animal e retorna seu objeto
  return animalObj.residents.every((resident) => resident.age >= age); // Verifica se todos os indivíduos da espécie são mais velhos que 'age'
}

module.exports = getAnimalsOlderThan;
