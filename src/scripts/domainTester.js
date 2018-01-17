/**
 * Used to test Zelda API endpoint as a ES6 fetch()
 * Path needs /primary/:queryName/:idsAndNames
 * @type {Fetch}
 */

const fetch = require('node-fetch')


/*
Bring in environment variables
 */
require('dotenv').config({path: 'variable.env'})

const domainTest = async(path, idsAndNames) => {
  fetch(`${process.env.API_ADDRESS}/${path}`, {
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


domainTest('domains/general', '123,345')
  .then(data => {
    console.log(data)
  })

module.exports = {domainTest}
