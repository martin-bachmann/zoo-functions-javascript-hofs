const data = require('../data/zoo_data');

function employeeVerifier(employee) {
  return data.employees.some(({ id, firstName, lastName }) => {
    const value = id === employee.id || firstName === employee.name || lastName === employee.name;
    return value;
  });
}

function getEmployee(employee) {
  return data.employees.find(({ id, firstName, lastName }) => {
    const value = id === employee.id || firstName === employee.name || lastName === employee.name;
    return value;
  });
}

function getSpecies(employee) {
  return employee.responsibleFor.map((animal) => {
    const value = data.species.find((spec) => spec.id === animal);
    return value.name;
  });
}

function getLocations(employee) {
  return employee.responsibleFor.map((animal) => {
    const value = data.species.find((spec) => spec.id === animal);
    return value.location;
  });
}

function getSimpleEmployeeCoverage(employee) {
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecies(employee),
    locations: getLocations(employee),
  };
}

function getFullEmployeesCoverage() {
  return data.employees.map((employee) => getSimpleEmployeeCoverage(employee));
}

function getEmployeesCoverage(employee) {
  // seu código aqui
  if (!employee) { return getFullEmployeesCoverage(); }
  if (employeeVerifier(employee)) {
    const employeeObj = getEmployee(employee);
    return getSimpleEmployeeCoverage(employeeObj);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
