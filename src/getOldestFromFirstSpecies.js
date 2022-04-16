const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalId = data.employees.find((emp) => emp.id === id).responsibleFor[0];
  const animal = data.species.find((anm) => anm.id === animalId);
  const oldestRes = animal.residents.reduce((oldest, res) => (res.age > oldest.age ? res : oldest));
  return Object.values(oldestRes);
} // Utilizei dois finds para encontrar o empregado e o animal, depois um reduce para encontrar o animal mais velho

module.exports = getOldestFromFirstSpecies;
