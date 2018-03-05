const {MongoClient} = require('mongodb')

MongoClient.connect(`${process.env.MONGO_URL}`, (err, db) => {
  if (err) return err.message

  writeShit(db)

  queryShit(db, data => {

    console.log(data)
    db.close()

  })


})

const queryShit = async(db, result) => {
  let surveyShit = db.collection('surveys')

  surveyShit.find({}).toArray((err, shits) => {
    result(shits)
  })

}

const writeShit = async db => {
  let surveyShit = db.collection('surveys')

  surveyShit.insertOne({
    account_name : 'ACCOUNTTEST',
    guide        : 'ACCOUNTTEST'
  })

}
