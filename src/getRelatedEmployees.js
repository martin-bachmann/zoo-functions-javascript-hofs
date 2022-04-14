const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    return data.employees.reduce((acc, employee) => {
      let returnVar = acc;
      if (employee.managers.includes(managerId)) {
        returnVar = [...acc, `${employee.firstName} ${employee.lastName}`];
      }
      return returnVar;
    }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
