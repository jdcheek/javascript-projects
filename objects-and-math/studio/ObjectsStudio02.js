// Code your orbitCircumference function here:
function orbitCircumference(altitude) {
  return Math.round(2 * Math.PI * altitude)
}


// Code your missionDuration function here:
function missionDuration(numberOfOrbits, orbitRadius, orbitalSpeed) {
  return Number((numberOfOrbits * orbitCircumference(orbitRadius) / orbitalSpeed).toFixed(2))
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate) {
  let hours = missionDuration(3, 2000, 28000)
  let o2kg = candidate.o2Used(hours).toFixed(3);
  return `${candidate.name} will perform the spacewalk, which will last ${hours} hours and require ${o2kg} kg of oxygen.`
}

// Candidate data & crew array.
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

let crew = [candidateA, candidateC, candidateE];

console.log(oxygenExpended(selectRandomEntry(crew)))
