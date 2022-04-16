const data = require('../data/zoo_data');

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

function getAnimalSchedule(scheduleTarget) { // Retorna os horários do animal
  return data.species.find((animal) => animal.name === scheduleTarget).availability;
}

function getFullSchedule() { // Para essa função, usei a função de um dia como base com um reduce para iterar sobre todos os dias da semana
  return Object.keys(data.hours).reduce((accObj, day) => {
    const newDay = getDaySchedule(day);
    const scheduleObj = { ...accObj, ...newDay }; // Usei o spread operator para adicionar as novas propriedades no objeto retornado
    return scheduleObj;
  }, {});
}

function getSchedule(scheduleTarget) { // Como indicado no README, criei funções específicas para cada caso. Aqui só identifica qual função deve ser executada
  // seu código aqui
  if (!scheduleTarget) { return getFullSchedule(); } // Confere se a função foi chamada sem parâmetro
  if (data.species.find((animal) => animal.name === scheduleTarget)) { // Identifica se o parâmetro é um animal
    return getAnimalSchedule(scheduleTarget);
  }
  if (Object.keys(data.hours).find((days) => days === scheduleTarget)) { // Identifica se o parâmetro é um dia
    return getDaySchedule(scheduleTarget);
  }
  return getFullSchedule(); // Chama a função para retornar tudo se não identificou um dia ou animal
}

getSchedule('a');

module.exports = getSchedule;
