// Get primary key/token here
const fetch = require('node-fetch')

const bungieApi = async() => {
  await fetch('https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/', {
    headers : {
      Accept      : 'application/json',
      'X-API-Key' : '3d4c4e1f654f4755b0ab3190ada399b1'
    },
    method : 'GET'
  })

    // .then(blob => {return blob.json()})
    .then(blob => blob.json())
    .catch(err => { console.log(err) })
}



bungieApi().then(data => { console.log(data) })

