const express = require('express'),
      router = express.Router(),
      {asyncError} = require('./utils/errorHandling'),
      {jargonGen, trumps} = require('./scripts/jargonGen'),
      {randomNumberGenerator} = require('./scripts/randomNum')

router.get('/jargon', jargonGen)
router.post('/jargon', jargonGen)

router.get('/trumps', trumps)

router.get('/randomnumbers/:maxNum', randomNumberGenerator)
module.exports = router
