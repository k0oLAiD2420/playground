/* globals require */
const app = require('./playground'),
      debug = require('debug')('server'),
      http = require('http'),
      port = process.env.PORT || '6969'

app.set('port', port)

const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Handles HTTP server "error" event
 * @param {object} error - error thrown by the HTTP server
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  if (error.code === 'EACCES') {
    debug(`${bind} requires elevated privileges`)
    process.exit(1)
  } else if (error.code === 'EADDRINUSE') {
    debug(`${bind} is already in use`)
    process.exit(1)
  }

  throw error
}

/**
 * Handles HTTP server "listening" event
 */
function onListening() {
  const addr = server.address(),
        bind = typeof addr === 'string'
          ? 'pipe ' + addr
          : 'port ' + addr.port
  debug('Listening on ' + bind)
}
