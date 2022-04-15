const data = require('../data/zoo_data');

function getFullSchedule() { // Para essa função, usei a função de um dia com um reduce para iterar sobre todos os dias da semana
  return Object.keys(data.hours).reduce((accObj, day) => {
    const scheduleObj = accObj;
    scheduleObj[day] = { officeHour: '', exhibition: '' };
    if (day === 'Monday') {
      scheduleObj[day].officeHour = 'CLOSED';
      scheduleObj[day].exhibition = 'The zoo will be closed!';
      return scheduleObj;
    }
    const dayObj = data.hours[day];
    scheduleObj[day].officeHour = `Open from ${dayObj.open}am until ${dayObj.close}pm`;
    scheduleObj[day].exhibition = data.species.reduce((acc, animal) => {
      if (animal.availability.includes(day)) { acc.push(animal.name); }
      return acc;
    }, []);
    return scheduleObj;
  }, {});
}

function getDaySchedule(scheduleTarget) {
  const scheduleObj = { [scheduleTarget]: { // Aqui cria o objeto que será retornado posteriormente
    officeHour: '',
    exhibition: '',
  } };
  if (scheduleTarget === 'Monday') { // Como segunda é um dia diferente, criei um if para que vá no caminho desejado
    scheduleObj[scheduleTarget].officeHour = 'CLOSED';
    scheduleObj[scheduleTarget].exhibition = 'The zoo will be closed!';
    return scheduleObj;
  }
  const day = data.hours[scheduleTarget]; // Aqui pega as informações de data e animais para retornar
  scheduleObj[scheduleTarget].officeHour = `Open from ${day.open}am until ${day.close}pm`;
  scheduleObj[scheduleTarget].exhibition = data.species.reduce((acc, animal) => {
    if (animal.availability.includes(scheduleTarget)) { acc.push(animal.name); }
    return acc;
  }, []);
  return scheduleObj;
}

function getAnimalSchedule(scheduleTarget) {
  return data.species.find((animal) => animal.name === scheduleTarget).availability;
}

function getSchedule(scheduleTarget) { // Como indicado no README, criei funções específicas para cada caso. Aqui só identifica qual função deve ser executada
  // seu código aqui
  if (!scheduleTarget) { return getFullSchedule(); }
  if (data.species.find((animal) => animal.name === scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }
  if (Object.keys(data.hours).find((days) => days === scheduleTarget)) {
    return getDaySchedule(scheduleTarget);
  }
  return getFullSchedule();
}

module.exports = getSchedule;
