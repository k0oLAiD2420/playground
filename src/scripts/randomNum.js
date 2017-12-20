/**
 * Used to generate a random string of numbers which is then sent
 * to Zelda API. Can also be ran in a loop with
 * $: time for i in {1..5};do node
 * src/randomNum.js; done
 * Which also gives you time to run
 *
 * Exercise of Do/While, not necessarily the best method to generate just a random number
 *
 */
exports.randomNumberGenerator = (req, res) =>{
  let timesToExecute = 1,
      howManyIdsPerCall = 1,
      stopExecute = 0,
      noMoreIds = 0
  do {

    function *randNumVal(max) {
      yield Math.floor(Math.random() * max)
    }

    function *randNumGen() {
      while (true) {
        yield *randNumVal(req.params.maxNum)
      }
    }

    let randNumbers = randNumGen(),
        randids = []

    do {
      noMoreIds += 1

      // Call for next number and push into array
      randids.push(randNumbers.next())

      console.log('ID SHIT :: ', randids)

    } while (noMoreIds < howManyIdsPerCall)


    let numArray = randids.map(numbers => { return numbers.value }),
        testIds = numArray.toString()


    /*
    Here it can be sent off to somewhere to generate ID's..
    Like pushing random numbers into the domainTester:
    domainTest(<host>, <path>, testIds)
     */

    res.status(200)
      .json(`Random Integer is:  ${testIds}`)
      .end()
    stopExecute += 1

  } while (stopExecute < timesToExecute)
}



