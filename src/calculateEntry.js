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
} // Aqui eu criei um objeto para contar, e depois um forEach que percorre o array Entrants e identifica qual a idade do visitante e adiciona no objeto contador

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants) { // Confere se a função foi chamada sem parâmetro
    return 0;
  }
  if (Object.keys(entrants).length === 0) { // Confere se a função foi chamada com um objeto vazio
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants); // Desestrutura o objeto para deixar o código do calculo mais limpo
  return (child * data.prices.child) + (adult * data.prices.adult) + (senior * data.prices.senior);
}

calculateEntry({});

module.exports = { calculateEntry, countEntrants };
