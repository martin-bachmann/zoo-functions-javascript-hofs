const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id));
} // O some me pareceu perfeito para essa função, iterando pelo array de funcionários verificando se o id passado está incluido como manager de algum deles

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    return data.employees.reduce((acc, { managers, firstName, lastName }) => {
      const returnVar = acc;
      return (managers.includes(managerId)) ? [...acc, `${firstName} ${lastName}`] : returnVar;
    }, []); // Aqui utilizei o reduce para iterar no array de funcionários, já que precisa retornar um array com tamanho variavel
  } // Tive que dividir a função em mais linhas por causa do ESLint, que só permite linhas de até 100 caracteres. Criei essa variavel returnVar só para enxer linha, porque o ESLint também não permitiria que eu fizesse uma função com apenas uma linha sem botar ela na mesma linha da função...
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
