/* globals require */
const express = require('express'),
      bodyParser = require('body-parser')

const app = express(),
      routes = require('./routes')

/**
 * Set Express() to allow Cross Domains at start of application
 * @param {object} req - request
 * @param {object} res - response
 * @param {object} next - Used to forward route along app
 */
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
  res.header('Content-Type', 'application/json')

  /**
   * Intercept OPTIONS method
   * Allow CORS and pass pre-flight
   * Check for any non 'POST' methods
   */
  'OPTIONS' === req.method ? res.sendStatus(200)
    // : 'POST' !== req.method ? res.status(405).json('Invalid HTTP() method')
    : next()

}

app.use(allowCrossDomain)

app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))

app.use('/', routes)

module.exports = app
