const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const spec = data.species;
  if (!animal) { // Confere se a função foi chamada sem parâmetro
    return spec.reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
  } // Como pede para retornar como objeto, utilizei o reduce
  if (animal.sex) { // Verifica se o objeto possui a propriedade sex
    const getAnimal = spec.find(({ name }) => name === animal.specie); // Encontra o animal
    const quantAnimal = getAnimal.residents.filter((res) => res.sex === animal.sex).length; // Filtra os residentes por sexo e verifica o tamanho
    return quantAnimal;
  }
  const getAnimal = spec.find(({ name }) => name === animal.specie);
  const quantAnimal = getAnimal.residents.length;
  return quantAnimal;
}

module.exports = countAnimals;
