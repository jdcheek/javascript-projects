//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name
    this.mass = mass
    this.scores = scores
  }

  addScores(score) {
    this.scores.push(score)
  }

  averageScores() {
    return Number((this.scores.reduce((prev, curr) => prev + curr, 0) / this.scores.length).toFixed(1))
  }

  status() {
    let avg = this.averageScores()
    let status = ''
    if (avg > 90) {
      status = 'Accepted'
    } else if (avg <= 89 && avg >= 80) {
      status = 'Reserve'
    } else if (avg <= 79 && avg >= 70) {
      status = 'Probationary'
    } else if (avg < 70) {
      status = 'Rejected'
    }
    return `${this.name} earned an average test score of ${avg}% and has a status of ${status}.`
  }
}

const bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90])
const merryMatlese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97])
const gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62])

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
console.log(bubbaBear)
console.log(bubbaBear.status())
console.log(bubbaBear.averageScores())
console.log(merryMatlese)
console.log(merryMatlese.averageScores())
console.log(merryMatlese.status())
console.log(gladGator)
console.log(gladGator.averageScores())
console.log(gladGator.status())

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
