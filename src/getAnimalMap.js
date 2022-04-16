const data = require('../data/zoo_data');

function getAnimalMapSex(sorted, sex, acc, location, name, residents) {
  const filterArr = residents.filter(({ sex: sexRes }) => sex === sexRes); // Filtra o array de residentes por sexo
  const nameArr = filterArr.map(({ name: nameRes }) => nameRes);
  if (sorted) { nameArr.sort(); } // Verifica se sort: true
  acc[location].push({ [name]: nameArr });
  return acc;
}

function getAnimalMapFull(sorted, acc, location, name, residents) {
  const nameArr = residents.map(({ name: nameRes }) => nameRes);
  if (sorted) { nameArr.sort(); } // Verifica se sort: true
  acc[location].push({ [name]: nameArr });
  return acc;
}

function getAnimalMapComplex({ sorted, sex }) { // Aqui novamente tive que quebrar em duas funções menores, pela complexidade no ESLint
  return data.species.reduce((acc, { location, name, residents }) => {
    if (!acc[location]) { acc[location] = []; } // Verifica se já foi criado o array com a localização específica, evitando que crie multiplas vezes
    if (sex) { // Verifica se a propriedade sex foi passada, chamando depois a função específica
      return getAnimalMapSex(sorted, sex, acc, location, name, residents);
    }
    return getAnimalMapFull(sorted, acc, location, name, residents); // Chama a função para sex não passado
  }, {}); // Tive que criar essas duas funções cheias de parâmetros porque o ESLint estava cobrando a questão da complexidade. Como já tinha feito o código rodar, só copiei para outra função sem pensar em outras possibilidades de resolução. Gostaria muito de saber como você resolveu esse desafio, pois me parece ter várias formas de organizar um código tão complexo
}

function getAnimalMapSimple() { // Função simples, para quando getAnimalMap é chamada sem parâmetros ou com includeNames: false
  return data.species.reduce((acc, { location, name }) => {
    if (!acc[location]) { acc[location] = []; } // Verifica se já foi criado o array com a localização específica, evitando que crie multiplas vezes
    acc[location].push(name);
    return acc;
  }, {});
}

function getAnimalMap(options) { // Para não ter problemas com a complexidade da função no ESLint, dividi essa função em várias menores
  // seu código aqui
  if (!options) { // Confere se a função foi chamada sem parâmetro
    return getAnimalMapSimple();
  }
  if (!options.includeNames) { // Confere se a função foi chamada com includeNames: false
    return getAnimalMapSimple();
  }
  return getAnimalMapComplex(options); // Chama a função para propriedade includeNames: true
}

module.exports = getAnimalMap;
