// Write your JavaScript code here.
// Remember to pay attention to page loading!
// 
// This will work but for readablilty suggest using defer in script tag.
//
// window.onload = () => init()
//
// function init() {
//   const takeOff = document.querySelector('#takeoff')
//   const landing = document.querySelector('#landing')
//   const missionAbort = document.querySelector('#missionAbort')
//   const up = document.querySelector('#up')
//   const down = document.querySelector('#down')
//   const left = document.querySelector('#left')
//   const right = document.querySelector('#right')
// }

const takeOff = document.querySelector('#takeoff')
const landing = document.querySelector('#landing')
const missionAbort = document.querySelector('#missionAbort')
const flightStatus = document.querySelector('#flightStatus')
const shuttleBackground = document.querySelector('#shuttleBackground')
const spaceShuttleHeight = document.querySelector('#spaceShuttleHeight')
const rocket = document.querySelector('#rocket')
const up = document.querySelector('#up')
const down = document.querySelector('#down')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
rocket.style.right = '0px'
rocket.style.left = '340px'
rocket.style.top = '250px'
rocket.style.bottom = '0px'

takeOff.addEventListener('click', (event) => {
  if (confirm('Confirm that the shuttle is ready for takeoff')) {
    flightStatus.innerHTML = 'Shuttle in flight.'
    shuttleBackground.style.backgroundColor = 'blue'
    spaceShuttleHeight.innerHTML = '10000'
    rocket.style.top = (parseInt(rocket.style.top) - 10) + 'px'
  }
})

landing.addEventListener('click', (event) => {
  alert('The shuttle is landing. Landing gear engaged.')
  flightStatus.innerHTML = 'The shuttle has landed.'
  shuttleBackground.style.backgroundColor = 'green'
  spaceShuttleHeight.innerHTML = '0'
  rocket.style.right = '0px'
  rocket.style.left = '340px'
  rocket.style.top = '250px'
  rocket.style.bottom = '0px'
})

missionAbort.addEventListener('click', (event) => {
  if (confirm('Confirm that you want to abort the mission.')) {
    flightStatus.innerHTML = 'Mission aborted'
    shuttleBackground.style.backgroundColor = 'green'
    spaceShuttleHeight.innerHTML = '0'
    rocket.style.right = '0px'
    rocket.style.left = '340px'
    rocket.style.top = '250px'
    rocket.style.bottom = '0px'
  }
})

up.addEventListener('click', (event) => {
  if (parseInt(rocket.style.top) > -10) {
    rocket.style.top = (parseInt(rocket.style.top) - 10) + 'px'
    spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000
  }
})

down.addEventListener('click', (event) => {
  if (parseInt(rocket.style.top) < 250) {
    rocket.style.top = (parseInt(rocket.style.top) + 10) + 'px'
    spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000
  }
})

left.addEventListener('click', (event) => {
  if (parseInt(rocket.style.left) > -20) {
    rocket.style.left = (parseInt(rocket.style.left) - 10) + 'px'
  }
})

right.addEventListener('click', (event) => {
  if (parseInt(rocket.style.left) < 710) {
    rocket.style.left = (parseInt(rocket.style.left) + 10) + 'px'
  }
})
