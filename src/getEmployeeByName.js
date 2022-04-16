const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) { // Confere se a função foi chamada sem parâmetro
    return {};
  }
  return employees.find(({ firstName, lastName }) => {
    const verifier = (firstName === employeeName || lastName === employeeName);
    return verifier; // Tive que dividir a função em mais linhas por causa do ESLint, que só permite linhas de até 100 caracteres
  });
}

module.exports = getEmployeeByName;
