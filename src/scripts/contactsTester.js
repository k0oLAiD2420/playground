/**
 * Used to test Zelda API endpoint as a ES6 fetch()
 * Path needs /primary/:queryName/:idsAndNames
 * @type {Fetch}
 */

const fetch = require('node-fetch')


require('dotenv').config({path: 'variable.env'})

const path = 'contacts/expanded',
      body = {
        extension : '.bank',
        whoisIds  : '159344'
      }

fetch(`http://dshaver.mm-corp.net:3001/${path}/`, {
  headers : {
    Accept         : 'application/json',
    Authorization  : `Bearer ${process.env.SECRET_KEY}`,
    'Content-Type' : 'application/json'
  },
  body   : JSON.stringify(body),
  method : 'POST'
})
  .then(blob => blob.json())
  .then(data => console.log(data))
  .catch(error => error)
