/**
 * Generates a 30 day Auth Token
 * @type {"jsonwebtoken"}
 */
const jwt = require('jsonwebtoken')

require('dotenv').config({path: 'variable.env'})

const SECRET_KEY = process.env.SECRET_ID
const token = jwt.sign({username: `${process.env.SECRET_USER}`, groups: ['Group1', 'Group2']}, SECRET_KEY, {expiresIn: '744h'})
console.log(token)
