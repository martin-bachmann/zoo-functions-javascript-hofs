const data = require('../data/zoo_data');

function employeeVerifier(employee) { // Função que verifica se os parâmetros passados são de um funcionário válido
  return data.employees.some(({ id, firstName, lastName }) => {
    const value = id === employee.id || firstName === employee.name || lastName === employee.name;
    return value;
  });
}

function getEmployee(employee) { // Função que retorna o objeto do funcionário identificado pelo parâmetro
  return data.employees.find(({ id, firstName, lastName }) => {
    const value = id === employee.id || firstName === employee.name || lastName === employee.name;
    return value;
  });
}

function getSpecies(employee) { // Função que identifica as espécies de responsabilidade do funcionário
  return employee.responsibleFor.map((animal) => { // Essa função map é necessária para transformar o valor do id no valor de nome da espécie
    const value = data.species.find((spec) => spec.id === animal);
    return value.name;
  });
}

function getLocations(employee) { // Função que identifica as localidades trabalhadas pelo funcionário
  return employee.responsibleFor.map((animal) => { // A resposta espera um valor para cada animal (mesmo que traga valores repetidos), o que me indicou utilizar o map
    const value = data.species.find((spec) => spec.id === animal);
    return value.location;
  });
}

function getSimpleEmployeeCoverage(employee) { // Função que cria o objeto com as informações para um único empregado
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecies(employee),
    locations: getLocations(employee),
  };
}

function getFullEmployeesCoverage() { // Função que pega as informações de todos os empregados. Utilizei o map para iterar em todos os empregados com a função que cria o objeto com as informações de um empregado
  return data.employees.map((employee) => getSimpleEmployeeCoverage(employee));
}

function getEmployeesCoverage(employee) { // Como indicado no README, criei funções específicas para cada caso. Aqui só identifica qual função deve ser executada
  // seu código aqui
  if (!employee) { return getFullEmployeesCoverage(); } // Confere se a função foi chamada sem parâmetro
  if (employeeVerifier(employee)) { // Confere se o parâmetro é um funcionário valido
    const employeeObj = getEmployee(employee); // Como quis reutilizar a função getSimpleEmployeeCoverage para a função getFullEmployeesCoverage, precisei já passar para a função simples o objeto do empregado, identificado pela função getEmployee
    return getSimpleEmployeeCoverage(employeeObj);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
