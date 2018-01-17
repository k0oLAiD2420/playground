const adverbs = require('./adjuncFiles/adverbs'),
      verbs = require('./adjuncFiles/verbs'),
      adjectives = require('./adjuncFiles/adjectives'),
      nouns = require('./adjuncFiles/nouns'),
      trumpisms = require('./adjuncFiles/trumpisms')

/**
 * Jargon Generator
 * Responds with a randomly generated sentence from different array's of adverbs,verbs,adjectives,and nouns
 * @param {object} req
 * @param {object} res
 */

exports.jargonGen = (req, res) => {

  let sentence = `${randomFromArray(adverbs)} ${randomFromArray(verbs)} ${randomFromArray(adjectives)} ${randomFromArray(nouns)}`

  res.json(`HEYO! Why don't you just try to ${sentence}`)
    .end()

}

/**
 * Trump Generator
 * Responds with a randomly selected Trumpist phrase
 * @param {object} req
 * @param {object} res
 */
exports.trumps = (req, res) => {

  let presidentialSaying = randomFromArray(trumpisms)

  res.json(`${presidentialSaying}`)
    .end()

}

/**
 * Grab random value from any index in an array
 * @param {array} arrayList - Array to grab value from
 * @returns {string} string - single value from array
 */
function randomFromArray(arrayList) {
  return arrayList[Math.floor(Math.random() * arrayList.length)]
}
