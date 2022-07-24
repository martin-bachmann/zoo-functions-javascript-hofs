const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((id) => species.find((animal) => animal.id === id));
}
// Como o array de retorno sempre vai ter o mesmo tamanho que a entrada, o map funciona muito bem, com o find para encontrar a espécie
// Como o map retorna um array, se a função não recebe nenhum parâmetro ele já retorna um array vazio
// Tive que dividir a função em mais linhas por causa do ESLint, que só permite linhas de até 100 caracteres

module.exports = getSpeciesByIds;
