//TODO: Add Your Code Below
window.addEventListener('load', getData('https://handlers.education.launchcode.org/static/astronauts.json'))

async function getData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json()
    console.log('unordered', data)
    renderAstronautTemplate(data)
  } catch (error) {
    console.log(error)
  }
}

function renderAstronautTemplate(data) {
  const ordered = data.sort((a, b) => a.hoursInSpace < b.hoursInSpace)
  ordered.forEach(astronaut => {
    const astronautTemplate = `<div class="astronaut">
    <div class="bio">
        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
        <ul>
        <li>Hours in space: ${astronaut.hoursInSpace}</li>
        <li class=${Boolean(astronaut.active) ? 'active' : 'inactive'}>Active: ${astronaut.active}</li>
        <li>Skills: ${astronaut.skills.map((skill) => ' ' + skill)}</li>
        </ul>
    </div>
    <img class="avatar" src=${astronaut.picture}>
</div>`
    const div = document.querySelector('#container')
    div.innerHTML += astronautTemplate
  });

}
