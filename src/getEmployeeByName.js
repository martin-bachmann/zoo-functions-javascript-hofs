const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return employees.find(({ firstName, lastName }) => {
    const verifier = (firstName === employeeName || lastName === employeeName);
    return verifier;
  });
}

module.exports = getEmployeeByName;
