const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const spec = data.species;
  if (!animal) { // Verifica se animal não recebe um valor
    return spec.reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
  }
  if (animal.sex) { // Verifica se o objeto possui o argumento sexo
    const getAnimal = spec.find(({ name }) => name === animal.specie);
    const quantAnimal = getAnimal.residents.filter((res) => res.sex === animal.sex).length;
    return quantAnimal;
  }
  const getAnimal = spec.find(({ name }) => name === animal.specie);
  const quantAnimal = getAnimal.residents.length;
  return quantAnimal;
}

module.exports = countAnimals;
