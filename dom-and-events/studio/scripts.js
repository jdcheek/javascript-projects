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
const up = document.querySelector('#up')
const down = document.querySelector('#down')
const left = document.querySelector('#left')
const right = document.querySelector('#right')

takeOff.addEventListener('click', (event) => {
  if (confirm('Confirm that the shuttle is ready for takeoff')) {
    flightStatus.innerHTML = 'Shuttle in flight.'
    shuttleBackground.style.backgroundColor = 'blue'
    spaceShuttleHeight.innerHTML = '10000'
  }
})

landing.addEventListener('click', (event) => {
  alert('The shuttle is landing. Landing gear engaged.')
  flightStatus.innerHTML = 'The shuttle has landed.'
  shuttleBackground.style.backgroundColor = 'green'
  spaceShuttleHeight.innerHTML = '0'
})

missionAbort.addEventListener('click', (event) => {
  if (confirm('Confirm that you want to abort the mission.')) {
    flightStatus.innerHTML = 'Mission aborted'
    shuttleBackground.style.backgroundColor = 'green'
    spaceShuttleHeight.innerHTML = '0'
  }
})

up.addEventListener('click', (event) => {
  // move rocket image up 10px using absolute position
  // increase shuttle height by 10000
})

down.addEventListener('click', (event) => {
  // move rocket image down 10px using absolute position
  // decrease shuttle height by 10000
})

left.addEventListener('click', (event) => {
  // move rocket image left 10px using absolute position
})

right.addEventListener('click', (event) => {
  // move rocket image right 10px using absolute position
})
