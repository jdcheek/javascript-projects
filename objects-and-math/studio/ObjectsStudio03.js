
let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function(hrs) { return 0.035 * hrs },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function(hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function(hrs) { return 0.022 * hrs },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function(hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function(hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function(hrs) { return 0.018 * hrs },
  'astronautID': 890
};

let crew = [candidateB, candidateD, candidateF];
let uncrewedRocketKg = 75000
// Code your crewMass function here:
function crewMass(crew) {
  let mass = 0
  crew.forEach(element => {
    mass += element.mass
  });
  return Number(mass.toFixed(1))
}

// Code your fuelRequired function here:
function fuelRequired() {
  let totalMassKg = uncrewedRocketKg + crewMass(crew)
  for (const i of crew) {
    if (i.species === 'dog' || i.species === 'cat') {
      totalMassKg += 200
    } else {
      totalMassKg += 100
    }
  }
  let totalFuel = Math.ceil(totalMassKg * 9.5)
  return `The mission has a launch mass of ${totalMassKg} kg and requires ${totalFuel} kg of fuel.`
}

console.log(fuelRequired())
// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.
