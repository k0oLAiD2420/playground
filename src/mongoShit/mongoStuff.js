const {MongoClient} = require('mongodb'),
      url = 'mongodb://localhost:27017/mydb'

MongoClient.connect(url, (err, db) => {
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
    account_name : 'HOT DAMN!',
    guide        : 'FUCK YEAH!'
  })

}
