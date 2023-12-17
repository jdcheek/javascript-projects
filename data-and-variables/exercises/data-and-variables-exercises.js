// Declare and assign the variables below
let spaceShuttle = "Determination";
let shuttleSpeed = 17500;
let kmToMars = 225000000;
let kmToMoon = 384400;
let mPkm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttle);
console.log(typeof shuttleSpeed);
console.log(typeof kmToMars);
console.log(typeof kmToMoon);
console.log(typeof mPkm);
// Calculate a space mission below
let milesToMars = kmToMars * mPkm;
let hrsToMars = milesToMars / shuttleSpeed;
let daysToMars = hrsToMars / 24;
// Print the results of the space mission calculations below
console.log(spaceShuttle + " will take " + daysToMars + " days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = kmToMoon * mPkm;
let hrsToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hrsToMoon / 24;
// Print the results of the trip to the moon below
console.log(spaceShuttle + " will take " + daysToMoon + " days to reach the Moon.");
