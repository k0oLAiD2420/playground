/**
 * This was used in Zelda to remap old Legacy_data into new. Each change (db.collection change) was done separately (comment/uncomment as necessary). Doesn't run all in one go due to async shit
 * @param req
 * @param res
 * @param next
 * @returns {Promise.<void>}
 */
const updateDb = async(req, res, next) => {
  try {
    // Addition of Account ID
    await db.collection('testSurveys_1').find({}, (err, data) => {
      if (err) throw error

      data.forEach(obj => {
        if (obj) {
          queryForId(obj.account_name)
            .then(results => {
              switch (results.length) {
              case 0: {
                console.log('This will need changed:  ', obj.account_name)
                db.collection('testSurveys_1')
                  .update(obj, {$set: {account_id: 'XXXX'}})
                break
              }
              default: {
                db.collection('testSurveys_1')
                  .update(obj, {$set: {account_id: results[0].id}})
              }
              }
              console.log('Done ONE')
            })

        } else {
          console.log('ALL DONE')
          res.write(JSON.stringify('All Done'))
          res.status(200)
          res.end()
        }

      })
    })

    await db.collection('testSurveys_1').find()
      .forEach(obj => {
      // add completed_by, primary_user field
        db.collection('testSurveys_1').update(obj, {$set: {completed_by: '', primary_user: ''}})

        // Change score === total_score, completed_date === date_completed
        // db.collection('testSurveys_1').update(obj, {$rename: {"score":"total_score"}})
        db.collection('testSurveys_1').update(obj, {$rename: {complete_date: 'date_completed', score: 'total_score'}})

      })

    await db.collection('testies').find()
      .forEach(obj => {
        let responseObj = {}
        responseObj.cost = obj.cost
        responseObj.guide = obj.guide
        responseObj.client = obj.client
        responseObj.bill = obj.bill
        responseObj.misc = obj.misc

        // Updates the Response object with above
        db.collection('testies')
          .update(obj, {$set: {responses: responseObj}})
      })

    // Removes indexes
    db.collection('testies')
      .update({}, {
        $unset : {
          cost   : 1,
          guide  : 1,
          client : 1,
          bill   : 1,
          misc   : 1
        }
      }, {multi: true})

    // Remove 'points' field
    db.collection('testies')
      .update({}, {
        $unset : {
          points : 1,
          __v    : 1
        }
      }, {multi: true})

  } catch (err) {
    res.status(400)
      .json('You fucked it up : ', err.message)
    next(err)
  }
}



const queryForId = async name => {
  const nameArray = {ids: [], names: [name]}
  return await queryIdByName('accounts', nameArray)
}
