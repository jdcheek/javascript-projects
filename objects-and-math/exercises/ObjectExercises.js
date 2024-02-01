let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
  astronautID: 1
};

let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
  astronautID: 2
};


let chimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  astronautID: 3
};


let dog = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
  astronautID: 4
};

let tardigrade = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
  astronautID: 5
};
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, chimpTwo, dog, tardigrade]
// Print out the relevant information about each animal.

// Map does not mutate the array but will mutate each object and complete the intended side effect
crew.map((member) => {
  member.move = function() {
    return Math.floor(Math.random() * 11)
  }
})

console.log(crew)

function crewReports(crewMember) {
  console.log(`${crewMember.name} is a ${crewMember.species}. They are ${crewMember.age} years old and ${crewMember.mass} kilograms. Their ID is ${crewMember.astronautID}.`)
}

crewReports(tardigrade)

// Start an animal race!
function fitnessTest(arr) {
  let count = [], steps, turns
  for (let i = 0; i < arr.length; i++) {
    steps = 0
    turns = 0
    while (steps < 20) {
      steps += arr[i].move()
      turns++
    }
    count.push(`${arr[i].name} took ${turns} turns to take 20 steps`)
  }
  return count
}

console.log(fitnessTest(crew))































