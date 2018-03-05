// Get primary key/token here
const fetch = require('node-fetch')

const bungieApi = async() => {

  let url = `https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/`

  await fetch(url, {
    headers : {
      Accept      : 'application/json',
      'X-API-Key' : `${process.env.BUNGIE_KEY}`
    },
    method : 'GET'
  })

    // .then(blob => {return blob.json()})
    .then(blob => blob.json())
    .catch(err => { console.log(err) })
}



bungieApi().then(data => { console.log(data) })

