/**
 * Used to generate a random string of numbers which is then sent
 * to Zelda API. Can also be ran in a loop with
 * $: time for i in {1..5};do node
 * src/randomNum.js; done
 * Which also gives you time to run
 *
 */

const {domainTest} = require('./domainTester')

let timesToExecute = 1,
    howManyIdsPerCall = 1,
    pathToHit = 'domains/general',
    placeToHit = 'dshaver',
    stopExecute = 0,
    noMoreIds = 0

do {

  function *randNumVal(max) {
    yield Math.floor(Math.random() * max) + 1234
  }

  function *randNumGen() {
    while (true) {
      yield *randNumVal(100000)
    }
  }

  let randNumbers = randNumGen(),
      randids = []

  do {
    noMoreIds += 1

    // Call for next number and push into array
    randids.push(randNumbers.next())
  } while (noMoreIds < howManyIdsPerCall)


  let numArray = randids.map(numbers => { return numbers.value }),
      testIds = numArray.toString()

  domainTest(placeToHit, pathToHit, testIds)
  stopExecute += 1

} while (stopExecute < timesToExecute)








