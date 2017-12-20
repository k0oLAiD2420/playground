/**
 * Used to test Zelda API endpoint as a ES6 fetch()
 * Path needs /primary/:queryName/:idsAndNames
 * @type {Fetch}
 */

const fetch = require('node-fetch')



require('dotenv').config({path: 'variable.env'})

const domainTest = async(connect, path, idsAndNames) => {
  fetch(`http://${connect}.mm-corp.net:9100/${path}/`, {
    headers : {
      Accept         : 'application/json',
      Authorization  : `Bearer ${process.env.SECRET_KEY}`,
      'Content-Type' : 'application/json'
    },
    body   : JSON.stringify({idsAndNames}),
    method : 'POST'
  })
    .then(blob => blob.json())
    .then(data => (console.log(data)))
    .catch(error => { console.log(error) })
}


domainTest('dshaver', 'domains/general', '123,345')
  .then(data => {
    console.log(data)
  })

module.exports = {domainTest}
