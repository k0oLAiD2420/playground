const express = require('express'),
      router = express.Router(),
      {asyncError} = require('./utils/errorHandling'),
      {jargonGen, trumps} = require('./scripts/jargonGen'),
      {randomNumberGenerator} = require('./scripts/randomNum')

/*
Expose Routes Available As Endpoint
 */
router.get('/jargon', jargonGen)

router.get('/trumps', trumps)

router.get('/randomnumbers/:maxNum', randomNumberGenerator)

/*
Export Router
 */
module.exports = router
