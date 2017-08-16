/**
 * Generates a 30 day Auth Token
 * @type {"jsonwebtoken"}
 */
const jwt = require('jsonwebtoken')

const SECRET_KEY = 'fsdakjfds76fasbf786d'
const token = jwt.sign({username: 'skullkid', groups: ['Group1', 'Group2']}, SECRET_KEY, {expiresIn: '744h'})
console.log(token)
